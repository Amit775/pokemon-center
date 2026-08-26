import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import {
	CHAMPIONS_LEVEL,
	NEUTRAL_NATURE,
	SP_PER_STAT_CAP,
	SP_TOTAL_BUDGET,
	StatKey,
	emptySpread,
	statAt50,
	validateSpread,
} from '@pokemon-center/champions-engine';
import { StatBarComponent } from '@pokemon-center/ui-pokedex';
import { NATURES, natureByName } from '../box/natures';

/** The six stats plus their total, as the dex hands them over. */
export type BaseStatSpread = Record<StatKey, number> & { total: number };

const ROWS: { key: StatKey; label: string }[] = [
	{ key: 'hp', label: 'HP' },
	{ key: 'attack', label: 'Attack' },
	{ key: 'defense', label: 'Defense' },
	{ key: 'specialAttack', label: 'Sp. Atk' },
	{ key: 'specialDefense', label: 'Sp. Def' },
	{ key: 'speed', label: 'Speed' },
];

/**
 * Base stats, with the level-50 maths available on demand.
 *
 * The page shows **base stats**, because that is the species fact — the number that is true
 * regardless of how anyone builds it. The invested number is not one value but a family of
 * them, and printing a single arbitrary member of that family (32 SP, neutral nature) as though
 * it were *the* stat is a quiet lie: nobody runs a neutral nature on the stat they care about.
 *
 * So the calculator is opened, not assumed. It starts empty and neutral, which is the honest
 * zero point, and it enforces Champions' budget as it goes — the sliders cannot express an
 * illegal spread, the same rule the Box's build editor follows.
 */
@Component({
	selector: 'champions-stat-panel',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [StatBarComponent],
	template: `
		@for (row of rows; track row.key) {
			<div class="row">
				<pokedex-stat-bar [label]="row.label" [value]="base()[row.key]" [type]="type()" />
				@if (open()) {
					<input
						type="number"
						class="sp"
						min="0"
						[max]="cap"
						[value]="points()[row.key]"
						(input)="setPoint(row.key, $any($event.target).value)"
						[attr.aria-label]="row.label + ' stat points'"
					/>
					<span class="result" [class.boosted]="delta(row.key) > 0" [class.hindered]="delta(row.key) < 0">
						{{ computed()[row.key] }}
					</span>
				}
			</div>
		}

		<div class="total">
			<span>Base stat total</span>
			<strong>{{ base().total }}</strong>
		</div>

		<button type="button" class="toggle" (click)="open.set(!open())" [attr.aria-expanded]="open()">
			{{ open() ? 'Hide the calculator' : 'Calculate at level ' + level }}
		</button>

		@if (open()) {
			<div class="controls">
				<label>
					<span>Nature</span>
					<select [value]="natureName()" (change)="natureName.set($any($event.target).value)">
						@for (nature of natures; track nature.name) {
							<option [value]="nature.name">
								{{ nature.name }}{{ nature.raises ? ' (+' + short[nature.raises] + ' −' + short[nature.lowers!] + ')' : '' }}
							</option>
						}
					</select>
				</label>

				<span class="budget" [class.spent]="remaining() === 0">
					{{ remaining() }} of {{ budget }} SP left
				</span>

				<button type="button" (click)="reset()">Reset</button>
			</div>

			<p class="note">
				Level {{ level }}, no IVs — every Pokémon in Champions is treated as having perfect ones. A
				point of SP is a point of stat, added before the nature multiplier.
			</p>
		}
	`,
	styles: `
		:host {
			display: block;
		}

		.row {
			display: grid;
			grid-template-columns: 1fr;
			align-items: center;
			gap: var(--s-3, 0.75rem);
		}

		/* The two calculator columns only exist while it is open, so the closed state is
		   exactly the bars and nothing else. */
		.row:has(.sp) {
			grid-template-columns: 1fr 4rem 3rem;
		}

		.sp {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			padding: 0.25rem 0.4rem;
			border-radius: var(--r-sm, 4px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink);
			min-width: 0;
			text-align: right;
		}

		.result {
			font-variant-numeric: tabular-nums;
			font-weight: 700;
			text-align: right;
		}

		.result.boosted {
			color: var(--success, #2e7d52);
		}

		.result.hindered {
			color: var(--danger, #d1495b);
		}

		.total {
			display: flex;
			justify-content: space-between;
			margin-top: var(--s-2, 0.5rem);
			padding-top: var(--s-2, 0.5rem);
			border-top: 1px solid var(--line);
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
			font-variant-numeric: tabular-nums;
		}

		.controls {
			display: flex;
			align-items: center;
			gap: var(--s-3, 0.75rem);
			flex-wrap: wrap;
			margin-top: var(--s-3, 0.75rem);
		}

		.controls label {
			display: flex;
			align-items: center;
			gap: 0.4rem;
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
		}

		select {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			padding: 0.3rem 0.45rem;
			border-radius: var(--r-sm, 4px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink);
		}

		.budget {
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
			font-variant-numeric: tabular-nums;
		}

		.budget.spent {
			color: var(--accent, #4f6df5);
			font-weight: 600;
		}

		button {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			cursor: pointer;
			padding: 0.35rem 0.7rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink-muted);
			min-height: 2.25rem;
		}

		button:hover {
			border-color: var(--accent, #4f6df5);
			color: var(--accent, #4f6df5);
		}

		.toggle {
			margin-top: var(--s-3, 0.75rem);
		}

		.note {
			margin: var(--s-3, 0.75rem) 0 0;
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			line-height: 1.5;
		}
	`,
})
export class StatPanelComponent {
	readonly base = input.required<BaseStatSpread>();
	/** Primary type, colouring the bars. */
	readonly type = input.required<string>();

