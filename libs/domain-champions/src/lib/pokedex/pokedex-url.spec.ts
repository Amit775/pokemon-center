import {
	EMPTY_EXTERNAL_FILTERS,
	decodePokedexState,
	encodePokedexState,
	fromQueryString,
	hasPokedexStateParams,
	toQueryString,
	type ExternalFiltersSnapshot,
	type PokedexFilterModel,
	type PokedexSavedState,
} from './pokedex-url';

const external = (overrides: Partial<ExternalFiltersSnapshot> = {}): ExternalFiltersSnapshot => ({ ...EMPTY_EXTERNAL_FILTERS, ...overrides });

const state = (overrides: Partial<PokedexSavedState> = {}): PokedexSavedState => ({
	filterModel: {},
	external: EMPTY_EXTERNAL_FILTERS,
	...overrides,
});

/** Read a `{key: value}` map the way the router hands params over. */
const reader = (params: Record<string, string>) => (key: string) => params[key] ?? null;

describe('encodePokedexState', () => {
	it('writes nothing for the default state', () => {
		expect(encodePokedexState(state())).toEqual({});
	});

	it('writes the filter model only when it is non-empty', () => {
		const model: PokedexFilterModel = { types: { types: ['dragon'], mode: 'exact' } };
		const params = encodePokedexState(state({ filterModel: model }));

		expect(JSON.parse(params['filterModel'])).toEqual(model);
	});

	it('drops a filter model entry for an unrecognised column rather than writing it through', () => {
		const model: PokedexFilterModel = { types: { types: ['dragon'], mode: 'exact' }, mysteryColumn: { anything: true } };
		const params = encodePokedexState(state({ filterModel: model }));

		expect(JSON.parse(params['filterModel'])).toEqual({ types: { types: ['dragon'], mode: 'exact' } });
	});

	it('omits a matchup mode/direction when nothing is selected', () => {
		// The mode is meaningless without chips, and a URL carrying it would imply a filter that
		// is not actually on.
		expect(encodePokedexState(state({ external: external({ matchupMode: 'any' }) }))).toEqual({});
		expect(encodePokedexState(state({ external: external({ matchupTypes: ['fire'], matchupMode: 'any' }) }))).toEqual({
			matchupTypes: 'fire',
			matchupMode: 'any',
		});
	});

	it('writes each external field only when it differs from its default', () => {
		expect(encodePokedexState(state({ external: external({ ownedOnly: true }) }))).toEqual({ ownedOnly: '1' });
		expect(encodePokedexState(state({ external: external({ mega: 'has-mega' }) }))).toEqual({ mega: 'has-mega' });
		expect(encodePokedexState(state({ external: external({ move: 'earthquake' }) }))).toEqual({ move: 'earthquake' });
		expect(encodePokedexState(state({ external: external({ counterOf: 'garchomp' }) }))).toEqual({ counterOf: 'garchomp' });
	});

	it('writes both halves together when both are active', () => {
		const params = encodePokedexState(
			state({
				filterModel: { hp: [100, 260] },
				external: external({ ownedOnly: true, mega: 'has-mega' }),
			}),
		);

		expect(JSON.parse(params['filterModel'])).toEqual({ hp: [100, 260] });
		expect(params['ownedOnly']).toBe('1');
		expect(params['mega']).toBe('has-mega');
	});
});

describe('decodePokedexState', () => {
	it('round-trips a rich combined state', () => {
		const original = state({
			filterModel: {
				types: { types: ['dragon', 'ground'], mode: 'any' },
				speed: [100, 200],
				total: [500, 700],
			},
			external: external({
				matchupTypes: ['ice'],
				matchupMode: 'exact',
				matchupDirection: 'weak-to',
				mega: 'has-mega',
				move: 'earthquake',
				ownedOnly: true,
				counterOf: 'dragonite',
			}),
		});

		expect(fromQueryString(toQueryString(original))).toEqual(original);
	});

	it('falls back to the default for a value that is not allowed', () => {
		// A URL is user input and half of them arrive truncated or hand-edited.
		const decoded = decodePokedexState(reader({ mega: 'sometimes', matchupMode: 'maybe', matchupDirection: 'sideways' }));

		expect(decoded.external.mega).toBe('any');
		expect(decoded.external.matchupMode).toBe(EMPTY_EXTERNAL_FILTERS.matchupMode);
		expect(decoded.external.matchupDirection).toBe(EMPTY_EXTERNAL_FILTERS.matchupDirection);
	});

	it('reads an empty query as the default state', () => {
		expect(decodePokedexState(reader({}))).toEqual(state());
	});

	it('ignores empty entries in a comma list', () => {
		expect(decodePokedexState(reader({ matchupTypes: 'fire,,  ,water' })).external.matchupTypes).toEqual(['fire', 'water']);
	});

	describe('the filter model', () => {
		it('never throws on unparseable JSON, falling back to an empty model', () => {
			expect(() => decodePokedexState(reader({ filterModel: '{not json' }))).not.toThrow();
			expect(decodePokedexState(reader({ filterModel: '{not json' })).filterModel).toEqual({});
		});

		it('never throws when the JSON parses to something other than an object', () => {
			expect(decodePokedexState(reader({ filterModel: '"just a string"' })).filterModel).toEqual({});
			expect(decodePokedexState(reader({ filterModel: '42' })).filterModel).toEqual({});
			expect(decodePokedexState(reader({ filterModel: '[1,2,3]' })).filterModel).toEqual({});
		});

		it('drops a column id it does not recognise', () => {
			const raw = JSON.stringify({ types: { types: ['fire'], mode: 'exact' }, notAColumn: { filter: 'garchomp' } });
			expect(decodePokedexState(reader({ filterModel: raw })).filterModel).toEqual({ types: { types: ['fire'], mode: 'exact' } });
		});

		it('drops a range model whose bounds are inverted, non-numeric, or the wrong shape', () => {
			const raw = JSON.stringify({
				speed: [200, 100], // inverted
				attack: ['a', 'b'], // non-numeric
				defense: [20, 90], // valid
				total: [20], // wrong length
			});

			const model = decodePokedexState(reader({ filterModel: raw })).filterModel;
			expect(model['speed']).toBeUndefined();
			expect(model['attack']).toBeUndefined();
			expect(model['total']).toBeUndefined();
			expect(model['defense']).toEqual([20, 90]);
		});

		it('drops a Types model missing its fields or carrying a bad mode', () => {
			const raw = JSON.stringify({
				types: { types: ['fire', 'water'], mode: 'sideways' },
			});

			expect(decodePokedexState(reader({ filterModel: raw })).filterModel['types']).toBeUndefined();
		});
	});
});

describe('hasPokedexStateParams', () => {
	it('tells a shared view apart from a bare visit', () => {
		// The distinction the roster needs: with params the URL wins outright, without them the
		// stored filters are kept.
		expect(hasPokedexStateParams(reader({}))).toBe(false);
		expect(hasPokedexStateParams(reader({ utm_source: 'discord' }))).toBe(false);
		expect(hasPokedexStateParams(reader({ mega: 'has-mega' }))).toBe(true);
		expect(hasPokedexStateParams(reader({ filterModel: '{}' }))).toBe(true);
	});
});
