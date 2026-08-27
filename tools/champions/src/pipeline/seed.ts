// eslint-disable-next-line @nx/enforce-module-boundaries
import { Prisma, PrismaClient } from '../../../../libs/prisma-champions/src/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as fs from 'fs';
import * as path from 'path';
import { DERIVED_DIR, DerivedDataset, DerivedPokemon } from '../lib/champions-data';

const CREATE_MANY_CHUNK_SIZE = 5000;
const TRANSACTION_TIMEOUT_MILLISECONDS = 5 * 60 * 1000;
const TRANSACTION_MAX_WAIT_MILLISECONDS = 30 * 1000;
const VERIFIED_TABLE_NAME_WIDTH = 26;
const VERIFIED_ROW_COUNT_WIDTH = 6;

function newestFirst(first: string, second: string): number {
	return fs.statSync(second).mtimeMs - fs.statSync(first).mtimeMs;
}

function baseFormsBeforeMegaForms(first: DerivedPokemon, second: DerivedPokemon): number {
	return Number(first.isMega) - Number(second.isMega);
}

function loadDataset(file?: string): { dataset: DerivedDataset; path: string } {
	const dir = path.join(process.cwd(), DERIVED_DIR);
	const candidates = file ? [path.join(process.cwd(), file)] : fs.existsSync(dir) ? fs.readdirSync(dir).filter((fileName) => fileName.endsWith('.json')).map((fileName) => path.join(dir, fileName)) : [];

	if (candidates.length === 0) {
		throw new Error(`No derived dataset found in ${DERIVED_DIR}. Run "nx run champions:derive" first.`);
	}

	const chosen = candidates.sort(newestFirst)[0];
	return { dataset: JSON.parse(fs.readFileSync(chosen, 'utf8')) as DerivedDataset, path: chosen };
}

function deduplicateRows<Row>(table: string, rows: readonly Row[], primaryKeyOf: (row: Row) => string): Row[] {
	const byPrimaryKey = new Map<string, Row>();
	for (const row of rows) byPrimaryKey.set(primaryKeyOf(row), row);

	if (byPrimaryKey.size !== rows.length) {
		console.warn(`  ! ${table}: dropped ${rows.length - byPrimaryKey.size} rows whose primary key the derived file repeats, which derive should not emit.`);
	}
	return [...byPrimaryKey.values()];
}

async function createManyInChunks<Row>(rows: readonly Row[], insertChunk: (chunk: Row[]) => Promise<unknown>): Promise<void> {
	for (let offset = 0; offset < rows.length; offset += CREATE_MANY_CHUNK_SIZE) {
		await insertChunk(rows.slice(offset, offset + CREATE_MANY_CHUNK_SIZE));
	}
}

function reportRowCountsAndThrowOnDrift(expectedFromDataset: Record<string, number>, actualInDatabase: Record<string, number>): void {
	const driftedTables = Object.keys(expectedFromDataset).filter((table) => expectedFromDataset[table] !== actualInDatabase[table]);

	console.log('\n  verified against the database:');
	for (const table of Object.keys(expectedFromDataset)) {
		const drift = expectedFromDataset[table] === actualInDatabase[table] ? '' : `  <- MISMATCH, expected ${expectedFromDataset[table]}`;
		console.log(`    ${table.padEnd(VERIFIED_TABLE_NAME_WIDTH)} ${String(actualInDatabase[table]).padStart(VERIFIED_ROW_COUNT_WIDTH)}${drift}`);
	}

	if (driftedTables.length > 0) {
		throw new Error(
			`Seed rolled back: ${driftedTables.join(', ')} did not match the derived dataset after loading. ` +
				`The seed is authoritative over these tables, so a difference means rows are being kept or dropped that should not be.`,
		);
	}
}

async function upsertReferenceRows(transaction: Prisma.TransactionClient, dataset: DerivedDataset): Promise<void> {
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

	for (const datasetPokemon of [...dataset.pokemon].sort(baseFormsBeforeMegaForms)) {
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
}

async function replaceDerivedRows(transaction: Prisma.TransactionClient, dataset: DerivedDataset): Promise<Record<string, number>> {
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

	return { champions_type_efficacy: typeEfficacyRows.length, champions_pokemon_ability: pokemonAbilityRows.length, champions_learnset: learnsetRows.length };
}

async function upsertRegulationAndReplaceItsLegality(transaction: Prisma.TransactionClient, dataset: DerivedDataset): Promise<{ regulationId: number; legalityRowCount: number }> {
	const derivedRegulation = dataset.regulation;
	if (derivedRegulation.isCurrent) await transaction.regulation.updateMany({ where: { is_current: true }, data: { is_current: false } });

	const fields = {
		name: derivedRegulation.name,
		starts_on: new Date(derivedRegulation.startsOn),
		ends_on: new Date(derivedRegulation.endsOn),
		is_current: derivedRegulation.isCurrent,
		notes: derivedRegulation.notes,
	};
	const regulation = await transaction.regulation.upsert({ where: { code: derivedRegulation.code }, create: { code: derivedRegulation.code, ...fields }, update: fields });

	const legalityRows = deduplicateRows(
		'regulation_legality',
		derivedRegulation.legalPokemonIds.map((pokemonId) => ({ regulation_id: regulation.id, pokemon_id: pokemonId })),
		(row) => `${row.regulation_id}:${row.pokemon_id}`,
	);
	await transaction.regulationLegality.deleteMany({ where: { regulation_id: regulation.id } });
	await createManyInChunks(legalityRows, (chunk) => transaction.regulationLegality.createMany({ data: chunk }));
	console.log(`  regulation ${derivedRegulation.code}: ${legalityRows.length} legal Pokémon`);

	return { regulationId: regulation.id, legalityRowCount: legalityRows.length };
}

async function seedInTransaction(transaction: Prisma.TransactionClient, dataset: DerivedDataset): Promise<void> {
	await upsertReferenceRows(transaction, dataset);
	const derivedRowCounts = await replaceDerivedRows(transaction, dataset);
	const { regulationId, legalityRowCount } = await upsertRegulationAndReplaceItsLegality(transaction, dataset);

	reportRowCountsAndThrowOnDrift(
		{ ...derivedRowCounts, regulation_legality: legalityRowCount },
		{
			champions_type_efficacy: await transaction.championsTypeEfficacy.count(),
			champions_pokemon_ability: await transaction.championsPokemonAbility.count(),
			champions_learnset: await transaction.championsLearnset.count(),
			regulation_legality: await transaction.regulationLegality.count({ where: { regulation_id: regulationId } }),
		},
	);
}

export async function runSeed(file?: string): Promise<void> {
	const { dataset, path: source } = loadDataset(file);
	console.log(`Seeding from ${path.relative(process.cwd(), source)}`);
	console.log(`  regulation ${dataset.regulation.code}, ${dataset.pokemon.length} Pokémon, ${dataset.moves.length} moves`);

	const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env['DATABASE_URL_CHAMPIONS'] }) });

	try {
		await prisma.$transaction((transaction) => seedInTransaction(transaction, dataset), {
			timeout: TRANSACTION_TIMEOUT_MILLISECONDS,
			maxWait: TRANSACTION_MAX_WAIT_MILLISECONDS,
		});
		console.log('\nSeed complete.');
	} finally {
		await prisma.$disconnect();
	}
}
