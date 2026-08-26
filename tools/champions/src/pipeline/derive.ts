// Relative rather than the `@pokemon-center/prisma` alias: this pipeline runs under ts-node,
// which does not apply tsconfig `paths` without tsconfig-paths — and a build tool is not worth
// a new runtime dependency. The boundary rule is disabled only for this import, and only in a
// tool that never ships to the browser.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { PrismaClient } from '../../../../libs/prisma-client/src/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as fs from 'fs';
import * as path from 'path';
import {
	DERIVED_DIR,
	DerivedAbility,
	DerivedDataset,
	DerivedMove,
	DerivedPokemon,
	RAW_DIR,
	type DerivedType,
} from '../lib/champions-data';
import { championsPp, parseMoveOverrides, parsePpExceptions, parseRegulationHeader, parseRoster, toSlug, type RosterEntry } from '../lib/wikitext';

/**
 * Stage 2 of the Champions pipeline: project the mainline dataset through the Champions delta.
 *
 * This is the review gate. Nothing here touches the Champions database — it reads the
 * mainline one, applies the wiki-sourced overrides, and writes a single committed JSON file
 * whose diff a human reads before `seed` loads it. When a regulation rotates, that diff *is*
 * the changelog.
 *
 * Two pieces of good fortune make this far more accurate than a guess:
 *   - the mainline dataset already carries a `champions` version group (id 32), so learnsets
 *     are authoritative rather than approximated from Gen 9;
 *   - it also already carries the Z-A/Champions Mega forms and their new abilities.
 * What it does *not* carry is Champions' rebalanced move values, which is what the wiki
 * override layer supplies.
 */

/** The `champions` version group in the mainline dataset — the preferred source of learnsets. */
const CHAMPIONS_VERSION_GROUP = 32;

/**
 * Version groups used to fill the gaps in the Champions learnset.
 *
 * The dataset's `champions` version group is real but incomplete: Gholdengo and Annihilape
 * have no rows at all, so their signature moves (Make It Rain, Rage Fist) would vanish. For
 * an advisor, omitting a move that KOs you is a far worse error than listing one the
 * opponent turns out not to have carried, so the gaps are filled from the most recent
 * mainline games and the result is flagged as approximate rather than presented as fact.
 */
const FALLBACK_VERSION_GROUPS = [25 /* scarlet-violet */, 30 /* legends-za */, 31 /* mega-dimension */];

/** English. The mainline dataset is multilingual; the Champions projection is not. */
const ENGLISH = 9;

/** Champions fixes every Pokémon at this level; recorded here for the engine's benefit. */
export const CHAMPIONS_LEVEL = 50;

interface ResolvedEntry {
	entry: RosterEntry;
	pokemonId: number;
	identifier: string;
}

/**
 * A name a human can pick out of a list.
 *
 * Bulbapedia states a form's *qualifier* ("Alolan Form", "Blade Forme"), not its full name,
 * because the species is already the row's heading. Stored on its own that reads as a list
 * of twenty Pokémon all called "Alolan Form", so the species is folded back in here.
 */
function displayName(entry: RosterEntry, speciesName: string): string {
	if (!entry.form) return speciesName;
	// Megas already carry their complete name, e.g. "Mega Charizard X".
	if (entry.isMega) return entry.form;

	const regional = entry.form.match(/^(Alolan|Galarian|Hisuian|Paldean)\s+Forme?(?:\s*\((.+)\))?$/i);
	if (regional) return `${regional[1]} ${speciesName}${regional[2] ? ` (${regional[2]})` : ''}`;

	const qualifier = entry.form.replace(/\s*Forme?$/i, '').trim();
	return `${speciesName} (${qualifier || entry.form})`;
}

function readRaw(key: string): string {
	const file = path.join(process.cwd(), RAW_DIR, `${key}.wikitext`);
	if (!fs.existsSync(file)) {
		throw new Error(`Missing ${file}. Run "nx run champions:fetch" first.`);
	}
	return fs.readFileSync(file, 'utf8');
}

