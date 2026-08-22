import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { EntityPortraitComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import type { Range } from './dex-filter';

/** A Pokémon to name at a given value — what makes the number mean something. */
export interface RangeLandmark {
	value: number;
	id: number;
	name: string;
	types: string[];
}

/**
 * A two-ended base-stat range, with a landmark Pokémon shown while you drag.
 *
 * "Speed ≥ 130" is a number nobody has a feel for. "Faster than Jolteon" is a thought people
 * actually have, and it is the same filter. So while a handle moves, the nearest Pokémon at
 * that base value appears above it — the slider stops being an abstract axis and becomes a
 * position in a field you already know.
 *
 * **Base stats only.** A level-50 number depends on SP and nature, which are build choices, not
 * species facts; ranking the roster by one particular build's output would put a made-up
 * assumption inside a reference tool. The detail page's calculator is where investment lives.
 *
 * Two overlapping range inputs rather than a custom drag implementation: they are keyboard
 * accessible and screen-reader labelled for free. The trick is that the handles must not trap
 * each other, so the inputs are transparent to pointer events except on their thumbs.
 */
@Component({
	selector: 'champions-stat-range',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [EntityPortraitComponent],
	template: `
		<div class="head">
			<span class="label">{{ label() }}</span>
			<span class="values" [class.active]="isActive()">{{ value()[0] }}–{{ value()[1] }}</span>
		</div>

		<div class="track-wrap">
			@if (landmark(); as mark) {
				<span class="landmark" [style.left.%]="landmarkOffset()">
					<pkd-entity-portrait
						[type]="mark.types[0]"
						[src]="sprite(mark.id).src"
						[fallbackSrc]="sprite(mark.id).fallbackSrc"
						[alt]="mark.name"
						[size]="28"
					/>
					<span class="landmark-name">{{ mark.name }} {{ mark.value }}</span>
				</span>
			}

			<span class="track"></span>
			<span class="fill" [style.left.%]="percent(value()[0])" [style.right.%]="100 - percent(value()[1])"></span>

			<input
				type="range"
				[min]="bounds()[0]"
				[max]="bounds()[1]"
				[value]="value()[0]"
				[attr.aria-label]="label() + ' minimum'"
				(input)="onMin($any($event.target).value)"
				(pointerdown)="dragging.set('min')"
				(pointerup)="dragging.set(null)"
				(focus)="dragging.set('min')"
				(blur)="dragging.set(null)"
			/>
			<input
				type="range"
				[min]="bounds()[0]"
				[max]="bounds()[1]"
				[value]="value()[1]"
				[attr.aria-label]="label() + ' maximum'"
				(input)="onMax($any($event.target).value)"
				(pointerdown)="dragging.set('max')"
				(pointerup)="dragging.set(null)"
				(focus)="dragging.set('max')"
				(blur)="dragging.set(null)"
			/>
		</div>
	`,
	styles: `
		:host {
			display: block;
		}

		.head {
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			gap: 0.5rem;
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
		}

		.values {
			font-variant-numeric: tabular-nums;
		}

		.values.active {
			color: var(--accent, #4f6df5);
			font-weight: 700;
		}

		.track-wrap {
			position: relative;
			height: 1.5rem;
			margin-top: 0.1rem;
		}

		.track,
		.fill {
			position: absolute;
			top: 50%;
			height: 4px;
			border-radius: 2px;
			transform: translateY(-50%);
			pointer-events: none;
		}

		.track {
			left: 0;
			right: 0;
			background: var(--surface-sunken, rgba(128, 128, 128, 0.25));
		}

		.fill {
			background: var(--accent, #4f6df5);
		}

		/*
			Both inputs stack on the same track. They are pointer-transparent so a click lands on
			whichever thumb is under it rather than on whichever input happens to be on top.
		*/
		input[type='range'] {
			position: absolute;
			inset: 0;
			width: 100%;
			margin: 0;
			background: none;
			appearance: none;
			pointer-events: none;
		}

		input[type='range']::-webkit-slider-thumb {
			appearance: none;
			pointer-events: auto;
			width: 14px;
			height: 14px;
			border-radius: 50%;
			background: var(--surface);
			border: 2px solid var(--accent, #4f6df5);
			cursor: grab;
		}

		input[type='range']::-moz-range-thumb {
			pointer-events: auto;
			width: 14px;
			height: 14px;
			border-radius: 50%;
			background: var(--surface);
			border: 2px solid var(--accent, #4f6df5);
			cursor: grab;
		}

		input[type='range']:focus-visible::-webkit-slider-thumb {
			outline: 2px solid var(--accent, #4f6df5);
			outline-offset: 2px;
		}

		/* Above the handle, following it, and never intercepting the drag. */
		.landmark {
			position: absolute;
			bottom: 100%;
			transform: translateX(-50%);
			display: flex;
			align-items: center;
			gap: 0.3rem;
			padding: 0.15rem 0.4rem 0.15rem 0.15rem;
			border-radius: var(--r-pill, 999px);
			border: 1.5px solid var(--accent, #4f6df5);
			background: var(--surface);
			white-space: nowrap;
			pointer-events: none;
			z-index: 2;
		}

		.landmark-name {
			font-size: var(--fs-xs, 0.75rem);
			font-weight: 600;
			font-variant-numeric: tabular-nums;
		}
	`,
})
export class StatRangeComponent {
	readonly label = input.required<string>();
	readonly bounds = input.required<Range>();
	readonly value = input.required<Range>();
	/** Every base value on the roster with a Pokémon that has it, for the landmark. */
	readonly landmarks = input.required<readonly RangeLandmark[]>();

	readonly changed = output<Range>();

	protected readonly dragging = signal<'min' | 'max' | null>(null);

	protected readonly isActive = computed(() => {
		const [min, max] = this.value();
		const [low, high] = this.bounds();
		return min > low || max < high;
	});

	/** The nearest real Pokémon to the handle being dragged. Absent when nothing is moving. */
	protected readonly landmark = computed(() => {
		const which = this.dragging();
		if (!which) return null;

		const target = which === 'min' ? this.value()[0] : this.value()[1];
		let best: RangeLandmark | null = null;

		for (const mark of this.landmarks()) {
			if (!best || Math.abs(mark.value - target) < Math.abs(best.value - target)) best = mark;
		}
		return best;
	});

	protected readonly landmarkOffset = computed(() => {
		const which = this.dragging();
		return this.percent(which === 'max' ? this.value()[1] : this.value()[0]);
	});

	protected percent(value: number): number {
		const [low, high] = this.bounds();
		return high === low ? 0 : ((value - low) / (high - low)) * 100;
	}

	protected sprite(id: number) {
		return spriteSources(id);
	}

	/** The handles push rather than cross, which is what keeps the range readable mid-drag. */
	protected onMin(raw: string): void {
		const next = Math.min(Number(raw), this.value()[1]);
		this.changed.emit([next, this.value()[1]]);
	}

	protected onMax(raw: string): void {
		const next = Math.max(Number(raw), this.value()[0]);
		this.changed.emit([this.value()[0], next]);
	}
}
