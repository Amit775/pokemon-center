import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ExternalFiltersStore } from './external-filters.store';

/**
 * The "Answers to X" banner, ported from the retired `PokedexFiltersComponent` sidebar
 * (`git show e2314fea:libs/domain-champions/src/lib/pokedex/pokedex-filters.component.ts`).
 *
 * Reads `ExternalFiltersStore.counterTarget` for the **name** — `counterOf` is only the slug,
 * and "Answers to garchomp" is not a sentence anyone typed. Renders nothing when no counter
 * target is set, same as the old banner's `@if (store.counterTarget(); as target)` guard.
 *
 * The dismiss button clears the same store field `pokemon-detail.component.ts`'s "show all
 * counters" action sets, which is what makes the cross-page handoff a round trip rather than a
 * one-way trip: arrive here from a detail page, and leave by clearing the banner.
 */
@Component({
	selector: 'champions-counter-filter',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		@if (filters.counterTarget(); as target) {
			<div class="banner">
				<span>Answers to <strong>{{ target.name }}</strong></span>
				<button type="button" (click)="filters.setCounterOf(null)" aria-label="Stop filtering by counters">×</button>
			</div>
		}
	`,
	styles: `
		:host {
			display: block;
		}

		.banner {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 0.4rem;
			padding: 0.25rem 0.3rem 0.25rem 0.7rem;
			border: 1.5px solid var(--accent, #4f6df5);
			border-radius: var(--r-md, 8px);
			font-size: var(--fs-sm, 0.875rem);
			margin-bottom: var(--s-3, 0.75rem);
		}

		.banner button {
			font: inherit;
			font-size: 1.05rem;
			line-height: 1;
			cursor: pointer;
			border: none;
			background: none;
			color: var(--ink-muted);
			padding: 0.2rem 0.35rem;
		}

		.banner button:hover {
			color: var(--danger, #d1495b);
		}
	`,
})
export class CounterFilterComponent {
	protected readonly filters = inject(ExternalFiltersStore);
}
