import { ChangeDetectionStrategy, Component, computed, inject, input, output, signal } from '@angular/core';
import { ChampSearchDocument, champResource } from '@pokemon-center/data-access-champions';
import { EntityPortraitComponent, TypeChipComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import { BoxStore } from '../box/box.store';
import { DexStore } from '../dex/dex.store';

/**
 * Picks one side of a simulated matchup — a real build from the Box, or anything on the roster.
 *
 * The distinction is surfaced rather than hidden: a Box pick carries your exact spread and
 * moves, a roster pick is inferred. Showing which is which is the difference between a result
 * you can act on and a number that merely looks precise.
 */
@Component({
	selector: 'champions-combatant-picker',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [EntityPortraitComponent, TypeChipComponent],
	template: `
		<div class="picker">
			<span class="legend">{{ label() }}</span>

			@if (chosen(); as choice) {
				<button type="button" class="chosen" (click)="reset()">
					<pokedex-entity-portrait
						[type]="choice.types[0]"
						[src]="sprite(choice.id).src"
						[fallbackSrc]="sprite(choice.id).fallbackSrc"
						[alt]="choice.name"
						[size]="44"
					/>
					<span class="chosen-body">
						<span class="chosen-name">{{ choice.name }}</span>
						<span class="chips">
							@for (type of choice.types; track type) {
								<pokedex-type-chip [type]="type" size="sm" />
							}
						</span>
						<span class="source" [class.exact]="choice.exact">{{ choice.exact ? 'Your build' : 'Inferred' }}</span>
					</span>
				</button>
			} @else {
				@if (box.entries().length > 0) {
					<div class="box-row">
						@for (entry of box.entries(); track entry.id) {
							<button type="button" class="box-chip" (click)="picked.emit('box:' + entry.id)">
								<pokedex-entity-portrait
									[type]="entry.pokemon.types[0]"
									[src]="sprite(entry.pokemon.id).src"
									[fallbackSrc]="sprite(entry.pokemon.id).fallbackSrc"
									[alt]="entry.nickname || entry.pokemon.name"
									[size]="26"
								/>
								{{ entry.nickname || entry.pokemon.name }}
							</button>
						}
					</div>
				}

				<input
					type="search"
					[value]="term()"
					(input)="term.set($any($event.target).value)"
					placeholder="…or search the roster"
					[attr.aria-label]="'Search the roster for the ' + label() + ' side'"
				/>

				@if (results().length > 0) {
					<ul class="results">
						@for (result of results(); track result.slug) {
							<li>
								<button type="button" (click)="picked.emit('dex:' + result.slug)">
									<pokedex-entity-portrait
										[type]="result.types[0]"
										[src]="sprite(result.id).src"
										[fallbackSrc]="sprite(result.id).fallbackSrc"
										[alt]="result.name"
										[size]="26"
									/>
									{{ result.name }}
								</button>
							</li>
						}
					</ul>
				}
			}
		</div>
	`,
	styles: `
		:host {
			display: block;
		}

		.picker {
			border: 1.5px solid var(--line);
			border-radius: var(--r-lg, 12px);
			padding: var(--s-3, 0.75rem);
			background: var(--surface);
		}

		.legend {
			display: block;
			font-size: var(--fs-xs, 0.75rem);
			text-transform: uppercase;
			letter-spacing: 0.12em;
			color: var(--ink-muted);
			margin-bottom: var(--s-2, 0.5rem);
		}

		button {
			font: inherit;
			cursor: pointer;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
			min-height: 2.2rem;
		}

		.chosen {
			display: flex;
			align-items: center;
			gap: var(--s-2, 0.5rem);
			width: 100%;
			text-align: left;
			padding: var(--s-2, 0.5rem);
		}

		.chosen-body {
			display: grid;
			gap: 0.1rem;
		}

		.chosen-name {
			font-weight: 700;
		}

		.chips {
			display: flex;
			gap: 0.2rem;
		}

		.source {
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
		}

		.source.exact {
			color: var(--success, #2e7d52);
		}

		.box-row {
			display: flex;
			flex-wrap: wrap;
			gap: 0.3rem;
			margin-bottom: var(--s-2, 0.5rem);
		}

		.box-chip {
			display: inline-flex;
			align-items: center;
			gap: 0.35rem;
			padding: 0.15rem 0.6rem 0.15rem 0.15rem;
			border-radius: var(--r-pill, 999px);
			font-size: var(--fs-sm, 0.875rem);
		}

		input {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			width: 100%;
			padding: 0.4rem 0.55rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
		}

		.results {
			list-style: none;
			margin: var(--s-2, 0.5rem) 0 0;
			padding: 0;
			display: grid;
			gap: 0.2rem;
			max-height: 12rem;
			overflow-y: auto;
		}

		.results button {
			display: flex;
			align-items: center;
			gap: 0.4rem;
			width: 100%;
			text-align: left;
			padding: 0.2rem 0.4rem;
			font-size: var(--fs-sm, 0.875rem);
		}
	`,
})
export class CombatantPickerComponent {
	readonly label = input.required<string>();
	/** `box:<id>` or `dex:<slug>`. */
	readonly selected = input<string | null>(null);
	readonly picked = output<string | null>();

	protected readonly box = inject(BoxStore);
	private readonly dex = inject(DexStore);
	protected readonly term = signal('');

	private readonly search = champResource(ChampSearchDocument, () => ({ query: this.term(), take: 8 }));
	protected readonly results = computed(() => (this.term().trim() === '' ? [] : (this.search.value()?.champSearch ?? [])));

	/**
	 * What is currently selected, and whether its numbers are exact or inferred.
	 *
	 * A roster pick is resolved out of the Pokédex store, which already holds the entire legal
	 * roster in memory — so this costs nothing and, unlike reading it back out of the search
	 * results, survives the search box being cleared.
	 */
	protected readonly chosen = computed(() => {
		const key = this.selected();
		if (!key) return null;

		if (key.startsWith('box:')) {
			const entry = this.box.entries().find((e) => e.id === Number(key.slice(4)));
			return entry
				? { id: entry.pokemon.id, name: entry.nickname || entry.pokemon.name, types: entry.pokemon.types, exact: true }
				: null;
		}

		const slug = key.slice(4);
		const found = this.dex.entries().find((entry) => entry.slug === slug);
		return found ? { id: found.id, name: found.name, types: found.types, exact: false } : null;
	});

	protected sprite(id: number) {
		return spriteSources(id);
	}

	protected reset(): void {
		this.term.set('');
		this.picked.emit(null);
	}
}
