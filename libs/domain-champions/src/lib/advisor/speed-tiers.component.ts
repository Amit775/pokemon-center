import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { speedRange, type SpeedTierEntry } from '@pokemon-center/champions-engine';

/**
 * Both teams merged into one descending Speed list.
 *
 * The single most-consulted number in a battle is "am I faster?", and this turns it from a
 * calculation into a glance. Opponents show a *range* rather than a point value: their
 * investment is unknown, and a single number would be a confident lie. The band narrows as
 * the battle reveals items and boosts.
 */
@Component({
	selector: 'champions-speed-tiers',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<ol>
			@for (entry of tiers(); track entry.build.species.slug + $index) {
				<li [class.mine]="entry.isYours">
					<span class="side" aria-hidden="true">{{ entry.isYours ? '▶' : '◀' }}</span>
					<span class="who">
						{{ entry.build.species.name }}
						<span class="sr-only">{{ entry.isYours ? '(yours)' : '(theirs)' }}</span>
					</span>

					@if (entry.isYours) {
						<span class="speed">{{ entry.speed }}</span>
					} @else {
						<span class="speed range" [title]="'Uninvested ' + range(entry).min + ' to Choice Scarf ' + range(entry).scarfed">
							{{ range(entry).min }}–{{ range(entry).max }}
							<span class="scarf">scarf {{ range(entry).scarfed }}</span>
						</span>
					}

					@if (entry.modifiers.length > 0) {
						<span class="modifiers">{{ entry.modifiers.join(', ') }}</span>
					}
				</li>
			}
		</ol>
	`,
	styles: `
		:host {
			display: block;
		}

		ol {
			margin: 0;
			padding: 0;
			list-style: none;
			display: grid;
			gap: 0.2rem;
		}

		li {
			display: grid;
			grid-template-columns: 1rem 1fr auto;
			align-items: baseline;
			gap: var(--s-2, 0.5rem);
			padding: 0.3rem 0.4rem;
			border-radius: var(--r-sm, 4px);
			font-size: var(--fs-sm, 0.875rem);
		}

		li.mine {
			background: var(--surface-sunken, rgba(128, 128, 128, 0.12));
		}

		.side {
			color: var(--ink-muted);
			font-size: 0.7rem;
		}

		.who {
			font-weight: 600;
		}

		.speed {
			font-variant-numeric: tabular-nums;
			text-align: right;
		}

		.range {
			color: var(--ink-muted);
		}

		.scarf {
			display: block;
			font-size: var(--fs-xs, 0.75rem);
			opacity: 0.8;
		}

		.modifiers {
			grid-column: 2 / -1;
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
		}

		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
		}
	`,
})
export class SpeedTiersComponent {
	readonly tiers = input.required<SpeedTierEntry[]>();

	protected range(entry: SpeedTierEntry) {
		return speedRange(entry.build);
	}
}
