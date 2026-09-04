<<<<<<< HEAD
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
=======
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
import type { PokedexEntry } from './pokedex-filter';
import { PokedexStore } from './pokedex.store';

interface AbilityView {
	slug: string;
	name: string;
	effectText: string | null;
}

<<<<<<< HEAD
/** Ability names with a hover/focus tooltip carrying the effect text, ported from the old row card. */
=======
/**
 * Ability names with a hover/focus tooltip carrying the effect text, ported from the old row card.
 *
 * An AG Grid cell renderer: the grid supplies the row via `agInit`/`refresh` rather than a
 * template input.
 */
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
@Component({
	selector: 'champions-pokedex-ability-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<ul class="abilities">
			@for (ability of abilities(); track ability.slug) {
				<li tabindex="0">
					<span class="ability-name">{{ ability.name }}</span>
					@if (ability.effectText) {
						<span class="tip">{{ ability.effectText }}</span>
					}
				</li>
			}
		</ul>
	`,
	styles: `
		.abilities {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			gap: 0.1rem;
			min-width: 0;
		}
		.abilities li {
			position: relative;
			cursor: help;
			width: fit-content;
			max-width: 100%;
			border-bottom: 1px dotted var(--line);
		}
		.ability-name {
			display: block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.abilities li:focus-visible {
			outline: 2px solid var(--accent, #4f6df5);
			outline-offset: 2px;
		}
		.tip {
			position: absolute;
			top: calc(100% + 0.3rem);
			left: 0;
			z-index: 5;
			display: none;
			width: max-content;
			max-width: 22rem;
			padding: 0.4rem 0.55rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			box-shadow: var(--shadow-md, 0 6px 18px rgba(0, 0, 0, 0.25));
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink);
			line-height: 1.45;
			white-space: normal;
		}
		.abilities li:hover .tip,
		.abilities li:focus .tip,
		.abilities li:focus-visible .tip {
			display: block;
		}
	`,
})
<<<<<<< HEAD
export class PokedexAbilityCellComponent {
	readonly entry = input.required<PokedexEntry>();

	private readonly store = inject(PokedexStore);

	protected readonly abilities = computed<AbilityView[]>(() => {
		const text = this.store.abilityText();
		const current = this.entry();
=======
export class PokedexAbilityCellComponent implements ICellRendererAngularComp {
	private readonly store = inject(PokedexStore);

	protected readonly entry = signal<PokedexEntry | null>(null);

	protected readonly abilities = computed<AbilityView[]>(() => {
		const text = this.store.abilityText();
		const current = this.entry();
		if (!current) return [];
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb

		return current.abilitySlugs.map((slug, index) => ({
			slug,
			name: current.abilityNames[index] ?? text.get(slug)?.name ?? slug,
			effectText: text.get(slug)?.effectText ?? null,
		}));
	});
<<<<<<< HEAD
=======

	agInit(params: ICellRendererParams<PokedexEntry>): void {
		this.entry.set(params.data ?? null);
	}

	refresh(params: ICellRendererParams<PokedexEntry>): boolean {
		this.entry.set(params.data ?? null);
		return true;
	}
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
}
