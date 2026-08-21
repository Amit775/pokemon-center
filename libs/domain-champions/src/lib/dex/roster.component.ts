import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonCardComponent, UiSkeletonComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import { DexFiltersComponent } from './dex-filters.component';
import { DexStore } from './dex.store';
import type { DexEntry } from './dex-filter';

/**
 * The Champions Pokédex.
 *
 * Two things make it worth opening twice: the data is Champions' own rather than the main
 * series', and the filters answer questions other dexes cannot — above all "what walls this
 * threat?". Everything filters instantly because the whole roster is already in memory.
 */
@Component({
	selector: 'champions-roster',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [DexFiltersComponent, PokemonCardComponent, RouterLink, UiSkeletonComponent],
	template: `
		<header class="masthead">
			<div>
				<h1>Pokédex</h1>
				<p class="tagline">Champions' own stats, typings and Mega abilities — not the main series'.</p>
			</div>
			<a class="changes-link" routerLink="/champions/dex/changes">What Champions changed →</a>
		</header>

		<div class="layout">
			<aside class="filters" aria-label="Filters">
				<champions-dex-filters />
			</aside>

			<section class="results" aria-live="polite">
				@if (store.isLoading()) {
					<pkd-skeleton height="18rem" />
				} @else if (store.error()) {
					<p class="empty">
						The Champions API is not answering on <code>:3001</code>. Start it with
						<code>nx serve champions-service</code>.
					</p>
				} @else {
					<p class="count">
						<strong>{{ store.results().length }}</strong>
						@if (store.results().length !== store.totalShowing()) {
							of {{ store.totalShowing() }}
						}
						legal
					</p>

					<ul class="grid">
						@for (mon of store.results(); track mon.slug) {
							<li>
								<a [routerLink]="['/champions/dex', mon.slug]" [attr.aria-label]="mon.name">
									<pkd-pokemon-card
										[dexNumber]="mon.nationalDexNo"
										[name]="mon.name"
										[types]="mon.types"
										[src]="sprite(mon).src"
										[fallbackSrc]="sprite(mon).fallbackSrc"
									/>
									<span class="meta">
										<span class="bst">{{ mon.baseStats.total }}</span>
										@if (mon.hasMega && !mon.isMega) {
											<span class="badge">Mega</span>
										}
									</span>
								</a>
							</li>
						} @empty {
							<li class="empty">
								Nothing legal matches those filters.
								@if (store.hasActiveFilters()) {
									<button type="button" (click)="store.clear()">Clear them</button>
								}
							</li>
						}
					</ul>
				}
			</section>
		</div>
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-5, 1.5rem);
			max-width: 78rem;
			margin-inline: auto;
		}

		.masthead {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			gap: var(--s-4, 1rem);
			flex-wrap: wrap;
			margin-bottom: var(--s-4, 1rem);
		}

		h1 {
			margin: 0;
			font-size: var(--fs-2xl, 2rem);
			letter-spacing: -0.02em;
		}

		.tagline {
			margin: var(--s-1, 0.25rem) 0 0;
			color: var(--ink-muted);
		}

		.changes-link {
			font-size: var(--fs-sm, 0.875rem);
			color: var(--accent, #4f6df5);
			text-decoration: none;
			padding: 0.35rem 0.7rem;
			border: 1.5px solid var(--line);
			border-radius: var(--r-md, 8px);
			white-space: nowrap;
		}

		.changes-link:hover {
			border-color: var(--accent, #4f6df5);
		}

		/* Sidebar on a desktop, stacked on a phone — the filters are worth the space. */
		.layout {
			display: grid;
			grid-template-columns: minmax(0, 17rem) minmax(0, 1fr);
			gap: var(--s-5, 1.5rem);
			align-items: start;
		}

		@media (max-width: 52rem) {
			.layout {
				grid-template-columns: minmax(0, 1fr);
			}
		}

		.filters {
			position: sticky;
			top: var(--s-3, 0.75rem);
		}

		@media (max-width: 52rem) {
			.filters {
				position: static;
			}
		}

		.count {
			margin: 0 0 var(--s-3, 0.75rem);
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
			font-variant-numeric: tabular-nums;
		}

		.grid {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(9.5rem, 1fr));
			gap: var(--s-3, 0.75rem);
		}

		.grid a {
			display: block;
			text-decoration: none;
			color: inherit;
			position: relative;
		}

		.meta {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 0.4rem;
			margin-top: 0.3rem;
			padding: 0 0.15rem;
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
		}

		.bst {
			font-variant-numeric: tabular-nums;
		}

		.badge {
			border: 1px solid var(--accent, #4f6df5);
			color: var(--accent, #4f6df5);
			border-radius: var(--r-pill, 999px);
			padding: 0 0.4rem;
			font-size: 0.65rem;
			text-transform: uppercase;
			letter-spacing: 0.06em;
		}

		.empty {
			color: var(--ink-muted);
			grid-column: 1 / -1;
			line-height: 1.6;
		}

		.empty button {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			margin-left: 0.4rem;
			cursor: pointer;
			padding: 0.25rem 0.6rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
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
	protected readonly store = inject(DexStore);

	/** Artwork lives at the form id, so Megas get their own picture rather than the base form's. */
	protected sprite(mon: DexEntry) {
		return spriteSources(mon.id);
	}
}
