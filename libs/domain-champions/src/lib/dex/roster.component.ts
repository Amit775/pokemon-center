import { ChangeDetectionStrategy, Component, ElementRef, computed, effect, inject, signal, untracked, viewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { UiSkeletonComponent } from '@pokemon-center/ui-pokedex';
import { CompareTrayComponent } from './compare-tray.component';
import { DexFiltersComponent } from './dex-filters.component';
import { DexStore } from './dex.store';
import { decodeFilters, encodeFilters, hasFilterParams } from './dex-url';
import { PokemonRowComponent } from './pokemon-row.component';

/**
 * Rendering happens in pages, and the first one is deliberately small.
 *
 * The whole result set used to be rendered on every filter change: 241 rows is 13,000 DOM nodes
 * and ~240 component instances, which measured at **4.4 seconds** — unusable when the answer is
 * wanted mid-match.
 *
 * The first page is smaller than the rest because time-to-first-answer is the number that
 * matters. Ten rows paint in a fraction of the time thirty do, the sentinel below them is
 * already on screen, and the next page lands on the following frame — so the top of the list is
 * readable while the rest is still being built.
 */
const FIRST_PAGE = 10;
const PAGE_SIZE = 20;

/**
 * The Champions Pokédex.
 *
 * A list, not a grid. The card layout was pretty and thin — a sprite, a name and a stat total
 * cannot settle a choice between two Pokémon, so every comparison meant opening two pages. Rows
 * are wider, and the width buys the abilities and the six base stats, which is what people were
 * opening those pages for.
 *
 * No tagline and no result count: the first is copy nobody reads twice and the second is a
 * number nobody acts on. The list itself says how many there are.
 */
@Component({
	selector: 'champions-roster',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CompareTrayComponent, DexFiltersComponent, PokemonRowComponent, RouterLink, UiSkeletonComponent],
	template: `
		<header class="masthead">
			<h1>Pokédex</h1>
			<a routerLink="/champions/pokedex/changes">What Champions changed →</a>
		</header>

		<div class="layout">
			<aside class="filters" aria-label="Filters">
				<champions-dex-filters />
			</aside>

			<section class="results">
				<!-- The live region is this line alone; the list itself must never be one. -->
				<p class="sr-only" aria-live="polite">{{ store.results().length }} results</p>

				@if (store.isLoading()) {
					<pkd-skeleton height="18rem" />
				} @else if (store.error()) {
					<p class="empty">
						The Champions API is not answering on <code>:3001</code>. Start it with
						<code>nx serve champions-service</code>.
					</p>
				} @else {
					<ul class="list">
						@for (mon of visible(); track mon.slug) {
							<li>
								<champions-pokemon-row [mon]="mon" />
							</li>
						} @empty {
							<li class="empty">
								<p>Nothing legal matches those filters.</p>

								<!--
									An empty list with every control still lit does not say which control is
									the problem. These do, and each one is costed.
								-->
								@if (store.relaxations().length > 0) {
									<p>Dropping one filter would bring results back:</p>
									<div class="relax">
										@for (option of store.relaxations(); track option.label) {
											<button type="button" (click)="store.patch(option.patch)">
												Ignore {{ option.label }} → {{ option.count }}
											</button>
										}
									</div>
								} @else if (store.hasActiveFilters()) {
									<button type="button" (click)="store.clear()">Clear them</button>
								}
							</li>
						}
					</ul>

					<!--
						Crossing this loads the next page. It sits 400px below the fold, so the rows
						are already there by the time you scroll to where they would be.
					-->
					@if (visible().length < store.results().length) {
						<div #sentinel class="sentinel" aria-hidden="true"></div>
					}
				}
			</section>
		</div>

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

		/* Sidebar on a desktop, stacked on a phone — the filters are worth the space. */
		.layout {
			display: grid;
			grid-template-columns: minmax(0, 17rem) minmax(0, 1fr);
			gap: var(--s-5, 1.5rem);
			align-items: start;
		}

		.filters {
			position: sticky;
			top: var(--s-3, 0.75rem);
			max-height: calc(100vh - 2rem);
			overflow-y: auto;
		}

		@media (max-width: 52rem) {
			.layout {
				grid-template-columns: minmax(0, 1fr);
			}

			.filters {
				position: static;
				max-height: none;
				overflow: visible;
			}
		}

		.list {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			gap: var(--s-2, 0.5rem);
		}

		/*
			The lift has to be on the grid item, not on the row inside it.

			An ability tooltip overflows its row and lands on top of the next one. Raising the row
			component itself does nothing about that: it is a child of the list item, and a child's
			z-index cannot lift a static parent above its later siblings - the following item
			simply paints after it. So the tooltip rendered, sat in the right place, reported
			itself visible, and was covered by the row below the whole time.
		*/
		.list li:hover,
		.list li:focus-within {
			position: relative;
			z-index: 5;
		}

		.sentinel {
			height: 1px;
		}

		.empty {
			color: var(--ink-muted);
			line-height: 1.6;
		}

		.empty p {
			margin: 0 0 var(--s-2, 0.5rem);
		}

		.relax {
			display: flex;
			flex-wrap: wrap;
			gap: 0.35rem;
		}

		.empty button {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			cursor: pointer;
			padding: 0.3rem 0.65rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
			min-height: 2.25rem;
		}

		.empty button:hover {
			border-color: var(--accent, #4f6df5);
			color: var(--accent, #4f6df5);
		}

		code {
			font-family: ui-monospace, monospace;
			font-size: 0.9em;
			background: var(--surface-sunken, rgba(128, 128, 128, 0.12));
			padding: 0.1em 0.35em;
			border-radius: var(--r-sm, 4px);
		}

		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip-path: inset(50%);
			white-space: nowrap;
		}
	`,
})
export default class RosterComponent {
	protected readonly store = inject(DexStore);

