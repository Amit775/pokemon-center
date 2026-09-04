import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import type { IFilterDisplayAngularComp } from 'ag-grid-angular';
import type { FilterDisplayParams } from 'ag-grid-community';
import type { PokedexEntry, SelectMode } from '../pokedex-filter';
import { PokedexStore } from '../pokedex.store';
import { TypePickerComponent } from '../type-picker.component';

/** The Types column's AG Grid filter model — see `passesTypes` in `pokedex-filter.ts` for the semantics. */
export interface TypeColumnFilterModel {
	types: string[];
	mode: SelectMode;
}

/**
 * The Types column's custom AG Grid filter — the two-mode type picker, wired to the column filter
 * popup instead of the retired filter sidebar.
 *
 * A thin `IFilterDisplayAngularComp` shell around `<champions-type-picker>`: the picker owns the
 * single/double-click UI and emits `(picked)`/`(expand)`, and this component's only job is to turn
 * those into the AG Grid filter model and push it via `onModelChange`. The cap-and-drop-oldest and
 * mode-switch rules mirror `PokedexStore.selectType`/`expandType` exactly, because this filter
 * replaces what those methods used to drive.
 */
@Component({
	selector: 'champions-type-column-filter',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TypePickerComponent],
	template: `
		<champions-type-picker [types]="store.types()" [selected]="selected()" [mode]="mode()" (picked)="onPicked($event)" (expand)="onExpand($event)" />
	`,
	styles: `
		:host {
			display: block;
			padding: 0.5rem 0.6rem;
		}
	`,
})
export class TypeColumnFilterComponent implements IFilterDisplayAngularComp<PokedexEntry, unknown, TypeColumnFilterModel> {
	protected readonly store = inject(PokedexStore);

	protected readonly selected = signal<readonly string[]>([]);
	protected readonly mode = signal<SelectMode>('exact');

	private params!: FilterDisplayParams<PokedexEntry, unknown, TypeColumnFilterModel>;

	agInit(params: FilterDisplayParams<PokedexEntry, unknown, TypeColumnFilterModel>): void {
		this.params = params;
		this.applyModel(params.model);
	}

	refresh(params: FilterDisplayParams<PokedexEntry, unknown, TypeColumnFilterModel>): boolean {
		this.params = params;
		this.applyModel(params.model);
		return true;
	}

	private applyModel(model: TypeColumnFilterModel | null): void {
		this.selected.set(model?.types ?? []);
		this.mode.set(model?.mode ?? 'exact');
	}

	/**
	 * Single click: the strict reading. Capped at two, dropping the oldest rather than ignoring
	 * the click — a dead control is worse than a surprising one. Arriving from `any` mode starts
	 * the selection over, since a loose selection has no sensible strict equivalent.
	 */
	protected onPicked(slug: string): void {
		const types = this.selected();

		if (this.mode() === 'any') return this.emit([slug], 'exact');
		if (types.includes(slug)) return this.emit(types.filter((type) => type !== slug), 'exact');

		this.emit([...types, slug].slice(-2), 'exact');
	}

	/** Double click: the loose reading. No cap, and the existing selection carries over. */
	protected onExpand(slug: string): void {
		const types = this.selected();
		const next = types.includes(slug) ? types.filter((type) => type !== slug) : [...types, slug];
		this.emit(next, 'any');
	}

	/** `null` (rather than an empty-types model) clears the column filter — an inactive filter must read as inactive. */
	private emit(types: readonly string[], mode: SelectMode): void {
		this.selected.set(types);
		this.mode.set(mode);
		this.params.onModelChange(types.length === 0 ? null : { types: [...types], mode });
	}
}
