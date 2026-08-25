import { ChangeDetectionStrategy, Component } from '@angular/core';

/** The rounded surface panel — the neutral container for detail and tool content. */
@Component({
	selector: 'pokedex-card',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<ng-content />`,
	styles: `
		:host {
			display: block;
			background: var(--surface);
			border: 1.5px solid var(--line);
			border-radius: var(--r-xl);
			box-shadow: var(--shadow-md);
			overflow: hidden;
		}
	`,
})
export class UiCardComponent {}
