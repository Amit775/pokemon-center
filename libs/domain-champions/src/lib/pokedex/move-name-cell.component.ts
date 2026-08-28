import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { moveTags } from './move-tags';
import type { DetailMove } from './moves-table.component';

/**
 * The Move column, which is six things rather than a name.
 *
 * A learnset row is not a scalar. The name alone answers "can it learn this"; what someone
 * actually asks while building a set is **what it does**, **what Champions changed about it**, and
 * **which tags an ability can hook into** — so all of that is printed here rather than hidden
 * behind a hover, because this is read while deciding what to click and pointing at things to
 * reveal them is what there is no time for.
 *
 * It exists as its own component because a sortable table renders its cells through
 * `flexRenderComponent`, which takes a component type. The markup and styles below are the first
 * `<td>` of `moves-table.component.ts`, moved across unchanged, so the two renderings are the same
 * pixels while the preview flag keeps both alive.
 */
@Component({
	selector: 'champions-move-name-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<!--
			Read once into a local. The original was a @for loop variable, so every property access
			narrowed; a repeated move() call is a function call the template type-checker cannot
			narrow through, and the effect-chance comparison below needs the narrowing.
		-->
		@let currentMove = move();

		{{ currentMove.name }}
		@if (currentMove.isOverridden) {
			<span class="badge" [title]="currentMove.overrideNote ?? ''">changed</span>
		}

		@if (currentMove.effectText) {
			<span class="effect">
				{{ currentMove.effectText }}
				<!-- Only when it is a gamble; 100% restates the sentence before it. -->
				@if (currentMove.effectChance && currentMove.effectChance < 100) {
					<span class="chance">{{ currentMove.effectChance }}% chance</span>
				}
			</span>
		}

		<!--
			What an ability actually hooks into. Bulletproof needs to know which moves
			are Ball & Bomb, Iron Fist which are punches, and neither is readable from
			a move name.
		-->
		@if (tagsFor(currentMove); as tags) {
			@if (tags.length > 0) {
				<span class="tags">
					@for (tag of tags; track tag.label) {
						<span class="tag" [class.priority]="tag.isPriority" [title]="tag.title">{{ tag.label }}</span>
					}
				</span>
			}
		}

		@if (currentMove.isOverridden && currentMove.overrideNote) {
			<span class="note">{{ currentMove.overrideNote }}</span>
		}
	`,
	styles: `
		:host {
			display: block;
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
	`,
})
export class MoveNameCellComponent {
	readonly move = input.required<DetailMove>();

	protected readonly tagsFor = moveTags;
}
