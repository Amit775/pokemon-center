import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatchupAnalysisDocument, gqlResource } from '@pokemon-center/data-access-pokedex';
import {
	MATCHUP_LESSON_ID,
	buildLocalScenario,
	buildMatchupScenario,
	curriculum,
	findLesson,
	isLessonPlayable,
	pickMatchupDefender,
	type Attempt,
	type Scenario,
} from '@pokemon-center/domain-school-engine';
import { map } from 'rxjs';
import { SchoolProgressStore } from '../../school-progress.store';
import { SchoolReference } from '../../school-reference';
import { ScenarioPlayerComponent } from '../scenario-player/scenario-player.component';

const randomSeed = (): number => Math.floor(Math.random() * 0x7fffffff);

/**
 * Simulation Mode.
 *
 * Orchestrates the one asymmetry in the engine: coverage builds entirely from loaded reference
 * data, while matchup needs a defender chosen first and then ranked server-side. Keeping that
 * fetch here is what lets the engine stay pure (docs/school-plan.md 3.1).
 */
@Component({
	selector: 'school-simulation',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, ScenarioPlayerComponent],
	template: `
		@if (lesson(); as lesson) {
			<header class="head">
				<a class="back" routerLink="/school">← School</a>
				<h1>{{ lesson.title }}</h1>
				<p class="sub">{{ lesson.summary }}</p>
			</header>

			@if (scenario(); as scenario) {
				<school-scenario-player [scenario]="scenario" (answered)="onAnswered($event)" (next)="onNext()" />
				<p class="note">Mastery for this simulation: {{ percent() }}%</p>
			} @else {
				<p class="empty">
					@if (reference.isLoading() || matchupLoading()) {
						Setting up the scenario…
					} @else if (reference.hasError()) {
						Reference data could not be loaded. Is pokedex-service running?
					} @else {
						This simulation needs data that isn’t available yet. <a routerLink="/school">Back to School</a>
					}
				</p>
			}
		} @else {
			<p class="empty">Unknown simulation. <a routerLink="/school">Back to School</a></p>
		}
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-5);
			max-width: 52rem;
			display: flex;
			flex-direction: column;
			gap: var(--s-4);
		}
		h1 {
			margin: 0;
			font-size: var(--fs-xl);
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
		.empty {
			color: var(--ink-muted);
		}
	`,
})
export default class SimulationComponent {
	protected readonly reference = inject(SchoolReference);
	private readonly progress = inject(SchoolProgressStore);
	private readonly route = inject(ActivatedRoute);

	private readonly lessonId = toSignal(this.route.paramMap.pipe(map((params) => params.get('lessonId'))), { initialValue: null });
	private readonly seed = signal(randomSeed());

	protected readonly lesson = computed(() => {
		const id = this.lessonId();
		return id ? findLesson(curriculum, id) : undefined;
	});

	private readonly isMatchup = computed(() => this.lesson()?.id === MATCHUP_LESSON_ID);

	/** Chosen before fetching — the defender is what the server ranks counters against. */
	private readonly defenderTypes = computed(() => {
		const chart = this.reference.typeChart();
		return chart && this.isMatchup() ? pickMatchupDefender(this.seed(), chart) : [];
	});

	private readonly matchupQuery = gqlResource(MatchupAnalysisDocument, () => ({
		defenderTypes: this.defenderTypes(),
		versionGroup: this.reference.versionGroup(),
		take: 20,
	}));

	protected readonly matchupLoading = computed(() => this.isMatchup() && this.matchupQuery.isLoading());

	protected readonly scenario = computed<Scenario | null>(() => {
		const lesson = this.lesson();
		if (!lesson) return null;

		const ref = this.reference.reference();
		if (!isLessonPlayable(lesson.id, ref)) return null;

		if (!this.isMatchup()) return buildLocalScenario(lesson.id, this.seed(), ref, this.reference.context());

		const defenders = this.defenderTypes();
		const rows = this.matchupQuery.hasValue() ? (this.matchupQuery.value()?.matchupAnalysis ?? []) : [];
		// A thin field can happen for an odd type combo in a small era; better to say "not
		// available" than to build a scenario with two options.
		if (defenders.length === 0 || rows.length < 6) return null;

		return buildMatchupScenario(
			this.seed(),
			defenders,
			rows.map((row) => ({
				slug: row.pokemonSlug,
				bestMove: row.bestMove,
				bestMoveType: row.bestMoveType,
				effectiveness: row.effectiveness,
				score: row.score,
			})),
			this.reference.context(),
		);
	});

	protected readonly percent = computed(() => {
		const lesson = this.lesson();
		return lesson ? Math.round(this.progress.scoreFor(lesson.id) * 100) : 0;
	});

	protected onAnswered(attempt: Attempt): void {
		const lesson = this.lesson();
		if (lesson) this.progress.recordFor(lesson.id, attempt);
	}

	/** A new seed means a new defender and a fresh fetch, not a replay of the same scenario. */
	protected onNext(): void {
		this.seed.set(randomSeed());
	}
}
