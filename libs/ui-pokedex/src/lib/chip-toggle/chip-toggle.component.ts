import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { typeColorVar } from '../type-colors';

/** A selectable pill — outline when off, filled with its (optional type) color when on. */
@Component({
	selector: 'pkd-chip-toggle',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<button type="button" [class.active]="active()" [attr.aria-pressed]="active()" [disabled]="disabled()" (click)="toggled.emit()">
			{{ label() }}
		</button>
	`,
	host: { '[style.--ct]': 'colorVar()' },
	styles: `
		:host {
			display: inline-block;
		}
		button {
			font: inherit;
			font-size: var(--fs-sm);
			font-weight: 700;
			text-transform: capitalize;
			padding: 0.28rem 0.8rem;
			border-radius: var(--r-pill);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink-muted);
			cursor: pointer;
			transition: color var(--dur) var(--ease), background var(--dur) var(--ease), border-color var(--dur) var(--ease);
		}
		button.active {
			color: #fff;
			background: var(--ct);
			border-color: var(--ct);
			box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.15);
		}
		button:disabled {
			opacity: 0.4;
			cursor: not-allowed;
		}
		button:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}
		@media (prefers-reduced-motion: reduce) {
			button {
				transition: none;
			}
		}
	`,
})
export class ChipToggleComponent {
	readonly label = input.required<string>();
	readonly active = input<boolean>(false);
	readonly disabled = input<boolean>(false);
	/** Type slug for the active color; falls back to the accent. */
	readonly type = input<string | null>(null);
	readonly toggled = output<void>();

	protected readonly colorVar = computed(() => (this.type() ? typeColorVar(this.type() as string) : 'var(--accent)'));
}
