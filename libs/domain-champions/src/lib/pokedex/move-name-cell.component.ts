import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { moveTags } from './move-tags';
import type { DetailMove } from './move.model';

/**
 * The Move column: name, what the move does, and the tags an ability hooks into — all printed
 * rather than hidden behind a hover, because this is read while choosing.
 *
 * A component because `flexRenderComponent` takes a component type.
 */
@Component({
	selector: 'champions-move-name-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<!-- A local, because a repeated move() call cannot be narrowed and effectChance needs it. -->
		@let currentMove = move();

		{{ currentMove.name }}

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