	private readonly router = inject(Router);
	private readonly route = inject(ActivatedRoute);
	private readonly params = toSignal(this.route.queryParamMap);

	/**
	 * Rows currently rendered.
	 *
	 * Deliberately view state rather than a filter: it is about what has been painted, not about
	 * what matched, so it never reaches the URL or a saved set.
	 */
	private readonly limit = signal(FIRST_PAGE);

	protected readonly visible = computed(() => this.store.results().slice(0, this.limit()));

	/** A new result set starts at the top again — the old scroll position means nothing in it. */
	private readonly resetWindow = effect(() => {
		this.store.results();
		untracked(() => this.limit.set(FIRST_PAGE));
	});

	private readonly sentinel = viewChild<ElementRef<HTMLElement>>('sentinel');

	/**
	 * Grow the window as the sentinel comes into view.
	 *
	 * `rootMargin` does the real work: the next page is built while its rows are still off
	 * screen, so scrolling never lands on a gap waiting to be filled.
	 */
	private readonly watchSentinel = effect((onCleanup) => {
		const element = this.sentinel()?.nativeElement;
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (!entries.some((entry) => entry.isIntersecting)) return;
				untracked(() => this.limit.update((current) => Math.min(current + PAGE_SIZE, this.store.results().length)));
			},
			{ rootMargin: '400px' },
		);

		observer.observe(element);
		onCleanup(() => observer.disconnect());
	});

	/** The URL seeds the filters once; later router emissions are our own writes echoing back. */
	private consumed = false;

	/**
	 * The URL is read once, on arrival.
	 *
	 * A link that carries filters wins **outright** over stored ones — not merged. Merging
	 * would mean a shared view renders as the sender's filters plus whatever the recipient had
	 * left switched on, which is not the view that was shared. A bare URL keeps localStorage,
	 * because the filter you were using is usually the one you want next time.
	 */
	private readonly readUrl = effect(() => {
		const params = this.params();
		if (!params || this.consumed) return;

		this.consumed = true;
		if (!hasFilterParams((key) => params.get(key))) return;

		untracked(() => this.store.replace(decodeFilters((key) => params.get(key))));
	});

	/**
	 * …and written on every change after that, with `replaceUrl`.
	 *
	 * Replace rather than push: a filter panel emits a state per keystroke, and pushing them all
	 * would turn Back into an undo of individual characters. The URL stays a shareable
	 * description of the current view rather than a history of how it was reached.
	 */
	private readonly writeUrl = effect(() => {
		const queryParams = encodeFilters(this.store.filters());

		untracked(() => {
			// Until the URL has been read, writing would race the seed and clobber a shared link.
			if (!this.consumed) return;
			void this.router.navigate([], { relativeTo: this.route, queryParams, replaceUrl: true });
		});
	});
}
