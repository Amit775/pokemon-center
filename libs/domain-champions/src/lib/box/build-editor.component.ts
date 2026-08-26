import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import {
	NEUTRAL_NATURE,
	SP_PER_STAT_CAP,
	SP_TOTAL_BUDGET,
	STAT_KEYS,
	StatKey,
	statAt50,
	validateSpread,
} from '@pokemon-center/champions-engine';
import { BoxPokemonInput, ChampionsTeamDocument, championsResource } from '@pokemon-center/data-access-champions';
import { EntityPortraitComponent, TypeChipComponent, UiSkeletonComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import { NATURES } from './natures';

/**
 * Editor for one Box Pokémon.
 *
 * The rule the layout follows: **every choice shows its consequence immediately**. Move a
 * stat point and the resulting stat updates beside it; change nature and the affected stats
 * shift. Champions removed IVs and simplified EVs precisely so that investment would be
 * legible, and an editor that hides the result behind a save button throws that away.
 */
@Component({
	selector: 'champions-build-editor',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [EntityPortraitComponent, TypeChipComponent, UiSkeletonComponent],
	template: `
		@if (detail(); as mon) {
			<div class="head">
				<pokedex-entity-portrait [type]="mon.types[0]" [src]="sprite().src" [fallbackSrc]="sprite().fallbackSrc" [alt]="mon.name" [size]="72" />
				<div>
					<input
						class="nickname"
						type="text"
						[value]="nickname()"
						(input)="nickname.set($any($event.target).value)"
						[placeholder]="mon.name"
						[attr.aria-label]="'Nickname for ' + mon.name"
					/>
					<div class="chips">
						@for (type of mon.types; track type) {
							<pokedex-type-chip [type]="type" size="sm" />
						}
						@if (mon.isMega) {
							<span class="tag">Mega</span>
						}
					</div>
				</div>
			</div>

			<div class="fields">
				<label>
					<span>Nature</span>
					<select [value]="natureName()" (change)="natureName.set($any($event.target).value)">
						@for (nature of natures; track nature.name) {
							<option [value]="nature.name">
								{{ nature.name }}{{ nature.raises ? ' (+' + short(nature.raises) + ' −' + short(nature.lowers!) + ')' : '' }}
							</option>
						}
					</select>
				</label>

				<label>
					<span>Ability</span>
					<select [value]="abilityId() ?? ''" (change)="onAbility($event)" [disabled]="mon.isMega">
						@if (mon.isMega && mon.megaAbility) {
							<option [value]="''">{{ mon.megaAbility.name }} (fixed)</option>
						} @else {
							@for (slot of mon.abilities; track slot.ability.slug) {
								<option [value]="slot.ability.slug">{{ slot.ability.name }}{{ slot.isHidden ? ' (hidden)' : '' }}</option>
							}
						}
					</select>
				</label>

				<label>
					<span>Item</span>
					<input type="text" [value]="item()" (input)="item.set($any($event.target).value)" placeholder="e.g. choice-scarf" />
				</label>
			</div>

			<div class="budget" [class.over]="!spread().isLegal">
				<span>Stat points</span>
				<div class="meter"><span [style.width.%]="budgetPercent()"></span></div>
				<strong>{{ spread().total }} / {{ budget }}</strong>
			</div>

			<div class="stats">
				@for (stat of statRows(); track stat.key) {
					<div class="stat">
						<span class="label">{{ stat.label }}</span>
						<button type="button" (click)="adjust(stat.key, -4)" [disabled]="statPoints()[stat.key] === 0">−</button>
						<input
							type="range"
							min="0"
							[max]="cap"
							step="1"
							[value]="statPoints()[stat.key]"
							(input)="setStat(stat.key, +$any($event.target).value)"
							[attr.aria-label]="stat.label + ' stat points'"
						/>
						<button type="button" (click)="adjust(stat.key, 4)" [disabled]="statPoints()[stat.key] >= cap || remaining() === 0">+</button>
						<span class="sp">{{ statPoints()[stat.key] }}</span>
						<!-- The consequence, right beside the control that causes it. -->
						<strong class="value" [class.boosted]="stat.natureUp" [class.hindered]="stat.natureDown">{{ stat.value }}</strong>
					</div>
				}
			</div>

			<div class="moves">
				<span class="moves-label">Moves ({{ moveIds().length }}/4)</span>
				<div class="move-chips">
					@for (move of chosenMoves(); track move.id) {
						<button type="button" class="move on" (click)="toggleMove(move.id)">
							{{ move.name }}
							<span aria-hidden="true">×</span>
						</button>
					} @empty {
						<span class="none">No moves chosen yet.</span>
					}
				</div>

				<input
					type="search"
					class="move-search"
					[value]="moveSearch()"
					(input)="moveSearch.set($any($event.target).value)"
					placeholder="Search this Pokémon's legal moves…"
					aria-label="Search moves"
				/>

				<div class="move-results">
					@for (move of moveOptions(); track move.id) {
						<button type="button" class="move" [disabled]="moveIds().length >= 4" (click)="toggleMove(move.id)">
							{{ move.name }}
							<span class="pow">{{ move.power ?? '—' }}</span>
						</button>
					}
				</div>
			</div>

			@if (!spread().isLegal) {
				<p class="error">
					{{ spread().total > budget ? 'Over budget by ' + (spread().total - budget) + ' points.' : 'A stat is over the ' + cap + '-point cap.' }}
				</p>
			}

			<div class="actions">
				<button type="button" class="primary" [disabled]="!spread().isLegal || saving()" (click)="submit()">
					{{ saving() ? 'Saving…' : existingId() ? 'Save changes' : 'Add to Box' }}
				</button>
				<button type="button" (click)="cancelled.emit()">Cancel</button>
			</div>
		} @else {
			<pokedex-skeleton height="20rem" />
		}
	`,
	styles: `
		:host {
			display: block;
		}

		.head {
			display: flex;
			align-items: center;
			gap: var(--s-3, 0.75rem);
			margin-bottom: var(--s-4, 1rem);
		}

		.nickname {
			font: inherit;
			font-size: var(--fs-lg, 1.125rem);
			font-weight: 700;
			border: none;
			border-bottom: 1.5px dashed var(--line);
			background: none;
			color: inherit;
			padding: 0.1rem 0;
			width: 100%;
			max-width: 14rem;
		}

		.chips {
			display: flex;
			gap: 0.25rem;
			align-items: center;
			margin-top: 0.3rem;
		}

		.tag {
			font-size: 0.65rem;
			text-transform: uppercase;
			letter-spacing: 0.08em;
			color: var(--accent, #4f6df5);
			border: 1px solid var(--accent, #4f6df5);
			border-radius: var(--r-pill, 999px);
			padding: 0 0.35rem;
		}

		.fields {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
			gap: var(--s-3, 0.75rem);
			margin-bottom: var(--s-4, 1rem);
		}

		.fields label {
			display: grid;
			gap: 0.2rem;
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
		}

		select,
		input[type='text'],
		.move-search {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			padding: 0.4rem 0.5rem;
			border-radius: var(--r-sm, 4px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink);
			min-width: 0;
			width: 100%;
		}

		.budget {
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: center;
			gap: var(--s-3, 0.75rem);
			font-size: var(--fs-sm, 0.875rem);
			margin-bottom: var(--s-3, 0.75rem);
		}

		.meter {
			height: 0.5rem;
			border-radius: 999px;
			background: var(--surface-sunken, rgba(128, 128, 128, 0.2));
			overflow: hidden;
		}

		.meter span {
			display: block;
			height: 100%;
			background: var(--accent, #4f6df5);
			transition: width 100ms ease-out;
		}

		.budget.over .meter span,
		.budget.over strong {
			background: var(--danger, #d1495b);
			color: var(--danger, #d1495b);
		}

		.budget.over .meter span {
			color: inherit;
		}

		.stats {
			display: grid;
			gap: 0.3rem;
			margin-bottom: var(--s-4, 1rem);
		}

		.stat {
			display: grid;
			grid-template-columns: 4rem 2rem minmax(4rem, 1fr) 2rem 2rem 3rem;
			align-items: center;
			gap: 0.35rem;
			font-size: var(--fs-sm, 0.875rem);
		}

		.stat .label {
			color: var(--ink-muted);
			font-size: var(--fs-xs, 0.75rem);
		}

		.stat button {
			font: inherit;
			cursor: pointer;
			min-height: 1.9rem;
			border-radius: var(--r-sm, 4px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
			padding: 0;
		}

		.stat button:disabled {
			opacity: 0.35;
			cursor: not-allowed;
		}

		input[type='range'] {
			width: 100%;
			min-width: 0;
			accent-color: var(--accent, #4f6df5);
		}

		.sp,
		.value {
			font-variant-numeric: tabular-nums;
			text-align: right;
		}

		.sp {
			color: var(--ink-muted);
			font-size: var(--fs-xs, 0.75rem);
		}

		.value.boosted {
			color: var(--success, #2e7d52);
		}

		.value.hindered {
			color: var(--danger, #d1495b);
		}

		.moves-label {
			display: block;
			font-size: var(--fs-xs, 0.75rem);
			text-transform: uppercase;
			letter-spacing: 0.1em;
			color: var(--ink-muted);
			margin-bottom: var(--s-2, 0.5rem);
		}

		.move-chips {
			display: flex;
			flex-wrap: wrap;
			gap: 0.3rem;
			margin-bottom: var(--s-2, 0.5rem);
			min-height: 2rem;
		}

		.move {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			cursor: pointer;
			padding: 0.25rem 0.6rem;
			border-radius: var(--r-pill, 999px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
			display: inline-flex;
			gap: 0.4rem;
			align-items: center;
			min-height: 2rem;
		}

		.move.on {
			border-color: var(--accent, #4f6df5);
			background: var(--accent-soft, rgba(79, 109, 245, 0.12));
		}

		.move:disabled {
			opacity: 0.35;
			cursor: not-allowed;
		}

		.move .pow {
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			font-variant-numeric: tabular-nums;
		}

		.move-results {
			display: flex;
			flex-wrap: wrap;
			gap: 0.3rem;
			margin-top: var(--s-2, 0.5rem);
			max-height: 9rem;
			overflow-y: auto;
		}

		.none {
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
		}

		.error {
			margin: var(--s-3, 0.75rem) 0 0;
			font-size: var(--fs-sm, 0.875rem);
			color: var(--danger, #d1495b);
		}

		.actions {
			display: flex;
			gap: var(--s-2, 0.5rem);
			margin-top: var(--s-4, 1rem);
		}

		.actions button {
			font: inherit;
			cursor: pointer;
			padding: 0.5rem 1rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
			min-height: 2.5rem;
		}

		.actions .primary {
			background: var(--accent, #4f6df5);
			border-color: var(--accent, #4f6df5);
			color: #fff;
			font-weight: 600;
		}

		.actions .primary:disabled {
			opacity: 0.45;
			cursor: not-allowed;
		}
	`,
})
export class BuildEditorComponent {
	/** Species to build. */
	readonly slug = input.required<string>();
	/** Set when editing an existing Box entry. */
	readonly existingId = input<number | null>(null);
	readonly initial = input<Partial<BoxPokemonInput> | null>(null);

	readonly saved = output<BoxPokemonInput>();
	readonly cancelled = output<void>();

	protected readonly budget = SP_TOTAL_BUDGET;
	protected readonly cap = SP_PER_STAT_CAP;
	protected readonly natures = NATURES;

	protected readonly saving = signal(false);
	protected readonly moveSearch = signal('');

	private readonly query = championsResource(ChampionsTeamDocument, () => ({ slugs: [this.slug()] }));
	protected readonly detail = computed(() => this.query.value()?.championsTeam[0] ?? null);
	protected readonly sprite = computed(() => spriteSources(this.detail()?.id ?? 0));

	protected readonly nickname = signal('');
	protected readonly natureName = signal(NEUTRAL_NATURE.name);
	protected readonly abilityId = signal<string | null>(null);
	protected readonly item = signal('');
	protected readonly moveIds = signal<number[]>([]);
	protected readonly statPoints = signal<Record<StatKey, number>>({
		hp: 0,
		attack: 0,
		defense: 0,
		specialAttack: 0,
		specialDefense: 0,
		speed: 0,
	});

	protected readonly spread = computed(() => validateSpread(this.statPoints()));
	protected readonly remaining = computed(() => this.spread().remaining);
	protected readonly budgetPercent = computed(() => Math.min(100, (this.spread().total / SP_TOTAL_BUDGET) * 100));

	private readonly nature = computed(() => this.natures.find((nature) => nature.name === this.natureName()) ?? NEUTRAL_NATURE);

	/** Each stat with its live level-50 value and whether the nature is touching it. */
	protected readonly statRows = computed(() => {
		const mon = this.detail();
		const nature = this.nature();
		if (!mon) return [];

		const labels: Record<StatKey, string> = {
			hp: 'HP',
			attack: 'Attack',
			defense: 'Defense',
			specialAttack: 'Sp. Atk',
			specialDefense: 'Sp. Def',
			speed: 'Speed',
		};

		const base: Record<StatKey, number> = {
			hp: mon.baseStats.hp,
			attack: mon.baseStats.attack,
			defense: mon.baseStats.defense,
			specialAttack: mon.baseStats.specialAttack,
			specialDefense: mon.baseStats.specialDefense,
			speed: mon.baseStats.speed,
		};

		return STAT_KEYS.map((key) => ({
			key,
			label: labels[key],
			value: statAt50(base[key], key, this.statPoints()[key], nature),
			natureUp: nature.raises === key,
			natureDown: nature.lowers === key,
		}));
	});

	protected readonly chosenMoves = computed(() => {
		const all = this.detail()?.moves ?? [];
		return this.moveIds()
			.map((id) => all.find((move) => move.id === id))
			.filter((move) => move !== undefined);
	});

	/** Legal moves matching the search, minus the ones already chosen. */
	protected readonly moveOptions = computed(() => {
		const term = this.moveSearch().trim().toLowerCase();
		const chosen = new Set(this.moveIds());
		return (this.detail()?.moves ?? [])
			.filter((move) => !chosen.has(move.id) && (term === '' || move.name.toLowerCase().includes(term)))
			.slice(0, 24);
	});

	constructor() {
		// Seed the form from an existing entry once the species detail arrives.
		queueMicrotask(() => {
			const initial = this.initial();
			if (!initial) return;
			this.nickname.set(initial.nickname ?? '');
			this.natureName.set(initial.nature ?? NEUTRAL_NATURE.name);
			this.item.set(initial.item ?? '');
			this.moveIds.set(initial.moveIds ?? []);
			if (initial.statPoints) this.statPoints.set({ ...this.statPoints(), ...initial.statPoints });
		});
	}

	protected short(stat: string): string {
		return { attack: 'Atk', defense: 'Def', specialAttack: 'SpA', specialDefense: 'SpD', speed: 'Spe' }[stat] ?? stat;
	}

	protected setStat(key: StatKey, value: number): void {
		const others = this.spread().total - this.statPoints()[key];
		// Clamp against both rules at once, so the slider simply cannot express an illegal
		// spread rather than letting you build one and rejecting it afterwards.
		const allowed = Math.min(SP_PER_STAT_CAP, SP_TOTAL_BUDGET - others);
		this.statPoints.update((current) => ({ ...current, [key]: Math.max(0, Math.min(allowed, value)) }));
	}

	protected adjust(key: StatKey, delta: number): void {
		this.setStat(key, this.statPoints()[key] + delta);
	}

	protected toggleMove(id: number): void {
		this.moveIds.update((current) => (current.includes(id) ? current.filter((moveId) => moveId !== id) : [...current, id].slice(0, 4)));
	}

	protected onAbility(event: Event): void {
		this.abilityId.set((event.target as HTMLSelectElement).value || null);
	}

	protected submit(): void {
		const mon = this.detail();
		if (!mon || !this.spread().isLegal) return;

		// A Mega's ability is fixed by the form, so it is taken from the species rather than
		// the picker — the picker is disabled in that case.
		const chosen = mon.isMega ? mon.megaAbility : mon.abilities.find((slot) => slot.ability.slug === this.abilityId())?.ability;

		const existingId = this.existingId();

		this.saving.set(true);
		this.saved.emit({
			...(existingId === null ? {} : { id: existingId }),
			pokemonId: mon.id,
			nickname: this.nickname().trim() || undefined,
			nature: this.natureName(),
			abilityId: chosen?.id,
			item: this.item().trim() || undefined,
			statPoints: this.statPoints(),
			moveIds: this.moveIds(),
		});
		this.saving.set(false);
	}
}

