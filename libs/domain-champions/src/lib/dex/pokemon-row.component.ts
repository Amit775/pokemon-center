import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { StatKey } from '@pokemon-center/champions-engine';
import { EntityPortraitComponent, TypeChipComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import type { DexEntry } from './dex-filter';
import { DexStore } from './dex.store';

/** The highest base stat on the roster, near enough — the bar behind each value scales to it. */
const STAT_CEILING = 200;

const STATS: { key: StatKey; label: string }[] = [
	{ key: 'hp', label: 'HP' },
	{ key: 'attack', label: 'Atk' },
	{ key: 'defense', label: 'Def' },
	{ key: 'specialAttack', label: 'SpA' },
	{ key: 'specialDefense', label: 'SpD' },
	{ key: 'speed', label: 'Spe' },
];

/**
 * One Pokémon as a table row, with its Mega beneath it.
 *
 * A card grid looked tidy and answered nothing: a name, a sprite and a stat total is not enough
 * to choose between two Pokémon, so every comparison meant opening two pages. A row is wider,
 * which buys the two things that actually decide it — the abilities and the six base stats —
 * without leaving the list.
 *
 * The Mega is a sub-row rather than an entry of its own, which is the convention everywhere
 * here: it is a state this Pokémon can enter. Indented, sharing the row's identity, carrying
 * only what changes — its ability, its typing and its stats.
 */
@Component({
	selector: 'champions-pokemon-row',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [EntityPortraitComponent, RouterLink, TypeChipComponent],
	host: { '[class.owned]': 'owned()' },
	template: `
		<div class="row">
			<a class="portrait" [routerLink]="link()" [attr.aria-label]="mon().name">
				<pkd-entity-portrait
					[type]="mon().types[0]"
					[src]="sprite(mon().id).src"
					[fallbackSrc]="sprite(mon().id).fallbackSrc"
					[alt]="mon().name"
					[size]="52"
				/>
			</a>

			<div class="identity">
				<a class="name" [routerLink]="link()">
					<span class="no">#{{ mon().nationalDexNo }}</span>
					{{ mon().name }}
				</a>
				<div class="chips">
					@for (type of mon().types; track type) {
						<pkd-type-chip [type]="type" size="sm" />
					}
					@if (owned()) {
						<span class="flag owned-flag">Owned</span>
					}
				</div>
			</div>

			<ul class="abilities">
				@for (ability of abilities(); track ability.slug) {
					<!--
						The explanation is a child of the item rather than a title attribute, so it
						can hold real text, appear on keyboard focus, and be read out.
					-->
					<li tabindex="0">
						{{ ability.name }}
						@if (ability.effectText) {
							<span class="tip">{{ ability.effectText }}</span>
						}
					</li>
				}
			</ul>

			<div class="stats">
				@for (stat of statCells(); track stat.key) {
					<span class="stat" [style.--fill.%]="stat.percent">
						<span class="stat-label">{{ stat.label }}</span>
						<span class="stat-value">{{ stat.value }}</span>
					</span>
				}
				<span class="stat total">
					<span class="stat-label">BST</span>
					<span class="stat-value">{{ mon().baseStats.total }}</span>
				</span>
			</div>

			<div class="actions">
				<a routerLink="/champions/box" [queryParams]="{ add: mon().slug }" [attr.aria-label]="'Add ' + mon().name + ' to your Box'">
					Box
				</a>
				<a
					routerLink="/champions/simulator"
					[queryParams]="{ left: mon().slug }"
					[attr.aria-label]="'Open ' + mon().name + ' in the Simulator'"
				>
					Sim
				</a>
				<button
					type="button"
					[class.on]="comparing()"
					[attr.aria-pressed]="comparing()"
					[attr.aria-label]="(comparing() ? 'Remove ' : 'Add ') + mon().name + ' to the comparison'"
					(click)="store.toggleCompare(mon().slug)"
				>
					Compare
				</button>
			</div>
		</div>

		@for (mega of megas(); track mega.slug) {
			<div class="row mega">
				<span class="portrait">
					<pkd-entity-portrait
						[type]="mega.types[0]"
						[src]="sprite(mega.id).src"
						[fallbackSrc]="sprite(mega.id).fallbackSrc"
						[alt]="mega.name"
						[size]="40"
					/>
				</span>

				<div class="identity">
					<span class="name mega-name">{{ mega.name }}</span>
					<div class="chips">
						@for (type of mega.types; track type) {
							<pkd-type-chip [type]="type" size="sm" />
						}
					</div>
				</div>

				<ul class="abilities">
					@for (ability of megaAbilities(mega); track ability.slug) {
						<li tabindex="0">
							{{ ability.name }}
							@if (ability.effectText) {
								<span class="tip">{{ ability.effectText }}</span>
							}
						</li>
					}
				</ul>

				<div class="stats">
					@for (stat of megaCells(mega); track stat.key) {
						<span class="stat" [style.--fill.%]="stat.percent" [class.up]="stat.delta > 0" [class.down]="stat.delta < 0">
							<span class="stat-label">{{ stat.label }}</span>
							<span class="stat-value">{{ stat.value }}</span>
						</span>
					}
					<span class="stat total">
						<span class="stat-label">BST</span>
						<span class="stat-value">{{ mega.baseStats.total }}</span>
					</span>
				</div>

				<div class="actions"></div>
			</div>
		}
	`,
	styles: `
		/*
			**One grid for the whole card**, not one per row.

			Each row used to be its own grid, so its columns sized to its own content — and
			because a Mega row has no action buttons, its empty last column collapsed and let
			every column before it stretch. The result was a Mega whose abilities and stats sat
			70-140px right of the ones they belong under.

			Setting display:contents dissolves the row wrappers so all their cells become items of
			this single grid, which is what actually guarantees the columns line up. The cost is
			that per-row styling has to move to the cells, below.
		*/
		:host {
			display: grid;
			grid-template-columns: 3.5rem minmax(9rem, 1.1fr) minmax(7rem, 1fr) auto auto;
			align-items: center;
			border: 1.5px solid var(--line);
			border-radius: var(--r-lg, 12px);
			background: var(--surface);
			overflow: hidden;
		}

		:host(:hover) {
			border-color: var(--accent, #4f6df5);
		}

		:host(.owned) {
			border-color: color-mix(in srgb, var(--success, #2e7d52) 55%, var(--line));
		}

		.row {
			display: contents;
		}

		/* Padding and gaps live on the cells now, since the wrappers no longer draw a box. */
		.row > * {
			padding-block: var(--s-2, 0.5rem);
			padding-inline-end: var(--s-3, 0.75rem);
		}

		.row > *:first-child {
			padding-inline-start: var(--s-3, 0.75rem);
		}

		/*
			Quieter than the row above, and marked as belonging to it. The inset bar on the first
			cell says "child of" without moving anything — the columns stay exactly where the
			base row put them, which is the whole point.
		*/
		.row.mega > * {
			border-top: 1px dashed var(--line);
			background: var(--surface-sunken, rgba(128, 128, 128, 0.06));
		}

		.row.mega > *:first-child {
			box-shadow: inset 3px 0 0 var(--accent, #4f6df5);
		}

		.portrait {
			display: block;
			text-decoration: none;
		}

		.identity {
			min-width: 0;
		}

		.name {
			display: block;
			font-weight: 700;
			text-decoration: none;
			color: inherit;
		}

		a.name:hover {
			color: var(--accent, #4f6df5);
		}

		.mega-name {
			font-weight: 600;
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
		}

		.no {
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			font-variant-numeric: tabular-nums;
			margin-right: 0.25rem;
		}

		.chips {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 0.25rem;
			margin-top: 0.2rem;
		}

		.flag {
			font-size: 0.6rem;
			text-transform: uppercase;
			letter-spacing: 0.06em;
			border: 1px solid currentcolor;
			border-radius: var(--r-pill, 999px);
			padding: 0 0.35rem;
		}

		.owned-flag {
			color: var(--success, #2e7d52);
		}

		.abilities {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			gap: 0.1rem;
			min-width: 0;
		}

		.abilities li {
			position: relative;
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
			cursor: help;
			width: fit-content;
			max-width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			border-bottom: 1px dotted var(--line);
		}

		.abilities li:focus-visible {
			outline: 2px solid var(--accent, #4f6df5);
			outline-offset: 2px;
		}

		.tip {
			position: absolute;
			bottom: calc(100% + 0.3rem);
			left: 0;
			z-index: 5;
			display: none;
			width: max-content;
			max-width: 22rem;
			padding: 0.4rem 0.55rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			box-shadow: var(--shadow-md, 0 6px 18px rgba(0, 0, 0, 0.25));
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink);
			line-height: 1.45;
			white-space: normal;
		}

		.abilities li:hover .tip,
		.abilities li:focus .tip,
		.abilities li:focus-visible .tip {
			display: block;
		}

		.stats {
			display: flex;
			gap: 0.15rem;
		}

		/* Label above value, with the bar as a background fill — the "icon" is the bar height. */
		.stat {
			position: relative;
			display: grid;
			justify-items: center;
			gap: 0.05rem;
			min-width: 2.4rem;
			padding: 0.15rem 0.2rem;
			border-radius: var(--r-sm, 4px);
			background: linear-gradient(
				to top,
				color-mix(in srgb, var(--accent, #4f6df5) 22%, transparent) var(--fill, 0%),
				transparent var(--fill, 0%)
			);
		}

		.stat-label {
			font-size: 0.6rem;
			text-transform: uppercase;
			letter-spacing: 0.04em;
			color: var(--ink-muted);
		}

		.stat-value {
			font-size: var(--fs-sm, 0.875rem);
			font-weight: 600;
			font-variant-numeric: tabular-nums;
		}

		.stat.total .stat-value {
			color: var(--ink-muted);
		}

		/* On a Mega row, what moved is the news. */
		.stat.up .stat-value {
			color: var(--success, #2e7d52);
		}

		.stat.down .stat-value {
			color: var(--danger, #d1495b);
		}

		.actions {
			display: flex;
			gap: 0.25rem;
		}

		.actions a,
		.actions button {
			font: inherit;
			font-size: 0.7rem;
			font-weight: 600;
			text-decoration: none;
			cursor: pointer;
			padding: 0.2rem 0.45rem;
			border-radius: var(--r-sm, 4px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink-muted);
			white-space: nowrap;
		}

		.actions a:hover,
		.actions button:hover {
			border-color: var(--accent, #4f6df5);
			color: var(--accent, #4f6df5);
		}

		.actions button.on {
			background: var(--accent, #4f6df5);
			border-color: var(--accent, #4f6df5);
			color: #fff;
		}

		/* Below a phone-and-a-half the five columns stop fitting; stats and actions wrap under. */
		@media (max-width: 46rem) {
			:host {
				grid-template-columns: 3.5rem minmax(0, 1fr);
			}

			.abilities,
			.stats,
			.actions {
				grid-column: 1 / -1;
				padding-inline-start: var(--s-3, 0.75rem);
			}

			.stats {
				flex-wrap: wrap;
			}
		}
	`,
})
export class PokemonRowComponent {
	readonly mon = input.required<DexEntry>();

	protected readonly store = inject(DexStore);

	protected readonly owned = computed(() => this.store.isOwned(this.mon()));
	protected readonly comparing = computed(() => this.store.isComparing(this.mon().slug));
	protected readonly megas = computed(() => this.store.megasOf(this.mon().slug));
	protected readonly link = computed(() => ['/champions/pokedex', this.mon().slug]);

	protected readonly abilities = computed(() => this.describe(this.mon()));

	protected readonly statCells = computed(() =>
		STATS.map((stat) => ({
			...stat,
			value: this.mon().baseStats[stat.key],
			percent: Math.min(100, (this.mon().baseStats[stat.key] / STAT_CEILING) * 100),
		})),
	);

	protected sprite(id: number) {
		return spriteSources(id);
	}

	protected megaAbilities(mega: DexEntry) {
		return this.describe(mega);
	}

	/** Mega stats alongside how far each moved, so the trade-off is visible in place. */
	protected megaCells(mega: DexEntry) {
		const base = this.mon().baseStats;

		return STATS.map((stat) => ({
			...stat,
			value: mega.baseStats[stat.key],
			delta: mega.baseStats[stat.key] - base[stat.key],
			percent: Math.min(100, (mega.baseStats[stat.key] / STAT_CEILING) * 100),
		}));
	}

	/** Ability slugs joined to the effect text the store fetched once for the whole roster. */
	private describe(entry: DexEntry) {
		const text = this.store.abilityText();

		return entry.abilitySlugs.map((slug, index) => ({
			slug,
			name: entry.abilityNames[index] ?? text.get(slug)?.name ?? slug,
			effectText: text.get(slug)?.effectText ?? null,
		}));
	}
}
