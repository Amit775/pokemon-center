import type { TypeChart } from '@pokemon-center/champions-engine';
import { DexEntry, DexFilters, EMPTY_FILTERS, applyFilters, isFiltered, passesMatchup } from './dex-filter';

/** Only the rows these tests need; `typeEffectiveness` treats a missing pairing as neutral. */
const chart: TypeChart = {
	dragon: { dragon: 2, steel: 0.5, fairy: 0, water: 1, flying: 1, ghost: 1, ground: 1, fire: 1 },
	fairy: { dragon: 2, steel: 0.5, dark: 2, fire: 1, water: 1, flying: 1, ghost: 1, ground: 1 },
	ice: { dragon: 2, ground: 2, flying: 2, steel: 0.5, water: 0.5, fire: 0.5, fairy: 1, ghost: 1 },
	fire: { steel: 2, water: 0.5, dragon: 0.5, fairy: 1, flying: 1, ghost: 1, ground: 1, ice: 2 },
	ground: { steel: 2, fire: 2, flying: 0, dragon: 1, fairy: 1, ghost: 1, water: 1 },
};

function entry(overrides: Partial<DexEntry> & Pick<DexEntry, 'slug' | 'name' | 'types'>): DexEntry {
	return {
		id: 1,
		nationalDexNo: 1,
		baseStats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80, total: 480 },
		isMega: false,
		hasMega: false,
		megaOfSlug: null,
		abilitySlugs: [],
		abilityNames: [],
		...overrides,
	};
}

const garchomp = entry({
	slug: 'garchomp',
	name: 'Garchomp',
	types: ['dragon', 'ground'],
	nationalDexNo: 445,
	hasMega: true,
	abilitySlugs: ['rough-skin'],
	baseStats: { hp: 108, attack: 130, defense: 95, specialAttack: 80, specialDefense: 85, speed: 102, total: 600 },
});

const garchompMega = entry({
	slug: 'garchomp-mega',
	name: 'Mega Garchomp',
	types: ['dragon', 'ground'],
	nationalDexNo: 445,
	isMega: true,
	megaOfSlug: 'garchomp',
	baseStats: { hp: 108, attack: 170, defense: 115, specialAttack: 120, specialDefense: 95, speed: 92, total: 700 },
});

const corviknight = entry({
	slug: 'corviknight',
	name: 'Corviknight',
	types: ['flying', 'steel'],
	nationalDexNo: 823,
	abilitySlugs: ['pressure'],
	baseStats: { hp: 98, attack: 87, defense: 105, specialAttack: 53, specialDefense: 85, speed: 67, total: 495 },
});

const azumarill = entry({
	slug: 'azumarill',
	name: 'Azumarill',
	types: ['water', 'fairy'],
	nationalDexNo: 184,
	abilitySlugs: ['huge-power'],
	baseStats: { hp: 100, attack: 50, defense: 80, specialAttack: 60, specialDefense: 80, speed: 50, total: 420 },
});

const roster = [azumarill, garchomp, garchompMega, corviknight];

const filters = (overrides: Partial<DexFilters> = {}): DexFilters => ({ ...EMPTY_FILTERS, ...overrides });
const slugs = (result: DexEntry[]) => result.map((e) => e.slug);

describe('applyFilters', () => {
	it('hides Mega forms unless asked for them', () => {
		// A list that interleaves Garchomp with Mega Garchomp reads as two Pokémon.
		expect(slugs(applyFilters(roster, filters(), chart))).not.toContain('garchomp-mega');
		expect(slugs(applyFilters(roster, filters({ includeMegaForms: true }), chart))).toContain('garchomp-mega');
	});

	it('searches by name, case-insensitively', () => {
		expect(slugs(applyFilters(roster, filters({ search: 'corv' }), chart))).toEqual(['corviknight']);
	});

	it('floats prefix matches above the chosen sort', () => {
		const result = applyFilters(roster, filters({ search: 'a', sortBy: 'total', sortDesc: true }), chart);

		expect(result[0].slug).toBe('azumarill');
	});
});

describe('type filter', () => {
	it('matches any selected type by default', () => {
		expect(slugs(applyFilters(roster, filters({ types: ['steel', 'fairy'] }), chart)).sort()).toEqual(['azumarill', 'corviknight']);
	});

	it('requires every selected type in "all" mode', () => {
		expect(slugs(applyFilters(roster, filters({ types: ['dragon', 'ground'], typeMode: 'all' }), chart))).toEqual(['garchomp']);
		expect(applyFilters(roster, filters({ types: ['dragon', 'steel'], typeMode: 'all' }), chart)).toEqual([]);
	});
});

