<<<<<<< HEAD
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
	UiDataTableComponent,
	UiSkeletonComponent,
	type ColumnFiltersState,
	type SortingState,
} from '@pokemon-center/ui-pokedex';
import { CompareTrayComponent } from './compare-tray.component';
import { pokedexColumns, pokedexColumnTracks } from './pokedex-columns';
import type { PokedexEntry } from './pokedex-filter';
import { PokedexStore } from './pokedex.store';
=======
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import type { GetRowIdFunc, GridApi, GridReadyEvent, IRowNode, PostSortRows, SideBarDef } from 'ag-grid-community';
import { UiDataGridComponent, UiSkeletonComponent, pokedexSideBar } from '@pokemon-center/ui-pokedex';
import { CompareTrayComponent } from './compare-tray.component';
import { ChampionsFiltersPanelComponent, CHAMPIONS_FILTERS_PANEL_ID } from './filters/champions-filters-panel.component';
import { applyPokedexState, capturePokedexState } from './filters/apply-pokedex-state';
import { ExternalFiltersStore } from './filters/external-filters.store';
import { pokedexGridColumns } from './pokedex-grid-columns';
import type { PokedexEntry } from './pokedex-filter';
import { decodePokedexState, encodePokedexState, hasPokedexStateParams } from './pokedex-url';
import { PokedexStore } from './pokedex.store';

/**
 * The shared side bar plus a third panel that belongs only here: the cross-cutting Champions
 * filters (`ExternalFiltersStore`), which no other grid has a use for. Extending `pokedexSideBar`
 * rather than editing it keeps the other four grids on the shared Columns/Filters-only side bar.
 */
const rosterSideBar: SideBarDef = {
	...pokedexSideBar,
	toolPanels: [
		...(pokedexSideBar.toolPanels ?? []),
		{
			id: CHAMPIONS_FILTERS_PANEL_ID,
			labelDefault: 'Champions filters',
			labelKey: 'championsFilters',
			iconKey: 'filter',
			toolPanel: ChampionsFiltersPanelComponent,
		},
	],
};
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb

/**
 * The Champions Pokédex.
 *
 * Base forms only for now — Mega rows are a separate, not-yet-designed follow-up (sub-row vs.
 * `rowExpandingFeature` vs. their own row; see docs/superpowers/specs/2026-09-03-champions-pokedex-data-table-design.md).
 *
<<<<<<< HEAD
 * Filtering and sorting are entirely owned by `pokedex-data-table`'s own column state, not by
 * `PokedexStore`. The richer custom filter sidebar this replaces (type/matchup pickers, stat-range
 * sliders, counter search, saved sets, move-learner search, owned-only) is deferred to a follow-up
 * task that extends the generic Filters panel — see the spec's "Out of scope" section.
=======
 * Types and stat ranges are AG Grid column filters, owned by the grid's own column state. The
 * rest of the old filter sidebar (matchup, counter search, move-learner search, owned-only, Mega)
 * reads more than one column or data outside any column, so it runs through AG Grid's External
 * Filter API instead: `ExternalFiltersStore` is the filter state, `isExternalFilterPresent`/
 * `doesExternalFilterPass` below are what the grid calls, and its own tool panel (registered in
 * `rosterSideBar` above) hosts those filters' controls. The counter-target filter also needs
 * `postSortRows` below: narrowing which rows show is not reordering them, and "what beats this"
 * is a ranking question, not just a filtering one — see `ExternalFiltersStore.compareByCounter`.
 *
 * A shared link is read once `onGridReady` fires (Task 15): if the URL carries any of
 * `pokedex-url.ts`'s params, the decoded `PokedexSavedState` — both the grid's column filter model
 * *and* `ExternalFiltersStore`'s slice — replaces whatever either was already holding, rather than
 * merging with it (`hasPokedexStateParams`/`decodePokedexState`'s "wins outright" rule).
 *
 * From then on the current view is written back out to the URL on every change (`writeUrl`
 * below), the same `router.navigate([], { relativeTo, queryParams, replaceUrl: true })` the
 * pre-migration roster used (`git show e2314fea^:.../roster.component.ts`, its own `writeUrl`).
 * `replaceUrl: true` is deliberate, not incidental: a filter panel emits a state per keystroke,
 * and pushing every one would turn the Back button into an undo of individual characters — the
 * URL stays a *description* of the current view, not a history of how it was reached. `consumed`
 * guards the read/write race the same way the original's did: `writeUrl` only fires once
 * `onGridReady` has already read (or declined to read) the URL, so a shared link's own params are
 * never clobbered by a write racing ahead of the read that was meant to apply them.
 *
 * Saving a *named* set happens from the Champions filters panel instead
 * (`filters/filter-sets.component.ts`), which is where the grid api the panel receives via
 * `IToolPanelParams` and this component's own `gridApi` converge. Capturing and restoring a
 * combined state is shared code (`filters/apply-pokedex-state.ts`) between that panel and this
 * component, so the two paths cannot drift apart on what a `PokedexSavedState` contains.
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
 */
