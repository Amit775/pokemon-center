import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { curriculum, findLesson, generateDrill, isLessonPlayable, type Attempt } from '@pokemon-center/domain-school-engine';
import { map } from 'rxjs';
import { SchoolProgressStore } from '../../school-progress.store';
import { SchoolReference } from '../../school-reference';
import { ExercisePlayerComponent } from '../exercise-player/exercise-player.component';
import { ButtonComponent } from '@pokemon-center/ui-pokedex';

/** How many generated checks a single pass through a lesson asks for. */
const CHECKS_PER_LESSON = 5;

/**
 * Lesson Mode: the authored frame (title, summary) wrapped around generated checks.
 *
 * A lesson is never read-only — you cannot leave without answering, which is the difference
 * between reading about the type chart and knowing it.
 */
@Component({
	selector: 'school-lesson',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, ExercisePlayerComponent, ButtonComponent],
	template: `
		@if (lesson(); as lesson) {
			<header class="head">
				<a class="back" routerLink="/school">← School</a>
				<h1>{{ lesson.title }}</h1>
				<p class="sub">{{ lesson.summary }}</p>
			</header>

			@if (!playable()) {
				<p class="empty">
					@if (reference.isLoading()) {
						Loading reference data…
					} @else if (reference.hasError()) {
						Reference data could not be loaded, so no exercises can be generated. Is pokedex-service running?
					} @else {
						This lesson needs reference data the API doesn’t serve yet. <a routerLink="/school">Back to School</a>
					}
				</p>
			} @else if (current(); as exercise) {
				<p class="counter">Check {{ index() + 1 }} of {{ exercises().length }}</p>
				<school-exercise-player [exercise]="exercise" (answered)="onAnswered($event)" (next)="onNext()" />
			} @else {
				<section class="done">
					<h2>Done — {{ correct() }} of {{ exercises().length }} unaided or hinted correctly</h2>
					<p class="sub">Mastery for this lesson is now {{ percent() }}%.</p>
					<div class="bar">
						<button type="button" pokedex-button="primary" (click)="again()">Go again</button>
						<a pokedex-button routerLink="/school">Back to School</a>
						<a pokedex-button routerLink="/school/drill">Drill everything</a>
					</div>
				</section>
			}
		} @else {
			<p class="empty">Unknown lesson. <a routerLink="/school">Back to School</a></p>
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
export default class LessonComponent {
	protected readonly reference = inject(SchoolReference);
	private readonly progress = inject(SchoolProgressStore);
	private readonly route = inject(ActivatedRoute);

	private readonly lessonId = toSignal(this.route.paramMap.pipe(map((params) => params.get('lessonId'))), { initialValue: null });

	protected readonly lesson = computed(() => {
		const id = this.lessonId();
		return id ? findLesson(curriculum, id) : undefined;
	});

	private readonly seed = signal(Math.floor(Math.random() * 0x7fffffff));
	protected readonly index = signal(0);
	protected readonly correct = signal(0);

	protected readonly playable = computed(() => {
		const lesson = this.lesson();
		return lesson !== undefined && isLessonPlayable(lesson.id, this.reference.reference());
	});

	protected readonly exercises = computed(() => {
		const lesson = this.lesson();
		if (!lesson || !this.playable()) return [];
		return generateDrill([lesson.id], this.seed(), CHECKS_PER_LESSON, this.reference.reference(), this.reference.context());
	});

	protected readonly current = computed(() => this.exercises()[this.index()]);
	protected readonly percent = computed(() => {
		const lesson = this.lesson();
		return lesson ? Math.round(this.progress.scoreFor(lesson.id) * 100) : 0;
	});

	protected onAnswered(attempt: Attempt): void {
		const lesson = this.lesson();
		if (lesson) this.progress.recordFor(lesson.id, attempt);
		if (attempt.correct) this.correct.update((n) => n + 1);
	}

	protected onNext(): void {
		this.index.update((i) => i + 1);
	}

	/** A fresh seed, so "go again" is genuinely different questions rather than a replay. */
	protected again(): void {
		this.seed.set(Math.floor(Math.random() * 0x7fffffff));
		this.index.set(0);
		this.correct.set(0);
	}
}
