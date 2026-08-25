import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { SectionHeadingComponent, UiCardComponent, UiSkeletonComponent } from '@pokemon-center/ui-pokedex';
import { DexStore } from '../dex/dex.store';
import { DRILLS, DrillKind, Question, generateQuestion } from './quiz';

/**
 * School — drills on the things that decide Champions games.
 *
 * Questions come from the live roster and the live type chart, so a drill can never teach
 * something the Pokédex contradicts, and a regulation rotation re-points the whole thing
 * without a code change.
 *
 * Answering is one tap and the explanation appears immediately. A drill that makes you wait
 * to find out whether you were right is a quiz; the point here is the correction.
 */
@Component({
	selector: 'champions-school',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SectionHeadingComponent, UiCardComponent, UiSkeletonComponent],
	template: `
		<header class="masthead">
			<div>
				<h1>School</h1>
				<p class="tagline">Drills on what actually decides games — the Champions chart, speed, and survival.</p>
			</div>
			@if (streak() > 0 || answered() > 0) {
				<span class="score">
					<strong>{{ correct() }}/{{ answered() }}</strong>
					@if (streak() >= 3) {
						<span class="streak">{{ streak() }} in a row</span>
					}
				</span>
			}
		</header>

		<div class="drills">
			@for (drill of drills; track drill.kind) {
				<button type="button" class="drill" [class.on]="kind() === drill.kind" (click)="choose(drill.kind)">
					<span class="drill-name">{{ drill.label }}</span>
					<span class="drill-blurb">{{ drill.blurb }}</span>
				</button>
			}
		</div>

		@if (dex.isLoading()) {
			<pokedex-skeleton height="12rem" />
		} @else if (question(); as current) {
			<pokedex-section-heading label="Question {{ answered() + 1 }}" />
			<pokedex-card>
				<div class="panel">
					<p class="prompt">{{ current.prompt }}</p>

					<div class="choices">
						@for (choice of current.choices; track choice.label) {
							<button
								type="button"
								class="choice"
								[class.correct]="revealed() && choice.correct"
								[class.wrong]="revealed() && chosen() === choice.label && !choice.correct"
								[disabled]="revealed()"
								(click)="answer(choice.label, choice.correct)"
							>
								{{ choice.label }}
							</button>
						}
					</div>

					@if (revealed()) {
						<p class="explanation" [class.right]="wasRight()">
							<strong>{{ wasRight() ? 'Correct.' : 'Not quite.' }}</strong>
							{{ current.explanation }}
						</p>
						<button type="button" class="primary" (click)="next()">Next question</button>
					}
				</div>
			</pokedex-card>
		} @else {
			<pokedex-card>
				<div class="panel">
					<p>The roster has not loaded yet, so there is nothing to drill on.</p>
				</div>
			</pokedex-card>
		}
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-5, 1.5rem);
			max-width: 52rem;
			margin-inline: auto;
		}

		.masthead {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			gap: var(--s-4, 1rem);
			flex-wrap: wrap;
			margin-bottom: var(--s-4, 1rem);
		}

		h1 {
			margin: 0;
			font-size: var(--fs-2xl, 2rem);
			letter-spacing: -0.02em;
		}

		.tagline {
			margin: var(--s-1, 0.25rem) 0 0;
			color: var(--ink-muted);
			max-width: 40ch;
		}

		.score {
			display: grid;
			justify-items: end;
			gap: 0.1rem;
			font-variant-numeric: tabular-nums;
		}

		.streak {
			font-size: var(--fs-xs, 0.75rem);
			color: var(--success, #2e7d52);
		}

		.drills {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
			gap: var(--s-2, 0.5rem);
			margin-bottom: var(--s-4, 1rem);
		}

		button {
			font: inherit;
			cursor: pointer;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
		}

		.drill {
			display: grid;
			gap: 0.2rem;
			padding: var(--s-3, 0.75rem);
			text-align: left;
		}

		.drill.on {
			border-color: var(--accent, #4f6df5);
			background: var(--accent-soft, rgba(79, 109, 245, 0.1));
		}

		.drill-name {
			font-weight: 600;
		}

		.drill-blurb {
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			line-height: 1.4;
		}

		.panel {
			padding: var(--s-4, 1rem);
		}

		.panel p {
			margin: 0;
			color: var(--ink-muted);
			line-height: 1.55;
		}

		.prompt {
			font-size: var(--fs-lg, 1.125rem);
			color: var(--ink) !important;
			line-height: 1.5;
			margin-bottom: var(--s-4, 1rem) !important;
		}

		.choices {
			display: grid;
			gap: 0.4rem;
		}

		.choice {
			padding: 0.6rem 0.9rem;
			text-align: left;
			min-height: 2.75rem;
		}

		.choice:hover:not(:disabled) {
			border-color: var(--accent, #4f6df5);
		}

		/* Colour is never the only signal — the explanation below states the outcome in words. */
		.choice.correct {
			border-color: var(--success, #2e7d52);
			background: color-mix(in srgb, var(--success, #2e7d52) 14%, var(--surface));
			font-weight: 600;
		}

		.choice.wrong {
			border-color: var(--danger, #d1495b);
			background: color-mix(in srgb, var(--danger, #d1495b) 12%, var(--surface));
		}

		.choice:disabled {
			cursor: default;
		}

		.explanation {
			margin-top: var(--s-4, 1rem) !important;
			padding-left: var(--s-3, 0.75rem);
			border-left: 3px solid var(--danger, #d1495b);
			line-height: 1.55;
		}

		.explanation.right {
			border-left-color: var(--success, #2e7d52);
		}

		.primary {
			margin-top: var(--s-4, 1rem);
			padding: 0.5rem 1rem;
			background: var(--accent, #4f6df5);
			border-color: var(--accent, #4f6df5);
			color: #fff;
			font-weight: 600;
			min-height: 2.5rem;
		}
	`,
})
export default class SchoolComponent {
	protected readonly dex = inject(DexStore);
	protected readonly drills = DRILLS;

