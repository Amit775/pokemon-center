import type { TypeChart } from '@pokemon-center/champions-engine';
import { DexEntry, DexFilters, EMPTY_FILTERS, STAT_BOUNDS, applyFilters, diagnoseEmpty, isFiltered, passesMatchup } from './dex-filter';

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
	abilityNames: ['Rough Skin'],
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
	abilityNames: ['Pressure'],
	baseStats: { hp: 98, attack: 87, defense: 105, specialAttack: 53, specialDefense: 85, speed: 67, total: 495 },
});

const azumarill = entry({
	slug: 'azumarill',
	name: 'Azumarill',
	types: ['water', 'fairy'],
	nationalDexNo: 184,
	abilitySlugs: ['huge-power'],
	abilityNames: ['Huge Power'],
	baseStats: { hp: 100, attack: 50, defense: 80, specialAttack: 60, specialDefense: 80, speed: 50, total: 420 },
});

const roster = [azumarill, garchomp, garchompMega, corviknight];

const filters = (overrides: Partial<DexFilters> = {}): DexFilters => ({ ...EMPTY_FILTERS, ...overrides });
const slugs = (result: DexEntry[]) => result.map((e) => e.slug);

describe('applyFilters', () => {
	it('never lists a Mega form as its own entry', () => {
		// A Mega is a state a Pokémon enters, not a second Pokémon; a list showing both reads
		// as two threats when it is one. There is deliberately no opt-in.
		expect(slugs(applyFilters(roster, filters(), chart))).not.toContain('garchomp-mega');
		expect(slugs(applyFilters(roster, filters({ mega: 'has-mega' }), chart))).toEqual(['garchomp']);
	});

	it('searches by name, case-insensitively', () => {
		expect(slugs(applyFilters(roster, filters({ search: 'corv' }), chart))).toEqual(['corviknight']);
	});

	it('floats prefix matches above the chosen sort', () => {
		const result = applyFilters(roster, filters({ search: 'a', sortBy: 'total', sortDesc: true }), chart);

		expect(result[0].slug).toBe('azumarill');
	});

	it('searches abilities and types too, not only names', () => {
		// Typing "huge power" or "steel" should find something rather than nothing.
		expect(slugs(applyFilters(roster, filters({ search: 'huge' }), chart))).toEqual(['azumarill']);
		expect(slugs(applyFilters(roster, filters({ search: 'steel' }), chart))).toEqual(['corviknight']);
	});
});

describe('move filter', () => {
	const learners = new Set([garchomp.id]);

	it('keeps only the ids that learn the move', () => {
		const roster = [azumarill, entry({ ...garchomp, id: 445 })];
		const result = applyFilters(roster, filters({ move: 'earthquake' }), chart, { learners: new Set([445]) });

		expect(slugs(result)).toEqual(['garchomp']);
	});

	it('does not filter while the learners are still in flight', () => {
		// Emptying the list and refilling it reads as a broken filter; narrowing a full list
		// reads as loading, which is what is actually happening.
		expect(applyFilters(roster, filters({ move: 'earthquake' }), chart, { learners: null })).toHaveLength(3);
	});

	it('is inert without a move, whatever the learners say', () => {
		expect(applyFilters(roster, filters(), chart, { learners })).toHaveLength(3);
	});

	it('counts as an active filter', () => {
		expect(isFiltered(filters({ move: 'earthquake' }))).toBe(true);
	});
});

describe('type filter', () => {
	it('matches the typing as a whole in exact mode', () => {
		expect(slugs(applyFilters(roster, filters({ types: ['dragon', 'ground'], typeMode: 'exact' }), chart))).toEqual(['garchomp']);
		expect(applyFilters(roster, filters({ types: ['dragon', 'steel'], typeMode: 'exact' }), chart)).toEqual([]);
	});

	it('returns mono-types only when exact mode has one chip', () => {
		// Garchomp is Dragon/Ground, so it is not "a Dragon type" under the strict reading —
		// it is a Dragon/Ground type. This is the whole difference between the two modes.
		const mono = entry({ slug: 'druddigon', name: 'Druddigon', types: ['dragon'], nationalDexNo: 621 });

		expect(slugs(applyFilters([...roster, mono], filters({ types: ['dragon'], typeMode: 'exact' }), chart))).toEqual(['druddigon']);
	});

	it('matches any selected type in loose mode, with no cap', () => {
		const result = applyFilters(roster, filters({ types: ['steel', 'fairy', 'dragon'], typeMode: 'any' }), chart);

		expect(slugs(result).sort()).toEqual(['azumarill', 'corviknight', 'garchomp']);
	});
});

