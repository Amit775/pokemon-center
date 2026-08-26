import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TypeChipComponent } from '@pokemon-center/ui-pokedex';
import { moveTags } from './move-tags';

/** Only what the table renders, so the generated query type is not a dependency. */
export interface DetailMove {
	id: number;
	name: string;
	type: string;
	power: number | null;
	accuracy: number | null;
	pp: number | null;
	priority: number;
	flags: string[];
	effectText: string | null;
	effectChance: number | null;
	isOverridden: boolean;
	overrideNote: string | null;
}

/**
 * A Pokémon's legal moves.
 *
 * Every row carries three things a move name does not: **what it does**, **what Champions
 * changed about it**, and **which tags an ability can hook into**. All three are printed rather
 * than hidden behind a hover, because this is read while deciding what to click and pointing at
 * things to reveal them is what there is no time for.
 */
@Component({
	selector: 'champions-moves-table',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TypeChipComponent],
	template: `
		@if (changedCount() > 0) {
			<p class="lead"><strong>{{ changedCount() }}</strong> of these differ from the main series.</p>
		}

		<div class="scroller">
			<table>
				<thead>
					<tr>
						<th scope="col">Move</th>
						<th scope="col">Type</th>
						<th scope="col">Power</th>
						<th scope="col">Accuracy</th>
						<th scope="col">PP</th>
					</tr>
				</thead>
				<tbody>
					@for (move of moves(); track move.id) {
						<tr [class.changed]="move.isOverridden">
							<td>
								{{ move.name }}
								@if (move.isOverridden) {
									<span class="badge" [title]="move.overrideNote ?? ''">changed</span>
								}

								@if (move.effectText) {
									<span class="effect">
										{{ move.effectText }}
										<!-- Only when it is a gamble; 100% restates the sentence before it. -->
										@if (move.effectChance && move.effectChance < 100) {
											<span class="chance">{{ move.effectChance }}% chance</span>
										}
									</span>
								}

								<!--
									What an ability actually hooks into. Bulletproof needs to know which moves
									are Ball & Bomb, Iron Fist which are punches, and neither is readable from
									a move name.
								-->
								@if (tagsFor(move); as tags) {
									@if (tags.length > 0) {
										<span class="tags">
											@for (tag of tags; track tag.label) {
												<span class="tag" [class.priority]="tag.isPriority" [title]="tag.title">{{ tag.label }}</span>
											}
										</span>
									}
								}

								@if (move.isOverridden && move.overrideNote) {
									<span class="note">{{ move.overrideNote }}</span>
								}
							</td>
							<td><pokedex-type-chip [type]="move.type" size="sm" /></td>
							<td class="num">{{ move.power ?? '—' }}</td>
							<td class="num">{{ move.accuracy ?? '—' }}</td>
							<td class="num">{{ move.pp ?? '—' }}</td>
						</tr>
					}
				</tbody>
			</table>
		</div>

		@if (isApproximate()) {
			<p class="caveat">
				This learnset was supplemented from recent main-series games where the Champions data had gaps,
				so it may be slightly generous. Moves shown as changed are still accurate.
			</p>
		}
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-4, 1rem);
		}

		.lead {
			margin: 0 0 var(--s-3, 0.75rem);
			font-size: var(--fs-sm, 0.875rem);
		}

		.scroller {
			overflow-x: auto;
		}

		table {
			border-collapse: collapse;
			width: 100%;
			font-size: var(--fs-sm, 0.875rem);
		}

		th,
		td {
			text-align: left;
			padding: 0.35rem 0.5rem;
			border-bottom: 1px solid var(--line);
			vertical-align: top;
		}

		thead th {
			font-size: var(--fs-xs, 0.75rem);
			text-transform: uppercase;
			letter-spacing: 0.08em;
			color: var(--ink-muted);
		}

		.num {
			font-variant-numeric: tabular-nums;
			text-align: right;
		}

		tr.changed {
			background: var(--surface-sunken, rgba(128, 128, 128, 0.09));
		}

		/* A word, not just a colour — the change has to survive a screenshot. */
		.badge {
			display: inline-block;
			margin-left: 0.4rem;
			padding: 0.05rem 0.35rem;
			border-radius: var(--r-sm, 4px);
			background: var(--accent, #4f6df5);
			color: #fff;
			font-size: 0.65rem;
			text-transform: uppercase;
			letter-spacing: 0.06em;
			vertical-align: middle;
		}

		.note,
		.effect {
			display: block;
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			line-height: 1.45;
		}

		/* Wide enough to read as a sentence, narrow enough to keep the numbers on screen. */
		.effect {
			max-width: 46ch;
			margin-top: 0.15rem;
		}

		.chance {
			white-space: nowrap;
			font-weight: 600;
			color: var(--accent, #4f6df5);
		}

		.tags {
			display: flex;
			flex-wrap: wrap;
			gap: 0.2rem;
			margin-top: 0.2rem;
		}

		/* Quiet outlines: a reference layer, read when an ability raises the question. */
		.tag {
			font-size: 0.62rem;
			font-weight: 600;
			letter-spacing: 0.03em;
			padding: 0.05rem 0.35rem;
			border-radius: var(--r-sm, 4px);
			border: 1px solid var(--line);
			color: var(--ink-muted);
			white-space: nowrap;
			cursor: help;
		}

		/* Except priority, which changes the turn order and is read first. */
		.tag.priority {
			border-color: var(--accent, #4f6df5);
			color: var(--accent, #4f6df5);
			font-variant-numeric: tabular-nums;
		}

		.caveat {
			margin-top: var(--s-3, 0.75rem);
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			line-height: 1.5;
			max-width: 62ch;
		}
	`,
})
export class MovesTableComponent {
	readonly moves = input.required<readonly DetailMove[]>();
	readonly isApproximate = input(false);

	protected readonly changedCount = computed(() => this.moves().filter((move) => move.isOverridden).length);
	protected readonly tagsFor = moveTags;
}
