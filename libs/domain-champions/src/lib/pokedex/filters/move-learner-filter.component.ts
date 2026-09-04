import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { PokedexStore } from '../pokedex.store';
import { ExternalFiltersStore } from './external-filters.store';

/** One entry from `PokedexStore.moveIndex()` — name and slug only, no learnset. */
type MoveIndexEntry = ReturnType<InstanceType<typeof PokedexStore>['moveIndex']>[number];

/**
 * The move section of the Champions filters panel.
 *
 * Ported from the retired `PokedexFiltersComponent` sidebar (`git show
 * e2314fea:libs/domain-champions/src/lib/pokedex/pokedex-filters.component.ts`): a move-name
 * autocomplete that, once a move is picked, fetches who learns it.
 *
 * The fetch itself is not duplicated here: `PokedexStore` already runs it (`_learnersQuery`, keyed
 * off `PokedexStore.patch({ move })`) for the retired sidebar's own filtering, and exposes the
 * result as `moveLearners()` plus a matching `isLoadingLearners()`. This component drives that
 * existing machinery — `pickMove`/`clearMove` call `PokedexStore.patch` — and its only new
 * responsibility is keeping `ExternalFiltersStore.learners` (the field the roster's grid actually
 * filters on) in step with it.
 *
 * That sync is the one subtlety here: `PokedexStore.moveLearners()` is `null` both before a move
 * is picked and while its fetch is outstanding — "asked for, not arrived yet" — and the `effect`
 * below simply forwards whatever it reads, never fabricating an empty `Set` of its own. That is
 * what preserves `ExternalFiltersStore.passes()`'s skip-don't-empty reading: a `null` still
 * arriving at `learners` while `move` is set is exactly the "skip this predicate" case `passes()`
 * already implements, not a "nobody learns this" answer.
 */
@Component({
	selector: 'champions-move-learner-filter',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		@if (pokedex.pickedMove(); as move) {
			<div class="picked">
				<span>{{ move.name }}</span>
				@if (pokedex.isLoadingLearners()) {
					<span class="loading">finding learners…</span>
				}
				<button type="button" (click)="clearMove()" aria-label="Clear the move filter">×</button>
			</div>
		} @else {
			<div class="autocomplete">
				<input
					type="search"
					[value]="moveTerm()"
					(input)="moveTerm.set($any($event.target).value)"
					placeholder="Learns a move…"
					aria-label="Filter by move"
					role="combobox"
					aria-controls="move-list"
					[attr.aria-expanded]="moveResults().length > 0"
					aria-autocomplete="list"
				/>
				@if (moveResults().length > 0) {
					<ul role="listbox" id="move-list">
						@for (move of moveResults(); track move.slug) {
							<li role="option" [attr.aria-selected]="false">
								<button type="button" (click)="pickMove(move.slug)">{{ move.name }}</button>
							</li>
						}
					</ul>
				}
			</div>
		}
	`,
	styles: `
		:host {
			display: block;
		}

		.autocomplete {
			position: relative;
		}

		.autocomplete input {
			width: 100%;
			font: inherit;
			padding: 0.5rem 0.65rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
		}

		.autocomplete ul {
			position: absolute;
			z-index: 10;
			top: calc(100% + 0.2rem);
			left: 0;
			right: 0;
			list-style: none;
			margin: 0;
			padding: 0.2rem;
			max-height: 14rem;
			overflow-y: auto;
			border: 1.5px solid var(--line);
			border-radius: var(--r-md, 8px);
			background: var(--surface);
			box-shadow: var(--shadow-md, 0 6px 18px rgba(0, 0, 0, 0.25));
		}

		.autocomplete li button {
			display: flex;
			width: 100%;
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			text-align: left;
			padding: 0.2rem 0.35rem;
			border: none;
			border-radius: var(--r-sm, 4px);
			background: none;
			color: inherit;
			cursor: pointer;
		}

		.picked {
			display: flex;
			align-items: center;
			gap: 0.4rem;
			padding: 0.25rem 0.3rem 0.25rem 0.5rem;
			border: 1.5px solid var(--accent, #4f6df5);
			border-radius: var(--r-md, 8px);
			font-size: var(--fs-sm, 0.875rem);
		}

		.picked button {
			font: inherit;
			font-size: 1.05rem;
			line-height: 1;
			margin-left: auto;
			cursor: pointer;
			border: none;
			background: none;
			color: var(--ink-muted);
			padding: 0.2rem 0.35rem;
		}

		.loading {
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			font-style: italic;
		}
	`,
})
export class MoveLearnerFilterComponent {
	protected readonly pokedex = inject(PokedexStore);
	protected readonly filters = inject(ExternalFiltersStore);

	protected readonly moveTerm = signal('');

	/** Move-name search for the autocomplete, prefix matches first — same ranking as the old sidebar. */
	protected readonly moveResults = computed<MoveIndexEntry[]>(() => {
		const term = this.moveTerm().trim().toLowerCase();
		if (term.length < 2) return [];

		return this.pokedex
			.moveIndex()
			.filter((move) => move.name.toLowerCase().includes(term))
			.sort((first, second) => Number(second.name.toLowerCase().startsWith(term)) - Number(first.name.toLowerCase().startsWith(term)))
			.slice(0, 8);
	});

	/**
	 * The only wiring this control adds: forward `PokedexStore`'s fetch result into the store the
	 * grid actually filters on. Guarded so a `null` → `null` transition (nothing picked yet, or
	 * this component simply being created) never bumps `ExternalFiltersStore.version` for no
	 * reason — see the class doc for why forwarding `null` untouched (not skipping it) still
	 * matters once a move *is* picked.
	 */
	private readonly syncLearners = effect(() => {
		const learners = this.pokedex.moveLearners();

		untracked(() => {
			if (learners !== this.filters.learners()) this.filters.setLearners(learners);
		});
	});

	protected pickMove(slug: string): void {
		this.pokedex.patch({ move: slug });
		this.filters.setMove(slug);
		this.moveTerm.set('');
	}

	protected clearMove(): void {
		this.pokedex.patch({ move: null });
		this.filters.setMove(null);
		this.moveTerm.set('');
	}
}
