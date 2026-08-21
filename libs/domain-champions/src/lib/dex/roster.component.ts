import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChampRosterDocument, ChampTypesDocument, champResource } from '@pokemon-center/data-access-champions';
import { ChipToggleComponent, SectionHeadingComponent, TypeChipComponent, UiSkeletonComponent } from '@pokemon-center/ui-pokedex';

/**
 * The Champions roster.
 *
 * Every row here is legal in the current regulation — that is the whole reason this dex
 * exists separately from the mainline one. Megas are hidden by default because a list that
 * interleaves Charizard with Mega Charizard X and Y reads as three Pokémon when it is one
 * line of thinking.
 */
@Component({
	selector: 'champions-roster',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ChipToggleComponent, RouterLink, SectionHeadingComponent, TypeChipComponent, UiSkeletonComponent],
	template: `
		<header class="masthead">
			<h1>Roster</h1>
			<p class="tagline">
				Everything legal right now — with Champions' own stats and typings, not the mainline's.
			</p>
		</header>

		<div class="controls">
			<input
				type="search"
				class="search"
				[value]="search()"
				(input)="onSearch($event)"
				placeholder="Search the roster…"
				aria-label="Search the roster"
			/>
			<pkd-chip-toggle label="Show Megas" [active]="showMegas()" (toggled)="showMegas.update((v) => !v)" />
		</div>

		<div class="types">
			<button type="button" class="type-filter" [class.active]="type() === null" (click)="type.set(null)">All</button>
			@for (t of types(); track t.slug) {
				<button
					type="button"
					class="type-filter"
					[class.active]="type() === t.slug"
					(click)="type.set(type() === t.slug ? null : t.slug)"
				>
					<pkd-type-chip [type]="t.slug" size="sm" />
				</button>
			}
		</div>

		@if (roster.isLoading()) {
			<pkd-skeleton height="12rem" />
		} @else {
			<pkd-section-heading [label]="countLabel()" />

			<ul class="grid">
				@for (mon of entries(); track mon.slug) {
					<li>
						<a [routerLink]="['/champions/dex', mon.slug]">
							<span class="dex">#{{ mon.nationalDexNo }}</span>
							<span class="name">{{ mon.name }}</span>
							<span class="chips">
								@for (t of mon.types; track t) {
									<pkd-type-chip [type]="t" size="sm" />
								}
							</span>
							<span class="bst">{{ mon.baseStats.total }}</span>
						</a>
					</li>
				} @empty {
					<li class="none">Nothing legal matches those filters.</li>
				}
			</ul>
		}
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-5, 1.5rem);
			max-width: 68rem;
			margin-inline: auto;
		}

		h1 {
			margin: 0;
			font-size: var(--fs-2xl, 2rem);
			letter-spacing: -0.02em;
		}

		.tagline {
			margin: var(--s-1, 0.25rem) 0 var(--s-4, 1rem);
			color: var(--ink-muted);
		}

		.controls {
			display: flex;
			gap: var(--s-3, 0.75rem);
			align-items: center;
			flex-wrap: wrap;
			margin-bottom: var(--s-3, 0.75rem);
		}

		.search {
			flex: 1 1 14rem;
			font: inherit;
			padding: 0.5rem 0.7rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
		}

		.types {
			display: flex;
			flex-wrap: wrap;
			gap: 0.3rem;
			margin-bottom: var(--s-2, 0.5rem);
		}

		.type-filter {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			cursor: pointer;
			padding: 0.2rem 0.4rem;
			border-radius: var(--r-sm, 4px);
			border: 1.5px solid transparent;
			background: transparent;
			color: inherit;
			opacity: 0.55;
		}

		.type-filter.active,
		.type-filter:hover {
			opacity: 1;
			border-color: var(--line);
		}

		.grid {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
			gap: var(--s-2, 0.5rem);
		}

		.grid a {
			display: grid;
			grid-template-columns: auto 1fr auto;
			grid-template-areas: 'dex name bst' 'dex chips chips';
			align-items: center;
			gap: 0.15rem var(--s-2, 0.5rem);
			padding: var(--s-2, 0.5rem) var(--s-3, 0.75rem);
			border: 1.5px solid var(--line);
			border-radius: var(--r-md, 8px);
			background: var(--surface);
			text-decoration: none;
			color: inherit;
		}

		.grid a:hover {
			border-color: var(--accent, #4f6df5);
		}

		.dex {
			grid-area: dex;
			font-variant-numeric: tabular-nums;
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
		}

		.name {
			grid-area: name;
			font-weight: 600;
		}

		.chips {
			grid-area: chips;
			display: flex;
			gap: 0.2rem;
		}

		.bst {
			grid-area: bst;
			font-variant-numeric: tabular-nums;
			color: var(--ink-muted);
			font-size: var(--fs-sm, 0.875rem);
		}

		.none {
			color: var(--ink-muted);
		}
	`,
})
export default class RosterComponent {
	protected readonly search = signal('');
	protected readonly type = signal<string | null>(null);
	protected readonly showMegas = signal(false);

	private readonly typesQuery = champResource(ChampTypesDocument, () => ({}));
	protected readonly types = computed(() => this.typesQuery.value()?.champTypes ?? []);

	protected readonly roster = champResource(ChampRosterDocument, () => ({
		search: this.search() || null,
		type: this.type(),
		includeMegas: this.showMegas(),
		take: 300,
		skip: 0,
	}));

	protected readonly entries = computed(() => this.roster.value()?.champRoster ?? []);
	protected readonly total = computed(() => this.roster.value()?.champRosterCount ?? 0);

	protected readonly countLabel = computed(() => {
		const shown = this.entries().length;
		const total = this.total();
		return shown === total ? `${total} legal` : `Showing ${shown} of ${total} legal`;
	});

	protected onSearch(event: Event): void {
		this.search.set((event.target as HTMLInputElement).value);
	}
}