describe('mega filter', () => {
	it('finds base forms that have a Mega', () => {
		expect(slugs(applyFilters(roster, filters({ mega: 'has-mega' }), chart))).toEqual(['garchomp']);
	});

	it('finds base forms with no Mega', () => {
		expect(slugs(applyFilters(roster, filters({ mega: 'no-mega' }), chart)).sort()).toEqual(['azumarill', 'corviknight']);
	});

	it('excludes the Mega-capable base form from "no mega"', () => {
		const result = applyFilters(roster, filters({ mega: 'no-mega' }), chart);

		expect(slugs(result)).not.toContain('garchomp');
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

	it('unions the selected types in loose mode when looking for targets', () => {
		const result = applyFilters(
			roster,
			filters({ matchupTypes: ['ice', 'fire'], matchupMode: 'any', matchupDirection: 'weak-to' }),
			chart,
		);

		expect(slugs(result).sort()).toEqual(['corviknight', 'garchomp']);
	});

	it('is a no-op when no matchup type is selected', () => {
		expect(applyFilters(roster, filters({ matchupTypes: [] }), chart)).toHaveLength(3);
	});
});

describe('stat filters', () => {
	it('filters on base stats, both ends of the range', () => {
		// Base Speeds in the fixture: Azumarill 50, Corviknight 67, Garchomp 102.
		expect(slugs(applyFilters(roster, filters({ statRanges: { speed: [100, 260] } }), chart))).toEqual(['garchomp']);
		expect(slugs(applyFilters(roster, filters({ statRanges: { speed: [0, 60] } }), chart))).toEqual(['azumarill']);
		expect(slugs(applyFilters(roster, filters({ statRanges: { speed: [60, 105] } }), chart)).sort()).toEqual([
			'corviknight',
			'garchomp',
		]);
	});

	it('reads base stats, never a level-50 number', () => {
		// Guards the intent: Garchomp's base Speed of 102 becomes 154 at level 50 with 32 SP,
		// so a threshold of 150 must return nothing rather than matching it. Investment is a
		// build choice; this is a species filter.
		expect(applyFilters(roster, filters({ statRanges: { speed: [150, 260] } }), chart)).toEqual([]);
	});

	it('ignores a range that spans the whole axis', () => {
		expect(applyFilters(roster, filters({ statRanges: { speed: STAT_BOUNDS } }), chart)).toHaveLength(3);
	});

	it('filters on base stat total', () => {
		expect(slugs(applyFilters(roster, filters({ totalRange: [500, 800] }), chart))).toEqual(['garchomp']);
	});
});

describe('ability filter', () => {
	it('matches a single ability slug', () => {
		expect(slugs(applyFilters(roster, filters({ ability: 'huge-power' }), chart))).toEqual(['azumarill']);
	});
});

describe('owned filter', () => {
	it('keeps only species in the Box', () => {
		const result = applyFilters(roster, filters({ ownedOnly: true }), chart, { owned: new Set(['corviknight']) });

		expect(slugs(result)).toEqual(['corviknight']);
	});

	it('matches on base forms, the only rows there are', () => {
		// `DexStore` normalizes the owned set to base slugs, so boxing a Mega Garchomp marks
		// Garchomp — the row the grid actually shows.
		const result = applyFilters(roster, filters({ ownedOnly: true }), chart, { owned: new Set(['garchomp']) });

		expect(slugs(result)).toEqual(['garchomp']);
	});

	it('is a no-op when nothing is owned and the filter is off', () => {
		expect(applyFilters(roster, filters(), chart)).toHaveLength(3);
	});
});

describe('counter filter', () => {
	it('keeps only entries that answer the target, ranked best first', () => {
		// Azumarill checks Garchomp (Fairy melts Dragon, takes a neutral Ground move);
		// Corviknight walls it (immune to Ground, resists Dragon) but cannot hit back.
		const result = applyFilters(roster, filters({ counterOf: 'garchomp' }), chart);

		expect(slugs(result)).toEqual(['azumarill', 'corviknight']);
	});

	it('never offers a Pokémon as its own answer', () => {
		expect(slugs(applyFilters(roster, filters({ counterOf: 'garchomp' }), chart))).not.toContain('garchomp');
	});

	it('outranks the selected sort, because asking for answers is asking for a ranking', () => {
		// Sorted by base total descending, Corviknight (495) would come before Azumarill (420).
		const result = applyFilters(roster, filters({ counterOf: 'garchomp', sortBy: 'total', sortDesc: true }), chart);

		expect(slugs(result)).toEqual(['azumarill', 'corviknight']);
	});

	it('is inert when the target slug is not on the roster', () => {
		expect(applyFilters(roster, filters({ counterOf: 'missingno' }), chart)).toHaveLength(3);
	});

	it('counts as an active filter', () => {
		expect(isFiltered(filters({ counterOf: 'garchomp' }))).toBe(true);
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

	it('breaks stat ties by dex number rather than leaving them to input order', () => {
		// Two entries with identical Speed, fed in reverse dex order. Without the tiebreak the
		// result depends on the array it arrived in, so the grid reshuffles on unrelated changes.
		const fast = entry({ slug: 'fast-b', name: 'Fast B', types: ['fire'], nationalDexNo: 900 });
		const alsoFast = entry({ slug: 'fast-a', name: 'Fast A', types: ['fire'], nationalDexNo: 100 });

		expect(slugs(applyFilters([fast, alsoFast], filters({ sortBy: 'speed' }), chart))).toEqual(['fast-a', 'fast-b']);
	});
});

describe('diagnoseEmpty', () => {
	// Corviknight is the only thing that walls both, and its base total is 495.
	const impossible = filters({ matchupTypes: ['dragon', 'fairy'], matchupDirection: 'resists', totalRange: [600, 800] });

	it('names each filter that would bring results back, and what it would bring', () => {
		const relaxations = diagnoseEmpty(roster, impossible, chart);

		expect(applyFilters(roster, impossible, chart)).toEqual([]);
		expect(relaxations.map((r) => r.label)).toEqual(['the matchup', 'the stat ranges']);
		expect(relaxations.every((r) => r.count > 0)).toBe(true);
	});

	it('returns a patch that actually un-empties the grid', () => {
		const [best] = diagnoseEmpty(roster, impossible, chart);

		expect(applyFilters(roster, { ...impossible, ...best.patch }, chart)).toHaveLength(best.count);
	});

	it('offers nothing when only one filter is active — "clear" already says that', () => {
		expect(diagnoseEmpty(roster, filters({ ability: 'levitate' }), chart)).toEqual([]);
	});

	it('omits a filter whose removal still leaves nothing', () => {
		// Nothing is both Dragon and Steel, so dropping the ability changes nothing and is not
		// offered; dropping the types leaves Garchomp, so that one is.
		const both = filters({ types: ['dragon', 'steel'], typeMode: 'exact', ability: 'rough-skin' });

		expect(diagnoseEmpty(roster, both, chart).map((r) => r.label)).toEqual(['the type filter']);
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
		expect(isFiltered(filters({ statRanges: { speed: [100, 260] } }))).toBe(true);
		expect(isFiltered(filters({ ability: 'levitate' }))).toBe(true);
	});

	it('ignores presentation-only changes', () => {
		// Sorting is not a filter; offering to "clear" it would be noise.
		expect(isFiltered(filters({ sortBy: 'speed', sortDesc: true }))).toBe(false);
	});
});

describe('passesMatchup', () => {
	it('is exported so the detail page can reuse the same rule', () => {
		expect(passesMatchup(corviknight, filters({ matchupTypes: ['dragon'], matchupDirection: 'resists' }), chart)).toBe(true);
		expect(passesMatchup(garchomp, filters({ matchupTypes: ['dragon'], matchupDirection: 'resists' }), chart)).toBe(false);
	});
});
