// eslint-disable-next-line @nx/enforce-module-boundaries
import type { PrismaClient } from '../../../../libs/prisma-client/src/generated/client';
import { toLegalityStatus, type LegalityStatus } from './legality-status';
import { championsPp, toSlug, type MoveOverride, type RosterEntry, type RosterSection } from './wikitext';

const CHAMPIONS_VERSION_GROUP = 32;
const FALLBACK_VERSION_GROUPS = [25, 30, 31];
const ENGLISH = 9;

export const CHAMPIONS_LEVEL = 50;

const DAMAGE_CLASS_BY_ID = { 1: 'STATUS', 2: 'PHYSICAL', 3: 'SPECIAL' } as const;

export interface ProjectedType {
	id: number;
	slug: string;
	name: string;
}

export interface ProjectedTypeEfficacy {
	attackingTypeId: number;
	defendingTypeId: number;
	damageFactor: number;
}

export interface ProjectedAbility {
	id: number;
	slug: string;
	name: string;
	effectText: string | null;
	isMega: boolean;
}

export interface ProjectedMove {
	id: number;
	slug: string;
	name: string;
	typeId: number;
	damageClass: 'PHYSICAL' | 'SPECIAL' | 'STATUS';
	power: number | null;
	pp: number | null;
	accuracy: number | null;
	priority: number;
	effectText: string | null;
	effectChance: number | null;
	flags: string[];
	isOverridden: boolean;
	overrideNote: string | null;
}

export interface ProjectedPokemon {
	id: number;
	slug: string;
	name: string;
	nationalPokedexNumber: number;
	type1Id: number;
	type2Id: number | null;
	baseHp: number;
	baseAttack: number;
	baseDefense: number;
	baseSpecialAttack: number;
	baseSpecialDefense: number;
	baseSpeed: number;
	isMega: boolean;
	megaOfId: number | null;
	megaAbilityId: number | null;
	spriteKey: string | null;
	abilities: { abilityId: number; slot: number; isHidden: boolean }[];
	moveIds: number[];
	learnsetIsApproximate: boolean;
	legalityStatus: LegalityStatus;
	restrictionNote: string | null;
	introducedIn: string | null;
}

export interface UnresolvedEntry {
	kind: 'pokemon' | 'move';
	section: RosterSection | 'move';
	name: string;
	reason: string;
}

export interface ProjectedDataset {
	types: ProjectedType[];
	typeEfficacy: ProjectedTypeEfficacy[];
	abilities: ProjectedAbility[];
	moves: ProjectedMove[];
	pokemon: ProjectedPokemon[];
	unresolved: UnresolvedEntry[];
}

interface MainlinePokemonRow {
	id: number;
	identifier: string;
	is_default: number;
}

interface ResolvedEntry {
	entry: RosterEntry;
	pokemonId: number;
	identifier: string;
}

function displayName(entry: RosterEntry, speciesName: string): string {
	if (!entry.form) return speciesName;
	if (entry.isMega) return entry.form;

	const regional = entry.form.match(/^(Alolan|Galarian|Hisuian|Paldean)\s+Forme?(?:\s*\((.+)\))?$/i);
	if (regional) return `${regional[1]} ${speciesName}${regional[2] ? ` (${regional[2]})` : ''}`;

	const qualifier = entry.form.replace(/\s*Forme?$/i, '').trim();
	return `${speciesName} (${qualifier || entry.form})`;
}

