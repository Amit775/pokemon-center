import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { buildPlacementTest, findLesson, curriculum, placementUnlocks, type Attempt, type LessonId } from '@pokemon-center/domain-school-engine';
import { SchoolProgressStore } from '../../school-progress.store';
import { SchoolReference } from '../../school-reference';
import { ExercisePlayerComponent } from '../exercise-player/exercise-player.component';
import { ButtonComponent } from '@pokemon-center/ui-pokedex';

/**
 * The placement test — the smart version of the ruleset's opt-out.
 *
 * Answers here open the curriculum but are deliberately *not* recorded as mastery attempts.
 * Placement measures prior knowledge to decide gating; mastery measures practice. Mixing them
 * would let one cold, hint-free, out-of-context question drag the score of a lesson the learner
 * has never actually studied.
 */
@Component({
	selector: 'school-placement',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, ExercisePlayerComponent, ButtonComponent],
	template: `
		<header class="head">
			<a class="back" routerLink="/school">← School</a>
			<h1>Placement test</h1>
			<p class="sub">One question per topic. Whatever you already know gets unlocked — no need to work up to it.</p>
		</header>

		@if (questions().length === 0) {
			<p class="empty">
				@if (reference.isLoading()) {
					Preparing the test…
				} @else {
					Reference data could not be loaded. Is pokedex-service running?
				}
			</p>
		} @else if (current(); as question) {
			<p class="counter">Question {{ index() + 1 }} of {{ questions().length }}</p>
			<school-exercise-player [exercise]="question.exercise" (answered)="onAnswered($event)" (next)="onNext()" />
		} @else {
			<section class="done">
				<h2>{{ passed().length }} of {{ questions().length }} correct</h2>
				@if (unlockedTitles().length) {
					<p class="sub">Unlocked: {{ unlockedTitles().join(', ') }}.</p>
				} @else {
					<p class="sub">Nothing unlocked — start from the beginning and the graph will open as you go.</p>
				}
				<p class="note">These answers decide what is open to you; they are not counted as practice.</p>
				<div class="bar">
					<a pkd-button="primary" routerLink="/school">Back to School</a>
					<button type="button" pkd-button (click)="again()">Retake</button>
				</div>
			</section>
		}
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-5);
			max-width: 44rem;
			display: flex;
			flex-direction: column;
			gap: var(--s-4);
		}
		h1 {
			margin: 0;
			font-size: var(--fs-xl);
			color: var(--ink);
		}
		h2 {
			margin: 0;
			font-size: var(--fs-lg);
			color: var(--ink);
		}
		.head {
			display: flex;
			flex-direction: column;
			gap: var(--s-2);
		}
		.back {
			color: var(--ink-muted);
			font-size: var(--fs-sm);
		}
		.sub {
			margin: 0;
			color: var(--ink-muted);
			font-size: var(--fs-sm);
		}
		.note {
			margin: 0;
			color: var(--ink-faint);
			font-size: var(--fs-xs);
		}
		.counter {
			margin: 0;
			color: var(--ink-faint);
			font-size: var(--fs-xs);
			text-transform: uppercase;
			letter-spacing: 0.08em;
		}
		.empty {
			color: var(--ink-muted);
		}
		.done {
			display: flex;
			flex-direction: column;
			gap: var(--s-3);
		}
		.bar {
			display: flex;
			flex-wrap: wrap;
			gap: var(--s-3);
		}
	`,
})
export default class PlacementComponent {
	protected readonly reference = inject(SchoolReference);
	private readonly progress = inject(SchoolProgressStore);

	private readonly seed = signal(Math.floor(Math.random() * 0x7fffffff));
	protected readonly index = signal(0);
	protected readonly passed = signal<LessonId[]>([]);

	protected readonly questions = computed(() => buildPlacementTest(this.seed(), this.reference.reference(), this.reference.context()));
	protected readonly current = computed(() => this.questions()[this.index()]);

	protected readonly unlockedTitles = computed(() =>
		[...placementUnlocks(this.passed())].map((id) => findLesson(curriculum, id)?.title ?? id).sort(),
	);

	protected onAnswered(attempt: Attempt): void {
		const question = this.current();
		if (question && attempt.correct) this.passed.update((passed) => [...passed, question.lessonId]);
	}

	protected onNext(): void {
		const next = this.index() + 1;
		this.index.set(next);
		// Applied once, at the end — unlocking mid-test would change the ground under it.
		if (next >= this.questions().length) this.progress.applyPlacement(placementUnlocks(this.passed()));
	}

	protected again(): void {
		this.seed.set(Math.floor(Math.random() * 0x7fffffff));
		this.index.set(0);
		this.passed.set([]);
	}
}
