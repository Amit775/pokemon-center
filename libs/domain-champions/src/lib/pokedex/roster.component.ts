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

/**
 * The Champions Pokédex.
 *
 * Base forms only for now — Mega rows are a separate, not-yet-designed follow-up (sub-row vs.
 * `rowExpandingFeature` vs. their own row; see docs/superpowers/specs/2026-09-03-champions-pokedex-data-table-design.md).
 *
 * Filtering and sorting are entirely owned by `pokedex-data-table`'s own column state, not by
 * `PokedexStore`. The richer custom filter sidebar this replaces (type/matchup pickers, stat-range
 * sliders, counter search, saved sets, move-learner search, owned-only) is deferred to a follow-up
 * task that extends the generic Filters panel — see the spec's "Out of scope" section.
 */
@Component({
	selector: 'champions-roster',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CompareTrayComponent, RouterLink, UiDataTableComponent, UiSkeletonComponent],
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
			<pokedex-data-table
				[data]="entries()"
				[columns]="columns"
				[columnTracks]="columnTracks"
				[(sorting)]="sorting"
				[(columnFilters)]="columnFilters"
				[(globalFilter)]="globalFilter"
				label="Champions Pokédex"
				emptyLabel="Nothing legal matches those filters."
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

	/** Base forms only — Mega rows are excluded from this pass entirely, not merely hidden. */
	protected readonly entries = computed<PokedexEntry[]>(() => this.store.entries().filter((entry) => !entry.isMega));

	protected readonly columns = pokedexColumns;
	protected readonly columnTracks = pokedexColumnTracks;

	/** Component-local, not the store: this table owns its own filter/sort state entirely. */
	protected readonly sorting = signal<SortingState>([]);
	protected readonly columnFilters = signal<ColumnFiltersState>([]);
	protected readonly globalFilter = signal('');
}
