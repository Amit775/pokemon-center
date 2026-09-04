import { TestBed } from '@angular/core/testing';
import { AllCommunityModule, ModuleRegistry, createGrid, type GridApi } from 'ag-grid-community';
import { AllEnterpriseModule } from 'ag-grid-enterprise';
import type { TypeChart } from '@pokemon-center/champions-engine';
import { EMPTY_MATCHUP, ExternalFiltersStore } from './external-filters.store';
import { PokedexStore } from '../pokedex.store';
import type { PokedexEntry } from '../pokedex-filter';

ModuleRegistry.registerModules([AllCommunityModule, AllEnterpriseModule]);

function entry(overrides: Partial<PokedexEntry> & Pick<PokedexEntry, 'id' | 'slug' | 'name' | 'types'>): PokedexEntry {
	return {
		nationalPokedexNumber: overrides.id,
		baseStats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80, total: 480 },
		isMega: false,
		hasMega: false,
		megaOfSlug: null,
		abilitySlugs: [],
		abilityNames: [],
		...overrides,
	};
}

/** Only the rows these tests need; `typeEffectiveness` treats a missing pairing as neutral (1). */
const chart: TypeChart = {
	dragon: { dragon: 2, steel: 0.5, fairy: 0, water: 1, flying: 1, ghost: 1, ground: 1, fire: 1 },
	fairy: { dragon: 2, steel: 0.5, dark: 2, fire: 1, water: 1, flying: 1, ghost: 1, ground: 1 },
	ground: { steel: 2, fire: 2, flying: 0, dragon: 1, fairy: 1, ghost: 1, water: 1 },
};

const garchomp = entry({
	id: 1,
	slug: 'garchomp',
	name: 'Garchomp',
	types: ['dragon', 'ground'],
	hasMega: true,
	baseStats: { hp: 108, attack: 130, defense: 95, specialAttack: 80, specialDefense: 85, speed: 102, total: 600 },
});

const garchompMega = entry({
	id: 2,
	slug: 'garchomp-mega',
	name: 'Mega Garchomp',
	types: ['dragon', 'ground'],
	isMega: true,
	megaOfSlug: 'garchomp',
	baseStats: { hp: 108, attack: 170, defense: 115, specialAttack: 120, specialDefense: 95, speed: 92, total: 700 },
});

const corviknight = entry({
	id: 3,
	slug: 'corviknight',
	name: 'Corviknight',
	types: ['flying', 'steel'],
	baseStats: { hp: 98, attack: 87, defense: 105, specialAttack: 53, specialDefense: 85, speed: 67, total: 495 },
});

const azumarill = entry({
	id: 4,
	slug: 'azumarill',
	name: 'Azumarill',
	types: ['water', 'fairy'],
	baseStats: { hp: 100, attack: 50, defense: 80, specialAttack: 60, specialDefense: 80, speed: 50, total: 420 },
});

const roster: PokedexEntry[] = [garchomp, garchompMega, corviknight, azumarill];

/** A minimal stand-in for `PokedexStore` — only the three reads `ExternalFiltersStore` makes. */
function pokedexStub(overrides: { entries?: PokedexEntry[]; owned?: ReadonlySet<string> } = {}) {
	const entries = overrides.entries ?? roster;
	const owned = overrides.owned ?? new Set<string>();
	return { typeChart: () => chart, owned: () => owned, entries: () => entries };
}

function provideStore(overrides?: { entries?: PokedexEntry[]; owned?: ReadonlySet<string> }): ExternalFiltersStore {
	TestBed.configureTestingModule({ providers: [{ provide: PokedexStore, useValue: pokedexStub(overrides) }] });
	return TestBed.inject(ExternalFiltersStore);
}

