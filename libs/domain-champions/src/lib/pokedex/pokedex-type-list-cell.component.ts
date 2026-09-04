<<<<<<< HEAD
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TypeChipComponent } from '@pokemon-center/ui-pokedex';

/** Renders every type of an array-valued Types column as a chip. */
=======
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';
import { TypeChipComponent } from '@pokemon-center/ui-pokedex';

/**
 * Renders every type of an array-valued Types column as a chip.
 *
 * An AG Grid cell renderer: the grid supplies the cell value (the `types` array, via the column's
 * `valueGetter`) through `agInit`/`refresh` rather than a template input.
 */
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
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
<<<<<<< HEAD
export class PokedexTypeListCellComponent {
	readonly types = input.required<string[]>();
=======
export class PokedexTypeListCellComponent implements ICellRendererAngularComp {
	protected readonly types = signal<string[]>([]);

	agInit(params: ICellRendererParams<unknown, string[]>): void {
		this.types.set(params.value ?? []);
	}

	refresh(params: ICellRendererParams<unknown, string[]>): boolean {
		this.types.set(params.value ?? []);
		return true;
	}
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
}
