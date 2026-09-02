import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import type { Column, RowData, Table } from '@tanstack/angular-table';
import type { DataTableFeatures } from './data-table-columns';

let panelInstanceCount = 0;

/** One row of a `'set'` column's checkbox list. */
interface SetOption {
	value: unknown;
	display: string;
	count: number;
	checked: boolean;
}

/**
 * A disclosure listing every column whose `meta.filterVariant` is `'set'` or `'range'` (Task 1). A
 * column with neither is not filterable through this panel and does not appear.
 *
 * No outputs: every control calls `column.setFilterValue(...)` directly, which flows through the
 * host table's `onColumnFiltersChange` — already wired for the consumer in `UiDataTableComponent`.
 *
 * `'set'` options and `'range'` bounds both come from the faceted row model
 * (`getFacetedUniqueValues()` / `getFacetedMinMaxValues()`), not from scanning `data` by hand, so
 * they stay correct as filters narrow each other's options.
 */
@Component({
	selector: 'pokedex-data-table-filters-panel',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<button
			type="button"
			class="filters-trigger"
			[attr.aria-expanded]="panelOpen()"
			[attr.aria-controls]="panelId"
			(click)="panelOpen.set(!panelOpen())"
		>
			Filters {{ activeFilterCount() > 0 ? '(' + activeFilterCount() + ')' : '' }}
		</button>

		<div class="filters-panel" [id]="panelId" role="group" [attr.aria-label]="'Filters in ' + label()" [hidden]="!panelOpen()">
			@for (column of filterableColumns(); track column.id) {
				<div class="filter-group" [attr.data-column-id]="column.id">
					<span class="filter-label">{{ columnLabel(column) }}</span>

					@if (variantOf(column) === 'set') {
						@for (option of setOptions(column); track option.display) {
							<label class="filter-option">
								<input
									type="checkbox"
									[attr.data-column-id]="column.id"
									[value]="option.display"
									[checked]="option.checked"
									(change)="toggleSetOption(column, option.value, $event)"
								/>
								{{ option.display }} ({{ option.count }})
							</label>
						}
					} @else {
						<div class="filter-range">
							<input
								type="number"
								[attr.data-column-id]="column.id"
								data-bound="min"
								[placeholder]="rangeBounds(column)?.[0] ?? ''"
								[value]="rangeValue(column)?.[0] ?? ''"
								(input)="setRangeBound(column, 'min', $event)"
							/>
							<span aria-hidden="true">–</span>
							<input
								type="number"
								[attr.data-column-id]="column.id"
								data-bound="max"
								[placeholder]="rangeBounds(column)?.[1] ?? ''"
								[value]="rangeValue(column)?.[1] ?? ''"
								(input)="setRangeBound(column, 'max', $event)"
							/>
						</div>
					}
				</div>
			}
		</div>
	`,
	styles: `
		:host {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: var(--s-2);
		}
		.filters-trigger {
			all: unset;
			padding: var(--s-1) var(--s-3);
			border: 1px solid var(--line);
			border-radius: var(--r-pill);
			font-size: var(--fs-xs);
			color: var(--ink-muted);
			cursor: pointer;
			transition: border-color var(--dur) var(--ease), color var(--dur) var(--ease);
		}
		.filters-trigger:hover {
			border-color: var(--accent);
			color: var(--accent);
		}
		.filters-trigger:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}
		.filters-panel {
			display: flex;
			flex-direction: column;
			gap: var(--s-3);
			padding: var(--s-3);
			border: 1px solid var(--line);
			border-radius: var(--r-md);
			background: var(--surface);
			font-size: var(--fs-sm);
		}
		.filters-panel[hidden] {
			display: none;
		}
		.filter-group {
			display: flex;
			flex-direction: column;
			gap: var(--s-1);
		}
		.filter-label {
			font-size: var(--fs-xs);
			text-transform: uppercase;
			letter-spacing: 0.08em;
			color: var(--ink-muted);
		}
		.filter-option {
			display: flex;
			align-items: center;
			gap: var(--s-2);
			color: var(--ink);
			cursor: pointer;
		}
		.filter-option input:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}
		.filter-range {
			display: flex;
			align-items: center;
			gap: var(--s-2);
		}
		.filter-range input {
			width: 6ch;
			padding: var(--s-1) var(--s-2);
			border: 1px solid var(--line);
			border-radius: var(--r-sm);
			background: var(--surface);
			color: var(--ink);
		}
		.filter-range input:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}
	`,
})
export class DataTableFiltersPanelComponent<TRow extends RowData> {
	readonly table = input.required<Table<DataTableFeatures, TRow>>();
	readonly label = input.required<string>();

	protected readonly panelOpen = signal(false);
	protected readonly panelId = `pokedex-data-table-filters-${(panelInstanceCount += 1)}`;

	protected readonly filterableColumns = computed(() =>
		this.table()
			.getAllLeafColumns()
			.filter((column) => column.columnDef.meta?.filterVariant != null),
	);

	// No unified `getState()` in this v9 API — the count comes from asking each leaf column whether
	// it is filtered, the same column-level surface every other read in this panel uses.
	protected readonly activeFilterCount = computed(
		() => this.table().getAllLeafColumns().filter((column) => column.getIsFiltered()).length,
	);

	protected columnLabel(column: Column<DataTableFeatures, TRow>): string {
		return typeof column.columnDef.header === 'string' ? column.columnDef.header : column.id;
	}

	protected variantOf(column: Column<DataTableFeatures, TRow>): 'set' | 'range' | undefined {
		return column.columnDef.meta?.filterVariant;
	}

	protected setOptions(column: Column<DataTableFeatures, TRow>): SetOption[] {
		const selected = new Set((column.getFilterValue() as unknown[] | undefined) ?? []);
		return Array.from(column.getFacetedUniqueValues().entries())
			.map(([value, count]) => ({ value, display: String(value), count, checked: selected.has(value) }))
			.sort((first, second) => {
				// Numeric facets sort numerically (1, 2, ..., 10, 11), not lexically (1, 10, 11, 2, ...).
				if (typeof first.value === 'number' && typeof second.value === 'number') return first.value - second.value;
				return first.display.localeCompare(second.display);
			});
	}

	protected toggleSetOption(column: Column<DataTableFeatures, TRow>, value: unknown, event: Event): void {
		const checked = (event.target as HTMLInputElement).checked;
		const current = (column.getFilterValue() as unknown[] | undefined) ?? [];
		const next = checked ? [...current, value] : current.filter((entry) => entry !== value);

		column.setFilterValue(next.length > 0 ? next : undefined);
	}

	protected rangeBounds(column: Column<DataTableFeatures, TRow>): [number, number] | undefined {
		return column.getFacetedMinMaxValues();
	}

	protected rangeValue(column: Column<DataTableFeatures, TRow>): [number | undefined, number | undefined] | undefined {
		return column.getFilterValue() as [number | undefined, number | undefined] | undefined;
	}

	protected setRangeBound(column: Column<DataTableFeatures, TRow>, bound: 'min' | 'max', event: Event): void {
		const raw = (event.target as HTMLInputElement).value;
		const parsed = raw === '' ? undefined : Number(raw);
		const [min, max] = this.rangeValue(column) ?? [undefined, undefined];

		column.setFilterValue(bound === 'min' ? [parsed, max] : [min, parsed]);
	}
}
