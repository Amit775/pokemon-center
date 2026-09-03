import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';
import { moveTags } from './move-tags';
import type { DetailMove } from './move.model';

/**
 * The Move column: name, what the move does, and the tags an ability hooks into — all printed
 * rather than hidden behind a hover, because this is read while choosing.
 *
 * An AG Grid cell renderer: the grid supplies the row via `agInit`/`refresh` rather than a
 * template input.
 */
@Component({
	selector: 'champions-move-name-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		@if (move(); as currentMove) {
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
		}
	`,
	styles: `
		:host {
			display: block;
		}

		/* Wide enough to read as a sentence, narrow enough to keep the numbers on screen. */
		.effect {
			display: block;
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			line-height: 1.45;
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
export class MoveNameCellComponent implements ICellRendererAngularComp {
	protected readonly move = signal<DetailMove | null>(null);

	protected readonly tagsFor = moveTags;

	agInit(params: ICellRendererParams<DetailMove>): void {
		this.move.set(params.data ?? null);
	}

	refresh(params: ICellRendererParams<DetailMove>): boolean {
		this.move.set(params.data ?? null);
		return true;
	}
}