	protected readonly kind = signal<DrillKind>('type-matchup');
	protected readonly seed = signal(Math.floor(Math.random() * 100000) + 1);
	protected readonly revealed = signal(false);
	protected readonly chosen = signal<string | null>(null);
	protected readonly wasRight = signal(false);

	protected readonly answered = signal(0);
	protected readonly correct = signal(0);
	protected readonly streak = signal(0);

	/**
	 * The current question.
	 *
	 * A generator can legitimately fail — a speed drill needs two Pokémon with different
	 * Speeds — so the seed is nudged until one lands rather than showing an empty card.
	 */
	protected readonly question = computed<Question | null>(() => {
		const entries = this.dex.entries();
		const chart = this.dex.typeChart();
		if (entries.length === 0 || Object.keys(chart).length === 0) return null;

		for (let attempt = 0; attempt < 25; attempt++) {
			const question = generateQuestion(this.kind(), entries, chart, this.seed() + attempt);
			if (question) return question;
		}
		return null;
	});

	protected choose(kind: DrillKind): void {
		this.kind.set(kind);
		this.next();
	}

	protected answer(label: string, isCorrect: boolean): void {
		if (this.revealed()) return;

		this.chosen.set(label);
		this.wasRight.set(isCorrect);
		this.revealed.set(true);
		this.answered.update((n) => n + 1);

		if (isCorrect) {
			this.correct.update((n) => n + 1);
			this.streak.update((n) => n + 1);
		} else {
			this.streak.set(0);
		}
	}

	protected next(): void {
		this.revealed.set(false);
		this.chosen.set(null);
		// Jump by more than the retry window above, so a fresh question is genuinely fresh.
		this.seed.update((current) => current + 37);
	}
}
