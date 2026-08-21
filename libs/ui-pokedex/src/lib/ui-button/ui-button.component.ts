import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * The kit's button.
 *
 * An attribute selector rather than a wrapper element, so it applies to a real `<button>` or to
 * an `<a routerLink>` without nesting interactive elements or breaking routing — the two ways a
 * "button" actually appears in this app.
 *
 *   <button pkd-button (click)="…">Hint</button>
 *   <a pkd-button="primary" routerLink="/school/drill">Start a drill</a>
 */
@Component({
	selector: 'button[pkd-button], a[pkd-button]',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<ng-content />`,
	host: { '[class.is-primary]': 'primary()' },
	styles: `
		:host {
			display: inline-flex;
			align-items: center;
			gap: var(--s-2);
			padding: var(--s-2) var(--s-4);
			border: 1px solid var(--line);
			border-radius: var(--r-pill);
			background: var(--surface);
			color: var(--ink);
			font: inherit;
			text-decoration: none;
			cursor: pointer;
			transition: background var(--dur) var(--ease), border-color var(--dur) var(--ease);
		}
		:host(:hover:not(:disabled)) {
			background: var(--surface-raised);
		}
		:host(:focus-visible) {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}
		:host(:disabled) {
			opacity: 0.5;
			cursor: not-allowed;
		}
		:host(.is-primary) {
			background: var(--accent);
			color: var(--accent-ink);
			border-color: var(--accent);
		}
		:host(.is-primary:hover:not(:disabled)) {
			border-color: var(--accent);
			opacity: 0.9;
		}
		@media (prefers-reduced-motion: reduce) {
			:host {
				transition: none;
			}
		}
	`,
})
export class ButtonComponent {
	/** `pkd-button` alone is the default look; `pkd-button="primary"` is the filled one. */
	readonly variant = input<'' | 'default' | 'primary'>('', { alias: 'pkd-button' });

	protected readonly primary = computed(() => this.variant() === 'primary');
}
