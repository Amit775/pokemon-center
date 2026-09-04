import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import type { IFilterDisplayAngularComp } from 'ag-grid-angular';
import type { FilterDisplayParams } from 'ag-grid-community';
import { isFullRange, type PokedexEntry, type Range } from '../pokedex-filter';
import { PokedexStore } from '../pokedex.store';
import { StatRangeComponent } from '../stat-range.component';
import { pickLandmarks } from './stat-landmarks';

/**
 * Static per-column configuration for `StatRangeColumnFilterComponent`, passed as `filterParams`
 * from `pokedex-grid-columns.ts`. One shape serves all seven numeric columns — the six base
 * stats each get `STAT_BOUNDS`, and Total gets its own wider `TOTAL_BOUNDS`.
 */
export interface StatRangeColumnFilterParams {
	statKey: keyof PokedexEntry['baseStats'];
	label: string;
	bounds: Range;
}

/**
 * The landmark-seeded stat range filter — one component parameterised over all seven numeric
 * columns (the six base stats plus Total) via `filterParams`, replacing the `agNumberColumnFilter`
 * placeholders Task 8 left behind. Wraps the tested `<champions-stat-range>` slider from the
 * retired filter sidebar rather than rebuilding it.
 *
 * The model is the inclusive `[min, max]` range itself. A range sitting at its bounds carries no
 * information, so it is reported as `null` rather than as the bounds — `isFullRange` is the same
 * predicate the retired sidebar and the "clear filters" affordance use, kept as the single source
 * of truth for what counts as "not filtering".
 */
@Component({
	selector: 'champions-stat-range-column-filter',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [StatRangeComponent],
	template: `
		<champions-stat-range [label]="config().label" [bounds]="config().bounds" [value]="value()" [landmarks]="landmarks()" (changed)="onChanged($event)" />
	`,
	styles: `
		:host {
			display: block;
			padding: 0.5rem 0.6rem;
			min-width: 220px;
		}
	`,
})
export class StatRangeColumnFilterComponent implements IFilterDisplayAngularComp<PokedexEntry, unknown, Range> {
	private readonly store = inject(PokedexStore);

	protected readonly config = signal<StatRangeColumnFilterParams>({ statKey: 'total', label: '', bounds: [0, 0] });
	protected readonly value = signal<Range>([0, 0]);

	/** Recomputed per stat key rather than for all seven up front — only the open filter needs it. */
	protected readonly landmarks = computed(() => {
		const statKey = this.config().statKey;
		return pickLandmarks(this.store.entries(), (entry) => entry.baseStats[statKey]);
	});

	private params!: FilterDisplayParams<PokedexEntry, unknown, Range>;

	agInit(params: FilterDisplayParams<PokedexEntry, unknown, Range>): void {
		this.params = params;
		this.applyParams(params);
	}

	refresh(params: FilterDisplayParams<PokedexEntry, unknown, Range>): boolean {
		this.params = params;
		this.applyParams(params);
		return true;
	}

	private applyParams(params: FilterDisplayParams<PokedexEntry, unknown, Range>): void {
		const config = params.colDef.filterParams as StatRangeColumnFilterParams;
		this.config.set(config);
		this.value.set(params.model ?? config.bounds);
	}

	/** `null` (rather than a bounds-wide model) clears the column filter once the range is full again. */
	protected onChanged(range: Range): void {
		this.value.set(range);
		this.params.onModelChange(isFullRange(range, this.config().bounds) ? null : range);
	}
}
