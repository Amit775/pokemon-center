import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { typeColorVar } from '../type-colors';

/**
 * The circular artwork frame. Shows the sprite when a src is provided, otherwise
 * a type-tinted orb placeholder. Decorative — hidden from assistive tech unless
 * an alt is supplied.
 */
@Component({
	selector: 'pkd-entity-portrait',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgOptimizedImage],
	template: `
		@if (src(); as source) {
			<img [ngSrc]="source" [alt]="alt()" [width]="pixels()" [height]="pixels()" />
		}
	`,
	host: {
		'[style.--pt]': 'colorVar()',
		'[style.--size.px]': 'pixels()',
	},
	styles: `
		:host {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: var(--size);
			height: var(--size);
			border-radius: 50%;
			background: radial-gradient(
				circle at 35% 30%,
				color-mix(in srgb, var(--pt) 25%, #fff),
				color-mix(in srgb, var(--pt) 78%, #fff)
			);
			box-shadow: var(--shadow-md);
		}
		img {
			width: 82%;
			height: 82%;
			object-fit: contain;
			image-rendering: pixelated;
		}
	`,
})
export class EntityPortraitComponent {
	readonly type = input<string>('normal');
	readonly src = input<string | null>(null);
	readonly alt = input<string>('');
	readonly size = input<number>(72);

	protected readonly pixels = computed(() => this.size());
	protected readonly colorVar = computed(() => typeColorVar(this.type()));
}
