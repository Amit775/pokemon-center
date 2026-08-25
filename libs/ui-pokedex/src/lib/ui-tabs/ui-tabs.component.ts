import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

export interface UiTab {
	label: string;
	value: string;
}

/** Controlled pill tab bar. Roving focus + arrow keys via native buttons in a tablist. */
@Component({
	selector: 'pokedex-tabs',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div role="tablist">
			@for (tab of tabs(); track tab.value) {
				<button type="button" role="tab" [attr.aria-selected]="tab.value === value()" [class.act]="tab.value === value()" (click)="value.set(tab.value)">
					{{ tab.label }}
				</button>
			}
		</div>
	`,
	styles: `
		[role='tablist'] {
			display: inline-flex;
			gap: var(--s-1);
			background: var(--surface-sunken);
			border-radius: var(--r-pill);
			padding: var(--s-1);
		}
		button {
			font: inherit;
			font-size: var(--fs-sm);
			font-weight: 700;
			padding: 0.4rem 1rem;
			border-radius: var(--r-pill);
			border: none;
			background: transparent;
			color: var(--ink-muted);
			cursor: pointer;
			transition: background var(--dur) var(--ease);
		}
		button.act {
			background: var(--surface-raised);
			color: var(--ink);
			box-shadow: var(--shadow-sm);
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
export class UiTabsComponent {
	readonly tabs = input.required<UiTab[]>();
	readonly value = model.required<string>();
}