export function resolveEntry(entry: RosterEntry, bySpecies: Map<number, MainlinePokemonRow[]>): ResolvedEntry | null {
	const candidates = bySpecies.get(entry.pokedexNumber) ?? [];
	if (candidates.length === 0) return null;

	const pick = (row: MainlinePokemonRow) => ({ entry, pokemonId: row.id, identifier: row.identifier });

	if (entry.isMega) {
		const megas = candidates.filter((candidate) => candidate.identifier.includes('-mega'));
		if (megas.length === 0) return null;

		const variant = entry.form?.match(/\s([XY])$/i)?.[1]?.toLowerCase();
		const match = variant ? megas.find((mega) => mega.identifier.endsWith(`-mega-${variant}`)) : megas.find((mega) => /-mega$/.test(mega.identifier));

		const chosen = match ?? (megas.length === 1 ? megas[0] : null);
		return chosen ? pick(chosen) : null;
	}

	if (entry.formSuffix) {
		const speciesSlug = toSlug(entry.species);
		const wanted = `${speciesSlug}-${toSlug(entry.formSuffix)}`;
		const match = candidates.find((candidate) => candidate.identifier === wanted) ?? candidates.find((candidate) => candidate.identifier.startsWith(wanted));
		if (match) return pick(match);
		if (entry.section !== 'species') return null;
	}

	const base = candidates.find((candidate) => candidate.is_default === 1) ?? candidates[0];
	return pick(base);
}

function reasonForUnresolved(entry: RosterEntry): string {
	return entry.section === 'other-form'
		? 'cosmetic form with no distinct mainline row (identical stats and typing)'
		: `no mainline row for dex ${entry.pokedexNumber}`;
}

