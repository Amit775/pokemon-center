import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Small uppercase eyebrow that gives every section a consistent rhythm. */
@Component({
	selector: 'pkd-section-heading',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `{{ label() }}`,
	styles: `
		:host {
			display: block;
			font-size: var(--fs-xs);
			letter-spacing: 0.16em;
			text-transform: uppercase;
			color: var(--ink-muted);
			margin: var(--s-5) 0 var(--s-2);
		}
	`,
})
export class SectionHeadingComponent {
	readonly label = input.required<string>();
}
