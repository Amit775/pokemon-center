import { ChangeDetectionStrategy, Component, computed, input, linkedSignal } from '@angular/core';
import { typeColorVar } from '../type-colors';

/**
 * The circular artwork frame. Tries `src`, then `fallbackSrc`, then a type-tinted
 * orb — so a local sprite mirror can fall back to a remote source and finally the
 * placeholder. Decorative unless an alt is supplied.
 */
@Component({
	selector: 'pkd-entity-portrait',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		@if (currentSrc(); as source) {
			<img [src]="source" [alt]="alt()" loading="lazy" (error)="onError()" />
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
	/** Tried if `src` fails to load (e.g. remote when a local mirror is absent). */
	readonly fallbackSrc = input<string | null>(null);
	readonly alt = input<string>('');
	readonly size = input<number>(72);

	/** 0 = primary src, 1 = fallback, 2 = orb only. Resets when src changes. */
	protected readonly stage = linkedSignal<string | null, number>({
		source: () => this.src(),
		computation: () => 0,
	});

	protected readonly currentSrc = computed(() => (this.stage() === 0 ? this.src() : this.stage() === 1 ? this.fallbackSrc() : null));
	protected readonly colorVar = computed(() => typeColorVar(this.type()));

	protected onError(): void {
		this.stage.update((s) => (s === 0 && this.fallbackSrc() ? 1 : 2));
	}
}
