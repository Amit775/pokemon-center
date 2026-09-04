import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import type { FilterSet } from './pokedex.store';

/**
 * Named filter states.
 *
 * The panel's most-used filters are transient — you set a type, read the answer, change it. A
 * saved set is for the handful you return to for a whole regulation ("Trick Room answers",
 * "things that wall my Garchomp"), which is a different thing and deserves to survive a clear.
 *
 * Saving is only offered once something is actually filtered, because naming the empty state
 * produces a set that does nothing.
 *
 * Purely presentational — it once injected `PokedexStore` directly, back when `PokedexStore.filters`
 * was the whole of the filter state. Since Task 15 split filtering across AG Grid's own filter
 * model and `ExternalFiltersStore`, no single injected store can answer "is anything filtered" or
 * "apply this set" any more, so those questions are asked of the caller instead — `filter-sets.component.ts`,
 * which alone can reach the grid api and both stores.
 */
@Component({
	selector: 'champions-saved-sets',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		@if (sets().length > 0) {
			<ul>
				@for (set of sets(); track set.name) {
					<li>
						<button type="button" class="apply" (click)="apply.emit(set)">{{ set.name }}</button>
						<button type="button" class="del" (click)="delete.emit(set.name)" [attr.aria-label]="'Delete ' + set.name">×</button>
					</li>
				}
			</ul>
		}

		@if (hasActiveFilters()) {
			<div class="save">
				<input
					type="text"
					[value]="name()"
					(input)="name.set($any($event.target).value)"
					(keydown.enter)="onSave()"
					placeholder="Name these filters…"
					aria-label="Name for the saved filters"
				/>
				<button type="button" (click)="onSave()" [disabled]="name().trim().length === 0">Save</button>
			</div>
		} @else {
			<p class="hint">Set some filters, then name them to save.</p>
		}
	`,
	styles: `
		:host {
			display: grid;
			gap: var(--s-2, 0.5rem);
		}

		ul {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			gap: 0.25rem;
		}

		li {
			display: flex;
			align-items: center;
			gap: 0.25rem;
		}

		button {
			font: inherit;
			cursor: pointer;
		}

		.apply {
			flex: 1;
			font-size: var(--fs-sm, 0.875rem);
			text-align: left;
			padding: 0.3rem 0.5rem;
			border-radius: var(--r-sm, 4px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
			min-width: 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.del {
			font-size: 1rem;
			line-height: 1;
			border: none;
			background: none;
			color: var(--ink-muted);
			padding: 0.2rem 0.3rem;
		}

		.del:hover {
			color: var(--danger, #d1495b);
		}

		.save {
			display: flex;
			gap: 0.25rem;
		}

		.save input {
			flex: 1;
			min-width: 0;
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			padding: 0.35rem 0.5rem;
			border-radius: var(--r-sm, 4px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
		}

		.save button {
			font-size: var(--fs-sm, 0.875rem);
			padding: 0.35rem 0.7rem;
			border-radius: var(--r-sm, 4px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink-muted);
			white-space: nowrap;
		}

		.save button:disabled {
			opacity: 0.45;
			cursor: default;
		}

		.apply:hover,
		.save button:not(:disabled):hover {
			border-color: var(--accent, #4f6df5);
			color: var(--accent, #4f6df5);
		}

		.hint {
			margin: 0;
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
		}
	`,
})
export class SavedSetsComponent {
	readonly sets = input<FilterSet[]>([]);
	readonly hasActiveFilters = input(false);

	readonly save = output<string>();
	readonly apply = output<FilterSet>();
	readonly delete = output<string>();

	protected readonly name = signal('');

	protected onSave(): void {
		if (this.name().trim().length === 0) return;
		this.save.emit(this.name());
		this.name.set('');
	}
}
