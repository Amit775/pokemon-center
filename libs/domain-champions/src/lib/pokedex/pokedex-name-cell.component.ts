import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';
import { EntityPortraitComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import type { PokedexEntry } from './pokedex-filter';
import { PokedexStore } from './pokedex.store';

/**
 * Portrait, dex number, name and an owned flag — one grid cell.
 *
 * An AG Grid cell renderer: the grid supplies the row via `agInit`/`refresh` rather than a
 * template input.
 */
@Component({
	selector: 'champions-pokedex-name-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [EntityPortraitComponent, RouterLink],
	template: `
		@if (entry(); as current) {
			<a class="portrait" [routerLink]="link()" [attr.aria-label]="current.name">
				<pokedex-entity-portrait
					[type]="current.types[0]"
					[src]="sprite().src"
					[fallbackSrc]="sprite().fallbackSrc"
					[alt]="current.name"
					[size]="40"
				/>
			</a>
			<a class="name" [routerLink]="link()">
				<span class="no">#{{ current.nationalPokedexNumber }}</span>
				{{ current.name }}
				@if (owned()) {
					<span class="flag">Owned</span>
				}
			</a>
		}
	`,
	styles: `
		:host {
			display: flex;
			align-items: center;
			gap: var(--s-2, 0.5rem);
			min-width: 0;
		}
		.portrait {
			display: block;
			flex-shrink: 0;
		}
		.name {
			display: block;
			min-width: 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-weight: 700;
			text-decoration: none;
			color: inherit;
		}
		.name:hover {
			color: var(--accent, #4f6df5);
		}
		.no {
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			font-variant-numeric: tabular-nums;
			margin-right: 0.25rem;
		}
		.flag {
			margin-left: 0.35rem;
			font-size: 0.6rem;
			text-transform: uppercase;
			letter-spacing: 0.06em;
			color: var(--success, #2e7d52);
			border: 1px solid currentcolor;
			border-radius: var(--r-pill, 999px);
			padding: 0 0.35rem;
		}
	`,
})
export class PokedexNameCellComponent implements ICellRendererAngularComp {
	private readonly store = inject(PokedexStore);

	protected readonly entry = signal<PokedexEntry | null>(null);

	protected readonly owned = computed(() => {
		const current = this.entry();
		return current !== null && this.store.isOwned(current);
	});

	protected readonly link = computed(() => {
		const current = this.entry();
		return current ? ['/champions/pokedex', current.slug] : [];
	});

	agInit(params: ICellRendererParams<PokedexEntry>): void {
		this.entry.set(params.data ?? null);
	}

	refresh(params: ICellRendererParams<PokedexEntry>): boolean {
		this.entry.set(params.data ?? null);
		return true;
	}

	protected sprite(): { src: string; fallbackSrc: string } {
		const current = this.entry();
		return current ? spriteSources(current.id) : { src: '', fallbackSrc: '' };
	}
}
