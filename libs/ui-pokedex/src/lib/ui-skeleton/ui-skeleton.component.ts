import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** A shimmering placeholder for content that is loading. */
@Component({
	selector: 'pokedex-skeleton',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: ``,
	host: {
		'[style.width]': 'width()',
		'[style.height]': 'height()',
		'[style.border-radius]': 'radius()',
		'aria-hidden': 'true',
	},
	styles: `
		:host {
			display: block;
			background: linear-gradient(90deg, var(--surface-sunken) 25%, color-mix(in srgb, var(--surface-sunken) 60%, var(--surface)) 50%, var(--surface-sunken) 75%);
			background-size: 200% 100%;
			animation: pokedex-shimmer 1.3s var(--ease) infinite;
		}
		@keyframes pokedex-shimmer {
			from {
				background-position: 200% 0;
			}
			to {
				background-position: -200% 0;
			}
		}
		@media (prefers-reduced-motion: reduce) {
			:host {
				animation: none;
			}
		}
	`,
})
export class UiSkeletonComponent {
	readonly width = input<string>('100%');
	readonly height = input<string>('1rem');
	readonly radius = input<string>('var(--r-sm)');
}