describe('ExternalFiltersStore', () => {
	describe('default state', () => {
		it('starts idle: no filter present, version at zero', () => {
			const store = provideStore();

			expect(store.matchup()).toEqual(EMPTY_MATCHUP);
			expect(store.counterOf()).toBeNull();
			expect(store.move()).toBeNull();
			expect(store.ownedOnly()).toBe(false);
			expect(store.mega()).toBe('any');
			expect(store.version()).toBe(0);
			expect(store.isPresent()).toBe(false);
		});

		it('passes every entry when idle', () => {
			const store = provideStore();

			expect(roster.every((candidate) => store.passes(candidate))).toBe(true);
		});
	});

	describe('version', () => {
		it('is bumped by every mutation, and only by a mutation', () => {
			const store = provideStore();

			store.setMatchup({ types: ['dragon'], mode: 'exact', direction: 'resists' });
			expect(store.version()).toBe(1);

			store.setCounterOf('garchomp');
			expect(store.version()).toBe(2);

			store.setMove('fire-fang');
			expect(store.version()).toBe(3);

			store.setOwnedOnly(true);
			expect(store.version()).toBe(4);

			store.setMega('has-mega');
			expect(store.version()).toBe(5);

			store.clear();
			expect(store.version()).toBe(6);

			// Reading state does not itself bump the counter.
			void store.isPresent();
			void store.passes(garchomp);
			expect(store.version()).toBe(6);
		});
	});

	describe('isPresent', () => {
		it('is true exactly when one of the five slices is active', () => {
			const store = provideStore();
			expect(store.isPresent()).toBe(false);

			store.setMega('has-mega');
			expect(store.isPresent()).toBe(true);
			store.setMega('any');
			expect(store.isPresent()).toBe(false);

			store.setOwnedOnly(true);
			expect(store.isPresent()).toBe(true);
			store.setOwnedOnly(false);
			expect(store.isPresent()).toBe(false);

			store.setCounterOf('garchomp');
			expect(store.isPresent()).toBe(true);
			store.setCounterOf(null);
			expect(store.isPresent()).toBe(false);

			store.setMove('fire-fang');
			expect(store.isPresent()).toBe(true);
			store.setMove(null);
			expect(store.isPresent()).toBe(false);

			store.setMatchup({ types: ['dragon'], mode: 'exact', direction: 'resists' });
			expect(store.isPresent()).toBe(true);
		});
	});

	describe('passes — matchup, delegated to passesMatchup', () => {
		it('resists: keeps a type that resists every selected type and drops one that does not', () => {
			const store = provideStore();
			store.setMatchup({ types: ['dragon'], mode: 'exact', direction: 'resists' });

			// Corviknight (Flying/Steel) takes 0.5x from Dragon; Garchomp (Dragon/Ground) takes 2x.
			expect(store.passes(corviknight)).toBe(true);
			expect(store.passes(garchomp)).toBe(false);
		});

		it("weak-to (Effective) is the resists direction inverted, not a second predicate", () => {
			const store = provideStore();
			store.setMatchup({ types: ['dragon'], mode: 'exact', direction: 'weak-to' });

			// Same pairing as the resists case above, with the exact opposite verdicts.
			expect(store.passes(corviknight)).toBe(false);
			expect(store.passes(garchomp)).toBe(true);
		});
	});

	describe('passes — Mega, mirroring the matchesFilters field check', () => {
		it('has-mega keeps a species with a Mega and the Mega form itself', () => {
			const store = provideStore();
			store.setMega('has-mega');

			expect(store.passes(garchomp)).toBe(true); // hasMega
			expect(store.passes(garchompMega)).toBe(true); // isMega
			expect(store.passes(corviknight)).toBe(false);
		});

		it('no-mega excludes both a species with a Mega and the Mega form itself', () => {
			const store = provideStore();
			store.setMega('no-mega');

			expect(store.passes(garchomp)).toBe(false);
			expect(store.passes(garchompMega)).toBe(false);
			expect(store.passes(corviknight)).toBe(true);
		});
	});

	describe('passes — owned-only', () => {
		it('keeps only species in the Box, matched on base forms', () => {
			const store = provideStore({ owned: new Set(['corviknight']) });
			store.setOwnedOnly(true);

			expect(store.passes(corviknight)).toBe(true);
			expect(store.passes(azumarill)).toBe(false);
		});
	});

	describe('passes — move, honest about the missing async fetch', () => {
		it('passes every row while a move is picked but its learners have not arrived', () => {
			const store = provideStore();
			store.setMove('fire-fang');

			expect(roster.every((candidate) => store.passes(candidate))).toBe(true);
		});

		it('once learners arrive, keeps only the entries in the set', () => {
			const store = provideStore();
			store.setMove('fire-fang');
			store.setLearners(new Set([garchomp.id]));

			expect(store.passes(garchomp)).toBe(true);
			expect(store.passes(azumarill)).toBe(false);
		});

		it('picking a different move discards the previous learners', () => {
			const store = provideStore();
			store.setMove('fire-fang');
			store.setLearners(new Set([garchomp.id]));

			store.setMove('dragon-claw');

			expect(store.passes(azumarill)).toBe(true);
		});
	});

	describe('passes — counters, delegated to counterScore/isAnswer', () => {
		it('keeps only entries that answer the target', () => {
			const store = provideStore();
			store.setCounterOf('garchomp');

			// Azumarill checks Garchomp (Fairy melts Dragon, takes a neutral Ground hit);
			// Corviknight walls it (immune to Ground, resists Dragon) but cannot hit back.
			expect(store.passes(azumarill)).toBe(true);
			expect(store.passes(corviknight)).toBe(true);
		});

		it('never offers a Pokémon as its own answer', () => {
			const store = provideStore();
			store.setCounterOf('garchomp');

			expect(store.passes(garchomp)).toBe(false);
		});

		it('is inert when the target slug is not on the roster', () => {
			const store = provideStore();
			store.setCounterOf('missingno');

			expect(roster.every((candidate) => store.passes(candidate))).toBe(true);
		});
	});

	describe('clear', () => {
		it('resets every slice to idle', () => {
			const store = provideStore();
			store.setMatchup({ types: ['dragon'], mode: 'exact', direction: 'resists' });
			store.setCounterOf('garchomp');
			store.setMove('fire-fang');
			store.setOwnedOnly(true);
			store.setMega('has-mega');

			store.clear();

			expect(store.matchup()).toEqual(EMPTY_MATCHUP);
			expect(store.counterOf()).toBeNull();
			expect(store.move()).toBeNull();
			expect(store.ownedOnly()).toBe(false);
			expect(store.mega()).toBe('any');
			expect(store.isPresent()).toBe(false);
		});
	});
});

