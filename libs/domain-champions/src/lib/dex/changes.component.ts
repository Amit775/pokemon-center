import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { ChampChangedMovesDocument, champResource } from '@pokemon-center/data-access-champions';
import { SectionHeadingComponent, TypeChipComponent, UiCardComponent, UiSkeletonComponent } from '@pokemon-center/ui-pokedex';

/**
 * Everything Champions changed from the main series.
 *
 * This is the page that only a Champions dex can have. Someone arriving from Scarlet and
 * Violet already knows what First Impression does — and is wrong about it. Listing the
 * deltas in one place is more valuable than listing all 573 moves, because the deltas are
 * exactly the knowledge that will lose them a game.
 */
@Component({
	selector: 'champions-changes',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SectionHeadingComponent, TypeChipComponent, UiCardComponent, UiSkeletonComponent],
	template: `
		<header class="masthead">
			<h1>What Champions changed</h1>
			<p class="tagline">
				Everything you think you know from the main series that no longer holds.
			</p>
		</header>

		<pkd-section-heading label="Battle mechanics" />
		<pkd-card>
			<div class="panel">
				<dl class="mechanics">
					@for (item of mechanics; track item.what) {
						<div>
							<dt>{{ item.what }}</dt>
							<dd>{{ item.change }}</dd>
						</div>
					}
				</dl>
			</div>
		</pkd-card>

		@if (query.isLoading()) {
			<pkd-skeleton height="12rem" />
		} @else {
			<pkd-section-heading label="Moves ({{ moves().length }})" />
			<pkd-card>
				<div class="panel">
					<ul class="moves">
						@for (move of moves(); track move.id) {
							<li>
								<span class="head">
									<span class="name">{{ move.name }}</span>
									<pkd-type-chip [type]="move.type" size="sm" />
								</span>
								<span class="note">{{ move.overrideNote }}</span>
								<span class="numbers">
									@if (move.power) {
										<span>{{ move.power }} BP</span>
									}
									@if (move.accuracy) {
										<span>{{ move.accuracy }}%</span>
									}
									@if (move.pp) {
										<span>{{ move.pp }} PP</span>
									}
								</span>
							</li>
						}
					</ul>
				</div>
			</pkd-card>
		}

		<p class="source">
			Mechanics and move deltas are derived from the published Champions documentation and committed to
			the repository, so every value here is traceable to a source rather than inferred.
		</p>
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-5, 1.5rem);
			max-width: 60rem;
			margin-inline: auto;
		}

		h1 {
			margin: 0;
			font-size: var(--fs-2xl, 2rem);
			letter-spacing: -0.02em;
		}

		.tagline {
			margin: var(--s-1, 0.25rem) 0 0;
			color: var(--ink-muted);
		}

		.panel {
			padding: var(--s-4, 1rem);
		}

		.mechanics {
			margin: 0;
			display: grid;
			gap: var(--s-3, 0.75rem);
		}

		.mechanics dt {
			font-weight: 600;
		}

		.mechanics dd {
			margin: 0.1rem 0 0;
			color: var(--ink-muted);
			line-height: 1.5;
			font-size: var(--fs-sm, 0.875rem);
		}

		.moves {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			gap: var(--s-3, 0.75rem);
		}

		.moves li {
			display: grid;
			gap: 0.15rem;
			padding-bottom: var(--s-3, 0.75rem);
			border-bottom: 1px solid var(--line);
		}

		.moves li:last-child {
			border-bottom: none;
			padding-bottom: 0;
		}

		.head {
			display: flex;
			align-items: center;
			gap: var(--s-2, 0.5rem);
		}

		.name {
			font-weight: 600;
		}

		.note {
			color: var(--ink-muted);
			font-size: var(--fs-sm, 0.875rem);
			line-height: 1.5;
		}

		.numbers {
			display: flex;
			gap: var(--s-3, 0.75rem);
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			font-variant-numeric: tabular-nums;
		}

		.source {
			margin-top: var(--s-5, 1.5rem);
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			line-height: 1.5;
		}
	`,
})
export default class ChangesComponent {
	protected readonly query = champResource(ChampChangedMovesDocument, () => ({}));
	protected readonly moves = computed(() => this.query.value()?.champChangedMoves ?? []);

	/**
	 * Mechanical changes that are not per-move.
	 *
	 * Hard-coded rather than derived: these are prose on the source page, not structured
	 * data, and inventing a parser for eleven sentences would be worse than writing them out
	 * where a human can check them against the source.
	 */
	protected readonly mechanics = [
		{ what: 'No IVs', change: 'Every Pokémon behaves as though it had 31 in every stat. Nothing to breed for.' },
		{
			what: 'Stat Points replace EVs',
			change: '66 points across the six stats, at most 32 in one, and a point of SP is a point of stat rather than a quarter of one.',
		},
		{ what: 'Level is fixed at 50', change: 'Levels are not displayed and stats are always calculated as though level 50.' },
		{ what: 'Paralysis is weaker', change: 'A paralysed Pokémon now fails to move 12.5% of the time, down from 25%.' },
		{ what: 'Sleep is shorter', change: 'Two to three turns instead of two to four — roughly two thirds of the time it is three.' },
		{ what: 'Freeze thaws faster', change: '25% chance to thaw each turn, and always by the third.' },
		{ what: '4× and ¼× are named', change: 'Shown as "extremely effective" and "mostly ineffective", with their own icons.' },
		{ what: 'Unseen Fist through Protect', change: 'Now deals 25% damage to a protecting target instead of full damage.' },
		{ what: 'Healer triggers more', change: '50% of the time, up from 30%.' },
		{ what: 'Intimidate resolves at once', change: 'Stat drops apply to both opposing Pokémon simultaneously rather than one at a time.' },
		{ what: 'PP is standardised', change: 'Base PP of 5, 10, 15 or 20+ becomes 8, 12, 16 or 20, with a handful of exceptions.' },
	];
}
