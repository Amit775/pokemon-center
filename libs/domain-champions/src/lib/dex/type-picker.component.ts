import { ChangeDetectionStrategy, Component, OnDestroy, input, output } from '@angular/core';
import { TypeChipComponent } from '@pokemon-center/ui-pokedex';
import type { SelectMode } from './dex-filter';

/**
 * A row of type chips with two readings, chosen by how you click.
 *
 * **Single click is the strict reading**: the typing must *be* the selection, so one chip means
 * mono-types only and two mean exactly that pair. **Double click is the loose one**: any of the
 * selected types, no cap.
 *
 * There is no mode toggle and no explanatory paragraph — the border carries it. Solid means
 * strict, dashed means loose, and the two produce visibly different result counts the moment
 * you try them. A control that teaches itself in one click does not need a legend.
 *
 * Double-click has no keyboard equivalent, so Shift+Enter is wired to the same action. Without
 * it the loose reading would be mouse-only, which would make half the filter unreachable.
 */
@Component({
	selector: 'champions-type-picker',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TypeChipComponent],
	template: `
		@for (type of types(); track type.slug) {
			<button
				type="button"
				[class.on]="selected().includes(type.slug)"
				[class.loose]="mode() === 'any'"
				[attr.aria-pressed]="selected().includes(type.slug)"
				[attr.aria-label]="type.name + (selected().includes(type.slug) ? ', selected' : '')"
				(click)="onClick(type.slug)"
				(dblclick)="onDoubleClick(type.slug)"
				(keydown.shift.enter)="onDoubleClick(type.slug)"
			>
				<pkd-type-chip [type]="type.slug" size="sm" />
			</button>
		}
	`,
	styles: `
		:host {
			display: flex;
			flex-wrap: wrap;
			gap: 0.25rem;
		}

		button {
			border: 1.5px solid transparent;
			background: none;
			padding: 0.12rem;
			border-radius: var(--r-sm, 4px);
			cursor: pointer;
			opacity: 0.45;
			transition: opacity 120ms ease;
		}

		button:hover {
			opacity: 0.8;
		}

		/* Solid border = strict. Dashed = loose. The only thing that says which mode is on. */
		button.on {
			opacity: 1;
			border-color: var(--ink);
		}

		button.on.loose {
			border-style: dashed;
			border-color: var(--accent, #4f6df5);
		}

		button:focus-visible {
			outline: 2px solid var(--accent, #4f6df5);
			outline-offset: 1px;
		}
	`,
})
export class TypePickerComponent implements OnDestroy {
	readonly types = input.required<readonly { slug: string; name: string }[]>();
	readonly selected = input.required<readonly string[]>();
	readonly mode = input.required<SelectMode>();

	/** Named `picked`, not `select` — the latter collides with the native DOM event. */
	readonly picked = output<string>();
	readonly expand = output<string>();

	/**
	 * A browser fires click, click, dblclick — so the single-click action has to wait long
	 * enough to find out whether a second one is coming. 220ms is under the usual double-click
	 * threshold and short enough that a deliberate single click still feels immediate.
	 */
	private pending: ReturnType<typeof setTimeout> | null = null;

	protected onClick(slug: string): void {
		if (this.pending) return;
		this.pending = setTimeout(() => {
			this.pending = null;
			this.picked.emit(slug);
		}, 220);
	}

	protected onDoubleClick(slug: string): void {
		if (this.pending) {
			clearTimeout(this.pending);
			this.pending = null;
		}
		this.expand.emit(slug);
	}

	ngOnDestroy(): void {
		if (this.pending) clearTimeout(this.pending);
	}
}