@Component({
	selector: 'champions-roster',
	changeDetection: ChangeDetectionStrategy.OnPush,
<<<<<<< HEAD
	imports: [CompareTrayComponent, RouterLink, UiDataTableComponent, UiSkeletonComponent],
=======
	imports: [CompareTrayComponent, RouterLink, UiDataGridComponent, UiSkeletonComponent],
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
	template: `
		<header class="masthead">
			<h1>Pokédex</h1>
			<a routerLink="/champions/pokedex/changes">What Champions changed →</a>
		</header>

		@if (store.isLoading()) {
			<pokedex-skeleton height="18rem" />
		} @else if (store.error()) {
			<p class="empty">
				The Champions API is not answering on <code>:3001</code>. Start it with
				<code>nx serve champions-service</code>.
			</p>
		} @else {
<<<<<<< HEAD
			<pokedex-data-table
				[data]="entries()"
				[columns]="columns"
				[columnTracks]="columnTracks"
				[(sorting)]="sorting"
				[(columnFilters)]="columnFilters"
				[(globalFilter)]="globalFilter"
				label="Champions Pokédex"
				emptyLabel="Nothing legal matches those filters."
=======
			<pokedex-data-grid
				[rowData]="entries()"
				[columnDefs]="columns"
				[getRowId]="getRowId"
				[sideBar]="sideBar"
				[isExternalFilterPresent]="isExternalFilterPresent"
				[doesExternalFilterPass]="doesExternalFilterPass"
				[postSortRows]="postSortRows"
				(gridReady)="onGridReady($event)"
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
			/>
		}

		<champions-compare-tray />
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-5, 1.5rem);
			max-width: 84rem;
			margin-inline: auto;
			--pokedex-grid-height: calc(100vh - 14rem);
		}

		.masthead {
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			gap: var(--s-4, 1rem);
			flex-wrap: wrap;
			margin-bottom: var(--s-4, 1rem);
		}

		h1 {
			margin: 0;
			font-size: var(--fs-2xl, 2rem);
			letter-spacing: -0.02em;
		}

		.masthead a {
			font-size: var(--fs-sm, 0.875rem);
			color: var(--accent, #4f6df5);
			text-decoration: none;
			padding: 0.35rem 0.7rem;
			border: 1.5px solid var(--line);
			border-radius: var(--r-md, 8px);
			white-space: nowrap;
		}

		.masthead a:hover {
			border-color: var(--accent, #4f6df5);
		}

		.empty {
			color: var(--ink-muted);
			line-height: 1.6;
		}

		code {
			font-family: ui-monospace, monospace;
			font-size: 0.9em;
			background: var(--surface-sunken, rgba(128, 128, 128, 0.12));
			padding: 0.1em 0.35em;
			border-radius: var(--r-sm, 4px);
		}
	`,
})
export default class RosterComponent {
	protected readonly store = inject(PokedexStore);
<<<<<<< HEAD

	/** Base forms only — Mega rows are excluded from this pass entirely, not merely hidden. */
	protected readonly entries = computed<PokedexEntry[]>(() => this.store.entries().filter((entry) => !entry.isMega));

	protected readonly columns = pokedexColumns;
	protected readonly columnTracks = pokedexColumnTracks;

	/** Component-local, not the store: this table owns its own filter/sort state entirely. */
	protected readonly sorting = signal<SortingState>([]);
	protected readonly columnFilters = signal<ColumnFiltersState>([]);
	protected readonly globalFilter = signal('');
=======
	protected readonly externalFilters = inject(ExternalFiltersStore);
	private readonly route = inject(ActivatedRoute);
	private readonly router = inject(Router);

	/** Base forms only — Mega rows are excluded from this pass entirely, not merely hidden. */
	protected readonly entries = computed<PokedexEntry[]>(() => this.store.entries().filter((entry) => !entry.isMega));

	protected readonly columns = pokedexGridColumns;
	protected readonly getRowId: GetRowIdFunc<PokedexEntry> = (params) => params.data.slug;
	protected readonly sideBar = rosterSideBar;

	protected readonly isExternalFilterPresent = () => this.externalFilters.isPresent();
	protected readonly doesExternalFilterPass = (node: IRowNode<PokedexEntry>) => (node.data ? this.externalFilters.passes(node.data) : true);

