import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { generateDrill, isLessonPlayable, type Attempt } from '@pokemon-center/domain-school-engine';
import { map } from 'rxjs';
import { SchoolProgressStore } from '../../school-progress.store';
import { SchoolReference } from '../../school-reference';
import { ExercisePlayerComponent } from '../exercise-player/exercise-player.component';

const DRILL_LENGTH = 10;

const randomSeed = (): number => Math.floor(Math.random() * 0x7fffffff);

/**
 * Drill Mode: rapid-fire across every unlocked lesson.
 *
 * The whole run derives from one seed, so `?seed=8412` reproduces an identical drill for anyone
 * who opens it — the retention loop and the shareable-URL convention in one.
 */
@Component({
	selector: 'school-drill',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, ExercisePlayerComponent],
	template: `
		<header class="head">
			<a class="back" routerLink="/school">← School</a>
			<h1>{{ adaptive() ? 'Weak-spot practice' : 'Drill' }}</h1>
			@if (adaptive()) {
				<p class="sub">Weighted toward what you know least and have seen least recently, so this run is personal to you.</p>
			}
		</header>

		@if (lessonIds().length === 0) {
			<p class="empty">
				@if (reference.isLoading()) {
					Loading reference data…
				} @else if (reference.hasError() || !reference.typeChart()) {
					Reference data could not be loaded, so no exercises can be generated. Is pokedex-service running?
				} @else {
					No lessons unlocked yet. <a routerLink="/school">Start a lesson</a> first.
				}
			</p>
		} @else if (current(); as exercise) {
			<div class="progress">
				<p class="counter">Question {{ index() + 1 }} of {{ exercises().length }} · {{ correct() }} correct</p>
				<div class="meter" role="img" [attr.aria-label]="'question ' + (index() + 1) + ' of ' + exercises().length">
					<span class="fill" [style.width.%]="(index() / exercises().length) * 100"></span>
				</div>
			</div>
			<school-exercise-player [exercise]="exercise" (answered)="onAnswered($event)" (next)="onNext()" />
		} @else {
			<section class="done">
				<h2>{{ correct() }} of {{ exercises().length }}</h2>
				<p class="sub">Streak: {{ progress.streak().current }} day(s) — best {{ progress.streak().best }}.</p>
				<p class="note">Replay this exact drill: <code>?seed={{ seed() }}</code></p>
				<div class="bar">
					<button type="button" class="btn primary" (click)="again()">New drill</button>
					<a class="btn" routerLink="/school">Back to School</a>
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
			font-size: var(--fs-2xl);
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
		code {
			font-family: var(--font-mono);
		}
		.progress {
			display: flex;
			flex-direction: column;
			gap: var(--s-2);
		}
		.counter {
			margin: 0;
			color: var(--ink-faint);
			font-size: var(--fs-xs);
			text-transform: uppercase;
			letter-spacing: 0.08em;
		}
		.meter {
			height: 0.25rem;
			border-radius: var(--r-pill);
			background: var(--surface-sunken);
			overflow: hidden;
		}
		.fill {
			display: block;
			height: 100%;
			background: var(--accent);
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
		.btn {
			padding: var(--s-2) var(--s-4);
			border: 1px solid var(--line);
			border-radius: var(--r-pill);
			background: var(--surface);
			color: var(--ink);
			font: inherit;
			cursor: pointer;
		}
		.btn.primary {
			background: var(--accent);
			color: var(--accent-ink);
			border-color: var(--accent);
		}
		.btn:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}
	`,
})
export default class DrillComponent {
	protected readonly reference = inject(SchoolReference);
	protected readonly progress = inject(SchoolProgressStore);
	private readonly route = inject(ActivatedRoute);

	private readonly seedParam = toSignal(this.route.queryParamMap.pipe(map((params) => params.get('seed'))), { initialValue: null });
	private readonly adaptiveParam = toSignal(this.route.queryParamMap.pipe(map((params) => params.get('adaptive'))), { initialValue: null });
	private readonly ownSeed = signal(randomSeed());

	/** Adaptive runs bias toward weak and overdue lessons — and stop being reproducible by seed. */
	protected readonly adaptive = computed(() => this.adaptiveParam() === '1');

	/** A valid `?seed` wins; anything else falls back to a fresh one rather than erroring. */
	protected readonly seed = computed(() => {
		const raw = this.seedParam();
		const parsed = raw === null ? Number.NaN : Number(raw);
		return Number.isInteger(parsed) && parsed >= 0 ? parsed : this.ownSeed();
	});

	/** Unlocked *and* backed by loaded reference data — a drill must never stall mid-run. */
	protected readonly lessonIds = computed(() => {
		const ref = this.reference.reference();
		return this.progress
			.available()
			.map((lesson) => lesson.id)
			.filter((id) => isLessonPlayable(id, ref));
	});
	protected readonly index = signal(0);
	protected readonly correct = signal(0);

	protected readonly exercises = computed(() => {
		const ref = this.reference.reference();
		const ids = this.lessonIds();
		if (ids.length === 0) return [];
		return generateDrill(
			ids,
			this.seed(),
			DRILL_LENGTH,
			ref,
			this.reference.context(),
			this.adaptive() ? { records: this.progress.mastery() } : {},
		);
	});

	protected readonly current = computed(() => this.exercises()[this.index()]);

	protected onAnswered(attempt: Attempt): void {
		const exercise = this.current();
		if (exercise) this.progress.recordFor(exercise.lessonId, attempt);
		if (attempt.correct) this.correct.update((n) => n + 1);
	}

	protected onNext(): void {
		const next = this.index() + 1;
		this.index.set(next);
		// Fires once, on finishing — a streak counts drills completed, not questions answered.
		if (next >= this.exercises().length) this.progress.completeDrillDay();
	}

	protected again(): void {
		this.ownSeed.set(randomSeed());
		this.index.set(0);
		this.correct.set(0);
	}
}
