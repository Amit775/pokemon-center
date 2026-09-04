import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal, untracked } from '@angular/core';
import type { GridApi } from 'ag-grid-community';
import { toQueryString, type PokedexSavedState } from '../pokedex-url';
import type { PokedexEntry } from '../pokedex-filter';
import { PokedexStore, type FilterSet } from '../pokedex.store';
import { SavedSetsComponent } from '../saved-sets.component';
import { ExternalFiltersStore } from './external-filters.store';

/**
 * Hosts the saved-sets UI (`SavedSetsComponent`, orphaned since the retired filter sidebar) on
 * the combined shape Task 15 introduces — both filtering mechanisms, together:
 *
 *  - the AG Grid column filter model (Types, the seven stat ranges, and whatever else is active
 *    on the grid — read via `gridApi().getFilterModel()`, restored via `setFilterModel()`)
 *  - `ExternalFiltersStore`'s cross-cutting slice (matchup, counter-target, move, owned-only, Mega)
 *
 * into one `PokedexSavedState` (`pokedex-url.ts`). `SavedSetsComponent` no longer knows about
 * either — it takes the set list and an "is anything filtered" flag as inputs, and reports back
 * through outputs, so this is the one place that actually reads and writes both filtering engines.
 *
 * `gridApi` arrives as an input rather than via `IToolPanelParams` directly, because this
 * component is a section inside `ChampionsFiltersPanelComponent`'s own template rather than a
 * side-bar tool panel in its own right — the panel captures `params.api` once in its `agInit` and
 * forwards it down.
 *
 * The move filter needs one extra nudge on restore: `ExternalFiltersStore.move` decides *whether*
 * to filter by move, but the actual list of learners is fetched by `PokedexStore` keyed off
 * `PokedexStore.filters().move` (see `move-learner-filter.component.ts`, which sets both together
 * when a move is picked by hand). Restoring a saved or shared move filter mirrors that: `applyState`
 * calls `PokedexStore.patch({ move })` alongside `ExternalFiltersStore.setMove(move)`, the same pair
 * a manual pick makes.
 */
@Component({
	selector: 'champions-filter-sets',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SavedSetsComponent],
	template: `
		<champions-saved-sets
			[sets]="store.savedSets()"
			[hasActiveFilters]="hasActiveFilters()"
			(save)="onSave($event)"
			(apply)="onApply($event)"
			(delete)="store.deleteSet($event)"
		/>

		@if (hasActiveFilters()) {
			<label class="link">
				Shareable link
				<input type="text" readonly [value]="shareUrl()" (focus)="select($event)" aria-label="Shareable link for the current filters" />
			</label>
		}
	`,
	styles: `
		:host {
			display: block;
			margin-top: var(--s-3, 0.75rem);
			padding-top: var(--s-3, 0.75rem);
			border-top: 1px solid var(--line);
		}

		.link {
			display: block;
			margin-top: var(--s-2, 0.5rem);
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
		}

		.link input {
			display: block;
			width: 100%;
			margin-top: 0.25rem;
			font: inherit;
			font-size: var(--fs-xs, 0.75rem);
			padding: 0.3rem 0.5rem;
			border-radius: var(--r-sm, 4px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
		}
	`,
})
export class FilterSetsComponent {
	/** The same `GridApi` the roster captures on `gridReady` — forwarded here from the panel's `agInit`. */
	readonly gridApi = input<GridApi<PokedexEntry> | null>(null);

	protected readonly store = inject(PokedexStore);
	private readonly externalFilters = inject(ExternalFiltersStore);

	/**
	 * Bumped whenever the grid's own filter model changes, so `hasActiveFilters`/`shareUrl` stay
	 * current without polling `getFilterModel()` on every change detection pass. `ExternalFiltersStore`
	 * needs no equivalent here — its own signals are read directly.
	 */
	private readonly filterModelVersion = signal(0);

	constructor() {
		effect((onCleanup) => {
			const api = this.gridApi();
			if (!api) return;

			const bump = () => this.filterModelVersion.update((version) => version + 1);
			api.addEventListener('filterChanged', bump);
			onCleanup(() => api.removeEventListener('filterChanged', bump));
		});
	}

	/** Both filtering mechanisms, read fresh — never cached, since a grid api call is not a signal. */
	private currentState(): PokedexSavedState {
		const api = this.gridApi();
		const matchup = this.externalFilters.matchup();

		return {
			filterModel: api?.getFilterModel() ?? {},
			external: {
				matchupTypes: matchup.types,
				matchupMode: matchup.mode,
				matchupDirection: matchup.direction,
				ownedOnly: this.externalFilters.ownedOnly(),
				mega: this.externalFilters.mega(),
				move: this.externalFilters.move(),
				counterOf: this.externalFilters.counterOf(),
			},
		};
	}

	/** Column filter model non-empty, or a cross-cutting filter active — either half counts. */
	protected readonly hasActiveFilters = computed(() => {
		this.filterModelVersion();
		const api = this.gridApi();
		const columnFilterActive = api !== null && Object.keys(api.getFilterModel()).length > 0;
		return columnFilterActive || this.externalFilters.isPresent();
	});

	/** The current view as a link someone else can open — a bare URL when nothing is filtered. */
	protected readonly shareUrl = computed(() => {
		this.filterModelVersion();
		this.externalFilters.version();

		const query = toQueryString(untracked(() => this.currentState()));
		const base = typeof window === 'undefined' ? '' : `${window.location.origin}${window.location.pathname}`;
		return query ? `${base}?${query}` : base;
	});

	protected onSave(name: string): void {
		this.store.saveSet(name, this.currentState());
	}

	protected onApply(set: FilterSet): void {
		this.applyState(this.store.applySet(set));
	}

	/** Restores both halves of a combined state — see the class doc for the move-learner nudge. */
	private applyState(state: PokedexSavedState): void {
		this.gridApi()?.setFilterModel(state.filterModel);

		this.externalFilters.setMatchup({ types: state.external.matchupTypes, mode: state.external.matchupMode, direction: state.external.matchupDirection });
		this.externalFilters.setOwnedOnly(state.external.ownedOnly);
		this.externalFilters.setMega(state.external.mega);
		this.externalFilters.setCounterOf(state.external.counterOf);
		this.externalFilters.setMove(state.external.move);

		// Kicks off `PokedexStore`'s learners fetch for the restored move, the same pair
		// `move-learner-filter.component.ts` sets when a move is picked by hand.
		this.store.patch({ move: state.external.move });
	}

	protected select(event: Event): void {
		(event.target as HTMLInputElement).select();
	}
}
