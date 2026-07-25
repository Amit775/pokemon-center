import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { ChangeDetectionStrategy, Component, computed, input, linkedSignal, output } from '@angular/core';
import type { Attempt, Exercise, HintTier } from '@pokemon-center/domain-school-engine';

/**
 * Renders one generated exercise and reports how it was answered.
 *
 * Shared by Lesson and Drill mode. Purely presentational — it receives an Exercise and emits an
 * Attempt; it never generates, fetches, or scores. Grading is local by design (docs/school-plan.md
 * 3.3): with leaderboards an explicit non-goal there is nothing to cheat for, so the answer
 * travelling with the exercise costs us nothing and saves a round-trip per question.
 */
@Component({
	selector: 'school-exercise-player',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CdkListbox, CdkOption],
	host: { '(keydown)': 'onKeydown($event)' },
	template: `
		<article class="exercise">
			<p class="prompt">{{ exercise().prompt }}</p>

			<ul class="options" cdkListbox [cdkListboxDisabled]="isAnswered()" (cdkListboxValueChange)="selectFrom($event.value)">
				@for (candidate of exercise().candidates; track candidate.id; let i = $index) {
					<li
						class="option"
						[cdkOption]="candidate.id"
						[class.is-answer]="isAnswered() && candidate.correct"
						[class.is-mistake]="isAnswered() && !candidate.correct && candidate.id === chosenId()"
						[class.is-muted]="isAnswered() && !candidate.correct && candidate.id !== chosenId()"
					>
						<span class="key" aria-hidden="true">{{ i + 1 }}</span>
						<span class="label">{{ candidate.label }}</span>
						@if (isAnswered() && candidate.correct) {
							<span class="mark" aria-label="correct answer">✓</span>
						} @else if (isAnswered() && candidate.id === chosenId()) {
							<span class="mark" aria-label="your answer, incorrect">✗</span>
						}
					</li>
				}
			</ul>

			@if (visibleHints().length) {
				<ol class="hints">
					@for (hint of visibleHints(); track hint.tier) {
						<li><b>Hint {{ hint.tier }}</b> — {{ hint.text }}</li>
					}
				</ol>
			}

			<div class="actions">
				@if (isAnswered()) {
					<p class="verdict" [class.is-good]="wasCorrect()" role="status" aria-live="polite">
						<b>{{ wasCorrect() ? 'Correct.' : 'Not quite.' }}</b> {{ exercise().explanation }}
					</p>
					<button type="button" class="btn primary" (click)="next.emit()">Next</button>
				} @else {
					<button type="button" class="btn" (click)="revealHint()" [disabled]="!canHint()">
						{{ hintsLeft() === 4 ? 'Need a hint?' : hintsLeft() + ' hint(s) left' }}
					</button>
				}
			</div>
		</article>
	`,
	styles: `
		:host {
			display: block;
		}
		.exercise {
			display: flex;
			flex-direction: column;
			gap: var(--s-4);
		}
		.prompt {
			margin: 0;
			font-size: var(--fs-lg);
			color: var(--ink);
			line-height: 1.4;
		}
		.options {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			gap: var(--s-2);
		}
		.option {
			display: flex;
			align-items: center;
			gap: var(--s-3);
			padding: var(--s-3);
			border: 1px solid var(--line);
			border-radius: var(--r-md);
			background: var(--surface);
			color: var(--ink);
			cursor: pointer;
			transition: background var(--dur) var(--ease), border-color var(--dur) var(--ease);
		}
		.option:hover:not([aria-disabled='true']) {
			background: var(--surface-raised);
		}
		.option:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}
		.key {
			display: grid;
			place-items: center;
			min-width: 1.6em;
			padding: 0 var(--s-1);
			border-radius: var(--r-sm);
			background: var(--surface-sunken);
			color: var(--ink-faint);
			font-family: var(--font-mono);
			font-size: var(--fs-xs);
		}
		.label {
			flex: 1;
		}
		/* Correctness is never signalled by colour alone — each state carries a glyph too. */
		.mark {
			font-weight: 700;
		}
		.is-answer {
			border-color: var(--good);
			background: var(--surface-raised);
		}
		.is-answer .mark {
			color: var(--good);
		}
		.is-mistake {
			border-color: var(--crit);
		}
		.is-mistake .mark {
			color: var(--crit);
		}
		.is-muted {
			color: var(--ink-faint);
		}
		.hints {
			margin: 0;
			padding-left: var(--s-4);
			display: grid;
			gap: var(--s-2);
			color: var(--ink-muted);
			font-size: var(--fs-sm);
		}
		.actions {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: var(--s-3);
		}
		.verdict {
			flex: 1;
			margin: 0;
			color: var(--ink-muted);
			font-size: var(--fs-sm);
		}
		.verdict.is-good {
			color: var(--ink);
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
		.btn:hover:not(:disabled) {
			background: var(--surface-raised);
		}
		.btn:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}
		.btn:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
		.btn.primary {
			background: var(--accent);
			color: var(--accent-ink);
			border-color: var(--accent);
		}
		@media (prefers-reduced-motion: reduce) {
			.option {
				transition: none;
			}
		}
	`,
})
export class ExercisePlayerComponent {
	readonly exercise = input.required<Exercise>();

	readonly answered = output<Attempt>();
	readonly next = output<void>();

	/** Both reset automatically whenever a new exercise arrives. */
	protected readonly chosenId = linkedSignal<Exercise, string | null>({
		source: this.exercise,
		computation: () => null,
	});
	protected readonly revealedTier = linkedSignal<Exercise, number>({
		source: this.exercise,
		computation: () => 0,
	});

	protected readonly isAnswered = computed(() => this.chosenId() !== null);
	protected readonly visibleHints = computed(() => this.exercise().hints.filter((h) => h.tier <= this.revealedTier()));
	protected readonly canHint = computed(() => !this.isAnswered() && this.revealedTier() < 4);
	protected readonly hintsLeft = computed(() => 4 - this.revealedTier());
	protected readonly wasCorrect = computed(() => this.exercise().candidates.find((c) => c.id === this.chosenId())?.correct ?? false);

	/** CDK reports the listbox value as an array of `unknown`; narrow it here rather than in the template. */
	protected selectFrom(value: readonly unknown[]): void {
		const candidateId = value[0];
		if (typeof candidateId === 'string') this.select(candidateId);
	}

	protected select(candidateId: string | undefined): void {
		if (candidateId === undefined || this.isAnswered()) return;
		this.chosenId.set(candidateId);

		const tier = this.revealedTier();
		this.answered.emit({
			correct: this.exercise().candidates.find((c) => c.id === candidateId)?.correct ?? false,
			deepestHintTier: tier === 0 ? null : (tier as HintTier),
			atISO: new Date().toISOString(),
		});
	}

	protected revealHint(): void {
		if (this.canHint()) this.revealedTier.update((tier) => tier + 1);
	}

	/** Answering without reaching for the mouse is the whole point of rapid-fire drilling. */
	protected onKeydown(event: KeyboardEvent): void {
		if (this.isAnswered()) {
			if (event.key === 'Enter') {
				this.next.emit();
				event.preventDefault();
			}
			return;
		}

		if (event.key.toLowerCase() === 'h') {
			this.revealHint();
			event.preventDefault();
			return;
		}

		const index = Number(event.key) - 1;
		const candidates = this.exercise().candidates;
		if (Number.isInteger(index) && index >= 0 && index < candidates.length) {
			this.select(candidates[index].id);
			event.preventDefault();
		}
	}
}
