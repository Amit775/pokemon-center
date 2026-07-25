import type { TypeChart } from '../types';

/**
 * Real type-chart data for tests. Excluded from the library build via tsconfig.lib.json.
 *
 * Values are the genuine chart, so a failing assertion means a generator is wrong rather than
 * the fixture being make-believe.
 */

export const MODERN_TYPES = [
	'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground',
	'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy',
];

/** Sparse: only non-neutral matchups, exactly how `type_efficacy` is meaningful. */
export const MODERN_EXCEPTIONS: Record<string, Record<string, number>> = {
	normal: { rock: 0.5, ghost: 0, steel: 0.5 },
	fire: { fire: 0.5, water: 0.5, grass: 2, ice: 2, bug: 2, rock: 0.5, dragon: 0.5, steel: 2 },
	water: { fire: 2, water: 0.5, grass: 0.5, ground: 2, rock: 2, dragon: 0.5 },
	electric: { water: 2, electric: 0.5, grass: 0.5, ground: 0, flying: 2, dragon: 0.5 },
	grass: { fire: 0.5, water: 2, grass: 0.5, poison: 0.5, ground: 2, flying: 0.5, bug: 0.5, rock: 2, dragon: 0.5, steel: 0.5 },
	ice: { fire: 0.5, water: 0.5, grass: 2, ice: 0.5, ground: 2, flying: 2, dragon: 2, steel: 0.5 },
	fighting: { normal: 2, ice: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2, ghost: 0, dark: 2, steel: 2, fairy: 0.5 },
	poison: { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0, fairy: 2 },
	ground: { fire: 2, electric: 2, grass: 0.5, poison: 2, flying: 0, bug: 0.5, rock: 2, steel: 2 },
	flying: { electric: 0.5, grass: 2, fighting: 2, bug: 2, rock: 0.5, steel: 0.5 },
	psychic: { fighting: 2, poison: 2, psychic: 0.5, dark: 0, steel: 0.5 },
	bug: { fire: 0.5, grass: 2, fighting: 0.5, poison: 0.5, flying: 0.5, psychic: 2, ghost: 0.5, dark: 2, steel: 0.5, fairy: 0.5 },
	rock: { fire: 2, ice: 2, fighting: 0.5, ground: 0.5, flying: 2, bug: 2, steel: 0.5 },
	ghost: { normal: 0, psychic: 2, ghost: 2, dark: 0.5 },
	dragon: { dragon: 2, steel: 0.5, fairy: 0 },
	dark: { fighting: 0.5, psychic: 2, ghost: 2, dark: 0.5, fairy: 0.5 },
	steel: { fire: 0.5, water: 0.5, electric: 0.5, ice: 2, rock: 2, steel: 0.5, fairy: 2 },
	fairy: { fire: 0.5, fighting: 2, poison: 0.5, dragon: 2, dark: 2, steel: 0.5 },
};

export function buildChart(types: string[], exceptions: Record<string, Record<string, number>>): TypeChart {
	const factor: Record<string, Record<string, number>> = {};
	for (const attacking of types) {
		const source = exceptions[attacking] as Record<string, number> | undefined;
		const row: Record<string, number> = {};
		for (const defending of types) {
			row[defending] = (source?.[defending] as number | undefined) ?? 1;
		}
		factor[attacking] = row;
	}
	return { types, factor };
}

export const MODERN_CHART = buildChart(MODERN_TYPES, MODERN_EXCEPTIONS);

/**
 * Gen-1 stand-in: Dark, Steel and Fairy did not exist, and Ghost famously did nothing to
 * Psychic. Real values come from `type_efficacy_past` via the era-correct resolver — this
 * fixture only has to prove the engine is era-driven rather than era-aware.
 */
export const GEN1_TYPES = MODERN_TYPES.filter((type) => !['dark', 'steel', 'fairy'].includes(type));

export const GEN1_CHART = buildChart(GEN1_TYPES, { ...MODERN_EXCEPTIONS, ghost: { normal: 0, psychic: 0, ghost: 2 } });
