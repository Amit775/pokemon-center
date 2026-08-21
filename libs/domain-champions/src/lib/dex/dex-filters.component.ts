import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { STAT_KEYS, StatKey } from '@pokemon-center/champions-engine';
import { TypeChipComponent } from '@pokemon-center/ui-pokedex';
import { DexStore } from './dex.store';
import type { SortKey } from './dex-filter';

/**
 * The Pokédex filter panel.
 *
 * Laid out by how often a filter is actually reached for rather than by how the data is
 * shaped. Search and types sit at the top because they are constant; the **matchup filter**
 * gets its own block with its own framing ("walls" / "melts") because it is the thing this
 * dex has that others do not, and burying it in a row of selects would waste it.
 *
 * Stats, ability and sort live behind a disclosure — useful, but not on every visit.
 */
@Component({
	selector: 'champions-dex-filters',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TypeChipComponent],
	template: `
		<div class="row search-row">
			<input
				type="search"
				class="search"
				[value]="store.filters().search"
				(input)="onSearch($event)"
				placeholder="Search the roster…"
				aria-label="Search the roster"
			/>
			@if (store.hasActiveFilters()) {
				<button type="button" class="clear" (click)="store.clear()">Clear filters</button>
			}
		</div>

		<fieldset class="block">
			<legend>Type</legend>
			<div class="chips">
				@for (type of store.types(); track type.slug) {
					<button
						type="button"
						class="chip-btn"
						[class.on]="store.filters().types.includes(type.slug)"
						[attr.aria-pressed]="store.filters().types.includes(type.slug)"
						(click)="store.toggleType(type.slug)"
					>
						<pkd-type-chip [type]="type.slug" size="sm" />
					</button>
				}
			</div>
			@if (store.filters().types.length > 1) {
				<div class="seg small">
					<button type="button" [class.on]="store.filters().typeMode === 'any'" (click)="store.patch({ typeMode: 'any' })">
						Any of these
					</button>
					<button type="button" [class.on]="store.filters().typeMode === 'all'" (click)="store.patch({ typeMode: 'all' })">
						Both types
					</button>
				</div>
			}
		</fieldset>

		<!-- The differentiator, so it gets its own block and its own vocabulary. -->
		<fieldset class="block matchup">
			<legend>Matchup</legend>
			<div class="seg">
				<button
					type="button"
					[class.on]="store.filters().matchupDirection === 'resists'"
					(click)="store.patch({ matchupDirection: 'resists' })"
				>
					Walls…
				</button>
				<button
					type="button"
					[class.on]="store.filters().matchupDirection === 'weak-to'"
					(click)="store.patch({ matchupDirection: 'weak-to' })"
				>
					Melted by…
				</button>
			</div>

			<div class="chips">
				@for (type of store.types(); track type.slug) {
					<button
						type="button"
						class="chip-btn"
						[class.on]="store.filters().matchupTypes.includes(type.slug)"
						[disabled]="!store.filters().matchupTypes.includes(type.slug) && store.filters().matchupTypes.length >= 2"
						[attr.aria-pressed]="store.filters().matchupTypes.includes(type.slug)"
						(click)="store.toggleMatchupType(type.slug)"
					>
						<pkd-type-chip [type]="type.slug" size="sm" />
					</button>
				}
			</div>

			<p class="hint">{{ matchupHint() }}</p>
		</fieldset>

		<fieldset class="block">
			<legend>Mega Evolution</legend>
			<div class="seg">
				<button type="button" [class.on]="store.filters().mega === 'any'" (click)="store.patch({ mega: 'any' })">Any</button>
				<button type="button" [class.on]="store.filters().mega === 'has-mega'" (click)="store.patch({ mega: 'has-mega' })">
					Has a Mega
				</button>
				<button type="button" [class.on]="store.filters().mega === 'no-mega'" (click)="store.patch({ mega: 'no-mega' })">
					No Mega
				</button>
			</div>
			<label class="check">
				<input
					type="checkbox"
					[checked]="store.filters().includeMegaForms"
					(change)="store.patch({ includeMegaForms: $any($event.target).checked })"
				/>
				List Mega forms as their own entries
			</label>
		</fieldset>

		<button type="button" class="disclosure" (click)="showMore.set(!showMore())" [attr.aria-expanded]="showMore()">
			{{ showMore() ? 'Fewer filters' : 'More filters' }}
		</button>

		@if (showMore()) {
			<fieldset class="block">
				<legend>Minimum stats at level 50</legend>
				<div class="stats">
					@for (stat of statKeys; track stat.key) {
						<label>
							<span>{{ stat.label }}</span>
							<input
								type="number"
								min="0"
								max="400"
								step="5"
								[value]="store.filters().minStats[stat.key] ?? 0"
								(input)="onMinStat(stat.key, $event)"
							/>
						</label>
					}
					<label>
						<span>Base total</span>
						<input
							type="number"
							min="0"
							max="800"
							step="10"
							[value]="store.filters().minTotal"
							(input)="store.patch({ minTotal: +$any($event.target).value })"
						/>
					</label>
				</div>
				<p class="hint">Fully invested, neutral nature — the number you battle with.</p>
			</fieldset>

			<fieldset class="block">
				<legend>Ability</legend>
				<select [value]="store.filters().ability ?? ''" (change)="onAbility($event)" aria-label="Filter by ability">
					<option value="">Any ability</option>
					@for (ability of store.abilities(); track ability.slug) {
						<option [value]="ability.slug">{{ ability.name }}</option>
					}
				</select>
			</fieldset>

			<fieldset class="block">
				<legend>Sort</legend>
				<div class="sort">
					<select [value]="store.filters().sortBy" (change)="onSort($event)" aria-label="Sort by">
						@for (option of sortOptions; track option.key) {
							<option [value]="option.key">{{ option.label }}</option>
						}
					</select>
					<button type="button" class="dir" (click)="store.patch({ sortDesc: !store.filters().sortDesc })">
						{{ store.filters().sortDesc ? 'Descending' : 'Ascending' }}
					</button>
				</div>
			</fieldset>
		}
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

		.search {
			flex: 1 1 auto;
			min-width: 0;
			font: inherit;
			padding: 0.55rem 0.7rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: inherit;
		}

		.block {
			border: none;
			border-top: 1px solid var(--line);
			margin: 0 0 var(--s-3, 0.75rem);
			padding: var(--s-3, 0.75rem) 0 0;
		}

		legend {
			padding: 0;
			font-size: var(--fs-xs, 0.75rem);
			text-transform: uppercase;
			letter-spacing: 0.12em;
			color: var(--ink-muted);
		}

		.matchup {
			border-top-color: var(--accent, #4f6df5);
		}

		.chips {
			display: flex;
			flex-wrap: wrap;
			gap: 0.25rem;
			margin-top: var(--s-2, 0.5rem);
		}

		.chip-btn {
			border: 1.5px solid transparent;
			background: none;
			padding: 0.12rem;
			border-radius: var(--r-sm, 4px);
			cursor: pointer;
			opacity: 0.5;
			transition: opacity 120ms ease;
		}

		.chip-btn:hover:not(:disabled) {
			opacity: 0.85;
		}

		.chip-btn.on {
			opacity: 1;
			border-color: var(--ink);
		}

		.chip-btn:disabled {
			opacity: 0.18;
			cursor: not-allowed;
		}

		.seg {
			display: inline-flex;
			margin-top: var(--s-2, 0.5rem);
			border: 1.5px solid var(--line);
			border-radius: var(--r-md, 8px);
			overflow: hidden;
		}

		.seg button {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			padding: 0.35rem 0.7rem;
			border: none;
			background: var(--surface);
			color: var(--ink-muted);
			cursor: pointer;
			min-height: 2.25rem;
		}

		.seg.small button {
			font-size: var(--fs-xs, 0.75rem);
			min-height: 2rem;
		}

		.seg button + button {
			border-left: 1.5px solid var(--line);
		}

		.seg button.on {
			background: var(--accent, #4f6df5);
			color: #fff;
		}

		.check {
			display: flex;
			align-items: center;
			gap: 0.45rem;
			margin-top: var(--s-2, 0.5rem);
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
			cursor: pointer;
		}

		.hint {
			margin: var(--s-2, 0.5rem) 0 0;
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			line-height: 1.45;
		}

		.stats {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(7.5rem, 1fr));
			gap: var(--s-2, 0.5rem);
			margin-top: var(--s-2, 0.5rem);
		}

		.stats label {
			display: grid;
			gap: 0.15rem;
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
		}

		input[type='number'],
		select {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			padding: 0.35rem 0.5rem;
			border-radius: var(--r-sm, 4px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink);
			min-width: 0;
		}

		select {
			margin-top: var(--s-2, 0.5rem);
			width: 100%;
			max-width: 18rem;
		}

		.sort {
			display: flex;
			gap: var(--s-2, 0.5rem);
			align-items: center;
			flex-wrap: wrap;
		}

		.dir,
		.clear,
		.disclosure {
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

		.disclosure {
			width: 100%;
			margin-bottom: var(--s-3, 0.75rem);
		}

		.dir:hover,
		.clear:hover,
		.disclosure:hover {
			color: var(--ink);
			border-color: var(--accent, #4f6df5);
		}
	`,
})
export class DexFiltersComponent {
	protected readonly store = inject(DexStore);
	protected readonly showMore = signal(false);

