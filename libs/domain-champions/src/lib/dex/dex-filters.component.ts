import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { STAT_KEYS, StatKey } from '@pokemon-center/champions-engine';
import { EntityPortraitComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import { DexStore } from './dex.store';
import { STAT_BOUNDS, TOTAL_BOUNDS, type DexEntry, type Range, type SortKey } from './dex-filter';
import { SavedSetsComponent } from './saved-sets.component';
import { StatRangeComponent, type RangeLandmark } from './stat-range.component';
import { TypePickerComponent } from './type-picker.component';

/**
 * One representative Pokémon per value.
 *
 * The most famous holder of a value is the useful one — "faster than Jolteon" lands, "faster
 * than Accelgor" does not — and fame is not in the data. The lowest dex number is the closest
 * available proxy: it favours the older, better-known Pokémon at almost every value.
 */
function pickLandmarks(entries: readonly DexEntry[], valueOf: (entry: DexEntry) => number): RangeLandmark[] {
	const best = new Map<number, RangeLandmark & { dex: number }>();

	for (const entry of entries) {
		const value = valueOf(entry);
		const existing = best.get(value);
		if (!existing || entry.nationalDexNo < existing.dex) {
			best.set(value, { value, id: entry.id, name: entry.name, types: entry.types, dex: entry.nationalDexNo });
		}
	}

	return [...best.values()].sort((a, b) => a.value - b.value);
}

const STAT_LABELS: { key: StatKey; label: string }[] = [
	{ key: 'hp', label: 'HP' },
	{ key: 'attack', label: 'Attack' },
	{ key: 'defense', label: 'Defense' },
	{ key: 'specialAttack', label: 'Sp. Atk' },
	{ key: 'specialDefense', label: 'Sp. Def' },
	{ key: 'speed', label: 'Speed' },
];

/**
 * The Pokédex filter panel.
 *
 * Everything is visible. The old disclosure hid the stat and ability filters behind a button,
 * which meant the two filters that most reward experimenting were the two nobody found — and a
 * panel you have to open is a panel you forget is there.
 *
 * Nothing here explains itself in prose either. The type pickers teach their two modes by
 * changing the result the moment you try them, the Mega control cycles through three states
 * you can see, and the stat sliders name a Pokémon at whatever value you drag to. Paragraphs of
 * instructions would be an admission the controls do not work.
 */
@Component({
	selector: 'champions-dex-filters',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [EntityPortraitComponent, SavedSetsComponent, StatRangeComponent, TypePickerComponent],
	template: `
		<div class="row">
			<input
				type="search"
				class="search"
				[value]="store.filters().search"
				(input)="onSearch($event)"
				placeholder="Search…"
				aria-label="Search"
			/>
			@if (store.hasActiveFilters()) {
				<button type="button" class="clear" (click)="store.clear()">Clear</button>
			}
		</div>

		@if (store.counterTarget(); as target) {
			<div class="banner">
				<span>Answers to <strong>{{ target.name }}</strong></span>
				<button type="button" (click)="store.patch({ counterOf: null })" aria-label="Stop filtering by counters">×</button>
			</div>
		}

		@if (store.owned().size > 0) {
			<label class="check">
				<input type="checkbox" [checked]="store.filters().ownedOnly" (change)="store.patch({ ownedOnly: $any($event.target).checked })" />
				Only what I own ({{ store.owned().size }})
			</label>
		}

		<fieldset>
			<legend>Type</legend>
			<champions-type-picker
				[types]="store.types()"
				[selected]="store.filters().types"
				[mode]="store.filters().typeMode"
				(picked)="store.selectType($event)"
				(expand)="store.expandType($event)"
			/>
		</fieldset>

		<fieldset>
			<legend>Matchup</legend>
			<div class="seg">
				<button type="button" [class.on]="store.filters().matchupDirection === 'weak-to'" (click)="store.patch({ matchupDirection: 'weak-to' })">
					Effective
				</button>
				<button type="button" [class.on]="store.filters().matchupDirection === 'resists'" (click)="store.patch({ matchupDirection: 'resists' })">
					Resists
				</button>
			</div>

			<champions-type-picker
				[types]="store.types()"
				[selected]="store.filters().matchupTypes"
				[mode]="store.filters().matchupMode"
				(picked)="store.selectMatchupType($event)"
				(expand)="store.expandMatchupType($event)"
			/>

			<!--
				Picking a Pokémon just fills the chips with its typing, so the direction toggle
				keeps meaning exactly what it meant and the result stays explainable.
			-->
			@if (store.matchupPokemon(); as picked) {
				<div class="picked">
					<pkd-entity-portrait
						[type]="picked.types[0]"
						[src]="sprite(picked.id).src"
						[fallbackSrc]="sprite(picked.id).fallbackSrc"
						[alt]="picked.name"
						[size]="24"
					/>
					<span>{{ picked.name }}</span>
					<button type="button" (click)="clearPicked()" aria-label="Clear the matchup Pokémon">×</button>
				</div>
			} @else {
				<div class="autocomplete">
					<input
						type="search"
						[value]="monTerm()"
						(input)="monTerm.set($any($event.target).value)"
						placeholder="…or against a Pokémon"
						aria-label="Match against a Pokémon"
						role="combobox"
						aria-controls="matchup-mon-list"
						[attr.aria-expanded]="monResults().length > 0"
						aria-autocomplete="list"
					/>
					@if (monResults().length > 0) {
						<ul role="listbox" id="matchup-mon-list">
							@for (result of monResults(); track result.slug) {
								<li role="option" [attr.aria-selected]="false">
									<button type="button" (click)="pick(result)">
										<pkd-entity-portrait
											[type]="result.types[0]"
											[src]="sprite(result.id).src"
											[fallbackSrc]="sprite(result.id).fallbackSrc"
											[alt]="result.name"
											[size]="24"
										/>
										{{ result.name }}
									</button>
								</li>
							}
						</ul>
					}
				</div>
			}
		</fieldset>

		<fieldset>
			<legend>Mega Evolution</legend>
			<!--
				One control, three states, cycled by clicking. A pair of checkboxes for "has" and
				"has not" would let you tick both, which means nothing.
			-->
			<button type="button" class="tri" (click)="store.cycleMega()" [attr.aria-label]="megaLabel()">
				<span class="box" [class.yes]="store.filters().mega === 'has-mega'" [class.no]="store.filters().mega === 'no-mega'">
					{{ store.filters().mega === 'has-mega' ? '✓' : store.filters().mega === 'no-mega' ? '✕' : '' }}
				</span>
				{{ megaLabel() }}
			</button>
		</fieldset>

		<fieldset>
			<legend>Base stats</legend>
			<div class="ranges">
				@for (stat of statLabels; track stat.key) {
					<champions-stat-range
						[label]="stat.label"
						[bounds]="statBounds"
						[value]="rangeFor(stat.key)"
						[landmarks]="landmarks()[stat.key]"
						(changed)="store.setStatRange(stat.key, $event)"
					/>
				}
				<champions-stat-range
					label="Total"
					[bounds]="totalBounds"
					[value]="store.filters().totalRange"
					[landmarks]="totalLandmarks()"
					(changed)="store.setTotalRange($event)"
				/>
			</div>
		</fieldset>

		<fieldset>
			<legend>Ability</legend>
			<select [value]="store.filters().ability ?? ''" (change)="onAbility($event)" aria-label="Filter by ability">
				<option value="">Any ability</option>
				@for (ability of store.abilities(); track ability.slug) {
					<option [value]="ability.slug">{{ ability.name }}</option>
				}
			</select>
		</fieldset>

		<fieldset>
			<legend>Move</legend>
			@if (store.pickedMove(); as move) {
				<div class="picked">
					<span>{{ move.name }}</span>
					@if (store.isLoadingLearners()) {
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
		</fieldset>

		<fieldset>
			<legend>Saved filters</legend>
			<champions-saved-sets />
		</fieldset>

		<fieldset>
			<legend>Sort</legend>
			<div class="sort">
				<select [value]="store.filters().sortBy" (change)="onSort($event)" aria-label="Sort by">
					@for (option of sortOptions; track option.key) {
						<option [value]="option.key">{{ option.label }}</option>
					}
				</select>
				<button type="button" (click)="store.patch({ sortDesc: !store.filters().sortDesc })">
					{{ store.filters().sortDesc ? '↓' : '↑' }}
				</button>
			</div>
		</fieldset>
	`,
	styles: `
		:host {
			display: block;
		}

		.row {
			display: flex;
			gap: var(--s-2, 0.5rem);
			align-items: center;
			margin-bottom: var(--s-3, 0.75rem);
		}

		.search,
		.autocomplete input {
			flex: 1 1 auto;
			width: 100%;
			min-width: 0;
			font: inherit;
			padding: 0.5rem 0.65rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
		}

		fieldset {
			border: none;
			border-top: 1px solid var(--line);
			margin: 0 0 var(--s-3, 0.75rem);
			padding: var(--s-3, 0.75rem) 0 0;
			display: grid;
			gap: var(--s-2, 0.5rem);
		}

		legend {
			padding: 0;
			font-size: var(--fs-xs, 0.75rem);
			text-transform: uppercase;
			letter-spacing: 0.12em;
			color: var(--ink-muted);
		}

		.seg {
			display: inline-flex;
			border: 1.5px solid var(--line);
			border-radius: var(--r-md, 8px);
			overflow: hidden;
			width: fit-content;
		}

		.seg button {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			padding: 0.3rem 0.7rem;
			border: none;
			background: var(--surface);
			color: var(--ink-muted);
			cursor: pointer;
			min-height: 2.1rem;
		}

		.seg button + button {
			border-left: 1.5px solid var(--line);
		}

		.seg button.on {
			background: var(--accent, #4f6df5);
			color: #fff;
		}

		.autocomplete {
			position: relative;
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
			align-items: center;
			gap: 0.4rem;
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

		.autocomplete li button:hover {
			background: var(--surface-sunken, rgba(128, 128, 128, 0.12));
		}

		.picked,
		.banner {
			display: flex;
			align-items: center;
			gap: 0.4rem;
			padding: 0.25rem 0.3rem 0.25rem 0.5rem;
			border: 1.5px solid var(--accent, #4f6df5);
			border-radius: var(--r-md, 8px);
			font-size: var(--fs-sm, 0.875rem);
		}

		.banner {
			justify-content: space-between;
			margin-bottom: var(--s-3, 0.75rem);
			padding-left: 0.7rem;
		}

		.picked button,
		.banner button {
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

		.picked button:hover,
		.banner button:hover {
			color: var(--danger, #d1495b);
		}

		.check {
			display: flex;
			align-items: center;
			gap: 0.45rem;
			margin-bottom: var(--s-3, 0.75rem);
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
			cursor: pointer;
		}

		.tri {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			cursor: pointer;
			padding: 0.3rem 0.5rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink-muted);
			width: fit-content;
			min-height: 2.1rem;
		}

		.box {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: 1.1rem;
			height: 1.1rem;
			border-radius: var(--r-sm, 4px);
			border: 1.5px solid var(--line);
			font-size: 0.75rem;
			line-height: 1;
		}

		.box.yes {
			border-color: var(--success, #2e7d52);
			color: var(--success, #2e7d52);
		}

		.box.no {
			border-color: var(--danger, #d1495b);
			color: var(--danger, #d1495b);
		}

		.ranges {
			display: grid;
			gap: 0.6rem;
		}

		.loading {
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			font-style: italic;
		}

		select {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			padding: 0.35rem 0.5rem;
			border-radius: var(--r-sm, 4px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink);
			width: 100%;
			min-width: 0;
		}

		.sort {
			display: flex;
			gap: var(--s-2, 0.5rem);
			align-items: center;
		}

		.sort button,
		.clear {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			cursor: pointer;
			padding: 0.35rem 0.7rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink-muted);
			min-height: 2.25rem;
			white-space: nowrap;
		}

		.sort button:hover,
		.clear:hover {
			border-color: var(--accent, #4f6df5);
			color: var(--accent, #4f6df5);
		}
	`,
})
export class DexFiltersComponent {
	protected readonly store = inject(DexStore);

	protected readonly statLabels = STAT_LABELS;
	protected readonly statBounds = STAT_BOUNDS;
	protected readonly totalBounds = TOTAL_BOUNDS;
	protected readonly monTerm = signal('');
	protected readonly moveTerm = signal('');

	/** Move-name search for the autocomplete, prefix matches first. */
	protected readonly moveResults = computed(() => {
		const term = this.moveTerm().trim().toLowerCase();
		if (term.length < 2) return [];

		return this.store
			.moveIndex()
			.filter((move) => move.name.toLowerCase().includes(term))
			.sort((a, b) => Number(b.name.toLowerCase().startsWith(term)) - Number(a.name.toLowerCase().startsWith(term)))
			.slice(0, 8);
	});

	protected readonly sortOptions: { key: SortKey; label: string }[] = [
		{ key: 'dex', label: 'Dex number' },
		{ key: 'name', label: 'Name' },
		{ key: 'total', label: 'Base stat total' },
		...STAT_LABELS.map((stat) => ({ key: stat.key as SortKey, label: stat.label })),
	];

	/**
	 * One representative Pokémon per base value, per stat.
	 *
	 * The most famous holder of a value is the useful one — "faster than Jolteon" lands, "faster
	 * than Accelgor" does not — and fame is not in the data. Lowest dex number is the closest
	 * available proxy: it favours the older, better-known Pokémon at almost every value.
	 */
	protected readonly landmarks = computed(() => {
		const base = this.store.entries().filter((entry) => !entry.isMega);
		const byStat = {} as Record<StatKey, RangeLandmark[]>;

		for (const key of STAT_KEYS) {
			byStat[key] = pickLandmarks(base, (entry) => entry.baseStats[key]);
		}

		return byStat;
	});

	protected readonly totalLandmarks = computed(() =>
		pickLandmarks(
			this.store.entries().filter((entry) => !entry.isMega),
			(entry) => entry.baseStats.total,
		),
	);

	/** Name search over the roster, base forms only, prefix matches first. */
	protected readonly monResults = computed(() => {
		const term = this.monTerm().trim().toLowerCase();
		if (term.length < 2) return [];

		return this.store
			.entries()
			.filter((entry) => !entry.isMega && entry.name.toLowerCase().includes(term))
			.sort(
				(a, b) =>
					Number(b.name.toLowerCase().startsWith(term)) - Number(a.name.toLowerCase().startsWith(term)) ||
					a.nationalDexNo - b.nationalDexNo,
			)
			.slice(0, 8);
	});

	protected readonly megaLabel = computed(() => {
		const mega = this.store.filters().mega;
		return mega === 'has-mega' ? 'Has a Mega' : mega === 'no-mega' ? 'Has no Mega' : 'Mega Evolution';
	});

	protected rangeFor(key: StatKey): Range {
		return this.store.filters().statRanges[key] ?? STAT_BOUNDS;
	}

	protected sprite(id: number) {
		return spriteSources(id);
	}

	protected pick(entry: DexEntry): void {
		this.store.setMatchupPokemon(entry);
		this.monTerm.set('');
	}

	protected clearPicked(): void {
		this.store.setMatchupPokemon(null);
		this.monTerm.set('');
	}

	protected pickMove(slug: string): void {
		this.store.patch({ move: slug });
		this.moveTerm.set('');
	}

	protected clearMove(): void {
		this.store.patch({ move: null });
		this.moveTerm.set('');
	}


	protected onSearch(event: Event): void {
		this.store.patch({ search: (event.target as HTMLInputElement).value });
	}

	protected onAbility(event: Event): void {
		this.store.patch({ ability: (event.target as HTMLSelectElement).value || null });
	}

	protected onSort(event: Event): void {
		this.store.patch({ sortBy: (event.target as HTMLSelectElement).value as SortKey });
	}
}
