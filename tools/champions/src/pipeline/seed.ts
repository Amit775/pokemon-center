// Relative for the same reason as derive.ts: ts-node does not apply tsconfig `paths`.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Prisma, PrismaClient } from '../../../../libs/prisma-champions/src/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as fs from 'fs';
import * as path from 'path';
import { DERIVED_DIR, DerivedDataset } from '../lib/champions-data';

/**
 * Stage 3 of the Champions pipeline: load the reviewed JSON into the Champions database.
 *
 * The seed is *authoritative* over the tables it owns: after it runs, those tables hold
 * exactly what the derived file says and nothing else. That matters because this will be
 * run again on every regulation rotation, and a pipeline you are afraid to re-run is a
 * pipeline that rots.
 *
 * Three kinds of table live in this database, and the seed treats them differently:
 *
 *  1. **Derived tables** — `champions_type_efficacy`, `champions_pokemon_ability`,
 *     `champions_learnset`, and the seeded regulation's `regulation_legality`. These are a
 *     projection of the derived file and nothing else, so they are emptied and reloaded.
 *     Scoping those deletes to the ids *in the file* (which is what this used to do) prunes
 *     a Pokémon that lost a move, but silently keeps every row belonging to a Pokémon that
 *     left the dataset entirely — and a stale learnset pair makes the app call an illegal
 *     move legal, on exactly the question Champions exists to answer. Worse, it only
 *     happens on a database that has seen an older dataset, so it never reproduces on a
 *     fresh one.
 *  2. **Reference tables** — `champions_type`, `champions_ability`, `champions_move`,
 *     `champions_pokemon`, `regulation`. Upserted by mainline id, never deleted: a Pokémon
 *     that leaves the roster stops being *legal*, but its stats stay so that old battle
 *     logs still resolve.
 *  3. **User tables** — `box_pokemon`, `team`, `known_set`, `battle_session` and friends.
 *     Never touched. The advisor's data is not derived from anything and is not the
 *     pipeline's to rewrite.
 *
 * The whole load runs in one transaction, so a seed that fails partway leaves the database
 * as it was rather than half-populated — an emptied `champions_learnset` with no rows back
 * in it would be a worse outcome than the drift this fixes.
 */

/** A single `createMany` with tens of thousands of rows exceeds Postgres' bind-parameter limit. */
const CREATE_MANY_CHUNK_SIZE = 5000;

/**
 * Budget for the seeding transaction. Generous on purpose: the reference upserts are ~1100
 * statements and the box this runs on may be a laptop with Postgres in Docker. Blowing the
 * default 5s would roll back a load that was going to succeed.
 */
const TRANSACTION_TIMEOUT_MILLISECONDS = 5 * 60 * 1000;
const TRANSACTION_MAX_WAIT_MILLISECONDS = 30 * 1000;

function loadDataset(file?: string): { dataset: DerivedDataset; path: string } {
	const dir = path.join(process.cwd(), DERIVED_DIR);
	const candidates = file ? [path.join(process.cwd(), file)] : fs.existsSync(dir) ? fs.readdirSync(dir).filter((fileName) => fileName.endsWith('.json')).map((fileName) => path.join(dir, fileName)) : [];

	if (candidates.length === 0) {
		throw new Error(`No derived dataset found in ${DERIVED_DIR}. Run "nx run champions:derive" first.`);
	}

	// Newest first, so a fresh regulation wins without needing an argument.
	const chosen = candidates.sort((first, second) => fs.statSync(second).mtimeMs - fs.statSync(first).mtimeMs)[0];
	return { dataset: JSON.parse(fs.readFileSync(chosen, 'utf8')) as DerivedDataset, path: chosen };
}

/**
 * Collapse rows that share a composite primary key, keeping the last one.
 *
 * The derived file should never contain two rows for the same key, but if it does we would
 * rather report the number we actually wrote than have the row-count check below fail on a
 * discrepancy that is really a `derive` bug. The warning says so out loud.
 */
function deduplicateRows<Row>(label: string, rows: readonly Row[], keyOf: (row: Row) => string): Row[] {
	const byKey = new Map<string, Row>();
	for (const row of rows) byKey.set(keyOf(row), row);

	if (byKey.size !== rows.length) {
		console.warn(`  ! ${label}: derived file contains ${rows.length - byKey.size} duplicate rows; collapsed. This is a derive bug.`);
	}
	return [...byKey.values()];
}

async function createManyInChunks<Row>(rows: readonly Row[], insert: (chunk: Row[]) => Promise<unknown>): Promise<void> {
	for (let offset = 0; offset < rows.length; offset += CREATE_MANY_CHUNK_SIZE) {
		await insert(rows.slice(offset, offset + CREATE_MANY_CHUNK_SIZE));
	}
}

