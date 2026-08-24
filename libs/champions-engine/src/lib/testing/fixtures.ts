import { ChampionsBuild, ChampionsMove, ChampionsSpecies, Nature, NO_STAT_POINTS, StatPoints, TypeChart } from '../types';

/**
 * Fixtures for the engine tests.
 *
 * Real base stats and real move values, because the tests exist to be checked against a
 * published damage calculator — invented numbers would make that impossible.
 */

export const natures = {
	jolly: { name: 'Jolly', raises: 'speed', lowers: 'specialAttack' } satisfies Nature,
	adamant: { name: 'Adamant', raises: 'attack', lowers: 'specialAttack' } satisfies Nature,
	timid: { name: 'Timid', raises: 'speed', lowers: 'attack' } satisfies Nature,
	modest: { name: 'Modest', raises: 'specialAttack', lowers: 'attack' } satisfies Nature,
	serious: { name: 'Serious', raises: null, lowers: null } satisfies Nature,
};

export const species = {
	garchomp: {
		id: 445,
		slug: 'garchomp',
		name: 'Garchomp',
		types: ['dragon', 'ground'],
		baseStats: { hp: 108, attack: 130, defense: 95, specialAttack: 80, specialDefense: 85, speed: 102 },
		isMega: false,
		abilities: ['rough-skin'],
	} satisfies ChampionsSpecies,

	dragapult: {
		id: 887,
		slug: 'dragapult',
		name: 'Dragapult',
		types: ['dragon', 'ghost'],
		baseStats: { hp: 88, attack: 120, defense: 75, specialAttack: 100, specialDefense: 75, speed: 142 },
		isMega: false,
		abilities: ['clear-body'],
	} satisfies ChampionsSpecies,

	corviknight: {
		id: 823,
		slug: 'corviknight',
		name: 'Corviknight',
		types: ['flying', 'steel'],
		baseStats: { hp: 98, attack: 87, defense: 105, specialAttack: 53, specialDefense: 85, speed: 67 },
		isMega: false,
		abilities: ['pressure'],
	} satisfies ChampionsSpecies,

	azumarill: {
		id: 184,
		slug: 'azumarill',
		name: 'Azumarill',
		types: ['water', 'fairy'],
		baseStats: { hp: 100, attack: 50, defense: 80, specialAttack: 60, specialDefense: 80, speed: 50 },
		isMega: false,
		abilities: ['huge-power'],
	} satisfies ChampionsSpecies,
};

export const moves = {
	earthquake: {
		id: 89,
		slug: 'earthquake',
		name: 'Earthquake',
		type: 'ground',
		damageClass: 'PHYSICAL',
		power: 100,
		accuracy: 100,
		priority: 0,
		flags: ['protect', 'mirror'],
	} satisfies ChampionsMove,

	dragonClaw: {
		id: 337,
		slug: 'dragon-claw',
		name: 'Dragon Claw',
		type: 'dragon',
		damageClass: 'PHYSICAL',
		power: 80,
		accuracy: 100,
		priority: 0,
		// Champions reclassified this as a slicing move.
		flags: ['contact', 'protect', 'mirror', 'slicing'],
	} satisfies ChampionsMove,

	/** Champions raised this from 90 to 100 base power. */
	firstImpression: {
		id: 660,
		slug: 'first-impression',
		name: 'First Impression',
		type: 'bug',
		damageClass: 'PHYSICAL',
		power: 100,
		accuracy: 100,
		priority: 2,
		flags: ['contact', 'protect', 'mirror'],
	} satisfies ChampionsMove,

	bodyPress: {
		id: 776,
		slug: 'body-press',
		name: 'Body Press',
		type: 'fighting',
		damageClass: 'PHYSICAL',
		power: 80,
		accuracy: 100,
		priority: 0,
		flags: ['contact', 'protect', 'mirror'],
	} satisfies ChampionsMove,

	roost: {
		id: 355,
		slug: 'roost',
		name: 'Roost',
		type: 'flying',
		damageClass: 'STATUS',
		power: null,
		accuracy: null,
		priority: 0,
		flags: [],
	} satisfies ChampionsMove,
};

/** Only the rows the tests need; `typeEffectiveness` treats a missing entry as neutral. */
export const typeChart: TypeChart = {
	ground: { flying: 0, steel: 2, water: 1, fairy: 1, dragon: 1, ghost: 1 },
	dragon: { dragon: 2, fairy: 0, steel: 0.5, flying: 1, ghost: 1, water: 0.5, ground: 1 },
	fighting: { steel: 2, flying: 0.5, ghost: 0, dragon: 1, water: 1, fairy: 0.5, ground: 1 },
	bug: { dragon: 1, ghost: 0.5, steel: 0.5, flying: 0.5, water: 1, fairy: 0.5, ground: 1 },
	ice: { dragon: 2, ground: 2, flying: 2, steel: 0.5, water: 0.5, ghost: 1, fairy: 1 },
	water: { ground: 2, steel: 0.5, dragon: 0.5, flying: 1, ghost: 1, fairy: 1, water: 0.5 },
	fairy: { dragon: 2, steel: 0.5, ghost: 1, flying: 1, water: 1, ground: 1, fairy: 1 },
	flying: { steel: 0.5, ground: 1, dragon: 1, ghost: 1, water: 1, fairy: 1, flying: 1 },
	steel: { fairy: 2, steel: 0.5, water: 0.5, flying: 1, dragon: 1, ghost: 1, ground: 1 },
	ghost: { ghost: 2, steel: 1, dragon: 1, flying: 1, water: 1, fairy: 1, ground: 1 },
};

export function spread(overrides: Partial<StatPoints> = {}): StatPoints {
	return { ...NO_STAT_POINTS, ...overrides };
}

export function build(overrides: Partial<ChampionsBuild> & Pick<ChampionsBuild, 'species'>): ChampionsBuild {
	return {
		nature: natures.serious,
		statPoints: spread(),
		ability: null,
		item: null,
		moves: [],
		...overrides,
	};
}
