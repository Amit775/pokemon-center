import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { PokedexEntry } from './pokedex-filter';
import { PokedexStore } from './pokedex.store';

/** Box/Sim links plus the Compare toggle, ported from the old row card's actions block. */
@Component({
	selector: 'champions-pokedex-actions-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink],
	template: `
		<div class="actions">
			<a routerLink="/champions/box" [queryParams]="{ add: entry().slug }" [attr.aria-label]="'Add ' + entry().name + ' to your Box'">
				Box
			</a>
			<a
				routerLink="/champions/simulator"
				[queryParams]="{ left: entry().slug }"
				[attr.aria-label]="'Open ' + entry().name + ' in the Simulator'"
			>
				Sim
			</a>
			<button
				type="button"
				[class.on]="comparing()"
				[attr.aria-pressed]="comparing()"
				[attr.aria-label]="(comparing() ? 'Remove ' : 'Add ') + entry().name + ' to the comparison'"
				(click)="store.toggleCompare(entry().slug)"
			>
				Compare
			</button>
		</div>
	`,
	styles: `
		.actions {
			display: flex;
			gap: 0.25rem;
		}
		.actions a,
		.actions button {
			font: inherit;
			font-size: 0.7rem;
			font-weight: 600;
			text-decoration: none;
			cursor: pointer;
			padding: 0.2rem 0.45rem;
			border-radius: var(--r-sm, 4px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink-muted);
			white-space: nowrap;
		}
		.actions a:hover,
		.actions button:hover {
			border-color: var(--accent, #4f6df5);
			color: var(--accent, #4f6df5);
		}
		.actions button.on {
			background: var(--accent, #4f6df5);
			border-color: var(--accent, #4f6df5);
			color: #fff;
		}
	`,
})
export class PokedexActionsCellComponent {
	readonly entry = input.required<PokedexEntry>();

	protected readonly store = inject(PokedexStore);

	protected readonly comparing = computed(() => this.store.isComparing(this.entry().slug));
}
