import { EMPTY_FILTERS, type PokedexFilters } from './pokedex-filter';
import { decodeFilters, encodeFilters, fromQueryString, hasFilterParams, toQueryString } from './pokedex-url';

const filters = (overrides: Partial<PokedexFilters> = {}): PokedexFilters => ({ ...EMPTY_FILTERS, ...overrides });

/** Read a `{key: value}` map the way the router hands params over. */
const reader = (params: Record<string, string>) => (key: string) => params[key] ?? null;

describe('encodeFilters', () => {
	it('writes nothing for the default state', () => {
		expect(encodeFilters(EMPTY_FILTERS)).toEqual({});
	});

	it('writes only what differs from the default', () => {
		expect(encodeFilters(filters({ search: 'garchomp' }))).toEqual({ q: 'garchomp' });
	});

	it('omits a selection mode when nothing is selected', () => {
		// The mode is meaningless without chips, and a URL carrying it would imply a filter
		// that is not actually on.
		expect(encodeFilters(filters({ typeMode: 'any' }))).toEqual({});
		expect(encodeFilters(filters({ types: ['fire'], typeMode: 'any' }))).toEqual({ t: 'fire', tm: 'any' });
	});

	it('writes only the stat ranges that are actually narrowed', () => {
		const params = encodeFilters(filters({ statRanges: { speed: [130, 260], attack: [0, 260] } }));

		expect(params['s']).toBe('speed:130-260');
	});

	it('trims whitespace-only searches away entirely', () => {
		expect(encodeFilters(filters({ search: '   ' }))).toEqual({});
	});
});

describe('decodeFilters', () => {
	it('round-trips a rich filter state', () => {
		const original = filters({
			search: 'chomp',
			types: ['dragon', 'ground'],
			typeMode: 'any',
			matchupTypes: ['ice'],
			matchupDirection: 'weak-to',
			matchupSlug: 'garchomp',
			mega: 'has-mega',
			statRanges: { speed: [100, 200] },
			totalRange: [500, 700],
			ability: 'rough-skin',
			move: 'earthquake',
			ownedOnly: true,
			counterOf: 'dragonite',
			sortBy: 'speed',
			sortDesc: true,
		});

		expect(fromQueryString(toQueryString(original))).toEqual(original);
	});

	it('falls back to the default for a value that is not allowed', () => {
		// A URL is user input and half of them arrive truncated or hand-edited.
		const decoded = decodeFilters(reader({ mega: 'sometimes', sort: 'vibes', tm: 'maybe', mud: 'sideways' }));

		expect(decoded.mega).toBe('any');
		expect(decoded.sortBy).toBe('dex');
		expect(decoded.typeMode).toBe(EMPTY_FILTERS.typeMode);
		expect(decoded.matchupDirection).toBe(EMPTY_FILTERS.matchupDirection);
	});

	it('drops a stat range whose bounds are inverted or unparseable', () => {
		const decoded = decodeFilters(reader({ s: 'speed:200-100,attack:abc,nonsense:0-50,defense:20-90' }));

		expect(decoded.statRanges.speed).toBeUndefined();
		expect(decoded.statRanges.attack).toBeUndefined();
		expect(decoded.statRanges.defense).toEqual([20, 90]);
	});

	it('clamps a range to the axis rather than trusting it', () => {
		expect(decodeFilters(reader({ s: 'speed:-50-9999' })).statRanges.speed).toEqual([0, 260]);
	});

	it('reads an empty query as the default state', () => {
		expect(decodeFilters(reader({}))).toEqual(EMPTY_FILTERS);
	});

	it('ignores empty entries in a comma list', () => {
		expect(decodeFilters(reader({ t: 'fire,,  ,water' })).types).toEqual(['fire', 'water']);
	});
});

describe('hasFilterParams', () => {
	it('tells a shared view apart from a bare visit', () => {
		// The distinction the roster needs: with params the URL wins outright, without them
		// the stored filters are kept.
		expect(hasFilterParams(reader({}))).toBe(false);
		expect(hasFilterParams(reader({ utm_source: 'discord' }))).toBe(false);
		expect(hasFilterParams(reader({ q: 'garchomp' }))).toBe(true);
	});
});
