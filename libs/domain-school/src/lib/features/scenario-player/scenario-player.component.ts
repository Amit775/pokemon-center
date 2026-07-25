import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { ChangeDetectionStrategy, Component, computed, input, linkedSignal, output } from '@angular/core';
import type { Attempt, HintTier, Scenario, ScenarioResult } from '@pokemon-center/domain-school-engine';

/**
 * Renders one simulation and reports how well it was answered.
 *
 * Unlike the exercise player this grades on a scale: the learner sees not just that they were
 * wrong but how far off, and what the best answer had that theirs did not. For multi-pick
 * scenarios it also shows progress while choosing, since watching coverage climb as you swap a
 * move in is the lesson.
 */
@Component({
	selector: 'school-scenario-player',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CdkListbox, CdkOption],
	template: `
		<article class="scenario">
			<p class="prompt">{{ scenario().prompt }}</p>

			<ul
				class="options"
				cdkListbox
				[cdkListboxMultiple]="scenario().pick > 1"
				[cdkListboxValue]="selected()"
				[cdkListboxDisabled]="submitted()"
				(cdkListboxValueChange)="onSelect($event.value)"
			>
				@for (option of scenario().options; track option.id) {
					<li
						class="option"
						[cdkOption]="option.id"
						[class.is-optimal]="submitted() && result()!.optimalIds.includes(option.id)"
						[class.is-chosen]="selected().includes(option.id)"
					>
						<span class="label">{{ option.label }}</span>
						@if (option.detail) {
							<span class="detail">{{ option.detail }}</span>
						}
						@if (submitted() && result()!.optimalIds.includes(option.id)) {
							<span class="mark" aria-label="part of the best answer">★</span>
						}
					</li>
				}
			</ul>

			@if (!submitted()) {
				<p class="progress" role="status" aria-live="polite">
					{{ selected().length }} of {{ scenario().pick }} chosen
					@if (scenario().pick > 1 && selected().length > 0) {
						· reaching {{ liveScore() }} types so far
					}
				</p>
			}

			@if (visibleHints().length) {
				<ol class="hints">
					@for (hint of visibleHints(); track hint.tier) {
						<li><b>Hint {{ hint.tier }}</b> — {{ hint.text }}</li>
					}
				</ol>
			}

			<div class="actions">
				@if (submitted()) {
					<p class="verdict" [class.is-good]="result()!.quality === 1" role="status" aria-live="polite">
						<b>{{ verdictLabel() }}</b> {{ result()!.summary }}
					</p>
					<button type="button" class="btn primary" (click)="next.emit()">Next</button>
				} @else {
					<button type="button" class="btn primary" (click)="submit()" [disabled]="!canSubmit()">Lock it in</button>
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
		.scenario {
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
			grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
		}
		.option {
			display: flex;
			flex-direction: column;
			gap: var(--s-1);
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
		.is-chosen {
			border-color: var(--accent);
			background: var(--accent-soft);
		}
		/* The best answer is marked with a glyph as well as colour. */
		.is-optimal {
			border-color: var(--good);
		}
		.mark {
			color: var(--good);
			font-weight: 700;
		}
		.label {
			font-weight: 600;
		}
		.detail {
			color: var(--ink-muted);
			font-size: var(--fs-xs);
		}
		.progress {
			margin: 0;
			color: var(--ink-faint);
			font-size: var(--fs-xs);
			text-transform: uppercase;
			letter-spacing: 0.08em;
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
			flex: 1 1 20rem;
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
export class ScenarioPlayerComponent {
	readonly scenario = input.required<Scenario>();

	readonly answered = output<Attempt>();
	readonly next = output<void>();

	/** All reset automatically whenever a new scenario arrives. */
	protected readonly selected = linkedSignal<Scenario, string[]>({ source: this.scenario, computation: () => [] });
	protected readonly revealedTier = linkedSignal<Scenario, number>({ source: this.scenario, computation: () => 0 });
	protected readonly result = linkedSignal<Scenario, ScenarioResult | null>({ source: this.scenario, computation: () => null });

	protected readonly submitted = computed(() => this.result() !== null);
	protected readonly canSubmit = computed(() => this.selected().length === this.scenario().pick);
	protected readonly visibleHints = computed(() => this.scenario().hints.filter((h) => h.tier <= this.revealedTier()));
	protected readonly canHint = computed(() => !this.submitted() && this.revealedTier() < 4);
	protected readonly hintsLeft = computed(() => 4 - this.revealedTier());

	/** Progress while choosing — deliberately shows only what is achieved, never the optimum. */
	protected readonly liveScore = computed(() => this.scenario().grade(this.selected()).achieved);

	protected readonly verdictLabel = computed(() => {
		const quality = this.result()?.quality ?? 0;
		if (quality === 1) return 'Optimal.';
		if (quality >= 0.85) return 'Close.';
		if (quality >= 0.5) return 'Workable.';
		return 'Not the answer.';
	});

	protected onSelect(value: readonly unknown[]): void {
		if (this.submitted()) return;
		// CDK reports the listbox value as unknown[]; narrow here rather than in the template.
		this.selected.set(value.filter((id): id is string => typeof id === 'string').slice(0, this.scenario().pick));
	}

	protected submit(): void {
		if (!this.canSubmit() || this.submitted()) return;

		const graded = this.scenario().grade(this.selected());
		this.result.set(graded);

		const tier = this.revealedTier();
		this.answered.emit({
			correct: graded.quality === 1,
			deepestHintTier: tier === 0 ? null : (tier as HintTier),
			atISO: new Date().toISOString(),
			quality: graded.quality,
		});
	}

	protected revealHint(): void {
		if (this.canHint()) this.revealedTier.update((tier) => tier + 1);
	}
}
