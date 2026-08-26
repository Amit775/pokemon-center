import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { typeColorVar } from '../type-colors';

/** The Pokémon type badge — the single source of type coloring across the app. */
@Component({
	selector: 'pokedex-type-chip',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `{{ type() }}`,
	host: {
		'[style.--ct]': 'colorVar()',
		'[class.pokedex-type-chip--sm]': "size() === 'sm'",
	},
	styles: `
		:host {
			display: inline-block;
			background: var(--ct);
			color: #fff;
			font-weight: 700;
			font-size: var(--fs-sm);
			line-height: 1.5;
			text-transform: capitalize;
			padding: 0.18rem 0.62rem;
			border-radius: var(--r-pill);
			box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.13);
			white-space: nowrap;
		}
		:host(.pokedex-type-chip--sm) {
			font-size: var(--fs-xs);
			padding: 0.1rem 0.5rem;
		}
	`,
})
export class TypeChipComponent {
	readonly type = input.required<string>();
	readonly size = input<'md' | 'sm'>('md');

	protected readonly colorVar = computed(() => typeColorVar(this.type()));
}
