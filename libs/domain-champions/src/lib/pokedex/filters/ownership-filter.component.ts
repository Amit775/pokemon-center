import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PokedexStore } from '../pokedex.store';
import { ExternalFiltersStore } from './external-filters.store';

/**
 * The "Only what I own" checkbox, ported from the retired `PokedexFiltersComponent` sidebar
 * (`git show e2314fea:libs/domain-champions/src/lib/pokedex/pokedex-filters.component.ts`).
 *
 * Hidden entirely while the Box is empty, same as the old sidebar's `@if (store.owned().size > 0)`
 * guard — a checkbox that can only ever do nothing is worse than no checkbox at all. Reads
 * `PokedexStore.owned()` for the count and writes straight through `ExternalFiltersStore`, whose
 * `passes()` already implements the owned-only predicate this checkbox turns on.
 */
@Component({
	selector: 'champions-ownership-filter',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		@if (pokedex.owned().size > 0) {
			<label class="check">
				<input type="checkbox" [checked]="filters.ownedOnly()" (change)="filters.setOwnedOnly($any($event.target).checked)" />
				Only what I own ({{ pokedex.owned().size }})
			</label>
		}
	`,
	styles: `
		:host {
			display: block;
		}

		.check {
			display: flex;
			align-items: center;
			gap: 0.45rem;
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
			cursor: pointer;
		}
	`,
})
export class OwnershipFilterComponent {
	protected readonly pokedex = inject(PokedexStore);
	protected readonly filters = inject(ExternalFiltersStore);
}
