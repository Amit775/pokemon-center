import { ChangeDetectionStrategy, Component, ElementRef, computed, effect, input, output, signal, viewChild } from '@angular/core';
import { ChampionsSearchDocument, championsResource } from '@pokemon-center/data-access-champions';
import { TypeChipComponent } from '@pokemon-center/ui-pokedex';

/**
 * One team slot: shows the chosen Pokémon, or opens a keyboard-first search.
 *
 * The whole advisor lives or dies on this component. Entering an opponent's six happens
 * during a 90-second team preview, so the interaction budget is roughly two seconds per
 * slot: type three letters, press Enter, move on. That rules out dropdowns, modals and
 * mouse-only affordances — everything here is reachable from the keyboard, and the first
 * result is always the one Enter takes.
 */
@Component({
	selector: 'champions-slot-picker',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TypeChipComponent],
	template: `
		@if (isEditing()) {
			<div class="editor">
				<!--
					A combobox, not a menu: focus stays in the input while the arrow keys move
					aria-activedescendant across the options. That is what lets "type, arrow,
					Enter" work without ever leaving the keyboard.
				-->
				<input
					#searchInput
					type="text"
					class="search"
					role="combobox"
					[value]="term()"
					(input)="onInput($event)"
					(keydown)="onKeydown($event)"
					[attr.aria-label]="'Search Pokémon for slot ' + (index() + 1)"
					[attr.aria-expanded]="results().length > 0"
					[attr.aria-controls]="listId"
					[attr.aria-activedescendant]="results().length > 0 ? listId + '-' + highlighted() : null"
					aria-autocomplete="list"
					placeholder="Type a name…"
					autocomplete="off"
					spellcheck="false"
				/>

				@if (results().length > 0) {
					<ul class="results" role="listbox" [id]="listId">
						@for (result of results(); track result.slug; let i = $index) {
							<li
								role="option"
								[id]="listId + '-' + i"
								[attr.aria-selected]="i === highlighted()"
								[class.highlighted]="i === highlighted()"
								tabindex="-1"
								(mouseenter)="highlighted.set(i)"
								(click)="choose(result.slug)"
								(keydown.enter)="choose(result.slug)"
								(keydown.space)="choose(result.slug)"
							>
								<span class="name">{{ result.name }}</span>
								<span class="chips">
									@for (type of result.types; track type) {
										<pokedex-type-chip [type]="type" />
									}
								</span>
								<span class="bst">{{ result.baseStats.total }}</span>
							</li>
						}
					</ul>
				} @else if (term().length > 0 && !search.isLoading()) {
					<p class="empty">Nothing legal in this regulation matches “{{ term() }}”.</p>
				}
			</div>
		} @else if (selected(); as mon) {
			<button type="button" class="filled" (click)="startEditing()" [attr.aria-label]="'Change ' + mon.name">
				<span class="name">{{ mon.name }}</span>
				<span class="chips">
					@for (type of mon.types; track type) {
						<pokedex-type-chip [type]="type" />
					}
				</span>
			</button>
			<button type="button" class="clear" (click)="clear.emit()" [attr.aria-label]="'Remove ' + mon.name">×</button>
		} @else {
			<button type="button" class="empty-slot" (click)="startEditing()" [attr.aria-label]="'Add Pokémon to slot ' + (index() + 1)">
				<span aria-hidden="true">+</span>
			</button>
		}
	`,
	styles: `
		:host {
			display: block;
			position: relative;
		}

		button {
			font: inherit;
			cursor: pointer;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
		}

		.empty-slot {
			width: 100%;
			min-height: 3.25rem;
			border-style: dashed;
			color: var(--ink-muted);
			font-size: 1.25rem;
		}

		.filled {
			width: 100%;
			min-height: 3.25rem;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0.25rem;
			padding: var(--s-2, 0.5rem);
			text-align: left;
		}

		.name {
			font-weight: 600;
			line-height: 1.2;
		}

		.chips {
			display: flex;
			gap: 0.25rem;
			flex-wrap: wrap;
		}

		.clear {
			position: absolute;
			top: 0.15rem;
			right: 0.15rem;
			width: 1.4rem;
			height: 1.4rem;
			line-height: 1;
			border: none;
			background: transparent;
			color: var(--ink-muted);
			font-size: 1rem;
		}

		.clear:hover {
			color: var(--danger, #d1495b);
		}

		.search {
			width: 100%;
			font: inherit;
			padding: var(--s-2, 0.5rem);
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--accent, #4f6df5);
			background: var(--surface);
			color: inherit;
			min-height: 3.25rem;
		}

		.results {
			position: absolute;
			z-index: 20;
			left: 0;
			right: 0;
			margin: 0.25rem 0 0;
			padding: 0;
			list-style: none;
			background: var(--surface);
			border: 1.5px solid var(--line);
			border-radius: var(--r-md, 8px);
			box-shadow: var(--shadow-md);
			max-height: 15rem;
			overflow-y: auto;
		}

		.results li {
			display: grid;
			grid-template-columns: 1fr auto auto;
			align-items: center;
			gap: var(--s-2, 0.5rem);
			padding: 0.4rem var(--s-2, 0.5rem);
			cursor: pointer;
		}

		.results li.highlighted {
			background: var(--surface-sunken, rgba(128, 128, 128, 0.14));
		}

		.bst {
			font-variant-numeric: tabular-nums;
			color: var(--ink-muted);
			font-size: var(--fs-sm, 0.875rem);
		}

		.empty {
			margin: 0.25rem 0 0;
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
		}
	`,
})
export class SlotPickerComponent {
	readonly index = input.required<number>();
	/** The Pokémon currently in this slot, if any. */
	readonly selected = input<{ name: string; types: string[] } | null>(null);