describe('mega filter', () => {
	it('finds base forms that have a Mega', () => {
		expect(slugs(applyFilters(roster, filters({ mega: 'has-mega' }), chart))).toEqual(['garchomp']);
	});

	it('finds base forms with no Mega', () => {
		expect(slugs(applyFilters(roster, filters({ mega: 'no-mega' }), chart)).sort()).toEqual(['azumarill', 'corviknight']);
	});

	it('never counts a Mega form itself as "no mega"', () => {
		const result = applyFilters(roster, filters({ mega: 'no-mega', includeMegaForms: true }), chart);

		expect(slugs(result)).not.toContain('garchomp-mega');
	});
});

describe('matchup filter', () => {
	it('finds what walls a threat — every selected type, not just one', () => {
		// Corviknight resists both Dragon (Steel) and Fairy (Steel); Azumarill resists Dragon
		// via Fairy but is hit neutrally by Fairy, so it is not an answer to both.
		const result = applyFilters(roster, filters({ matchupTypes: ['dragon', 'fairy'], matchupDirection: 'resists' }), chart);

		expect(slugs(result)).toEqual(['corviknight']);
	});

	it('treats an immunity as walling it', () => {
		// Corviknight is immune to Ground.
		const result = applyFilters(roster, filters({ matchupTypes: ['ground'], matchupDirection: 'resists' }), chart);

		expect(slugs(result)).toContain('corviknight');
	});

	it('finds what a coverage type melts — any selected type is enough', () => {
		const result = applyFilters(roster, filters({ matchupTypes: ['ice'], matchupDirection: 'weak-to' }), chart);

		// Garchomp is Dragon/Ground: 2 x 2 = 4x.
		expect(slugs(result)).toEqual(['garchomp']);
	});

	it('unions the selected types when looking for targets', () => {
		const result = applyFilters(roster, filters({ matchupTypes: ['ice', 'fire'], matchupDirection: 'weak-to' }), chart);

		expect(slugs(result).sort()).toEqual(['corviknight', 'garchomp']);
	});

	it('is a no-op when no matchup type is selected', () => {
		expect(applyFilters(roster, filters({ matchupTypes: [] }), chart)).toHaveLength(3);
	});
});

describe('stat filters', () => {
	it('filters on the real level-50 stat, not the base stat', () => {
		// Garchomp base Speed 102 becomes 154 at level 50 with 32 SP; Corviknight's 67 becomes 119.
		// A threshold of 150 must therefore keep Garchomp and drop Corviknight.
		const result = applyFilters(roster, filters({ minStats: { speed: 150 } }), chart);

		expect(slugs(result)).toEqual(['garchomp']);
	});

	it('would behave differently if it compared base stats', () => {
		// Guards the intent above: 150 exceeds every base Speed in the fixture, so a base-stat
		// comparison would return nothing at all.
		expect(roster.every((e) => e.baseStats.speed < 150)).toBe(true);
	});

	it('filters on base stat total', () => {
		expect(slugs(applyFilters(roster, filters({ minTotal: 500 }), chart))).toEqual(['garchomp']);
	});
});

describe('ability filter', () => {
	it('matches a single ability slug', () => {
		expect(slugs(applyFilters(roster, filters({ ability: 'huge-power' }), chart))).toEqual(['azumarill']);
	});
});

describe('sorting', () => {
	it('sorts by dex number by default', () => {
		expect(slugs(applyFilters(roster, filters(), chart))).toEqual(['azumarill', 'garchomp', 'corviknight']);
	});

	it('sorts by a stat, descending', () => {
		expect(slugs(applyFilters(roster, filters({ sortBy: 'speed', sortDesc: true }), chart))).toEqual([
			'garchomp',
			'corviknight',
			'azumarill',
		]);
	});
});

describe('isFiltered', () => {
	it('is false for the empty filter set', () => {
		expect(isFiltered(EMPTY_FILTERS)).toBe(false);
	});

	it('notices each kind of filter', () => {
		expect(isFiltered(filters({ search: 'a' }))).toBe(true);
		expect(isFiltered(filters({ types: ['fire'] }))).toBe(true);
		expect(isFiltered(filters({ mega: 'has-mega' }))).toBe(true);
		expect(isFiltered(filters({ matchupTypes: ['ice'] }))).toBe(true);
		expect(isFiltered(filters({ minStats: { speed: 100 } }))).toBe(true);
		expect(isFiltered(filters({ ability: 'levitate' }))).toBe(true);
	});

	it('ignores presentation-only changes', () => {
		// Sorting and showing Megas are not filters; offering to "clear" them would be noise.
		expect(isFiltered(filters({ sortBy: 'speed', sortDesc: true, includeMegaForms: true }))).toBe(false);
	});
});

describe('passesMatchup', () => {
	it('is exported so the detail page can reuse the same rule', () => {
		expect(passesMatchup(corviknight, filters({ matchupTypes: ['dragon'], matchupDirection: 'resists' }), chart)).toBe(true);
		expect(passesMatchup(garchomp, filters({ matchupTypes: ['dragon'], matchupDirection: 'resists' }), chart)).toBe(false);
	});
});