/**
 * Match a roster entry to a row in the mainline `pokemon` table.
 *
 * Matching goes through the dex number rather than the display name: names carry
 * punctuation and regional qualifiers that do not survive slugging cleanly, whereas the
 * species number is unambiguous. Megas are then disambiguated by their X/Y suffix.
 */
function resolveEntry(entry: RosterEntry, bySpecies: Map<number, { id: number; identifier: string; is_default: number }[]>): ResolvedEntry | null {
	const candidates = bySpecies.get(entry.pokedexNumber) ?? [];
	if (candidates.length === 0) return null;

	const pick = (row: { id: number; identifier: string }) => ({ entry, pokemonId: row.id, identifier: row.identifier });

	if (entry.isMega) {
		const megas = candidates.filter((candidate) => candidate.identifier.includes('-mega'));
		if (megas.length === 0) return null;

		// "Mega Charizard X" → prefer the `-mega-x` row; a lone Mega needs no suffix.
		const variant = entry.form?.match(/\s([XY])$/i)?.[1]?.toLowerCase();
		const match = variant ? megas.find((mega) => mega.identifier.endsWith(`-mega-${variant}`)) : megas.find((mega) => /-mega$/.test(mega.identifier));

		const chosen = match ?? (megas.length === 1 ? megas[0] : null);
		return chosen ? pick(chosen) : null;
	}

	// Alternate forms carry an in-game suffix: `ig=-Alola` → `raichu-alola`.
	//
	// Deliberately not gated on the section. Bulbapedia lists "functionally distinct,
	// permanent forms (such as regional forms) alongside the base forms" — so Alolan
	// Ninetales sits in the *species* table, not under "Other forms". Checking the section
	// here made every regional form resolve to its base and then vanish in the de-duplicate,
	// quietly losing about twenty genuinely different Pokémon.
	if (entry.formSuffix) {
		// The species name, not the default form's identifier: Aegislash's default row is
		// `aegislash-shield`, but its other form is `aegislash-blade`, not
		// `aegislash-shield-blade`.
		const base = toSlug(entry.species);
		const wanted = `${base}-${toSlug(entry.formSuffix)}`;
		// Exact first, then prefix: Bulbapedia writes `-Paldea Combat` where the dataset says
		// `tauros-paldea-combat-breed`.
		const match = candidates.find((candidate) => candidate.identifier === wanted) ?? candidates.find((candidate) => candidate.identifier.startsWith(wanted));
		return match ? pick(match) : null;
	}

	const base = candidates.find((candidate) => candidate.is_default === 1) ?? candidates[0];
	return pick(base);
}

