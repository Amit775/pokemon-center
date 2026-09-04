import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllCommunityModule, ModuleRegistry, createGrid, type GridApi } from 'ag-grid-community';
import { AllEnterpriseModule } from 'ag-grid-enterprise';
import type { TypeChart } from '@pokemon-center/champions-engine';
import type { PokedexEntry } from '../pokedex-filter';
import { PokedexStore } from '../pokedex.store';
import { ExternalFiltersStore } from './external-filters.store';
import { MoveLearnerFilterComponent } from './move-learner-filter.component';

ModuleRegistry.registerModules([AllCommunityModule, AllEnterpriseModule]);

const chart: TypeChart = {};

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

const growlithe = entry({ id: 1, slug: 'growlithe', name: 'Growlithe', types: ['fire'] });
const magikarp = entry({ id: 2, slug: 'magikarp', name: 'Magikarp', types: ['water'] });
const roster: PokedexEntry[] = [growlithe, magikarp];

const MOVE_INDEX = [
	{ id: 1, slug: 'fire-fang', name: 'Fire Fang', type: 'fire', damageClass: 'PHYSICAL' },
	{ id: 2, slug: 'flamethrower', name: 'Flamethrower', type: 'fire', damageClass: 'SPECIAL' },
	{ id: 3, slug: 'splash', name: 'Splash', type: 'normal', damageClass: 'STATUS' },
	// Deliberately shares the substring "flame" with Flamethrower without sharing its prefix —
	// the one pairing in this fixture that can actually distinguish "ranked by prefix" from
	// "matched at all". See the ordering test below.
	{ id: 4, slug: 'inflame', name: 'Inflame', type: 'fire', damageClass: 'STATUS' },
];

/**
 * A `PokedexStore` stand-in that lets a test drive the lazy move-learner fetch by hand.
 *
 * `patch({ move })` mimics what the real store does the instant a move is picked or cleared
 * (loading starts or stops, learners reset to `null`); `resolveLearnersAs` mimics the fetch
 * landing some time later. Keeping these as two separate, test-driven steps — rather than one
 * stub method that does both — is what lets a test actually observe the in-flight state instead
 * of jumping straight to the resolved one.
 */
function pokedexStub(overrides: { entries?: PokedexEntry[]; owned?: ReadonlySet<string> } = {}) {
	const moveIndex = signal(MOVE_INDEX);
	const pickedMove = signal<(typeof MOVE_INDEX)[number] | null>(null);
	const isLoadingLearners = signal(false);
	const moveLearners = signal<ReadonlySet<number> | null>(null);

	return {
		entries: () => overrides.entries ?? roster,
		typeChart: () => chart,
		owned: () => overrides.owned ?? new Set<string>(),
		moveIndex,
		pickedMove,
		isLoadingLearners,
		moveLearners,
		patch(patch: { move?: string | null }) {
			if (!('move' in patch)) return;
			const slug = patch.move ?? null;
			pickedMove.set(slug ? (moveIndex().find((move) => move.slug === slug) ?? null) : null);
			isLoadingLearners.set(slug !== null);
			moveLearners.set(null);
		},
		/** Simulates the resource resolving — never called by the component itself. */
		resolveLearnersAs(ids: number[]) {
			moveLearners.set(new Set(ids));
			isLoadingLearners.set(false);
		},
	};
}

function render(overrides?: { entries?: PokedexEntry[]; owned?: ReadonlySet<string> }) {
	const pokedex = pokedexStub(overrides);
	TestBed.configureTestingModule({ providers: [{ provide: PokedexStore, useValue: pokedex }] });

	const fixture = TestBed.createComponent(MoveLearnerFilterComponent);
	fixture.detectChanges();

	return { fixture, pokedex, filters: TestBed.inject(ExternalFiltersStore) };
}

/**
 * `MoveLearnerFilterComponent` syncs `ExternalFiltersStore.learners` from an `effect`, and
 * Angular's effect scheduler does not always flush on a single synchronous `detectChanges()` in
 * a zoneless app — `whenStable()` is what `roster.component.spec.ts` uses for the same reason.
 */
async function settle(fixture: ComponentFixture<MoveLearnerFilterComponent>): Promise<void> {
	fixture.detectChanges();
	await fixture.whenStable();
	fixture.detectChanges();
}

function typeIntoAutocomplete(fixture: ComponentFixture<MoveLearnerFilterComponent>, term: string): void {
	const input = fixture.nativeElement.querySelector<HTMLInputElement>('.autocomplete input');
	if (!input) throw new Error('No move autocomplete input found');
	input.value = term;
	input.dispatchEvent(new Event('input'));
	fixture.detectChanges();
}

function resultButton(fixture: ComponentFixture<MoveLearnerFilterComponent>, name: string): HTMLButtonElement {
	const button = [...fixture.nativeElement.querySelectorAll<HTMLButtonElement>('.autocomplete li button')].find(
		(candidate) => candidate.textContent?.trim() === name,
	);
	if (!button) throw new Error(`No move result found for "${name}"`);
	return button;
}

