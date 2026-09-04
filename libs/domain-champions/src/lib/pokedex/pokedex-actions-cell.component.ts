import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';
import type { PokedexEntry } from './pokedex-filter';
import { PokedexStore } from './pokedex.store';

/**
 * Box/Sim links plus the Compare toggle, ported from the old row card's actions block.
 *
 * An AG Grid cell renderer: the grid supplies the row via `agInit`/`refresh` rather than a
 * template input.
 */
@Component({
	selector: 'champions-pokedex-actions-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink],
	template: `
		@if (entry(); as current) {
			<div class="actions">
				<a routerLink="/champions/box" [queryParams]="{ add: current.slug }" [attr.aria-label]="'Add ' + current.name + ' to your Box'">
					Box
				</a>
				<a
					routerLink="/champions/simulator"
					[queryParams]="{ left: current.slug }"
					[attr.aria-label]="'Open ' + current.name + ' in the Simulator'"
				>
					Sim
				</a>
				<button
					type="button"
					[class.on]="comparing()"
					[attr.aria-pressed]="comparing()"
					[attr.aria-label]="(comparing() ? 'Remove ' : 'Add ') + current.name + ' to the comparison'"
					(click)="store.toggleCompare(current.slug)"
				>
					Compare
				</button>
			</div>
		}
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
export class PokedexActionsCellComponent implements ICellRendererAngularComp {
	protected readonly store = inject(PokedexStore);

	protected readonly entry = signal<PokedexEntry | null>(null);

	protected readonly comparing = computed(() => {
		const current = this.entry();
		return current !== null && this.store.isComparing(current.slug);
	});

	agInit(params: ICellRendererParams<PokedexEntry>): void {
		this.entry.set(params.data ?? null);
	}

	refresh(params: ICellRendererParams<PokedexEntry>): boolean {
		this.entry.set(params.data ?? null);
		return true;
	}
}