	protected readonly rows = ROWS;
	protected readonly natures = NATURES;
	protected readonly level = CHAMPIONS_LEVEL;
	protected readonly cap = SP_PER_STAT_CAP;
	protected readonly budget = SP_TOTAL_BUDGET;
	protected readonly short: Record<string, string> = {
		attack: 'Atk',
		defense: 'Def',
		specialAttack: 'SpA',
		specialDefense: 'SpD',
		speed: 'Spe',
	};

	protected readonly open = signal(false);
	protected readonly natureName = signal(NEUTRAL_NATURE.name);
	protected readonly points = signal(emptySpread());

	private readonly nature = computed(() => natureByName(this.natureName()));

	protected readonly remaining = computed(() => validateSpread(this.points()).remaining);

	/** The six real stats for the current spread. */
	protected readonly computed = computed(() => {
		const base = this.base();
		const points = this.points();
		const nature = this.nature();

		return ROWS.reduce(
			(spread, row) => {
				spread[row.key] = statAt50(base[row.key], row.key, points[row.key], nature);
				return spread;
			},
			{} as Record<StatKey, number>,
		);
	});

	/** How much the nature alone moved this stat, for the colour. */
	protected delta(key: StatKey): number {
		const neutral = statAt50(this.base()[key], key, this.points()[key], NEUTRAL_NATURE);
		return this.computed()[key] - neutral;
	}

	/**
	 * Clamped to what is spendable, so an illegal spread is unreachable rather than merely
	 * flagged — the same rule the Box's build editor follows.
	 */
	protected setPoint(key: StatKey, raw: string): void {
		const current = this.points();
		const spentElsewhere = ROWS.reduce((sum, row) => (row.key === key ? sum : sum + current[row.key]), 0);
		const ceiling = Math.min(SP_PER_STAT_CAP, SP_TOTAL_BUDGET - spentElsewhere);
		const value = Math.max(0, Math.min(ceiling, Number(raw) || 0));

		this.points.set({ ...current, [key]: value });
	}

	protected reset(): void {
		this.points.set(emptySpread());
		this.natureName.set(NEUTRAL_NATURE.name);
	}
}
