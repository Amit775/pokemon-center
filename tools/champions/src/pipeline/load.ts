import 'dotenv/config';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { PrismaClient as ChampionsPrismaClient, type Prisma } from '../../../../libs/prisma-champions/src/generated/client';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { PrismaClient as MainlinePrismaClient } from '../../../../libs/prisma-client/src/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as fs from 'fs';
import * as path from 'path';
import { RAW_DIRECTORY, REGULATIONS_DIRECTORY, regulationMetadataPath, rosterFilePath } from '../lib/champions-paths';
import { findLoadProblems, type LoadProblem } from '../lib/load-gates';
import { projectFromMainline, type ProjectedDataset } from '../lib/mainline-projection';
import { parseRegulationMetadata, type RegulationMetadata } from '../lib/regulation-file';
import { parseRosterFile, toRosterEntry } from '../lib/roster-file';
import { parseMoveOverrides, parsePpExceptions, parseRosterCounts } from '../lib/wikitext';
import { truncateChampionsDatabase } from './reset';

const CREATE_MANY_CHUNK_SIZE = 5000;
const TRANSACTION_TIMEOUT_MILLISECONDS = 5 * 60 * 1000;
const TRANSACTION_MAX_WAIT_MILLISECONDS = 30 * 1000;
const UNRESOLVED_ENTRIES_TO_PRINT = 20;

function readRaw(key: string): string {
	const file = path.join(process.cwd(), RAW_DIRECTORY, `${key}.wikitext`);
	if (!fs.existsSync(file)) {
		throw new Error(`Missing ${file}. Run "nx run champions:fetch" first.`);
	}
	return fs.readFileSync(file, 'utf8');
}

function resolveRegulationCode(requested?: string): string {
	if (requested) return requested;

	const directory = path.join(process.cwd(), REGULATIONS_DIRECTORY);
	const codes = fs.existsSync(directory) ? fs.readdirSync(directory, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name) : [];

	if (codes.length === 0) {
		throw new Error(`No regulations in ${REGULATIONS_DIRECTORY}. Run "nx run champions:roster" first.`);
	}
	if (codes.length > 1) {
		throw new Error(`${codes.length} regulations available (${codes.join(', ')}). Choose one with --code=<code>.`);
	}

	return codes[0];
}

function deduplicate<Row>(rows: readonly Row[], primaryKeyOf: (row: Row) => string): Row[] {
	const byPrimaryKey = new Map<string, Row>();
	for (const row of rows) byPrimaryKey.set(primaryKeyOf(row), row);
	return [...byPrimaryKey.values()];
}

async function createInChunks<Row>(rows: readonly Row[], insertChunk: (chunk: Row[]) => Promise<unknown>): Promise<void> {
	for (let offset = 0; offset < rows.length; offset += CREATE_MANY_CHUNK_SIZE) {
		await insertChunk(rows.slice(offset, offset + CREATE_MANY_CHUNK_SIZE));
	}
}

function toPokemonRow(pokemon: ProjectedDataset['pokemon'][number]) {
	return {
		id: pokemon.id,
		slug: pokemon.slug,
		name: pokemon.name,
		national_pokedex_number: pokemon.nationalPokedexNumber,
		type1_id: pokemon.type1Id,
		type2_id: pokemon.type2Id,
		base_hp: pokemon.baseHp,
		base_attack: pokemon.baseAttack,
		base_defense: pokemon.baseDefense,
		base_special_attack: pokemon.baseSpecialAttack,
		base_special_defense: pokemon.baseSpecialDefense,
		base_speed: pokemon.baseSpeed,
		is_mega: pokemon.isMega,
		mega_of_id: pokemon.megaOfId,
		mega_ability_id: pokemon.megaAbilityId,
		sprite_key: pokemon.spriteKey,
		learnset_is_approximate: pokemon.learnsetIsApproximate,
		legality_status: pokemon.legalityStatus,
		restriction_note: pokemon.restrictionNote,
		introduced_in: pokemon.introducedIn,
	};
}