describe('MoveLearnerFilterComponent', () => {
	it('shows no results below two characters', () => {
		const { fixture } = render();
		typeIntoAutocomplete(fixture, 'f');
		expect(fixture.nativeElement.querySelector('.autocomplete ul')).toBeNull();
	});

	/**
	 * A single-match case: it proves substring matching works, but with only one result there is
	 * nothing for the ranking comparator to reorder — inverting or deleting it would not change
	 * this test's outcome. See "ranks a prefix match ahead of a mid-word match" below for that.
	 */
	it('matches by substring', () => {
		const { fixture } = render();
		typeIntoAutocomplete(fixture, 'flamet');

		const names = [...fixture.nativeElement.querySelectorAll<HTMLButtonElement>('.autocomplete li button')].map((button) => button.textContent?.trim());
		expect(names).toEqual(['Flamethrower']);
	});

	/**
	 * Two moves both match "flame" — Flamethrower as a prefix, Inflame only mid-word — so this is
	 * the one case that can actually falsify the ranking comparator. Order is asserted directly
	 * against the DOM's natural order (no `.sort()` on the actual result), so a broken, inverted,
	 * or removed comparator changes what this test sees.
	 */
	it('ranks a prefix match ahead of a mid-word match for the same substring', () => {
		const { fixture } = render();
		typeIntoAutocomplete(fixture, 'flame');

		const names = [...fixture.nativeElement.querySelectorAll<HTMLButtonElement>('.autocomplete li button')].map((button) => button.textContent?.trim());
		expect(names).toEqual(['Flamethrower', 'Inflame']);
	});

	it('picking a move triggers the lazy fetch and sets ExternalFiltersStore.move, clearing the search box', async () => {
		const { fixture, pokedex, filters } = render();
		typeIntoAutocomplete(fixture, 'fire');

		resultButton(fixture, 'Fire Fang').click();
		await settle(fixture);

		expect(pokedex.pickedMove()).toEqual(MOVE_INDEX[0]);
		expect(filters.move()).toBe('fire-fang');
		expect(fixture.nativeElement.querySelector('.picked')?.textContent).toContain('Fire Fang');
		expect(fixture.nativeElement.querySelector('.autocomplete')).toBeNull();
	});

	describe("the skip-don't-empty rule while learners are in flight", () => {
		it('shows "finding learners…" and does NOT narrow the filter engine while the fetch is outstanding', async () => {
			const { fixture, filters } = render();
			typeIntoAutocomplete(fixture, 'fire');
			resultButton(fixture, 'Fire Fang').click();
			await settle(fixture);

			// Still in flight: the loading copy is showing…
			expect(fixture.nativeElement.querySelector('.loading')?.textContent).toContain('finding learners');
			// …and the engine has NOT been narrowed to an empty (or any) answer — it is still null,
			// which is what makes `ExternalFiltersStore.passes()` skip the move predicate entirely.
			expect(filters.learners()).toBeNull();
			expect(roster.every((candidate) => filters.passes(candidate))).toBe(true);
		});

		it('once the fetch resolves, hides the loading copy and narrows the filter engine to the resolved set', async () => {
			const { fixture, pokedex, filters } = render();
			typeIntoAutocomplete(fixture, 'fire');
			resultButton(fixture, 'Fire Fang').click();
			await settle(fixture);

			pokedex.resolveLearnersAs([growlithe.id]);
			await settle(fixture);

			expect(fixture.nativeElement.querySelector('.loading')).toBeNull();
			expect(filters.learners()).toEqual(new Set([growlithe.id]));
			expect(filters.passes(growlithe)).toBe(true);
			expect(filters.passes(magikarp)).toBe(false);
		});

		it('proves the skip via a real grid: rows stay unfiltered while loading, then narrow once resolved', async () => {
			const { fixture, pokedex, filters } = render();

			const container = document.createElement('div');
			document.body.appendChild(container);
			const api: GridApi<PokedexEntry> = createGrid(container, {
				columnDefs: [{ field: 'slug' }],
				rowData: roster,
				getRowId: (params) => params.data.slug,
				enableFilterHandlers: true,
				isExternalFilterPresent: () => filters.isPresent(),
				doesExternalFilterPass: (node) => (node.data ? filters.passes(node.data) : true),
			});

			function visibleSlugs(): string[] {
				const slugs: string[] = [];
				api.forEachNodeAfterFilter((node) => {
					if (node.data) slugs.push(node.data.slug);
				});
				return slugs.sort();
			}

			try {
				typeIntoAutocomplete(fixture, 'fire');
				resultButton(fixture, 'Fire Fang').click();
				await settle(fixture);
				api.onFilterChanged();

				// Loading: a full roster narrowed to nothing would read as "the filter is broken";
				// the correct reading while in flight is "not narrowed at all".
				expect(visibleSlugs()).toEqual(['growlithe', 'magikarp']);

				pokedex.resolveLearnersAs([growlithe.id]);
				await settle(fixture);
				api.onFilterChanged();

				expect(visibleSlugs()).toEqual(['growlithe']);
			} finally {
				api.destroy();
				container.remove();
			}
		});
	});

	it('clearing the picked move resets both stores and brings back the autocomplete', async () => {
		const { fixture, pokedex, filters } = render();
		typeIntoAutocomplete(fixture, 'fire');
		resultButton(fixture, 'Fire Fang').click();
		await settle(fixture);
		pokedex.resolveLearnersAs([growlithe.id]);
		await settle(fixture);

		const dismiss = fixture.nativeElement.querySelector<HTMLButtonElement>('.picked button');
		if (!dismiss) throw new Error('No dismiss button found');
		dismiss.click();
		await settle(fixture);

		expect(pokedex.pickedMove()).toBeNull();
		expect(filters.move()).toBeNull();
		expect(filters.learners()).toBeNull();
		expect(fixture.nativeElement.querySelector('.autocomplete')).not.toBeNull();
	});
});