/**
 * Read back what the transaction just wrote and compare it against what we meant to write.
 *
 * This is the check that would have caught the original drift the day it appeared instead of
 * months later: it runs inside the transaction, so a mismatch rolls the whole seed back
 * rather than reporting one number and leaving another in the database.
 */
async function verifyRowCounts(expected: Record<string, number>, actual: Record<string, number>): Promise<void> {
	const mismatches = Object.keys(expected).filter((table) => expected[table] !== actual[table]);

	console.log('\n  verified against the database:');
	for (const table of Object.keys(expected)) {
		const suffix = expected[table] === actual[table] ? '' : `  <- MISMATCH, expected ${expected[table]}`;
		console.log(`    ${table.padEnd(26)} ${String(actual[table]).padStart(6)}${suffix}`);
	}

	if (mismatches.length > 0) {
		throw new Error(
			`Seed rolled back: ${mismatches.join(', ')} did not match the derived dataset after loading. ` +
				`The seed is meant to be authoritative over these tables, so a difference means rows are being kept or dropped that should not be.`,
		);
	}
}

export async function runSeed(file?: string): Promise<void> {
	const { dataset, path: source } = loadDataset(file);
	console.log(`Seeding from ${path.relative(process.cwd(), source)}`);
	console.log(`  regulation ${dataset.regulation.code}, ${dataset.pokemon.length} Pokémon, ${dataset.moves.length} moves`);

	const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env['DATABASE_URL_CHAMPIONS'] }) });

	try {
		await prisma.$transaction(
			async (transaction) => {
				await seedInTransaction(transaction, dataset);
			},
			{ timeout: TRANSACTION_TIMEOUT_MILLISECONDS, maxWait: TRANSACTION_MAX_WAIT_MILLISECONDS },
		);
		console.log('\nSeed complete.');
	} finally {
		await prisma.$disconnect();
	}
}