	protected readonly statKeys: { key: StatKey; label: string }[] = [
		{ key: 'hp', label: 'HP' },
		{ key: 'attack', label: 'Attack' },
		{ key: 'defense', label: 'Defense' },
		{ key: 'specialAttack', label: 'Sp. Atk' },
		{ key: 'specialDefense', label: 'Sp. Def' },
		{ key: 'speed', label: 'Speed' },
	];

	protected readonly sortOptions: { key: SortKey; label: string }[] = [
		{ key: 'dex', label: 'Dex number' },
		{ key: 'name', label: 'Name' },
		{ key: 'total', label: 'Base stat total' },
		...this.statKeys.map((stat) => ({ key: stat.key as SortKey, label: stat.label })),
	];

	/**
	 * Says in words what the current selection will return.
	 *
	 * The conjunction is load-bearing, not decoration: "walls" requires *both* selected types
	 * while "melted by" needs only *one*, and the hint is where that asymmetry is explained.
	 */
	protected readonly matchupHint = computed(() => {
		const { matchupTypes, matchupDirection } = this.store.filters();

		if (matchupTypes.length === 0) {
			return matchupDirection === 'resists'
				? 'Pick up to two attacking types to find what resists or is immune to all of them.'
				: 'Pick up to two attacking types to find what takes extra damage from any of them.';
		}

		const capitalised = matchupTypes.map((type) => type.charAt(0).toUpperCase() + type.slice(1));

		if (matchupDirection === 'resists') {
			const list = capitalised.join(' and ');
			return `Showing Pokémon that resist or are immune to ${matchupTypes.length > 1 ? 'both ' : ''}${list}.`;
		}

		const list = capitalised.join(' or ');
		return `Showing Pokémon weak to ${matchupTypes.length > 1 ? 'either ' : ''}${list}.`;
	});

	protected onSearch(event: Event): void {
		this.store.patch({ search: (event.target as HTMLInputElement).value });
	}

	protected onAbility(event: Event): void {
		const value = (event.target as HTMLSelectElement).value;
		this.store.patch({ ability: value || null });
	}

	protected onSort(event: Event): void {
		this.store.patch({ sortBy: (event.target as HTMLSelectElement).value as SortKey });
	}

	protected onMinStat(key: StatKey, event: Event): void {
		const value = Number((event.target as HTMLInputElement).value) || 0;
		this.store.patch({ minStats: { ...this.store.filters().minStats, [key]: value } });
	}

	protected readonly allStatKeys = STAT_KEYS;
}
