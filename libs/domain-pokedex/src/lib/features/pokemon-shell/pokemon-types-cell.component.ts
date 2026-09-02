import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TypeChipComponent } from '@pokemon-center/ui-pokedex';

/** Up to two type chips per row — a Pokémon's types collapse into one array column. */
@Component({
	selector: 'pokedex-pokemon-types-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TypeChipComponent],
	template: `
		@for (type of types(); track type) {
			<pokedex-type-chip [type]="type" size="sm" />
		}
	`,
	styles: `
		:host {
			display: flex;
			gap: var(--s-1);
		}
	`,
})
export class PokemonTypesCellComponent {
	readonly types = input.required<readonly string[]>();
}
