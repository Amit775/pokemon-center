import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TypeChipComponent } from '@pokemon-center/ui-pokedex';

/** Renders every type of an array-valued Types column as a chip. */
@Component({
	selector: 'champions-pokedex-type-list-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TypeChipComponent],
	template: `
		<div class="chips">
			@for (type of types(); track type) {
				<pokedex-type-chip [type]="type" size="sm" />
			}
		</div>
	`,
	styles: `
		.chips {
			display: flex;
			flex-wrap: wrap;
			gap: 0.25rem;
		}
	`,
})
export class PokedexTypeListCellComponent {
	readonly types = input.required<string[]>();
}