async function insertProjection(transaction: Prisma.TransactionClient, regulation: RegulationMetadata, projection: ProjectedDataset): Promise<void> {
	await transaction.championsType.createMany({ data: projection.types.map((type) => ({ id: type.id, slug: type.slug, name: type.name })) });

	const typeEfficacyRows = deduplicate(
		projection.typeEfficacy.map((entry) => ({ attacking_type_id: entry.attackingTypeId, defending_type_id: entry.defendingTypeId, damage_factor: entry.damageFactor })),
		(row) => `${row.attacking_type_id}:${row.defending_type_id}`,
	);
	await createInChunks(typeEfficacyRows, (chunk) => transaction.championsTypeEfficacy.createMany({ data: chunk }));

	await transaction.championsAbility.createMany({
		data: projection.abilities.map((ability) => ({ id: ability.id, slug: ability.slug, name: ability.name, effect_text: ability.effectText, is_mega: ability.isMega })),
	});

	await createInChunks(
		projection.moves.map((move) => ({
			id: move.id,
			slug: move.slug,
			name: move.name,
			type_id: move.typeId,
			damage_class: move.damageClass,
			power: move.power,
			pp: move.pp,
			accuracy: move.accuracy,
			priority: move.priority,
			effect_text: move.effectText,
			effect_chance: move.effectChance,
			flags: move.flags,
			is_overridden: move.isOverridden,
			override_note: move.overrideNote,
		})),
		(chunk) => transaction.championsMove.createMany({ data: chunk }),
	);

	await transaction.championsPokemon.createMany({ data: projection.pokemon.filter((pokemon) => !pokemon.isMega).map(toPokemonRow) });
	await transaction.championsPokemon.createMany({ data: projection.pokemon.filter((pokemon) => pokemon.isMega).map(toPokemonRow) });

	const abilityRows = deduplicate(
		projection.pokemon.flatMap((pokemon) => pokemon.abilities.map((ability) => ({ pokemon_id: pokemon.id, ability_id: ability.abilityId, slot: ability.slot, is_hidden: ability.isHidden }))),
		(row) => `${row.pokemon_id}:${row.ability_id}`,
	);
	await createInChunks(abilityRows, (chunk) => transaction.championsPokemonAbility.createMany({ data: chunk }));

	const learnsetRows = deduplicate(
		projection.pokemon.flatMap((pokemon) => pokemon.moveIds.map((moveId) => ({ pokemon_id: pokemon.id, move_id: moveId }))),
		(row) => `${row.pokemon_id}:${row.move_id}`,
	);
	await createInChunks(learnsetRows, (chunk) => transaction.championsLearnset.createMany({ data: chunk }));

	await transaction.regulation.create({
		data: {
			code: regulation.code,
			name: regulation.name,
			starts_on: new Date(regulation.startsOn),
			ends_on: new Date(regulation.endsOn),
			notes: regulation.notes,
		},
	});
}

function reportProjection(regulation: RegulationMetadata, projection: ProjectedDataset, problems: readonly LoadProblem[]): void {
	const megas = projection.pokemon.filter((pokemon) => pokemon.isMega).length;
	const learnsetPairs = projection.pokemon.reduce((total, pokemon) => total + pokemon.moveIds.length, 0);
	const caveated = projection.pokemon.filter((pokemon) => pokemon.legalityStatus !== 'LEGAL').length;

	console.log(`Regulation ${regulation.code} — ${regulation.startsOn} to ${regulation.endsOn}`);
	console.log(`  pokemon          ${projection.pokemon.length} (${projection.pokemon.length - megas} base/forms + ${megas} Megas)`);
	console.log(`  moves            ${projection.moves.length} (${projection.moves.filter((move) => move.isOverridden).length} overridden)`);
	console.log(`  abilities        ${projection.abilities.length}`);
	console.log(`  types            ${projection.types.length}`);
	console.log(`  learnset pairs   ${learnsetPairs}`);
	console.log(`  with a caveat    ${caveated}`);

	if (projection.unresolved.length > 0) {
		console.log(`\n${projection.unresolved.length} unresolved entries:`);
		for (const item of projection.unresolved.slice(0, UNRESOLVED_ENTRIES_TO_PRINT)) {
			console.log(`  - ${item.kind} (${item.section}): ${item.name} — ${item.reason}`);
		}
		if (projection.unresolved.length > UNRESOLVED_ENTRIES_TO_PRINT) {
			console.log(`  ... and ${projection.unresolved.length - UNRESOLVED_ENTRIES_TO_PRINT} more`);
		}
	}

	for (const problem of problems) {
		console.log(`\nGATE FAILED [${problem.gate}] ${problem.message}`);
	}
}

export async function runLoad(options: { code?: string; dryRun: boolean }): Promise<void> {
	const code = resolveRegulationCode(options.code);
	const regulation = parseRegulationMetadata(fs.readFileSync(path.join(process.cwd(), regulationMetadataPath(code)), 'utf8'));
	const rosterEntries = parseRosterFile(fs.readFileSync(path.join(process.cwd(), rosterFilePath(code)), 'utf8'));
	const entries = rosterEntries.map(toRosterEntry);

	const changesWikitext = readRaw('changes');
	const statedCounts = parseRosterCounts(readRaw('roster'));

	const mainline = new MainlinePrismaClient({ adapter: new PrismaPg({ connectionString: process.env['DATABASE_URL'] }) });

	let projection: ProjectedDataset;
	try {
		projection = await projectFromMainline(mainline, entries, parseMoveOverrides(changesWikitext), parsePpExceptions(changesWikitext));
	} finally {
		await mainline.$disconnect();
	}

	const problems = findLoadProblems({
		statedSpeciesCount: statedCounts?.species ?? null,
		parsedSpeciesCount: new Set(rosterEntries.filter((entry) => entry.section === 'species').map((entry) => entry.pokedexNumber)).size,
		regulation,
		unresolvedSpeciesSectionEntries: projection.unresolved.filter((item) => item.section === 'species').map((item) => item.name),
	});

	reportProjection(regulation, projection, problems);

	if (problems.length > 0) {
		throw new Error(`Refusing to load: ${problems.length} gate(s) failed.`);
	}

	if (options.dryRun) {
		console.log('\nDry run — nothing was written.');
		return;
	}

	const champions = new ChampionsPrismaClient({ adapter: new PrismaPg({ connectionString: process.env['DATABASE_URL_CHAMPIONS'] }) });

	try {
		await champions.$transaction(
			async (transaction) => {
				await truncateChampionsDatabase(transaction);
				await insertProjection(transaction, regulation, projection);
			},
			{ timeout: TRANSACTION_TIMEOUT_MILLISECONDS, maxWait: TRANSACTION_MAX_WAIT_MILLISECONDS },
		);
		console.log('\nLoad complete.');
	} finally {
		await champions.$disconnect();
	}
}