export async function runDerive(outputDir: string = DERIVED_DIR): Promise<void> {
	const rosterWikitext = readRaw('roster');
	const changesWikitext = readRaw('changes');

	// Untransferable rows are present in the game data but cannot be obtained, so they are
	// dropped here rather than counted as legal.
	const allEntries = parseRoster(rosterWikitext);
	const rosterEntries = allEntries.filter((entry) => entry.isAvailable);
	const excluded = allEntries.length - rosterEntries.length;
	if (excluded > 0) console.log(`Excluded ${excluded} unavailable entries (untransferable or marked "No")`);

	const header = parseRegulationHeader(rosterWikitext);
	const moveOverrides = parseMoveOverrides(changesWikitext);
	const ppExceptions = parsePpExceptions(changesWikitext);

	if (rosterEntries.length === 0) throw new Error('Parsed zero roster entries — the upstream markup has probably changed shape.');
	if (!header) throw new Error('Could not read the regulation code and end date from the roster page.');

	console.log(`Regulation ${header.code}, ends ${header.endsOn}`);
	const bySection = (section: string) => rosterEntries.filter((rosterEntry) => rosterEntry.section === section).length;
	console.log(`Roster: ${bySection('species')} species + ${bySection('mega')} Megas + ${bySection('other-form')} alternate forms`);
	console.log(`Move overrides: ${moveOverrides.length}; PP exceptions: ${ppExceptions.size}`);

	const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env['DATABASE_URL'] }) });
	const unresolved: DerivedDataset['unresolved'] = [];

	try {
		// ---- resolve the roster against the mainline dataset ----------------------------
		const allPokemon = await prisma.pokemon.findMany({ select: { id: true, identifier: true, species_id: true, is_default: true } });
		const bySpecies = new Map<number, { id: number; identifier: string; is_default: number }[]>();
		for (const row of allPokemon) {
			const list = bySpecies.get(row.species_id) ?? [];
			list.push({ id: row.id, identifier: row.identifier, is_default: row.is_default });
			bySpecies.set(row.species_id, list);
		}

		const resolved: ResolvedEntry[] = [];
		// The "Other forms" section re-lists a species' default form for completeness
		// (Vivillon's Meadow Pattern carries no in-game suffix), so the same mainline row can
		// be reached twice. First occurrence wins — the species section comes first, and that
		// is where a base form's canonical entry belongs.
		const seen = new Set<number>();

		for (const entry of rosterEntries) {
			const match = resolveEntry(entry, bySpecies);
			if (match && seen.has(match.pokemonId)) continue;
			if (match) {
				seen.add(match.pokemonId);
				resolved.push(match);
			}
			else
				unresolved.push({
					kind: 'pokemon',
					// Qualify the name: dozens of forms are just called "Female" or "Blue Flower".
					name: `${entry.species}${entry.form ? ` (${entry.form})` : ''}`,
					// A form with no distinct row in the mainline dataset is cosmetic — same
					// stats, same typing — so skipping it costs the advisor nothing.
					reason:
						entry.section === 'other-form'
							? 'cosmetic form with no distinct mainline row (identical stats and typing)'
							: `no mainline row for dex ${entry.pokedexNumber}`,
				});
		}

		const legalIds = resolved.map((resolvedEntry) => resolvedEntry.pokemonId);
		console.log(
			`Resolved ${resolved.length} distinct Pokémon from ${rosterEntries.length} rows ` +
				`(${resolved.filter((resolvedEntry) => !resolvedEntry.entry.isMega).length} base/forms + ${resolved.filter((resolvedEntry) => resolvedEntry.entry.isMega).length} Megas)`,
		);

		// ---- types and the efficacy chart ----------------------------------------------
		const typeRows = await prisma.types.findMany({
			where: { id: { lte: 18 } },
			select: { id: true, identifier: true, typeNames: { where: { local_language_id: ENGLISH }, select: { name: true } } },
		});
		const types: DerivedType[] = typeRows.map((typeRow) => ({ id: typeRow.id, slug: typeRow.identifier, name: typeRow.typeNames[0]?.name ?? typeRow.identifier }));
		const typeBySlug = new Map(types.map((derivedType) => [derivedType.slug, derivedType.id]));

		const efficacyRows = await prisma.typeEfficacy.findMany({
			where: { damage_type_id: { lte: 18 }, target_type_id: { lte: 18 } },
		});
		const typeEfficacy = efficacyRows.map((efficacyRow) => ({
			attackingTypeId: efficacyRow.damage_type_id,
			defendingTypeId: efficacyRow.target_type_id,
			damageFactor: efficacyRow.damage_factor,
		}));

		// ---- learnsets, straight from the champions version group -----------------------
		const learnsetRows = await prisma.pokemonMoves.findMany({
			where: { version_group_id: { in: [CHAMPIONS_VERSION_GROUP, ...FALLBACK_VERSION_GROUPS] }, pokemon_id: { in: legalIds } },
			select: { pokemon_id: true, move_id: true, version_group_id: true },
			distinct: ['pokemon_id', 'move_id', 'version_group_id'],
		});

		const championsPairs = new Map<number, Set<number>>();
		const unionPairs = new Map<number, Set<number>>();
		for (const row of learnsetRows) {
			const union = unionPairs.get(row.pokemon_id) ?? new Set<number>();
			union.add(row.move_id);
			unionPairs.set(row.pokemon_id, union);

			if (row.version_group_id === CHAMPIONS_VERSION_GROUP) {
				const exact = championsPairs.get(row.pokemon_id) ?? new Set<number>();
				exact.add(row.move_id);
				championsPairs.set(row.pokemon_id, exact);
			}
		}

		const movesByPokemon = new Map<number, number[]>();
		const approximatedLearnsets = new Set<number>();
		const referencedMoveIds = new Set<number>();
		for (const [pokemonId, moveIds] of unionPairs) {
			movesByPokemon.set(pokemonId, [...moveIds]);
			for (const id of moveIds) referencedMoveIds.add(id);
			if ((championsPairs.get(pokemonId)?.size ?? 0) < moveIds.size) approximatedLearnsets.add(pokemonId);
		}

		const totalPairs = [...unionPairs.values()].reduce((sum, set) => sum + set.size, 0);
		console.log(`Learnsets: ${totalPairs} pairs across ${movesByPokemon.size} Pokémon, ${referencedMoveIds.size} distinct moves`);
		console.log(`  ${championsPairs.size} sourced purely from the champions version group; ${approximatedLearnsets.size} supplemented from recent mainline games`);

		// ---- moves, with the Champions delta applied ------------------------------------
		const moveRows = await prisma.moves.findMany({
			where: { id: { in: [...referencedMoveIds] } },
			select: {
				id: true,
				identifier: true,
				type_id: true,
				power: true,
				pp: true,
				accuracy: true,
				priority: true,
				damage_class_id: true,
				effect_chance: true,
				effect_id: true,
				moveNames: { where: { local_language_id: ENGLISH }, select: { name: true } },
				flagMap: { select: { flag: { select: { identifier: true } } } },
			},
		});

		// `Moves.effect_id` has no declared relation in the mainline schema, so effect text is
		// fetched separately rather than through an include.
		const effectRows = await prisma.moveEffectProse.findMany({
			where: { local_language_id: ENGLISH, move_effect_id: { in: [...new Set(moveRows.map((moveRow) => moveRow.effect_id).filter((id): id is number => id !== null))] } },
			select: { move_effect_id: true, short_effect: true },
		});
		const effectTextById = new Map(effectRows.map((effectRow) => [effectRow.move_effect_id, effectRow.short_effect]));

		const overrideBySlug = new Map(moveOverrides.map((moveOverride) => [toSlug(moveOverride.move), moveOverride]));
		const ppExceptionBySlug = new Map([...ppExceptions].map(([name, pp]) => [toSlug(name), pp]));
		const damageClass = { 1: 'STATUS', 2: 'PHYSICAL', 3: 'SPECIAL' } as const;

		const moves: DerivedMove[] = moveRows.map((row) => {
			const override = overrideBySlug.get(row.identifier);
			const ppException = ppExceptionBySlug.get(row.identifier);
			const flags = row.flagMap.map((flagLink) => flagLink.flag.identifier);
			const notes: string[] = [];

			if (override?.note) notes.push(override.note);
			// The PP ladder applies to every move, so it is only worth *flagging* when the
			// move is otherwise unchanged and the value actually moved.
			const basePp = championsPp(row.pp);
			const pp = ppException ?? basePp;
			if (ppException !== undefined) notes.push(`PP set to ${ppException}.`);

			const typeId = override?.type ? (typeBySlug.get(toSlug(override.type)) ?? row.type_id) : row.type_id;

			return {
				id: row.id,
				slug: row.identifier,
				name: row.moveNames[0]?.name ?? row.identifier,
				typeId,
				damageClass: damageClass[row.damage_class_id as 1 | 2 | 3] ?? 'STATUS',
				power: override?.power ?? row.power,
				pp,
				accuracy: override?.accuracy ?? row.accuracy,
				priority: row.priority,
				effectText: row.effect_id !== null ? (effectTextById.get(row.effect_id) ?? null) : null,
				effectChance: override?.effectChance ?? row.effect_chance,
				flags: [...new Set([...flags, ...(override?.addsFlags ?? [])])],
				isOverridden: Boolean(override) || ppException !== undefined,
				overrideNote: notes.length > 0 ? notes.join(' ') : null,
			};
		});

		for (const [slug, override] of overrideBySlug) {
			if (!moveRows.some((moveRow) => moveRow.identifier === slug)) {
				unresolved.push({ kind: 'move', name: override.move, reason: 'not learnable by any legal Pokémon, or unknown slug' });
			}
		}
		console.log(`Moves: ${moves.length} (${moves.filter((move) => move.isOverridden).length} carry a Champions override)`);

		// ---- abilities ------------------------------------------------------------------
		const abilityLinks = await prisma.pokemonAbilities.findMany({
			where: { pokemon_id: { in: legalIds } },
			select: { pokemon_id: true, ability_id: true, slot: true, is_hidden: true },
		});
		const abilityIds = [...new Set(abilityLinks.map((abilityLink) => abilityLink.ability_id))];

		const abilityRows = await prisma.abilities.findMany({
			where: { id: { in: abilityIds } },
			select: {
				id: true,
				identifier: true,
				abilityNames: { where: { local_language_id: ENGLISH }, select: { name: true } },
				abilityProses: { where: { local_language_id: ENGLISH }, select: { short_effect: true } },
			},
		});

		const megaAbilityIds = new Set(
			abilityLinks.filter((abilityLink) => resolved.some((resolvedEntry) => resolvedEntry.pokemonId === abilityLink.pokemon_id && resolvedEntry.entry.isMega)).map((abilityLink) => abilityLink.ability_id),
		);
		const nonMegaAbilityIds = new Set(
			abilityLinks.filter((abilityLink) => resolved.some((resolvedEntry) => resolvedEntry.pokemonId === abilityLink.pokemon_id && !resolvedEntry.entry.isMega)).map((abilityLink) => abilityLink.ability_id),
		);

		const abilities: DerivedAbility[] = abilityRows.map((abilityRow) => ({
			id: abilityRow.id,
			slug: abilityRow.identifier,
			name: abilityRow.abilityNames[0]?.name ?? abilityRow.identifier,
			effectText: abilityRow.abilityProses[0]?.short_effect ?? null,
			// Mega-only: appears on a Mega and on nothing else in the roster.
			isMega: megaAbilityIds.has(abilityRow.id) && !nonMegaAbilityIds.has(abilityRow.id),
		}));

		// ---- Pokémon --------------------------------------------------------------------
		const statRows = await prisma.pokemonStats.findMany({
			where: { pokemon_id: { in: legalIds } },
			select: { pokemon_id: true, stat_id: true, base_stat: true },
		});
		const statsByPokemon = new Map<number, Map<number, number>>();
		for (const row of statRows) {
			const map = statsByPokemon.get(row.pokemon_id) ?? new Map<number, number>();
			map.set(row.stat_id, row.base_stat);
			statsByPokemon.set(row.pokemon_id, map);
		}

		const speciesNames = await prisma.pokemonSpeciesNames.findMany({
			where: { local_language_id: ENGLISH },
			select: { pokemon_species_id: true, name: true },
		});
		const speciesNameById = new Map(speciesNames.map((speciesName) => [speciesName.pokemon_species_id, speciesName.name]));

		const megaBaseByPokedex = new Map<number, number>();
		for (const r of resolved) if (!r.entry.isMega) megaBaseByPokedex.set(r.entry.pokedexNumber, r.pokemonId);

		const abilitiesByPokemon = new Map<number, { abilityId: number; slot: number; isHidden: boolean }[]>();
		for (const link of abilityLinks) {
			const list = abilitiesByPokemon.get(link.pokemon_id) ?? [];
			list.push({ abilityId: link.ability_id, slot: link.slot, isHidden: link.is_hidden === 1 });
			abilitiesByPokemon.set(link.pokemon_id, list);
		}

		const pokemon: DerivedPokemon[] = resolved.map(({ entry, pokemonId, identifier }) => {
			const stats = statsByPokemon.get(pokemonId) ?? new Map<number, number>();
			const ownAbilities = (abilitiesByPokemon.get(pokemonId) ?? []).sort((first, second) => first.slot - second.slot);

			// Champions' typing wins over the mainline's — Mega Clefable is Fairy/Flying here,
			// and reading that from mainline data would be quietly wrong.
			const typeIds = entry.types.map((typeName) => typeBySlug.get(toSlug(typeName))).filter((id): id is number => id !== undefined);

			return {
				id: pokemonId,
				slug: identifier,
				name: displayName(entry, speciesNameById.get(entry.pokedexNumber) ?? entry.species),
				nationalPokedexNumber: entry.pokedexNumber,
				type1Id: typeIds[0] ?? 1,
				type2Id: typeIds[1] ?? null,
				baseHp: stats.get(1) ?? 0,
				baseAttack: stats.get(2) ?? 0,
				baseDefense: stats.get(3) ?? 0,
				baseSpecialAttack: stats.get(4) ?? 0,
				baseSpecialDefense: stats.get(5) ?? 0,
				baseSpeed: stats.get(6) ?? 0,
				isMega: entry.isMega,
				megaOfId: entry.isMega ? (megaBaseByPokedex.get(entry.pokedexNumber) ?? null) : null,
				megaAbilityId: entry.isMega ? (ownAbilities[0]?.abilityId ?? null) : null,
				spriteKey: identifier,
				abilities: ownAbilities,
				moveIds: (movesByPokemon.get(pokemonId) ?? []).sort((first, second) => first - second),
				learnsetIsApproximate: approximatedLearnsets.has(pokemonId) || !championsPairs.has(pokemonId),
			};
		});

		const withoutMoves = pokemon.filter((pokemonEntry) => pokemonEntry.moveIds.length === 0);
		if (withoutMoves.length > 0) {
			console.log(`  note: ${withoutMoves.length} Pokémon have no champions-version-group learnset (Megas usually inherit their base form's)`);
		}

		// Megas share their base form's learnset in-game; the dataset only lists it once.
		for (const mon of pokemon) {
			if (mon.moveIds.length === 0 && mon.megaOfId !== null) {
				const base = pokemon.find((pokemonEntry) => pokemonEntry.id === mon.megaOfId);
				mon.moveIds = base?.moveIds ?? [];
				mon.learnsetIsApproximate = base?.learnsetIsApproximate ?? true;
			}
		}

		const manifestPath = path.join(process.cwd(), RAW_DIR, 'manifest.json');
		const manifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : { fetchedAt: null, pages: [] };

		const dataset: DerivedDataset = {
			source: { fetchedAt: manifest.fetchedAt ?? new Date().toISOString(), pages: manifest.pages ?? [] },
			regulation: {
				code: header.code,
				name: `Regulation Set ${header.code}`,
				// Champions regulations run to the end of the stated day, UTC.
				startsOn: '2026-06-17',
				endsOn: header.endsOn,
				isCurrent: true,
				notes: `${pokemon.filter((pokemonEntry) => !pokemonEntry.isMega).length} species and ${pokemon.filter((pokemonEntry) => pokemonEntry.isMega).length} Mega Evolutions are legal. All Pokémon battle at level ${CHAMPIONS_LEVEL}.`,
				legalPokemonIds: pokemon.map((pokemonEntry) => pokemonEntry.id),
			},
			types,
			typeEfficacy,
			abilities,
			moves,
			pokemon,
			unresolved,
		};

		const absolute = path.join(process.cwd(), outputDir);
		fs.mkdirSync(absolute, { recursive: true });
		const file = path.join(absolute, `regulation-${header.code}.json`);
		fs.writeFileSync(file, `${JSON.stringify(dataset, null, '\t')}\n`, 'utf8');

		console.log(`\nWrote ${outputDir}/regulation-${header.code}.json`);
		if (unresolved.length > 0) {
			console.log(`${unresolved.length} unresolved entries (recorded in the file, not silently dropped):`);
			for (const item of unresolved.slice(0, 20)) console.log(`  - ${item.kind}: ${item.name} — ${item.reason}`);
			if (unresolved.length > 20) console.log(`  ... and ${unresolved.length - 20} more`);
		}
		console.log('Review the diff, then run champions:seed.');
	} finally {
		await prisma.$disconnect();
	}
}
