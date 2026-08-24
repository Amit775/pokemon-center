import type { ChampionsBuild, ChampionsMove, ChampionsSpecies } from '@pokemon-center/champions-engine';
import type { BoxQuery } from '@pokemon-center/data-access-champions';
import { natureByName } from './natures';

/**
 * A Box entry, as the engine sees it.
 *
 * This is the point of the Box. Everywhere else in the app an opponent's build has to be
 * *inferred* — assume maximum investment, assume a plausible moveset — because you genuinely
 * do not know. Your own six is different: you chose the spread, the nature, the item and the
 * four moves, and pretending otherwise made the Companion's numbers wrong about the half of
 * the battle it had no excuse to be wrong about.
 *
 * Nothing here guesses. What is unset stays unset.
 */

export type BoxEntry = BoxQuery['box'][number];

function toSpecies(entry: BoxEntry): ChampionsSpecies {
	return {
		id: entry.pokemon.id,
		slug: entry.pokemon.slug,
		name: entry.nickname || entry.pokemon.name,
		types: entry.pokemon.types,
		baseStats: {
			hp: entry.pokemon.baseStats.hp,
			attack: entry.pokemon.baseStats.attack,
			defense: entry.pokemon.baseStats.defense,
			specialAttack: entry.pokemon.baseStats.specialAttack,
			specialDefense: entry.pokemon.baseStats.specialDefense,
			speed: entry.pokemon.baseStats.speed,
		},
		isMega: entry.pokemon.isMega,
		abilities: entry.ability ? [entry.ability.slug] : [],
	};
}

function toMove(move: BoxEntry['moves'][number]): ChampionsMove {
	return {
		id: move.id,
		slug: move.slug,
		name: move.name,
		type: move.type,
		damageClass: move.damageClass,
		power: move.power ?? null,
		accuracy: move.accuracy ?? null,
		priority: move.priority,
		flags: move.flags,
	};
}

/** Convert one Box entry into an engine build using its real, chosen values. */
export function boxEntryToBuild(entry: BoxEntry): ChampionsBuild {
	return {
		species: toSpecies(entry),
		nature: natureByName(entry.nature),
		statPoints: {
			hp: entry.statPoints.hp,
			attack: entry.statPoints.attack,
			defense: entry.statPoints.defense,
			specialAttack: entry.statPoints.specialAttack,
			specialDefense: entry.statPoints.specialDefense,
			speed: entry.statPoints.speed,
		},
		ability: entry.ability?.slug ?? null,
		item: entry.item ?? null,
		moves: entry.moves.map(toMove),
	};
}