	/**
	 * Best-answer-first while the counter filter is active — see `ExternalFiltersStore.compareByCounter`.
	 * A stable no-op the rest of the time, so it never fights the grid's own column sort.
	 */
	protected readonly postSortRows: PostSortRows<PokedexEntry> = (params) => {
		params.nodes.sort((first, second) => (first.data && second.data ? this.externalFilters.compareByCounter(first.data, second.data) : 0));
	};

	private gridApi: GridApi<PokedexEntry> | null = null;

	/**
	 * Bumped whenever the grid's own column filter model changes, purely so `writeUrl` below has a
	 * signal to react to — a column filter change (e.g. narrowing Types in its popup) touches
	 * nothing on `ExternalFiltersStore`, so without this the URL would never reflect it.
	 */
	private readonly filterModelVersion = signal(0);

	/** The URL is read once, on `gridReady`; later writes are this component's own, echoing back. */
	private consumed = false;

	protected onGridReady(event: GridReadyEvent<PokedexEntry>): void {
		this.gridApi = event.api;
		event.api.addEventListener('filterChanged', () => this.filterModelVersion.update((version) => version + 1));

		const stateAppliedFromUrl = this.applyUrlStateIfPresent(event.api);
		this.consumed = true;

		// A bare visit never touches `filterModelVersion` or `externalFilters.version`, so
		// `writeUrl` below never runs on its own — but `ExternalFiltersStore` is root-scoped, so a
		// "bare" visit can still land on a non-empty view carried over from an earlier one in the
		// same session. Write once, explicitly, so the URL always describes what's on screen
		// instead of silently going stale (and dropping the filter on reload). Skipped when a URL
		// was actually applied above — that path already gets its write from the version bump
		// `applyPokedexState` causes, and firing both would be redundant, not incorrect.
		if (!stateAppliedFromUrl) this.writeCurrentUrl();

		// A counter handoff (`pokemon-detail.component.ts`'s "Answers to X") or a shared link
		// carrying `counterOf`/`ownedOnly`/`mega` can leave the roster showing only a handful of
		// rows with no visible explanation, because the panel that explains it — and offers the
		// way out — lives behind the closed side bar (`pokedexSideBar.defaultToolPanel: undefined`).
		// Checked after `applyUrlStateIfPresent` so a shared link's own external-filter state is
		// what this reads, not whatever was there before the URL was applied.
		if (this.externalFilters.isPresent()) event.api.openToolPanel(CHAMPIONS_FILTERS_PANEL_ID);
	}

	/**
	 * A shared link wins outright over whatever the grid and `ExternalFiltersStore` were already
	 * holding — it is never merged in. With no filter params at all (a bare visit, or a visit that
	 * only carries unrelated params) this does nothing, leaving both at whatever they already were,
	 * and returns `false` so the caller knows no state came from the URL.
	 */
	private applyUrlStateIfPresent(api: GridApi<PokedexEntry>): boolean {
		const params = this.route.snapshot.queryParamMap;
		const read = (key: string) => params.get(key);
		if (!hasPokedexStateParams(read)) return false;

		applyPokedexState(decodePokedexState(read), api, this.externalFilters, this.store);
		return true;
	}

	/** The shared body of an explicit (bare-visit) write and the reactive `writeUrl` effect below. */
	private writeCurrentUrl(): void {
		if (!this.gridApi) return;

		const queryParams = encodePokedexState(capturePokedexState(this.gridApi, this.externalFilters));
		void this.router.navigate([], { relativeTo: this.route, queryParams, replaceUrl: true });
	}

	/**
	 * …and written on every change after that, with `replaceUrl` — see the class doc for why.
	 *
	 * Tracks `filterModelVersion` (the column half) and `externalFilters.version` (the other) so
	 * either kind of change re-runs this; the actual read of both halves happens inside
	 * `untracked`, via `writeCurrentUrl`/`capturePokedexState`, so it never adds its own dependencies
	 * on top of those two.
	 */
	private readonly writeUrl = effect(() => {
		this.filterModelVersion();
		this.externalFilters.version();

		untracked(() => {
			// Until the URL has been read (or found to carry nothing), writing would race the seed
			// and clobber a shared link before `applyUrlStateIfPresent` gets to it.
			if (!this.consumed || !this.gridApi) return;

			this.writeCurrentUrl();
		});
	});

	/**
	 * The grid does not watch `ExternalFiltersStore`'s signals — it only re-runs
	 * `doesExternalFilterPass` when told to. `version` is bumped by every mutation on the store,
	 * so reading it here and calling `onFilterChanged` on change is the one wire every filter
	 * needs, rather than one per field. Guarded for the window before `gridReady` fires.
	 */
	private readonly rerunExternalFilter = effect(() => {
		this.externalFilters.version();
		untracked(() => this.gridApi?.onFilterChanged());
	});
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
}
