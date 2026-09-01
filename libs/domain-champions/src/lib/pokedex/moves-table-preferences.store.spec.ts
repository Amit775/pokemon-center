import { TestBed } from '@angular/core/testing';
import { MovesTablePreferencesStore } from './moves-table-preferences.store';

const STORAGE_KEY = 'pokemon-center.champions-moves-table.v1';

/** Root-provided, so a reset injector gives a fresh `onInit` — which is what makes hydration testable. */
function createStore() {
	return TestBed.inject(MovesTablePreferencesStore);
}

describe('MovesTablePreferencesStore', () => {
	beforeEach(() => {
		localStorage.clear();
		TestBed.resetTestingModule();
	});

	afterEach(() => {
		localStorage.clear();
	});

	it('starts empty when nothing is stored', () => {
		const store = createStore();

		expect(store.columnVisibility()).toEqual({});
		expect(store.columnOrder()).toEqual([]);
	});

	it('hydrates what was stored', () => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify({ columnVisibility: { pp: false }, columnOrder: ['power', 'name'] }));

		const store = createStore();

		expect(store.columnVisibility()).toEqual({ pp: false });
		expect(store.columnOrder()).toEqual(['power', 'name']);
	});

	it('merges over the defaults so a field added later is never undefined', () => {
		// A blob written by an older version that did not know about columnOrder yet.
		localStorage.setItem(STORAGE_KEY, JSON.stringify({ columnVisibility: { pp: false } }));

		const store = createStore();

		expect(store.columnOrder()).toEqual([]);
	});

	it('falls back to empty rather than throwing on a malformed blob', () => {
		// Half a JSON object is likelier than none — a quota error mid-write leaves exactly this.
		localStorage.setItem(STORAGE_KEY, '{"columnVisibility":{"pp":fal');

		expect(() => createStore()).not.toThrow();
		expect(createStore().columnVisibility()).toEqual({});
	});

	/**
	 * Not crash protection — TanStack tolerates a stale id. The guard exists because the move
	 * arithmetic indexes into the order array, and a renamed column returning under its old id would
	 * otherwise inherit a position written by a version of the table that no longer exists.
	 */
	it('drops ids for columns the table no longer has', () => {
		localStorage.setItem(
			STORAGE_KEY,
			JSON.stringify({
				columnVisibility: { pp: false, priority: true },
				columnOrder: ['power', 'priority', 'name'],
			}),
		);

		const store = createStore();

		expect(store.columnOrder()).toEqual(['power', 'name']);
		expect(store.columnVisibility()).toEqual({ pp: false });
	});

	it('persists both slices as they change', () => {
		const store = createStore();

		store.applyVisibilityUpdate({ pp: false });
		store.applyOrderUpdate(['power', 'name']);
		TestBed.tick();

		const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}');
		expect(stored.columnVisibility).toEqual({ pp: false });
		expect(stored.columnOrder).toEqual(['power', 'name']);
	});

	it('resolves an updater function against the current value', () => {
		// TanStack hands back a function of the previous state, never a bare value.
		const store = createStore();

		store.applyVisibilityUpdate({ pp: false });
		store.applyVisibilityUpdate((previous) => ({ ...previous, power: false }));

		expect(store.columnVisibility()).toEqual({ pp: false, power: false });
	});
});
