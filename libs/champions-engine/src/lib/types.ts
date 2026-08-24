/**
 * Core vocabulary of the Champions engine.
 *
 * Framework-free and data-free, mirroring `domain-school-engine`: nothing here fetches,
 * touches the DOM, or imports Angular. Everything the maths needs is passed in, which is
 * what makes the advisor's numbers testable against a published calculator.
 */

/** The six stats, in the order the games display them. */
export type StatKey = 'hp' | 'attack' | 'defense' | 'specialAttack' | 'specialDefense' | 'speed';

export const STAT_KEYS: readonly StatKey[] = ['hp', 'attack', 'defense', 'specialAttack', 'specialDefense', 'speed'];

export type StatSpread = Record<StatKey, number>;

/** A type's lowercase slug, e.g. `fire`, `steel`. */
export type TypeSlug = string;

/**
 * Type chart as a nested lookup: `chart[attacking][defending]` is a multiplier
 * (0, 0.5, 1 or 2). Passed in rather than hard-coded so a future regulation that changes
 * it is a data change.
 */
export type TypeChart = Record<TypeSlug, Record<TypeSlug, number>>;

export type DamageClass = 'PHYSICAL' | 'SPECIAL' | 'STATUS';

/** A Pokémon's species-level facts — the part that comes from the dex, not from a set. */
export interface ChampionsSpecies {
	id: number;
	slug: string;
	name: string;
	types: TypeSlug[];
	baseStats: StatSpread;
	isMega: boolean;
	/** Ability slugs this species can have. A Mega has exactly one. */
	abilities: string[];
}

export interface ChampionsMove {
	id: number;
	slug: string;
	name: string;
	type: TypeSlug;
	damageClass: DamageClass;
	power: number | null;
	accuracy: number | null;
	priority: number;
	flags: string[];
}

/**
 * Champions' replacement for EVs.
 *
 * 66 points across the six stats, at most 32 in any one. Unlike EVs, a point here is a
 * point of stat — see `statAt50` for exactly where it lands in the formula.
 */
export type StatPoints = StatSpread;

export const SP_TOTAL_BUDGET = 66;
export const SP_PER_STAT_CAP = 32;

/** Every Pokémon battles at this level in Champions; the level selector is gone. */
export const CHAMPIONS_LEVEL = 50;

/** Champions keeps mainline natures, renamed "Stat Alignment" in-game. */
export interface Nature {
	name: string;
	/** Stat raised by 10%, or null for a neutral nature. */
	raises: Exclude<StatKey, 'hp'> | null;
	/** Stat lowered by 10%, or null for a neutral nature. */
	lowers: Exclude<StatKey, 'hp'> | null;
}

export const NEUTRAL_NATURE: Nature = { name: 'Serious', raises: null, lowers: null };

/** A specific Pokémon as it will appear in battle: species plus the choices a trainer made. */
export interface ChampionsBuild {
	species: ChampionsSpecies;
	nature: Nature;
	statPoints: StatPoints;
	ability: string | null;
	item: string | null;
	moves: ChampionsMove[];
}

/** Stat stages run −6..+6 and multiply the stat by a well-known ladder. */
export type StatStage = -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type BoostSpread = Record<Exclude<StatKey, 'hp'>, StatStage>;

export const NO_BOOSTS: BoostSpread = { attack: 0, defense: 0, specialAttack: 0, specialDefense: 0, speed: 0 };

export type Status = 'none' | 'burn' | 'paralysis' | 'poison' | 'badly-poison' | 'sleep' | 'freeze';

export type Weather = 'none' | 'sun' | 'rain' | 'sand' | 'snow';

export type Terrain = 'none' | 'electric' | 'grassy' | 'psychic' | 'misty';

/** Field conditions that change speed or damage. */
export interface FieldState {
	weather: Weather;
	terrain: Terrain;
	/** Doubles the side's Speed for a few turns. */
	tailwind: boolean;
	/** Inverts the speed order. */
	trickRoom: boolean;
}

export const CLEAR_FIELD: FieldState = { weather: 'none', terrain: 'none', tailwind: false, trickRoom: false };

/** Everything about one side's active Pokémon at a moment in a battle. */
export interface ActiveState {
	build: ChampionsBuild;
	boosts: BoostSpread;
	status: Status;
	/** Remaining HP as a fraction of maximum, 0..1. */
	hpFraction: number;
	/** True once this side has used its Mega Evolution. */
	hasMegaEvolved: boolean;
}

/** Zero stat points, for builds where the spread is unknown. */
export const NO_STAT_POINTS: StatPoints = { hp: 0, attack: 0, defense: 0, specialAttack: 0, specialDefense: 0, speed: 0 };
