import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, ElementRef, Injector, afterNextRender, computed, inject, input, signal } from '@angular/core';
import type { Column, RowData, Table } from '@tanstack/angular-table';
import type { DataTableFeatures } from './data-table-columns';

let panelInstanceCount = 0;

@Component({
	selector: 'pokedex-data-table-columns-panel',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<button
			type="button"
			class="columns-trigger"
			[attr.aria-expanded]="panelOpen()"
			[attr.aria-controls]="panelId"
			(click)="panelOpen.set(!panelOpen())"
		>
			Columns {{ visibleColumnCount() }}/{{ allColumnCount() }}
		</button>

		<div class="columns-panel" [id]="panelId" role="group" [attr.aria-label]="'Columns in ' + label()" [hidden]="!panelOpen()">
			@for (column of table().getAllLeafColumns(); track column.id) {
				<div class="columns-row" [attr.data-column-id]="column.id">
					<label class="columns-toggle">
						<input
							type="checkbox"
							[checked]="column.getIsVisible()"
							[attr.aria-disabled]="isVisibilityLocked(column) ? 'true' : null"
							(change)="toggleColumnVisibility(column, $event)"
						/>
						{{ columnLabel(column) }}
					</label>

					<button type="button" class="move" [attr.aria-disabled]="column.getIsFirstColumn() ? 'true' : null" (click)="moveColumn(column, -1)">
						<span class="sr-only">Move {{ columnLabel(column) }} left</span>
						<span aria-hidden="true">←</span>
					</button>
					<button type="button" class="move" [attr.aria-disabled]="column.getIsLastColumn() ? 'true' : null" (click)="moveColumn(column, 1)">
						<span class="sr-only">Move {{ columnLabel(column) }} right</span>
						<span aria-hidden="true">→</span>
					</button>
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
		.columns-trigger {
			all: unset;
			padding: var(--s-1) var(--s-3);
			border: 1px solid var(--line);
			border-radius: var(--r-pill);
			font-size: var(--fs-xs);
			color: var(--ink-muted);
			cursor: pointer;
			transition: border-color var(--dur) var(--ease), color var(--dur) var(--ease);
		}
		.columns-trigger:hover {
			border-color: var(--accent);
			color: var(--accent);
		}
		.columns-trigger:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}
		.columns-panel {
			display: flex;
			flex-direction: column;
			gap: var(--s-1);
			padding: var(--s-3);
			border: 1px solid var(--line);
			border-radius: var(--r-md);
			background: var(--surface);
			font-size: var(--fs-sm);
		}
		.columns-panel[hidden] {
			display: none;
		}
		.columns-row {
			display: flex;
			align-items: center;
			gap: var(--s-2);
		}
		.columns-toggle {
			display: flex;
			align-items: center;
			gap: var(--s-2);
			min-width: 12ch;
			cursor: pointer;
			color: var(--ink);
		}
		.columns-toggle input:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}
		.move {
			all: unset;
			padding: 0 var(--s-2);
			border-radius: var(--r-sm);
			color: var(--ink-muted);
			cursor: pointer;
		}
		.move:hover {
			background: var(--accent-soft);
			color: var(--accent);
		}
		.move:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: -2px;
		}
		.move[aria-disabled='true'],
		.columns-toggle input[aria-disabled='true'] {
			opacity: 0.4;
			cursor: not-allowed;
		}
		.move[aria-disabled='true']:hover {
			background: none;
			color: var(--ink-muted);
		}
		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip-path: inset(50%);
			white-space: nowrap;
			border: 0;
		}
	`,
})
export class DataTableColumnsPanelComponent<TRow extends RowData> {
	readonly table = input.required<Table<DataTableFeatures, TRow>>();
	readonly label = input.required<string>();

	private readonly announcer = inject(LiveAnnouncer);
	private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
	private readonly injector = inject(Injector);

	protected readonly panelOpen = signal(false);
	protected readonly panelId = `pokedex-data-table-columns-${(panelInstanceCount += 1)}`;

	protected readonly visibleColumnCount = computed(() => this.table().getVisibleLeafColumns().length);
	protected readonly allColumnCount = computed(() => this.table().getAllLeafColumns().length);

	protected columnLabel(column: Column<DataTableFeatures, TRow>): string {
		return typeof column.columnDef.header === 'string' ? column.columnDef.header : column.id;
	}

	protected isVisibilityLocked(column: Column<DataTableFeatures, TRow>): boolean {
		if (!column.getCanHide()) return true;
		return column.getIsVisible() && this.table().getVisibleLeafColumns().length === 1;
	}

	protected toggleColumnVisibility(column: Column<DataTableFeatures, TRow>, event: Event): void {
		const checkbox = event.target as HTMLInputElement;

		if (this.isVisibilityLocked(column)) {
			checkbox.checked = column.getIsVisible();
			return;
		}

		const wasVisible = column.getIsVisible();
		column.toggleVisibility();

		const nowVisible = !wasVisible;
		this.announcer.announce(`${this.columnLabel(column)} ${nowVisible ? 'shown' : 'hidden'}`);
	}

	protected moveColumn(column: Column<DataTableFeatures, TRow>, direction: -1 | 1): void {
		if (direction === -1 ? column.getIsFirstColumn() : column.getIsLastColumn()) return;

		const table = this.table();
		const ids = table.getAllLeafColumns().map((candidate) => candidate.id);
		const from = ids.indexOf(column.id);

		let to = from + direction;
		while (to >= 0 && to < ids.length && !table.getColumn(ids[to])?.getIsVisible()) {
			to += direction;
		}
		if (to < 0 || to >= ids.length) return;

		const next = [...ids];
		next.splice(from, 1);
		next.splice(to, 0, column.id);

		table.setColumnOrder(next);
		this.announcer.announce(`${this.columnLabel(column)} moved ${direction === -1 ? 'left' : 'right'}`);
		this.keepFocusOnMoveButton(column.id, direction);
	}

	private keepFocusOnMoveButton(columnIdentifier: string, direction: -1 | 1): void {
		afterNextRender(
			() => {
				const row = this.host.nativeElement.querySelector(`.columns-row[data-column-id="${columnIdentifier}"]`);
				const buttons = row?.querySelectorAll<HTMLButtonElement>('button.move');
				buttons?.[direction === -1 ? 0 : 1]?.focus();
			},
			{ injector: this.injector },
		);
	}
}