	readonly picked = output<string>();
	readonly clear = output<void>();

	protected readonly isEditing = signal(false);
	protected readonly term = signal('');
	protected readonly highlighted = signal(0);

	/** Unique per instance so twelve pickers on one page do not share option ids. */
	protected readonly listId = `champions-slot-${Math.random().toString(36).slice(2, 9)}`;

	private readonly searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

	protected readonly search = championsResource(ChampionsSearchDocument, () => ({ query: this.term(), take: 8 }));

	protected readonly results = computed(() => (this.term().trim().length === 0 ? [] : (this.search.value()?.champSearch ?? [])));

	constructor() {
		// Focus the field the moment it appears — one click should be enough to start typing.
		effect(() => {
			if (this.isEditing()) queueMicrotask(() => this.searchInput()?.nativeElement.focus());
		});

		// Keep the highlight in range as results change under it.
		effect(() => {
			const count = this.results().length;
			if (this.highlighted() >= count) this.highlighted.set(0);
		});
	}

	protected startEditing(): void {
		this.term.set('');
		this.highlighted.set(0);
		this.isEditing.set(true);
	}

	protected onInput(event: Event): void {
		this.term.set((event.target as HTMLInputElement).value);
		this.highlighted.set(0);
	}

	protected onKeydown(event: KeyboardEvent): void {
		const results = this.results();

		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();
				this.highlighted.update((i) => Math.min(i + 1, results.length - 1));
				break;
			case 'ArrowUp':
				event.preventDefault();
				this.highlighted.update((i) => Math.max(i - 1, 0));
				break;
			case 'Enter':
				event.preventDefault();
				// Enter always takes the highlighted row, which starts at the top result —
				// "type three letters, press Enter" has to work without looking.
				if (results[this.highlighted()]) this.choose(results[this.highlighted()].slug);
				break;
			case 'Escape':
				event.preventDefault();
				this.isEditing.set(false);
				break;
			default:
				break;
		}
	}

	protected choose(slug: string): void {
		this.picked.emit(slug);
		this.isEditing.set(false);
		this.term.set('');
	}
}
