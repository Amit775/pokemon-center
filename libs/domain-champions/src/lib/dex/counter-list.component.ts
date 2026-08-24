import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EntityPortraitComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import { RankedAnswer, VERDICT_LABEL, explain } from './counters';

/**
 * One ranked matchup list — "what beats this" or "what this beats".
 *
 * Both directions are the same component with the roles swapped, which is also why the
 * Simulator link takes an explicit direction: the pair has to open with the attacker on the
 * left, or the two panels would send you to the same screen twice.
 *
 * Every row carries a word for its band and a sentence for its reason. The ranking is a
 * heuristic, so it is never allowed to be a bare colour-coded list you have to trust.
 */
@Component({
	selector: 'champions-counter-list',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [EntityPortraitComponent, RouterLink],
	template: `
		<h3>{{ heading() }}</h3>

		<ul>
			@for (answer of answers(); track answer.entry.slug) {
				<li>
					<a class="who" [routerLink]="['/champions/pokedex', answer.entry.slug]">
						<pkd-entity-portrait
							[type]="answer.entry.types[0]"
							[src]="sprite(answer.entry.id).src"
							[fallbackSrc]="sprite(answer.entry.id).fallbackSrc"
							[alt]="answer.entry.name"
							[size]="32"
						/>
						<span class="name">{{ answer.entry.name }}</span>
					</a>

					<span class="verdict" [class]="'v-' + answer.score.verdict">{{ label[answer.score.verdict] }}</span>

					<a class="try" routerLink="/champions/simulator" [queryParams]="simulatorParams(answer)">Run it</a>

					<span class="why">{{ reason(answer.score, subject()) }}</span>
				</li>
			} @empty {
				<li class="none">{{ emptyText() }}</li>
			}
		</ul>

		@if (answers().length > 0 && showSeeAll()) {
			<button type="button" (click)="seeAll.emit()">See every answer in the Pokédex →</button>
		}
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-4, 1rem);
		}

		h3 {
			margin: 0 0 var(--s-3, 0.75rem);
			font-size: var(--fs-sm, 0.875rem);
			font-weight: 700;
		}

		ul {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			gap: var(--s-2, 0.5rem);
		}

		/* Name, band and action on one line; the reason wraps beneath all three. */
		li {
			display: grid;
			grid-template-columns: minmax(0, 1fr) auto auto;
			align-items: center;
			gap: 0.4rem;
			padding-bottom: var(--s-2, 0.5rem);
			border-bottom: 1px solid var(--line);
		}

		li:last-child {
			border-bottom: none;
			padding-bottom: 0;
		}

		.who {
			display: flex;
			align-items: center;
			gap: 0.45rem;
			text-decoration: none;
			color: inherit;
			min-width: 0;
		}

		.name {
			font-weight: 600;
			font-size: var(--fs-sm, 0.875rem);
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.who:hover .name {
			color: var(--accent, #4f6df5);
		}

		.verdict {
			font-size: 0.65rem;
			font-weight: 700;
			text-transform: uppercase;
			letter-spacing: 0.06em;
			padding: 0.1rem 0.4rem;
			border-radius: var(--r-pill, 999px);
			border: 1px solid currentcolor;
			white-space: nowrap;
		}

		.v-counter {
			color: var(--success, #2e7d52);
		}

		.v-check {
			color: var(--accent, #4f6df5);
		}

		/* A wall is not a counter, so it must not read like one. */
		.v-wall {
			color: var(--ink-muted);
		}

		.try {
			font-size: var(--fs-xs, 0.75rem);
			text-decoration: none;
			color: var(--ink-muted);
			border-bottom: 1px dotted currentcolor;
			white-space: nowrap;
		}

		.try:hover {
			color: var(--accent, #4f6df5);
		}

		.why {
			grid-column: 1 / -1;
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			line-height: 1.45;
		}

		.none {
			display: block;
			border: none;
			padding: 0;
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
		}

		button {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			cursor: pointer;
			margin-top: var(--s-3, 0.75rem);
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
	`,
})
export class CounterListComponent {
	readonly heading = input.required<string>();
	readonly answers = input.required<RankedAnswer[]>();
	readonly emptyText = input('Nothing on the roster answers it on typing alone.');

	/** The Pokémon this list is about — the other half of every Simulator link. */
	readonly pivotSlug = input.required<string>();

	/** `incoming` lists things that beat the pivot; `outgoing` lists what it beats. */
	readonly direction = input.required<'incoming' | 'outgoing'>();

	/** The pivot's name, for the reason sentence. */
	readonly pivotName = input.required<string>();

	readonly showSeeAll = input(false);
	readonly seeAll = output<void>();

	protected readonly label = VERDICT_LABEL;
	protected readonly reason = explain;

	/**
	 * Who each reason sentence is about.
	 *
	 * Incoming rows describe the row itself, so it stays implicit; outgoing rows describe the
	 * pivot while naming the opponent, so the pivot has to be said out loud.
	 */
	protected readonly subject = computed(() => (this.direction() === 'outgoing' ? this.pivotName() : undefined));

	protected sprite(id: number) {
		return spriteSources(id);
	}

	/** The attacker goes on the left, so the two panels do not open the same screen. */
	protected simulatorParams(answer: RankedAnswer): Record<string, string> {
		return this.direction() === 'incoming'
			? { left: answer.entry.slug, right: this.pivotSlug() }
			: { left: this.pivotSlug(), right: answer.entry.slug };
	}
}