/**
 * The wiring, proven the strongest way available: a real headless AG Grid, driven purely through
 * `store.set*`/`api.onFilterChanged()` and read back with `forEachNodeAfterFilter` — never by
 * asserting on the store in isolation. This is the mechanism the roster's own `effect` relies on:
 * changing the store does nothing to the grid until `onFilterChanged` is called, and this proves
 * that once it is, the External Filter API actually calls `isPresent`/`passes` and changes which
 * rows survive.
 */
describe('the external filter engine wired into a real grid', () => {
	let container: HTMLElement;
	let api: GridApi<PokedexEntry>;
	let store: ExternalFiltersStore;

	function displayedSlugs(): string[] {
		const slugs: string[] = [];
		api.forEachNodeAfterFilter((node) => {
			if (node.data) slugs.push(node.data.slug);
		});
		return slugs.sort();
	}

	beforeEach(() => {
		store = provideStore({ owned: new Set(['corviknight']) });

		container = document.createElement('div');
		document.body.appendChild(container);
		api = createGrid(container, {
			columnDefs: [{ field: 'slug' }],
			rowData: roster,
			getRowId: (params) => params.data.slug,
			enableFilterHandlers: true,
			isExternalFilterPresent: () => store.isPresent(),
			doesExternalFilterPass: (node) => (node.data ? store.passes(node.data) : true),
		});
	});

	afterEach(() => {
		api.destroy();
		container.remove();
	});

	it('shows every row before any external filter state is set', () => {
		expect(displayedSlugs()).toEqual(['azumarill', 'corviknight', 'garchomp', 'garchomp-mega']);
	});

	it('narrows to the Mega-having rows once mega is set and onFilterChanged is called', () => {
		store.setMega('has-mega');
		api.onFilterChanged();

		expect(displayedSlugs()).toEqual(['garchomp', 'garchomp-mega']);
	});

	it('reverts to every row once the filter is cleared and the grid told again', () => {
		store.setMega('has-mega');
		api.onFilterChanged();
		expect(displayedSlugs()).toEqual(['garchomp', 'garchomp-mega']);

		store.setMega('any');
		api.onFilterChanged();

		expect(displayedSlugs()).toEqual(['azumarill', 'corviknight', 'garchomp', 'garchomp-mega']);
	});

	it('combines with owned-only, reached through the same store', () => {
		store.setOwnedOnly(true);
		api.onFilterChanged();

		expect(displayedSlugs()).toEqual(['corviknight']);
	});

	it('narrows by counter target, resolved against the roster PokedexStore supplies', () => {
		store.setCounterOf('garchomp');
		api.onFilterChanged();

		expect(displayedSlugs()).toEqual(['azumarill', 'corviknight']);
	});

	it('narrows by matchup type, and the Effective/Resists direction genuinely inverts the result', () => {
		store.setMatchup({ types: ['dragon'], mode: 'exact', direction: 'resists' });
		api.onFilterChanged();

		// Corviknight (0.5x) and Azumarill (0x, immune) both take less than neutral from Dragon;
		// both Garchomp forms (2x, Dragon's own weakness to itself) do not.
		expect(displayedSlugs()).toEqual(['azumarill', 'corviknight']);

		store.setMatchup({ types: ['dragon'], mode: 'exact', direction: 'weak-to' });
		api.onFilterChanged();

		// Same chip, opposite direction: exactly the two rows the resists query excluded, and
		// neither of the two it kept.
		expect(displayedSlugs()).toEqual(['garchomp', 'garchomp-mega']);
	});

	it('does nothing until onFilterChanged is called, proving the grid does not watch the store on its own', () => {
		store.setMega('has-mega');

		// State changed, but the grid was never told — the old result set must still be showing.
		expect(displayedSlugs()).toEqual(['azumarill', 'corviknight', 'garchomp', 'garchomp-mega']);

		api.onFilterChanged();
		expect(displayedSlugs()).toEqual(['garchomp', 'garchomp-mega']);
	});
});
