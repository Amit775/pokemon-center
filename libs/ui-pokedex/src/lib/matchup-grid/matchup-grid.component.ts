import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface MatchupCell {
	type: string;
	factor: number;
	note?: string | null;
}

/** Color-coded effectiveness grid over defending/attacking types (Coverage, Type pages). */
@Component({
	selector: 'pkd-matchup-grid',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="grid">
			@for (cell of cells(); track cell.type) {
				<div class="cell" [class]="cls(cell.factor)" [title]="cell.note ?? ''">
					<span class="t">{{ cell.type }}</span>
					<span class="f">{{ cell.factor }}×</span>
				</div>
			}
		</div>
	`,
	styles: `
		.grid {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
			gap: var(--s-1);
			max-width: 44rem;
		}
		.cell {
			display: flex;
			justify-content: space-between;
			padding: 0.3rem 0.6rem;
			border-radius: var(--r-sm);
			text-transform: capitalize;
			font-size: var(--fs-sm);
			background: var(--surface-sunken);
			color: var(--ink);
		}
		.cell.super {
			background: color-mix(in srgb, var(--good) 32%, var(--surface));
		}
		.cell.weak {
			background: color-mix(in srgb, var(--warn) 32%, var(--surface));
		}
		.cell.immune {
			background: color-mix(in srgb, var(--crit) 32%, var(--surface));
		}
		.f {
			font-weight: 800;
			font-variant-numeric: tabular-nums;
		}
	`,
})
export class MatchupGridComponent {
	readonly cells = input.required<MatchupCell[]>();

	protected cls(factor: number): string {
		if (factor === 0) return 'immune';
		if (factor >= 2) return 'super';
		if (factor < 1) return 'weak';
		return 'neutral';
	}
}
