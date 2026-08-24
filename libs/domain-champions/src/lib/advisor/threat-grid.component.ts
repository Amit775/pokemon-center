import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import type { ThreatAssessment } from '@pokemon-center/champions-engine';

/**
 * The six-by-six matchup grid.
 *
 * Rows are yours, columns are theirs, and each cell says who wins that one-on-one. The grid
 * is the artefact, but the two ranked lists beneath it are what a trainer acts on in the
 * ninety seconds they actually have — 36 cells is too many to read, "remove Dragapult" is not.
 *
 * Scrolls inside its own container so a six-wide grid never makes the page scroll sideways
 * on a phone.
 */
@Component({
	selector: 'champions-threat-grid',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		@if (assessment(); as threats) {
			<div class="scroller">
				<table>
					<caption class="sr-only">
						Matchup grid: your Pokémon in rows, the opponent's in columns
					</caption>
					<thead>
						<tr>
							<th scope="col" class="corner"><span class="sr-only">Your Pokémon</span></th>
							@for (their of theirNames(); track their) {
								<th scope="col">{{ their }}</th>
							}
						</tr>
					</thead>
					<tbody>
						@for (row of threats.grid; track $index; let r = $index) {
							<tr>
								<th scope="row">{{ myNames()[r] }}</th>
								@for (cell of row; track $index) {
									<td [class]="cell.verdict" [title]="cell.reason">
										<span class="verdict">{{ label(cell.verdict) }}</span>
										@if (cell.yourBest) {
											<span class="detail">{{ percent(cell.yourBest.result.maxFraction) }}</span>
										}
									</td>
								}
							</tr>
						}
					</tbody>
				</table>
			</div>

			<div class="summaries">
				<section>
					<h3>Must remove</h3>
					<ol>
						@for (entry of threats.mustRemove; track entry.build.species.slug) {
							<li>
								<span class="who">{{ entry.build.species.name }}</span>
								<span class="count">beats {{ entry.beats }} of yours</span>
							</li>
						}
					</ol>
				</section>

				<section>
					<h3>Your win conditions</h3>
					<ol>
						@for (entry of threats.winConditions; track entry.build.species.slug) {
							<li>
								<span class="who">{{ entry.build.species.name }}</span>
								<span class="count">beats {{ entry.beats }} of theirs</span>
							</li>
						}
					</ol>
				</section>
			</div>
		}
	`,
	styles: `
		:host {
			display: block;
		}

		/* Wide content scrolls inside its own box; the page body never scrolls sideways. */
		.scroller {
			overflow-x: auto;
			border: 1.5px solid var(--line);
			border-radius: var(--r-md, 8px);
		}

		table {
			border-collapse: collapse;
			width: 100%;
			font-size: var(--fs-sm, 0.875rem);
		}

		th,
		td {
			padding: 0.4rem 0.5rem;
			text-align: left;
			border-bottom: 1px solid var(--line);
			white-space: nowrap;
		}

		thead th {
			font-size: var(--fs-xs, 0.75rem);
			text-transform: uppercase;
			letter-spacing: 0.08em;
			color: var(--ink-muted);
		}

		tbody th {
			font-weight: 600;
			position: sticky;
			left: 0;
			background: var(--surface);
		}

		td {
			font-variant-numeric: tabular-nums;
		}

		.verdict {
			display: block;
			font-weight: 600;
		}

		.detail {
			display: block;
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
		}

		/* Colour carries meaning, so each state also carries a word — never colour alone. */
		td.you-win .verdict {
			color: var(--success, #2e7d52);
		}

		td.they-win .verdict {
			color: var(--danger, #d1495b);
		}

		td.close .verdict {
			color: var(--warning, #b8860b);
		}

		td.stall .verdict {
			color: var(--ink-muted);
		}

		.summaries {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
			gap: var(--s-4, 1rem);
			margin-top: var(--s-4, 1rem);
		}

		h3 {
			margin: 0 0 var(--s-2, 0.5rem);
			font-size: var(--fs-xs, 0.75rem);
			text-transform: uppercase;
			letter-spacing: 0.12em;
			color: var(--ink-muted);
		}

		ol {
			margin: 0;
			padding: 0;
			list-style: none;
			display: grid;
			gap: 0.3rem;
		}

		li {
			display: flex;
			justify-content: space-between;
			gap: var(--s-2, 0.5rem);
			font-size: var(--fs-sm, 0.875rem);
		}

		.who {
			font-weight: 600;
		}

		.count {
			color: var(--ink-muted);
			font-variant-numeric: tabular-nums;
		}

		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border: 0;
		}
	`,
})
export class ThreatGridComponent {
	readonly assessment = input.required<ThreatAssessment | null>();

	protected readonly myNames = computed(() => this.assessment()?.grid.map((row) => row[0]?.yours.species.name ?? '') ?? []);
	protected readonly theirNames = computed(() => this.assessment()?.grid[0]?.map((cell) => cell.theirs.species.name) ?? []);

	protected label(verdict: string): string {
		switch (verdict) {
			case 'you-win':
				return 'Win';
			case 'they-win':
				return 'Lose';
			case 'close':
				return 'Close';
			default:
				return 'Stall';
		}
	}

	protected percent(fraction: number): string {
		return `${Math.round(fraction * 100)}%`;
	}
}
