import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { typeColorVar } from '../type-colors';

/** One base-stat row: label, value, and a type-gradient track. */
@Component({
	selector: 'pokedex-stat-bar',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<span class="label">{{ label() }}</span>
		<span class="value">{{ value() }}</span>
		<span class="track" role="progressbar" [attr.aria-valuenow]="value()" [attr.aria-valuemin]="0" [attr.aria-valuemax]="max()" [attr.aria-label]="label()">
			<i [style.width.%]="percent()"></i>
		</span>
	`,
	host: { '[style.--pt]': 'colorVar()' },
	styles: `
		:host {
			display: grid;
			grid-template-columns: 74px 34px 1fr;
			gap: var(--s-3);
			align-items: center;
			margin: var(--s-1) 0;
		}
		.label {
			font-size: var(--fs-sm);
			font-weight: 600;
			color: var(--ink-muted);
			text-transform: capitalize;
		}
		.value {
			font-weight: 800;
			font-variant-numeric: tabular-nums;
			text-align: right;
		}
		.track {
			height: 9px;
			border-radius: var(--r-pill);
			background: var(--surface-sunken);
			overflow: hidden;
		}
		i {
			display: block;
			height: 100%;
			border-radius: var(--r-pill);
			background: linear-gradient(90deg, var(--pt), color-mix(in srgb, var(--pt) 55%, #fff));
			transition: width var(--dur) var(--ease);
		}
		@media (prefers-reduced-motion: reduce) {
			i {
				transition: none;
			}
		}
	`,
})
export class StatBarComponent {
	readonly label = input.required<string>();
	readonly value = input.required<number>();
	readonly max = input<number>(170);
	readonly type = input<string>('normal');

	protected readonly percent = computed(() => Math.min(100, Math.round((this.value() / this.max()) * 100)));
	protected readonly colorVar = computed(() => typeColorVar(this.type()));
}
