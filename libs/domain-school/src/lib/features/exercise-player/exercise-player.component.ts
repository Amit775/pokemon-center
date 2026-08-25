import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, computed, effect, inject, input, linkedSignal, output, viewChild } from '@angular/core';
import type { Attempt, Exercise, HintTier } from '@pokemon-center/domain-school-engine';
import { ButtonComponent } from '@pokemon-center/ui-pokedex';

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
	imports: [CdkListbox, CdkOption, ButtonComponent],
	template: `
		<article class="exercise">
			<p class="prompt">{{ exercise().prompt }}</p>

			<ul
				class="options"
				cdkListbox
				#listbox
				[attr.aria-label]="exercise().prompt"
				[cdkListboxValue]="selectedValues()"
				[cdkListboxDisabled]="isAnswered()"
				(cdkListboxValueChange)="selectFrom($event.value)"
			>
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
					<button type="button" pokedex-button="primary" (click)="next.emit()">Next</button>
				} @else {
					<button type="button" pokedex-button (click)="revealHint()" [disabled]="!canHint()">
						{{ hintsLeft() === 4 ? 'Need a hint?' : hintsLeft() + ' hint(s) left' }}
					</button>
				}
			</div>

			<p class="shortcuts">
				<kbd>1</kbd>–<kbd>{{ exercise().candidates.length }}</kbd> answer · <kbd>H</kbd> hint · <kbd>Enter</kbd> next
			</p>
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
		.shortcuts {
			margin: 0;
			color: var(--ink-faint);
			font-size: var(--fs-xs);
		}
		kbd {
			font-family: var(--font-mono);
			padding: 0 0.3em;
			border: 1px solid var(--line);
			border-radius: var(--r-sm);
			background: var(--surface-sunken);
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

	private readonly hostElement = inject<ElementRef<HTMLElement>>(ElementRef);
	private readonly destroyRef = inject(DestroyRef);

	private readonly listbox = viewChild<ElementRef<HTMLElement>>('listbox');

	constructor() {
		// Move focus to the options whenever a new question arrives, so a drill can be answered
		// entirely from the keyboard. Without this the number-key shortcuts silently do nothing
		// until the learner clicks — which defeats the point of rapid-fire practice.
		effect(() => {
			this.exercise();
			this.listbox()?.nativeElement.focus();
		});

		// Capture phase, deliberately: CdkListbox runs typeahead on keydown, and because these
		// labels *start* with digits ("2× — super effective") a plain bubbling handler loses the
		// race — pressing 2 moved focus by typeahead instead of answering. Taking digits before
		// the listbox sees them keeps ordinal shortcuts working while letters still typeahead.
		const element = this.hostElement.nativeElement;
		const onKeydown = (event: KeyboardEvent): void => this.handleKey(event);
		element.addEventListener('keydown', onKeydown, true);
		this.destroyRef.onDestroy(() => element.removeEventListener('keydown', onKeydown, true));
	}

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

	/**
	 * Drives the listbox's own selection, rather than letting it keep its own.
	 *
	 * Without this the listbox is uncontrolled: it remembers the previous question's selection,
	 * and since candidate ids repeat between questions of a lesson ("x1", "x2", …) answering the
	 * next question the *same way* is not a value change, so cdkListboxValueChange never fires
	 * and the click appears to do nothing. Binding the value means a new exercise clears it.
	 */
	protected readonly selectedValues = computed<string[]>(() => {
		const chosen = this.chosenId();
		return chosen === null ? [] : [chosen];
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
	private handleKey(event: KeyboardEvent): void {
		const claim = (): void => {
			event.preventDefault();
			event.stopPropagation();
		};

		if (this.isAnswered()) {
			if (event.key === 'Enter') {
				this.next.emit();
				claim();
			}
			return;
		}

		if (event.key.toLowerCase() === 'h') {
			this.revealHint();
			claim();
			return;
		}

		const index = Number(event.key) - 1;
		const candidates = this.exercise().candidates;
		if (Number.isInteger(index) && index >= 0 && index < candidates.length) {
			this.select(candidates[index].id);
			claim();
		}
	}
}