async function seedInTransaction(transaction: Prisma.TransactionClient, dataset: DerivedDataset): Promise<void> {
	// ---- reference data, parents before children ----------------------------------------
	// Upserted by mainline id and never deleted; see the ownership note at the top.
	for (const datasetType of dataset.types) {
		const fields = { slug: datasetType.slug, name: datasetType.name };
		await transaction.championsType.upsert({ where: { id: datasetType.id }, create: { id: datasetType.id, ...fields }, update: fields });
	}
	console.log(`  types: ${dataset.types.length}`);

	for (const datasetAbility of dataset.abilities) {
		const fields = { slug: datasetAbility.slug, name: datasetAbility.name, effect_text: datasetAbility.effectText, is_mega: datasetAbility.isMega };
		await transaction.championsAbility.upsert({ where: { id: datasetAbility.id }, create: { id: datasetAbility.id, ...fields }, update: fields });
	}
	console.log(`  abilities: ${dataset.abilities.length}`);

	for (const datasetMove of dataset.moves) {
		const fields = {
			slug: datasetMove.slug,
			name: datasetMove.name,
			type_id: datasetMove.typeId,
			damage_class: datasetMove.damageClass,
			power: datasetMove.power,
			pp: datasetMove.pp,
			accuracy: datasetMove.accuracy,
			priority: datasetMove.priority,
			effect_text: datasetMove.effectText,
			effect_chance: datasetMove.effectChance,
			flags: datasetMove.flags,
			is_overridden: datasetMove.isOverridden,
			override_note: datasetMove.overrideNote,
		};
		await transaction.championsMove.upsert({ where: { id: datasetMove.id }, create: { id: datasetMove.id, ...fields }, update: fields });
	}
	console.log(`  moves: ${dataset.moves.length} (${dataset.moves.filter((move) => move.isOverridden).length} overridden)`);

	// Base forms before Megas, so `mega_of_id` always has a row to point at.
	const orderedPokemon = [...dataset.pokemon].sort((first, second) => Number(first.isMega) - Number(second.isMega));
	for (const datasetPokemon of orderedPokemon) {
		const fields = {
			slug: datasetPokemon.slug,
			name: datasetPokemon.name,
			national_pokedex_number: datasetPokemon.nationalPokedexNumber,
			type1_id: datasetPokemon.type1Id,
			type2_id: datasetPokemon.type2Id,
			base_hp: datasetPokemon.baseHp,
			base_attack: datasetPokemon.baseAttack,
			base_defense: datasetPokemon.baseDefense,
			base_special_attack: datasetPokemon.baseSpecialAttack,
			base_special_defense: datasetPokemon.baseSpecialDefense,
			base_speed: datasetPokemon.baseSpeed,
			is_mega: datasetPokemon.isMega,
			mega_of_id: datasetPokemon.megaOfId,
			mega_ability_id: datasetPokemon.megaAbilityId,
			sprite_key: datasetPokemon.spriteKey,
			learnset_is_approximate: datasetPokemon.learnsetIsApproximate,
		};
		await transaction.championsPokemon.upsert({ where: { id: datasetPokemon.id }, create: { id: datasetPokemon.id, ...fields }, update: fields });
	}
	console.log(`  pokemon: ${dataset.pokemon.length}`);

	// ---- derived tables: emptied and reloaded, so the file is the only truth --------------
	const typeEfficacyRows = deduplicateRows(
		'champions_type_efficacy',
		dataset.typeEfficacy.map((entry) => ({ attacking_type_id: entry.attackingTypeId, defending_type_id: entry.defendingTypeId, damage_factor: entry.damageFactor })),
		(row) => `${row.attacking_type_id}:${row.defending_type_id}`,
	);
	await transaction.championsTypeEfficacy.deleteMany({});
	await createManyInChunks(typeEfficacyRows, (chunk) => transaction.championsTypeEfficacy.createMany({ data: chunk }));
	console.log(`  type efficacy: ${typeEfficacyRows.length}`);

	const pokemonAbilityRows = deduplicateRows(
		'champions_pokemon_ability',
		dataset.pokemon.flatMap((datasetPokemon) =>
			datasetPokemon.abilities.map((ability) => ({ pokemon_id: datasetPokemon.id, ability_id: ability.abilityId, slot: ability.slot, is_hidden: ability.isHidden })),
		),
		(row) => `${row.pokemon_id}:${row.ability_id}`,
	);
	await transaction.championsPokemonAbility.deleteMany({});
	await createManyInChunks(pokemonAbilityRows, (chunk) => transaction.championsPokemonAbility.createMany({ data: chunk }));
	console.log(`  pokemon abilities: ${pokemonAbilityRows.length}`);

	const learnsetRows = deduplicateRows(
		'champions_learnset',
		dataset.pokemon.flatMap((datasetPokemon) => datasetPokemon.moveIds.map((moveId) => ({ pokemon_id: datasetPokemon.id, move_id: moveId }))),
		(row) => `${row.pokemon_id}:${row.move_id}`,
	);
	await transaction.championsLearnset.deleteMany({});
	await createManyInChunks(learnsetRows, (chunk) => transaction.championsLearnset.createMany({ data: chunk }));
	console.log(`  learnset pairs: ${learnsetRows.length}`);

	// ---- regulation -----------------------------------------------------------------------
	// The `regulation` row itself is reference data — past sets are kept so that "what changed
	// this regulation" stays queryable — but the legality of the set being seeded is derived,
	// so it is rebuilt. Other regulations' legality is history and is left alone.
	const derivedRegulation = dataset.regulation;
	if (derivedRegulation.isCurrent) await transaction.regulation.updateMany({ where: { is_current: true }, data: { is_current: false } });

	const regulationFields = {
		name: derivedRegulation.name,
		starts_on: new Date(derivedRegulation.startsOn),
		ends_on: new Date(derivedRegulation.endsOn),
		is_current: derivedRegulation.isCurrent,
		notes: derivedRegulation.notes,
	};
	const regulation = await transaction.regulation.upsert({
		where: { code: derivedRegulation.code },
		create: { code: derivedRegulation.code, ...regulationFields },
		update: regulationFields,
	});

	const legalityRows = deduplicateRows(
		'regulation_legality',
		derivedRegulation.legalPokemonIds.map((pokemonId) => ({ regulation_id: regulation.id, pokemon_id: pokemonId })),
		(row) => `${row.pokemon_id}`,
	);
	await transaction.regulationLegality.deleteMany({ where: { regulation_id: regulation.id } });
	await createManyInChunks(legalityRows, (chunk) => transaction.regulationLegality.createMany({ data: chunk }));
	console.log(`  regulation ${derivedRegulation.code}: ${legalityRows.length} legal Pokémon`);

	await verifyRowCounts(
		{
			champions_type_efficacy: typeEfficacyRows.length,
			champions_pokemon_ability: pokemonAbilityRows.length,
			champions_learnset: learnsetRows.length,
			regulation_legality: legalityRows.length,
		},
		{
			champions_type_efficacy: await transaction.championsTypeEfficacy.count(),
			champions_pokemon_ability: await transaction.championsPokemonAbility.count(),
			champions_learnset: await transaction.championsLearnset.count(),
			regulation_legality: await transaction.regulationLegality.count({ where: { regulation_id: regulation.id } }),
		},
	);
}
