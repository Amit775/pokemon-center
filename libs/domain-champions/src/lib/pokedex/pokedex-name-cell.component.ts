import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EntityPortraitComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import type { PokedexEntry } from './pokedex-filter';
import { PokedexStore } from './pokedex.store';

/** Portrait, dex number, name and an owned flag — one table cell, rendered via `flexRenderComponent`. */
@Component({
	selector: 'champions-pokedex-name-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [EntityPortraitComponent, RouterLink],
	template: `
		<a class="portrait" [routerLink]="link()" [attr.aria-label]="entry().name">
			<pokedex-entity-portrait
				[type]="entry().types[0]"
				[src]="sprite().src"
				[fallbackSrc]="sprite().fallbackSrc"
				[alt]="entry().name"
				[size]="40"
			/>
		</a>
		<a class="name" [routerLink]="link()">
			<span class="no">#{{ entry().nationalPokedexNumber }}</span>
			{{ entry().name }}
			@if (owned()) {
				<span class="flag">Owned</span>
			}
		</a>
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
export class PokedexNameCellComponent {
	readonly entry = input.required<PokedexEntry>();

	private readonly store = inject(PokedexStore);

	protected readonly owned = computed(() => this.store.isOwned(this.entry()));
	protected readonly link = computed(() => ['/champions/pokedex', this.entry().slug]);

	protected sprite() {
		return spriteSources(this.entry().id);
	}
}
