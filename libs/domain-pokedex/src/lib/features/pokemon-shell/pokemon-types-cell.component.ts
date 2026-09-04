import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';
import { TypeChipComponent } from '@pokemon-center/ui-pokedex';
import type { PokemonRow } from './pokemon-grid-columns';

/**
 * Up to two type chips per row — a Pokémon's types collapse into one array column.
 *
 * An AG Grid cell renderer: the grid supplies the cell value via `agInit`/`refresh` rather than a
 * template input.
 */
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
export class PokemonTypesCellComponent implements ICellRendererAngularComp {
	protected readonly types = signal<readonly string[]>([]);

	agInit(params: ICellRendererParams<PokemonRow, string[]>): void {
		this.types.set(params.value ?? []);
	}

	refresh(params: ICellRendererParams<PokemonRow, string[]>): boolean {
		this.types.set(params.value ?? []);
		return true;
	}
}
