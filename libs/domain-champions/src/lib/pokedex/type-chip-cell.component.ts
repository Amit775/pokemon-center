import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';
import { TypeChipComponent } from '@pokemon-center/ui-pokedex';

/** One type chip, for a column whose value is a single type slug. */
@Component({
	selector: 'champions-type-chip-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TypeChipComponent],
	template: `
		@if (type(); as value) {
			<pokedex-type-chip [type]="value" size="sm" />
		}
	`,
})
export class TypeChipCellComponent implements ICellRendererAngularComp {
	protected readonly type = signal<string | null>(null);

	agInit(params: ICellRendererParams<unknown, string>): void {
		this.type.set(params.value ?? null);
	}

	refresh(params: ICellRendererParams<unknown, string>): boolean {
		this.type.set(params.value ?? null);
		return true;
	}
}
