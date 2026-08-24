import { ChangeDetectionStrategy, Component, ElementRef, computed, effect, inject, signal, untracked, viewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { statAt50 } from '@pokemon-center/champions-engine';
import { ChampSearchDocument, champResource, type BoxPokemonInput } from '@pokemon-center/data-access-champions';
import { EntityPortraitComponent, SectionHeadingComponent, TypeChipComponent, UiCardComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import { BoxStore } from './box.store';
import { BuildEditorComponent } from './build-editor.component';
import { TeamBuilderComponent } from './team-builder.component';
import { natureByName } from './natures';

/**
 * The Box — the Pokémon you actually own.
 *
 * This is the fix for the complaint that started this rebuild: teams used to be six empty
 * form slots with no memory. Now a team is assembled from things you built and kept, and the
 * Companion reads your real spreads instead of assuming maximum investment for both sides.
 */
@Component({
	selector: 'champions-box',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		BuildEditorComponent,
		EntityPortraitComponent,
		SectionHeadingComponent,
		TeamBuilderComponent,
		TypeChipComponent,
		UiCardComponent,
	],
	template: `
		<header class="masthead">
			<div>
				<h1>Box</h1>
				<p class="tagline">Your Pokémon, with the spreads and moves you actually run.</p>
			</div>
			@if (!adding() && editing() === null) {
				<button type="button" class="primary" (click)="startAdding()">Add a Pokémon</button>
			}
		</header>

		@if (adding()) {
			<pkd-card>
				<div class="panel">
					@if (pickedSlug()) {
						<champions-build-editor
							[slug]="pickedSlug()!"
							[existingId]="null"
							(saved)="save($event)"
							(cancelled)="cancelEditing()"
						/>
					} @else {
						<h2>Which Pokémon?</h2>
						<!--
							Focused from startAdding rather than with the autofocus attribute: the focus
							is a response to the user's click, not something that happens to them on load.
						-->
						<input
							#picker
							type="search"
							class="picker"
							[value]="pickerTerm()"
							(input)="pickerTerm.set($any($event.target).value)"
							placeholder="Type a name…"
							aria-label="Search for a Pokémon to add"
						/>
						<ul class="picker-results">
							@for (result of pickerResults(); track result.slug) {
								<li>
									<button type="button" (click)="pickedSlug.set(result.slug)">
										<pkd-entity-portrait
											[type]="result.types[0]"
											[src]="sprite(result.id).src"
											[fallbackSrc]="sprite(result.id).fallbackSrc"
											[alt]="result.name"
											[size]="40"
										/>
										<span class="pick-name">{{ result.name }}</span>
										<span class="chips">
											@for (type of result.types; track type) {
												<pkd-type-chip [type]="type" size="sm" />
											}
										</span>
									</button>
								</li>
							}
						</ul>
						<button type="button" (click)="cancelEditing()">Cancel</button>
					}
				</div>
			</pkd-card>
		} @else if (editing(); as entry) {
			<pkd-card>
				<div class="panel">
					<champions-build-editor
						[slug]="entry.pokemon.slug"
						[existingId]="entry.id"
						[initial]="toInput(entry)"
						(saved)="save($event)"
						(cancelled)="cancelEditing()"
					/>
				</div>
			</pkd-card>
		}

		<pkd-section-heading [label]="'Your Pokémon (' + store.entries().length + ')'" />

		@if (store.isEmpty()) {
			<pkd-card>
				<div class="panel empty">
					<h2>Your Box is empty</h2>
					<p>
						Add the Pokémon you actually battle with — their nature, item, moves and stat spread.
						Everything else in Champions reads from here, and the Companion stops having to guess
						about your own side.
					</p>
				</div>
			</pkd-card>
		} @else {
			<ul class="grid">
				@for (entry of store.entries(); track entry.id) {
					<li>
						<article class="mon">
							<button type="button" class="mon-main" (click)="editing.set(entry)" [attr.aria-label]="'Edit ' + displayName(entry)">
								<pkd-entity-portrait
									[type]="entry.pokemon.types[0]"
									[src]="sprite(entry.pokemon.id).src"
									[fallbackSrc]="sprite(entry.pokemon.id).fallbackSrc"
									[alt]="displayName(entry)"
									[size]="56"
								/>
								<span class="mon-body">
									<span class="mon-name">{{ displayName(entry) }}</span>
									@if (entry.nickname) {
										<span class="species">{{ entry.pokemon.name }}</span>
									}
									<span class="chips">
										@for (type of entry.pokemon.types; track type) {
											<pkd-type-chip [type]="type" size="sm" />
										}
									</span>
									<span class="detail">
										{{ entry.nature ?? 'Neutral' }}
										@if (entry.item) {
											· {{ entry.item }}
										}
										@if (entry.ability) {
											· {{ entry.ability.name }}
										}
									</span>
									<span class="spread">{{ spreadSummary(entry) }}</span>
									@if (entry.moves.length > 0) {
										<span class="moves">{{ moveList(entry) }}</span>
									}
								</span>
							</button>
							<button type="button" class="remove" (click)="remove(entry.id)" [attr.aria-label]="'Remove ' + displayName(entry)">
								×
							</button>
						</article>
					</li>
				}
			</ul>
		}

		<champions-team-builder />
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-5, 1.5rem);
			max-width: 68rem;
			margin-inline: auto;
		}

		.masthead {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			gap: var(--s-4, 1rem);
			flex-wrap: wrap;
			margin-bottom: var(--s-3, 0.75rem);
		}

		h1 {
			margin: 0;
			font-size: var(--fs-2xl, 2rem);
			letter-spacing: -0.02em;
		}

		.tagline {
			margin: var(--s-1, 0.25rem) 0 0;
			color: var(--ink-muted);
		}

		button {
			font: inherit;
			cursor: pointer;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
			padding: 0.5rem 1rem;
			min-height: 2.5rem;
		}

		.primary {
			background: var(--accent, #4f6df5);
			border-color: var(--accent, #4f6df5);
			color: #fff;
			font-weight: 600;
		}

		.panel {
			padding: var(--s-4, 1rem);
		}

		.panel h2 {
			margin: 0 0 var(--s-2, 0.5rem);
			font-size: var(--fs-lg, 1.125rem);
		}

		.panel p {
			margin: 0;
			color: var(--ink-muted);
			line-height: 1.55;
			max-width: 46ch;
		}

		.picker {
			font: inherit;
			width: 100%;
			max-width: 22rem;
			padding: 0.5rem 0.7rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--accent, #4f6df5);
			background: var(--surface);
			color: inherit;
			margin-bottom: var(--s-3, 0.75rem);
		}

		.picker-results {
			list-style: none;
			margin: 0 0 var(--s-3, 0.75rem);
			padding: 0;
			display: grid;
			gap: 0.25rem;
			max-height: 18rem;
			overflow-y: auto;
		}

		.picker-results button {
			display: flex;
			align-items: center;
			gap: var(--s-2, 0.5rem);
			width: 100%;
			text-align: left;
			padding: 0.3rem 0.5rem;
		}

		.pick-name {
			font-weight: 600;
			flex: 1;
		}

		.grid {
			list-style: none;
			margin: 0 0 var(--s-5, 1.5rem);
			padding: 0;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
			gap: var(--s-3, 0.75rem);
		}

		.mon {
			position: relative;
			border: 1.5px solid var(--line);
			border-radius: var(--r-lg, 12px);
			background: var(--surface);
			overflow: hidden;
		}

		.mon:hover {
			border-color: var(--accent, #4f6df5);
		}

		.mon-main {
			display: flex;
			gap: var(--s-3, 0.75rem);
			align-items: flex-start;
			width: 100%;
			text-align: left;
			border: none;
			border-radius: 0;
			padding: var(--s-3, 0.75rem);
			background: none;
		}

		.mon-body {
			display: grid;
			gap: 0.15rem;
			min-width: 0;
		}

		.mon-name {
			font-weight: 700;
		}

		.species,
		.detail,
		.spread,
		.moves {
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
		}

		.spread {
			font-variant-numeric: tabular-nums;
		}

		.chips {
			display: flex;
			gap: 0.2rem;
			margin: 0.15rem 0;
		}

		.remove {
			position: absolute;
			top: 0.3rem;
			right: 0.3rem;
			width: 1.6rem;
			height: 1.6rem;
			min-height: 0;
			padding: 0;
			border: none;
			background: none;
			color: var(--ink-muted);
			line-height: 1;
		}

		.remove:hover {
			color: var(--danger, #d1495b);
		}

		.empty p {
			margin-top: var(--s-2, 0.5rem);
		}
	`,
})
export default class BoxComponent {
	protected readonly store = inject(BoxStore);

	protected readonly adding = signal(false);
	protected readonly pickedSlug = signal<string | null>(null);
	protected readonly pickerTerm = signal('');
	protected readonly editing = signal<(typeof this.store.entries extends () => (infer T)[] ? T : never) | null>(null);

	private readonly queryParams = toSignal(inject(ActivatedRoute).queryParamMap);

	/**
	 * `?add=garchomp` opens the build editor straight on that species.
	 *
	 * This is how the Pokédex hands something over: you found it, you want one, and the
	 * species picker you would otherwise have to retype through is a step with no content.
	 * Seeding only — reopening the editor every time the router re-emits would fight the user.
	 */
	private readonly seedFromUrl = effect(() => {
		const slug = this.queryParams()?.get('add');
		if (!slug) return;

		untracked(() => {
			if (this.adding() || this.editing()) return;
			this.pickerTerm.set('');
			this.pickedSlug.set(slug);
			this.adding.set(true);
		});
	});

	private readonly pickerInput = viewChild<ElementRef<HTMLInputElement>>('picker');
	private readonly picker = champResource(ChampSearchDocument, () => ({ query: this.pickerTerm(), take: 10 }));
	protected readonly pickerResults = computed(() => (this.pickerTerm().trim() === '' ? [] : (this.picker.value()?.champSearch ?? [])));

	protected sprite(id: number) {
		return spriteSources(id);
	}

	protected startAdding(): void {
		this.pickerTerm.set('');
		this.pickedSlug.set(null);
		this.adding.set(true);
		queueMicrotask(() => this.pickerInput()?.nativeElement.focus());
	}

	protected cancelEditing(): void {
		this.adding.set(false);
		this.pickedSlug.set(null);
		this.editing.set(null);
	}

	protected async save(input: BoxPokemonInput): Promise<void> {
		await this.store.save(input);
		this.cancelEditing();
	}

	protected async remove(id: number): Promise<void> {
		await this.store.remove(id);
	}

	protected displayName(entry: { nickname: string | null; pokemon: { name: string } }): string {
		return entry.nickname || entry.pokemon.name;
	}

	/** The non-zero part of a spread, written the way competitive players write it. */
	protected spreadSummary(entry: { statPoints: Record<string, number>; nature: string | null; pokemon: { baseStats: Record<string, number> } }): string {
		const labels: Record<string, string> = {
			hp: 'HP',
			attack: 'Atk',
			defense: 'Def',
			specialAttack: 'SpA',
			specialDefense: 'SpD',
			speed: 'Spe',
		};
		const parts = Object.entries(labels)
			.filter(([key]) => (entry.statPoints[key] ?? 0) > 0)
			.map(([key, label]) => `${entry.statPoints[key]} ${label}`);

		if (parts.length === 0) return 'No investment';

		// Show the resulting Speed too, since it is the number most often checked.
		const speed = statAt50(entry.pokemon.baseStats['speed'] ?? 0, 'speed', entry.statPoints['speed'] ?? 0, natureByName(entry.nature));
		return `${parts.join(' / ')} · ${speed} Spe`;
	}

	protected moveList(entry: { moves: { name: string }[] }): string {
		return entry.moves.map((move) => move.name).join(', ');
	}

	protected toInput(entry: {
		pokemon: { id: number };
		nickname: string | null;
		nature: string | null;
		item: string | null;
		statPoints: Record<string, number>;
		moves: { id: number }[];
	}): Partial<BoxPokemonInput> {
		return {
			pokemonId: entry.pokemon.id,
			nickname: entry.nickname ?? undefined,
			nature: entry.nature ?? undefined,
			item: entry.item ?? undefined,
			statPoints: {
				hp: entry.statPoints['hp'] ?? 0,
				attack: entry.statPoints['attack'] ?? 0,
				defense: entry.statPoints['defense'] ?? 0,
				specialAttack: entry.statPoints['specialAttack'] ?? 0,
				specialDefense: entry.statPoints['specialDefense'] ?? 0,
				speed: entry.statPoints['speed'] ?? 0,
			},
			moveIds: entry.moves.map((move) => move.id),
		};
	}
}
