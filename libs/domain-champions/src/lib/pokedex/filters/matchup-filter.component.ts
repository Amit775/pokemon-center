import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { EntityPortraitComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import type { MatchupDirection, PokedexEntry } from '../pokedex-filter';
import { PokedexStore } from '../pokedex.store';
import { TypePickerComponent } from '../type-picker.component';
import { ExternalFiltersStore } from './external-filters.store';

/**
 * The matchup section of the Champions filters panel.
 *
 * Ported from the retired `PokedexFiltersComponent` sidebar (`git show
 * e2314fea:libs/domain-champions/src/lib/pokedex/pokedex-filters.component.ts`): an
 * Effective/Resists direction toggle, the same two-mode type picker Task 10 already gave the
 * Types column filter, and a Pokémon autocomplete that is a shortcut for filling the chips from
 * a species' own typing — never a second filtering mechanism. Every mutation goes through
 * `ExternalFiltersStore.setMatchup`, whose `MatchupQuery` is exactly the shape `passesMatchup`
 * (`pokedex-filter.ts`) reads via `ExternalFiltersStore.passes()` — this component never touches
 * matchup maths itself.
 *
 * Which Pokémon filled the chips is presentation only — `MatchupQuery` has no slot for it because
 * no predicate reads it, unlike the old `PokedexFilters.matchupSlug` field which existed purely
 * for this chip's label — so it lives in a local signal here, cleared the moment a chip is
 * clicked or double-clicked by hand (the same rule `PokedexStore.selectMatchupType`/
 * `expandMatchupType` used to enforce).
 */
@Component({
	selector: 'champions-matchup-filter',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [EntityPortraitComponent, TypePickerComponent],
	template: `
		<div class="seg">
			<button type="button" [class.on]="matchup().direction === 'weak-to'" (click)="setDirection('weak-to')">Effective</button>
			<button type="button" [class.on]="matchup().direction === 'resists'" (click)="setDirection('resists')">Resists</button>
		</div>

		<champions-type-picker
			[types]="pokedex.types()"
			[selected]="matchup().types"
			[mode]="matchup().mode"
			(picked)="onPicked($event)"
			(expand)="onExpand($event)"
		/>

		@if (matchupPokemon(); as picked) {
			<div class="picked">
				<pokedex-entity-portrait
					[type]="picked.types[0]"
					[src]="sprite(picked.id).src"
					[fallbackSrc]="sprite(picked.id).fallbackSrc"
					[alt]="picked.name"
					[size]="24"
				/>
				<span>{{ picked.name }}</span>
				<button type="button" (click)="clearPicked()" aria-label="Clear the matchup Pokémon">×</button>
			</div>
		} @else {
			<div class="autocomplete">
				<input
					type="search"
					[value]="monTerm()"
					(input)="monTerm.set($any($event.target).value)"
					placeholder="…or against a Pokémon"
					aria-label="Match against a Pokémon"
					role="combobox"
					aria-controls="matchup-mon-list"
					[attr.aria-expanded]="monResults().length > 0"
					aria-autocomplete="list"
				/>
				@if (monResults().length > 0) {
					<ul role="listbox" id="matchup-mon-list">
						@for (result of monResults(); track result.slug) {
							<li role="option" [attr.aria-selected]="false">
								<button type="button" (click)="pick(result)">
									<pokedex-entity-portrait
										[type]="result.types[0]"
										[src]="sprite(result.id).src"
										[fallbackSrc]="sprite(result.id).fallbackSrc"
										[alt]="result.name"
										[size]="24"
									/>
									{{ result.name }}
								</button>
							</li>
						}
					</ul>
				}
			</div>
		}
	`,
	styles: `
		:host {
			display: grid;
			gap: var(--s-2, 0.5rem);
		}

		.seg {
			display: inline-flex;
			border: 1.5px solid var(--line);
			border-radius: var(--r-md, 8px);
			overflow: hidden;
			width: fit-content;
		}

		.seg button {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			padding: 0.3rem 0.7rem;
			border: none;
			background: var(--surface);
			color: var(--ink-muted);
			cursor: pointer;
			min-height: 2.1rem;
		}

		.seg button + button {
			border-left: 1.5px solid var(--line);
		}

		.seg button.on {
			background: var(--accent, #4f6df5);
			color: #fff;
		}

		.autocomplete {
			position: relative;
		}

		.autocomplete input {
			width: 100%;
			font: inherit;
			padding: 0.5rem 0.65rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
		}

		.autocomplete ul {
			position: absolute;
			z-index: 10;
			top: calc(100% + 0.2rem);
			left: 0;
			right: 0;
			list-style: none;
			margin: 0;
			padding: 0.2rem;
			max-height: 14rem;
			overflow-y: auto;
			border: 1.5px solid var(--line);
			border-radius: var(--r-md, 8px);
			background: var(--surface);
			box-shadow: var(--shadow-md, 0 6px 18px rgba(0, 0, 0, 0.25));
		}

		.autocomplete li button {
			display: flex;
			align-items: center;
			gap: 0.4rem;
			width: 100%;
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			text-align: left;
			padding: 0.2rem 0.35rem;
			border: none;
			border-radius: var(--r-sm, 4px);
			background: none;
			color: inherit;
			cursor: pointer;
		}

		.picked {
			display: flex;
			align-items: center;
			gap: 0.4rem;
			padding: 0.25rem 0.3rem 0.25rem 0.5rem;
			border: 1.5px solid var(--accent, #4f6df5);
			border-radius: var(--r-md, 8px);
			font-size: var(--fs-sm, 0.875rem);
		}

		.picked button {
			font: inherit;
			font-size: 1.05rem;
			line-height: 1;
			margin-left: auto;
			cursor: pointer;
			border: none;
			background: none;
			color: var(--ink-muted);
			padding: 0.2rem 0.35rem;
		}
	`,
})
export class MatchupFilterComponent {
	protected readonly pokedex = inject(PokedexStore);
	protected readonly filters = inject(ExternalFiltersStore);

	protected readonly matchup = computed(() => this.filters.matchup());

	protected readonly monTerm = signal('');

	/** Purely for the picked chip's label — see the class doc. */
	private readonly pickedSlug = signal<string | null>(null);

	protected readonly matchupPokemon = computed(() => {
		const slug = this.pickedSlug();
		return slug ? (this.pokedex.entries().find((entry) => entry.slug === slug) ?? null) : null;
	});

	/** Name search over the roster, base forms only, prefix matches first — same ranking the old sidebar used. */
	protected readonly monResults = computed(() => {
		const term = this.monTerm().trim().toLowerCase();
		if (term.length < 2) return [];

		return this.pokedex
			.entries()
			.filter((entry) => !entry.isMega && entry.name.toLowerCase().includes(term))
			.sort(
				(first, second) =>
					Number(second.name.toLowerCase().startsWith(term)) - Number(first.name.toLowerCase().startsWith(term)) ||
					first.nationalPokedexNumber - second.nationalPokedexNumber,
			)
			.slice(0, 8);
	});

	protected setDirection(direction: MatchupDirection): void {
		this.filters.setMatchup({ ...this.matchup(), direction });
	}

	/**
	 * Single click: the strict reading. Capped at two, dropping the oldest rather than ignoring
	 * the click, and arriving from `any` mode starts the selection over — the exact rule
	 * `TypeColumnFilterComponent.onPicked` uses for the Types column, ported here for the
	 * matchup chips.
	 */
	protected onPicked(slug: string): void {
		const { types, mode, direction } = this.matchup();
		this.pickedSlug.set(null);

		if (mode === 'any') return this.filters.setMatchup({ types: [slug], mode: 'exact', direction });
		if (types.includes(slug)) return this.filters.setMatchup({ types: types.filter((type) => type !== slug), mode: 'exact', direction });

		this.filters.setMatchup({ types: [...types, slug].slice(-2), mode: 'exact', direction });
	}

	/** Double click: the loose reading, no cap, the existing selection carries over. */
	protected onExpand(slug: string): void {
		const { types, direction } = this.matchup();
		this.pickedSlug.set(null);
		const next = types.includes(slug) ? types.filter((type) => type !== slug) : [...types, slug];
		this.filters.setMatchup({ types: next, mode: 'any', direction });
	}

	/**
	 * Aim the matchup at a Pokémon by taking its typing — the same machinery as the chips rather
	 * than a separate code path, so the direction toggle keeps meaning exactly what it meant.
	 */
	protected pick(entry: PokedexEntry): void {
		this.pickedSlug.set(entry.slug);
		this.monTerm.set('');
		this.filters.setMatchup({ types: [...entry.types], mode: 'exact', direction: this.matchup().direction });
	}

	protected clearPicked(): void {
		this.pickedSlug.set(null);
		this.filters.setMatchup({ ...this.matchup(), types: [] });
	}

	protected sprite(id: number) {
		return spriteSources(id);
	}
}
