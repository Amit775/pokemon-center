import { ChangeDetectionStrategy, Component, computed, input, linkedSignal } from '@angular/core';
import { typeColorVar } from '../type-colors';

/**
 * The circular artwork frame. Shows the sprite when a src is provided (falling
 * back to a type-tinted orb on error or when absent). Decorative unless an alt
 * is supplied.
 */
@Component({
	selector: 'pkd-entity-portrait',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		@if (src() && !failed()) {
			<img [src]="src()" [alt]="alt()" loading="lazy" (error)="failed.set(true)" />
		}
	`,
	host: {
		'[style.--pt]': 'colorVar()',
		'[style.--size.px]': 'size()',
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
		}
	`,
})
export class EntityPortraitComponent {
	readonly type = input<string>('normal');
	readonly src = input<string | null>(null);
	readonly alt = input<string>('');
	readonly size = input<number>(72);

	/** Resets to false whenever the src changes, so a new sprite gets a fresh try. */
	protected readonly failed = linkedSignal<string | null, boolean>({
		source: () => this.src(),
		computation: () => false,
	});
	protected readonly colorVar = computed(() => typeColorVar(this.type()));
}
