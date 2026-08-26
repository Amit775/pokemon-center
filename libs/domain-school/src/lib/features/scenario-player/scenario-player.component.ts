import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, computed, effect, inject, input, linkedSignal, output, viewChild } from '@angular/core';
import type { Attempt, HintTier, Scenario, ScenarioResult } from '@pokemon-center/domain-school-engine';
import { ButtonComponent } from '@pokemon-center/ui-pokedex';

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
	imports: [CdkListbox, CdkOption, ButtonComponent],
	template: `
		<article class="scenario">
			<p class="prompt">{{ scenario().prompt }}</p>

			<ul
				class="options"
				cdkListbox
				#listbox
				[attr.aria-label]="scenario().prompt"
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
					<button type="button" pokedex-button="primary" (click)="next.emit()">Next</button>
				} @else {
					<button type="button" pokedex-button="primary" (click)="submit()" [disabled]="!canSubmit()">Lock it in</button>
					<button type="button" pokedex-button (click)="revealHint()" [disabled]="!canHint()">
						{{ hintsLeft() === 4 ? 'Need a hint?' : hintsLeft() + ' hint(s) left' }}
					</button>
				}
			</div>

			<p class="shortcuts">
				<kbd>1</kbd>–<kbd>{{ scenario().options.length }}</kbd> choose · <kbd>H</kbd> hint · <kbd>Enter</kbd>
				{{ submitted() ? 'next' : 'lock it in' }}
			</p>
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
export class ScenarioPlayerComponent {
	readonly scenario = input.required<Scenario>();

	private readonly hostElement = inject<ElementRef<HTMLElement>>(ElementRef);
	private readonly destroyRef = inject(DestroyRef);
	private readonly listbox = viewChild<ElementRef<HTMLElement>>('listbox');

	constructor() {
		effect(() => {
			this.scenario();
			this.listbox()?.nativeElement.focus();
		});

		// Capture phase so digit shortcuts beat CdkListbox's typeahead — see ExercisePlayer.
		const element = this.hostElement.nativeElement;
		const onKeydown = (event: KeyboardEvent): void => this.handleKey(event);
		element.addEventListener('keydown', onKeydown, true);
		this.destroyRef.onDestroy(() => element.removeEventListener('keydown', onKeydown, true));
	}

	readonly answered = output<Attempt>();
	readonly next = output<void>();

	/** All reset automatically whenever a new scenario arrives. */
	protected readonly selected = linkedSignal<Scenario, string[]>({ source: this.scenario, computation: () => [] });
	protected readonly revealedTier = linkedSignal<Scenario, number>({ source: this.scenario, computation: () => 0 });
	protected readonly result = linkedSignal<Scenario, ScenarioResult | null>({ source: this.scenario, computation: () => null });

	protected readonly submitted = computed(() => this.result() !== null);
	protected readonly canSubmit = computed(() => this.selected().length === this.scenario().pick);
	protected readonly visibleHints = computed(() => this.scenario().hints.filter((hint) => hint.tier <= this.revealedTier()));
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

	/**
	 * Number keys toggle an option, which matters more here than in an exercise: a four-pick
	 * scenario is a lot of mousing otherwise, and comparing combinations is the actual work.
	 */
	private handleKey(event: KeyboardEvent): void {
		const claim = (): void => {
			event.preventDefault();
			event.stopPropagation();
		};

		if (event.key === 'Enter') {
			if (this.submitted()) this.next.emit();
			else this.submit();
			claim();
			return;
		}

		if (this.submitted()) return;

		if (event.key.toLowerCase() === 'h') {
			this.revealHint();
			claim();
			return;
		}

		const index = Number(event.key) - 1;
		const options = this.scenario().options;
		if (!Number.isInteger(index) || index < 0 || index >= options.length) return;

		const id = options[index].id;
		const current = this.selected();
		if (current.includes(id)) this.selected.set(current.filter((chosen) => chosen !== id));
		else if (current.length < this.scenario().pick) this.selected.set([...current, id]);
		claim();
	}
}