export async function projectFromMainline(
	prisma: PrismaClient,
	entries: readonly RosterEntry[],
	moveOverrides: readonly MoveOverride[],
	ppExceptions: ReadonlyMap<string, number>,
): Promise<ProjectedDataset> {
	const unresolved: UnresolvedEntry[] = [];

	const allPokemon = await prisma.pokemon.findMany({ select: { id: true, identifier: true, species_id: true, is_default: true } });
	const bySpecies = new Map<number, MainlinePokemonRow[]>();
	for (const row of allPokemon) {
		const list = bySpecies.get(row.species_id) ?? [];
		list.push({ id: row.id, identifier: row.identifier, is_default: row.is_default });
		bySpecies.set(row.species_id, list);
	}

	const resolved: ResolvedEntry[] = [];
	const seen = new Set<number>();

	for (const entry of entries) {
		const match = resolveEntry(entry, bySpecies);
		if (match && seen.has(match.pokemonId)) continue;
		if (match) {
			seen.add(match.pokemonId);
			resolved.push(match);
		} else {
			unresolved.push({
				kind: 'pokemon',
				section: entry.section,
				name: `${entry.species}${entry.form ? ` (${entry.form})` : ''}`,
				reason: reasonForUnresolved(entry),
			});
		}
	}

	const legalIds = resolved.map((resolvedEntry) => resolvedEntry.pokemonId);

	const typeRows = await prisma.types.findMany({
		where: { id: { lte: 18 } },
		select: { id: true, identifier: true, typeNames: { where: { local_language_id: ENGLISH }, select: { name: true } } },
	});
	const types: ProjectedType[] = typeRows.map((typeRow) => ({ id: typeRow.id, slug: typeRow.identifier, name: typeRow.typeNames[0]?.name ?? typeRow.identifier }));
	const typeBySlug = new Map(types.map((projectedType) => [projectedType.slug, projectedType.id]));

	const efficacyRows = await prisma.typeEfficacy.findMany({ where: { damage_type_id: { lte: 18 }, target_type_id: { lte: 18 } } });
	const typeEfficacy = efficacyRows.map((efficacyRow) => ({
		attackingTypeId: efficacyRow.damage_type_id,
		defendingTypeId: efficacyRow.target_type_id,
		damageFactor: efficacyRow.damage_factor,
	}));

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

	const effectRows = await prisma.moveEffectProse.findMany({
		where: {
			local_language_id: ENGLISH,
			move_effect_id: { in: [...new Set(moveRows.map((moveRow) => moveRow.effect_id).filter((id): id is number => id !== null))] },
		},
		select: { move_effect_id: true, short_effect: true },
	});
	const effectTextById = new Map(effectRows.map((effectRow) => [effectRow.move_effect_id, effectRow.short_effect]));

	const overrideBySlug = new Map(moveOverrides.map((moveOverride) => [toSlug(moveOverride.move), moveOverride]));
	const ppExceptionBySlug = new Map([...ppExceptions].map(([name, pp]) => [toSlug(name), pp]));

	const moves: ProjectedMove[] = moveRows.map((row) => {
		const override = overrideBySlug.get(row.identifier);
		const ppException = ppExceptionBySlug.get(row.identifier);
		const flags = row.flagMap.map((flagLink) => flagLink.flag.identifier);
		const notes: string[] = [];

		if (override?.note) notes.push(override.note);
		const pp = ppException ?? championsPp(row.pp);
		if (ppException !== undefined) notes.push(`PP set to ${ppException}.`);

		const typeId = override?.type ? (typeBySlug.get(toSlug(override.type)) ?? row.type_id) : row.type_id;

		return {
			id: row.id,
			slug: row.identifier,
			name: row.moveNames[0]?.name ?? row.identifier,
			typeId,
			damageClass: DAMAGE_CLASS_BY_ID[row.damage_class_id as 1 | 2 | 3] ?? 'STATUS',
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
			unresolved.push({ kind: 'move', section: 'move', name: override.move, reason: 'not learnable by any legal Pokémon, or unknown slug' });
		}
	}

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

	const megaPokemonIds = new Set(resolved.filter((resolvedEntry) => resolvedEntry.entry.isMega).map((resolvedEntry) => resolvedEntry.pokemonId));
	const megaAbilityIds = new Set(abilityLinks.filter((abilityLink) => megaPokemonIds.has(abilityLink.pokemon_id)).map((abilityLink) => abilityLink.ability_id));
	const nonMegaAbilityIds = new Set(abilityLinks.filter((abilityLink) => !megaPokemonIds.has(abilityLink.pokemon_id)).map((abilityLink) => abilityLink.ability_id));

	const abilities: ProjectedAbility[] = abilityRows.map((abilityRow) => ({
		id: abilityRow.id,
		slug: abilityRow.identifier,
		name: abilityRow.abilityNames[0]?.name ?? abilityRow.identifier,
		effectText: abilityRow.abilityProses[0]?.short_effect ?? null,
		isMega: megaAbilityIds.has(abilityRow.id) && !nonMegaAbilityIds.has(abilityRow.id),
	}));

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
	for (const resolvedEntry of resolved) {
		if (!resolvedEntry.entry.isMega) megaBaseByPokedex.set(resolvedEntry.entry.pokedexNumber, resolvedEntry.pokemonId);
	}

	const abilitiesByPokemon = new Map<number, { abilityId: number; slot: number; isHidden: boolean }[]>();
	for (const link of abilityLinks) {
		const list = abilitiesByPokemon.get(link.pokemon_id) ?? [];
		list.push({ abilityId: link.ability_id, slot: link.slot, isHidden: link.is_hidden === 1 });
		abilitiesByPokemon.set(link.pokemon_id, list);
	}

	const pokemon: ProjectedPokemon[] = resolved.map(({ entry, pokemonId, identifier }) => {
		const stats = statsByPokemon.get(pokemonId) ?? new Map<number, number>();
		const ownAbilities = (abilitiesByPokemon.get(pokemonId) ?? []).sort((first, second) => first.slot - second.slot);
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
			legalityStatus: toLegalityStatus(entry.availability),
			restrictionNote: entry.note ?? null,
			introducedIn: entry.introducedIn ?? null,
		};
	});

	for (const mon of pokemon) {
		if (mon.moveIds.length === 0 && mon.megaOfId !== null) {
			const base = pokemon.find((projectedPokemon) => projectedPokemon.id === mon.megaOfId);
			mon.moveIds = base?.moveIds ?? [];
			mon.learnsetIsApproximate = base?.learnsetIsApproximate ?? true;
		}
	}

	return { types, typeEfficacy, abilities, moves, pokemon, unresolved };
}
