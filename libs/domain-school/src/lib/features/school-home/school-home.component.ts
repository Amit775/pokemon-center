import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { curriculum, findLesson, isLessonPlayable, lessonKind } from '@pokemon-center/domain-school-engine';
import { SchoolProgressStore } from '../../school-progress.store';
import { SchoolReference } from '../../school-reference';

/** The curriculum map: what is open, what is mastered, and where to start. */
@Component({
	selector: 'school-home',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink],
	template: `
		<header class="head">
			<div>
				<h1>School</h1>
				<p class="sub">Lessons and drills generated from the mechanics data — never a fixed question bank.</p>
			</div>
			@if (progress.streak().current > 0) {
				<p class="streak">🔥 {{ progress.streak().current }} day streak <span class="best">best {{ progress.streak().best }}</span></p>
			}
		</header>

		<p class="era">
			Studying: <b>{{ eraLabel() }}</b>
			@if (reference.isLoading()) {
				<span class="note">loading type chart…</span>
			} @else if (reference.hasError() || !reference.typeChart()) {
				<span class="note warn">type chart unavailable — is pokedex-service running?</span>
			}
		</p>

		<div class="bar">
			<a class="btn primary" routerLink="/school/drill">Start a drill</a>
			<a class="btn" routerLink="/school/drill" [queryParams]="{ adaptive: 1 }">Practise weak spots</a>
			<a class="btn" routerLink="/school/placement">Placement test</a>
			<label class="toggle">
				<input type="checkbox" [checked]="progress.unlockOverride()" (change)="toggleUnlockAll($event)" />
				Unlock everything
			</label>
		</div>

		@if (weakest(); as weakest) {
			<p class="note">Most in need of practice right now: <b>{{ weakest }}</b></p>
		}

		@for (module of modules(); track module.id) {
			<section class="module">
				<h2>{{ module.title }}</h2>
				<p class="sub">{{ module.summary }}</p>

				<ul class="lessons">
					@for (lesson of module.lessons; track lesson.id) {
						<li class="lesson" [class.is-locked]="!lesson.startable">
							<div class="lesson-head">
								@if (lesson.startable) {
									<a [routerLink]="[lesson.route, lesson.id]">{{ lesson.title }}</a>
									@if (lesson.scenario) {
										<span class="badge sim">simulation</span>
									}
								} @else if (!lesson.unlocked) {
									<span class="locked-title">🔒 {{ lesson.title }}</span>
								} @else {
									<span class="locked-title">{{ lesson.title }}</span>
								}
								@if (lesson.mastered) {
									<span class="badge">mastered</span>
								}
							</div>
							<p class="sub">{{ lesson.summary }}</p>
							<div class="meter" role="img" [attr.aria-label]="'mastery ' + lesson.percent + '%'">
								<span class="fill" [style.width.%]="lesson.percent"></span>
							</div>
							@if (!lesson.unlocked) {
								<p class="note">Needs: {{ lesson.prereqTitles }}</p>
							} @else if (!lesson.playable) {
								<p class="note">Waiting on reference data the API doesn’t serve yet.</p>
							}
						</li>
					}
				</ul>
			</section>
		}
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-5);
			display: flex;
			flex-direction: column;
			gap: var(--s-5);
		}
		h1 {
			margin: 0;
			font-size: var(--fs-2xl);
			color: var(--ink);
		}
		h2 {
			margin: 0;
			font-size: var(--fs-lg);
			color: var(--ink);
		}
		.head {
			display: flex;
			flex-wrap: wrap;
			gap: var(--s-3);
			justify-content: space-between;
			align-items: flex-start;
		}
		.sub {
			margin: 0;
			color: var(--ink-muted);
			font-size: var(--fs-sm);
		}
		.note {
			color: var(--ink-faint);
			font-size: var(--fs-xs);
		}
		.note.warn {
			color: var(--warn);
		}
		.streak {
			margin: 0;
			color: var(--ink);
		}
		.best {
			color: var(--ink-faint);
			font-size: var(--fs-xs);
		}
		.era {
			margin: 0;
			color: var(--ink-muted);
			font-size: var(--fs-sm);
			display: flex;
			gap: var(--s-2);
			align-items: baseline;
			flex-wrap: wrap;
		}
		.bar {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: var(--s-4);
		}
		.toggle {
			display: flex;
			align-items: center;
			gap: var(--s-2);
			color: var(--ink-muted);
			font-size: var(--fs-sm);
			cursor: pointer;
		}
		.module {
			display: flex;
			flex-direction: column;
			gap: var(--s-3);
		}
		.lessons {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			gap: var(--s-3);
			grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
		}
		.lesson {
			display: flex;
			flex-direction: column;
			gap: var(--s-2);
			padding: var(--s-4);
			border: 1px solid var(--line);
			border-radius: var(--r-lg);
			background: var(--surface);
		}
		.lesson.is-locked {
			opacity: 0.65;
		}
		.lesson-head {
			display: flex;
			align-items: center;
			gap: var(--s-2);
			justify-content: space-between;
		}
		.lesson-head a {
			color: var(--ink);
			font-weight: 600;
		}
		.locked-title {
			color: var(--ink-muted);
			font-weight: 600;
		}
		.badge {
			padding: 0 var(--s-2);
			border-radius: var(--r-pill);
			background: var(--accent-soft);
			color: var(--ink);
			font-size: var(--fs-xs);
		}
		.badge.sim {
			background: var(--surface-sunken);
			color: var(--ink-muted);
		}
		.meter {
			height: 0.4rem;
			border-radius: var(--r-pill);
			background: var(--surface-sunken);
			overflow: hidden;
		}
		.fill {
			display: block;
			height: 100%;
			background: var(--accent);
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
export default class SchoolHomeComponent {
	protected readonly progress = inject(SchoolProgressStore);
	protected readonly reference = inject(SchoolReference);

	protected readonly eraLabel = computed(() => this.reference.versionGroup() ?? 'all games (modern rules)');

	/** Only worth surfacing once there is history to rank; before that everything is equally new. */
	protected readonly weakest = computed(() => {
		if (this.progress.mastery().length === 0) return null;
		const top = this.progress.practiceOrder()[0];
		return top ? (findLesson(curriculum, top.lessonId)?.title ?? null) : null;
	});

	protected readonly modules = computed(() => {
		const open = new Set(this.progress.available().map((l) => l.id));
		const titles = new Map(curriculum.flatMap((m) => m.lessons).map((l) => [l.id, l.title]));
		const ref = this.reference.reference();

		return curriculum.map((module) => ({
			...module,
			lessons: module.lessons.map((lesson) => {
				// Two different reasons a lesson may not be startable: the curriculum graph has
				// not opened it yet, or its reference data has not loaded. They read differently
				// to the learner, so they are tracked separately.
				const playable = isLessonPlayable(lesson.id, ref);
				const scenario = lessonKind(lesson) === 'scenario';
				return {
					...lesson,
					unlocked: open.has(lesson.id),
					playable,
					scenario,
					route: scenario ? '/school/simulation' : '/school/lesson',
					startable: open.has(lesson.id) && playable,
					mastered: this.progress.hasMastered(lesson.id),
					percent: Math.round(this.progress.scoreFor(lesson.id) * 100),
					prereqTitles: lesson.prereqs.map((id) => titles.get(id) ?? id).join(', '),
				};
			}),
		}));
	});

	protected toggleUnlockAll(event: Event): void {
		this.progress.setUnlockOverride((event.target as HTMLInputElement).checked);
	}
}
