import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CHAMPIONS_LEVEL, SP_PER_STAT_CAP, defensiveProfile, statAt50 } from '@pokemon-center/champions-engine';
import { ChampTeamDocument, TypeChartDocument, champResource } from '@pokemon-center/data-access-champions';
import {
	EntityPortraitComponent,
	SectionHeadingComponent,
	StatBarComponent,
	TypeChipComponent,
	UiCardComponent,
	UiSkeletonComponent,
	spriteSources,
} from '@pokemon-center/ui-pokedex';
import { toTypeChart } from '../advisor/build-inference';

/**
 * One Pokémon, as Champions has it.
 *
 * The two things a mainline player most needs are the two things this page leads with: the
 * real stat at level 50 with maximum investment (not a base stat they then have to convert),
 * and a visible flag on every move Champions changed. A dex that silently shows mainline
 * values is worse than no dex, so anything altered says so.
 */
@Component({
	selector: 'champions-pokemon-detail',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		EntityPortraitComponent,
		RouterLink,
		SectionHeadingComponent,
		StatBarComponent,
		TypeChipComponent,
		UiCardComponent,
		UiSkeletonComponent,
	],
	template: `
		@if (query.isLoading()) {
			<pkd-skeleton height="16rem" />
		} @else if (mon(); as pokemon) {
			<a routerLink="/champions/dex" class="back">← Pokédex</a>

			<header class="masthead">
				<pkd-entity-portrait
					[type]="pokemon.types[0]"
					[src]="sprite().src"
					[fallbackSrc]="sprite().fallbackSrc"
					[alt]="pokemon.name"
					[size]="112"
				/>
				<div>
					<h1>{{ pokemon.name }}</h1>
					<div class="chips">
						@for (t of pokemon.types; track t) {
							<pkd-type-chip [type]="t" />
						}
						<span class="dex">#{{ pokemon.nationalDexNo }}</span>
					</div>
				</div>
			</header>

			<!-- The defensive read, up front: what this thing folds to, and what it shrugs off. -->
			<pkd-section-heading label="Defensively" />
			<pkd-card>
				<div class="panel">
					<div class="matchups">
						<div>
							<h3>Weak to</h3>
							<div class="chips">
								@for (entry of profile().weaknesses; track entry.type) {
									<span class="mult">
										<pkd-type-chip [type]="entry.type" size="sm" />
										<span class="x">{{ entry.multiplier }}×</span>
									</span>
								} @empty {
									<span class="none">Nothing.</span>
								}
							</div>
						</div>
						<div>
							<h3>Resists</h3>
							<div class="chips">
								@for (entry of profile().resistances; track entry.type) {
									<span class="mult">
										<pkd-type-chip [type]="entry.type" size="sm" />
										<span class="x">{{ entry.multiplier }}×</span>
									</span>
								} @empty {
									<span class="none">Nothing.</span>
								}
							</div>
						</div>
						@if (profile().immunities.length > 0) {
							<div>
								<h3>Immune to</h3>
								<div class="chips">
									@for (type of profile().immunities; track type) {
										<pkd-type-chip [type]="type" size="sm" />
									}
								</div>
							</div>
						}
					</div>
				</div>
			</pkd-card>

			<pkd-section-heading label="Stats at level {{ level }}" />
			<pkd-card>
				<div class="panel">
					@for (stat of statRows(); track stat.key) {
						<div class="stat-row">
							<pkd-stat-bar [label]="stat.label" [value]="stat.base" [type]="pokemon.types[0]" />
							<span class="actual" [title]="'Base ' + stat.base + ', ' + spCap + ' SP invested, neutral nature'">
								{{ stat.invested }}
							</span>
						</div>
					}
					<p class="caveat">
						The right-hand number is the real stat at level {{ level }} with {{ spCap }} SP invested and a
						neutral nature — what you actually battle with, not a base stat to convert in your head.
					</p>
				</div>
			</pkd-card>

			<pkd-section-heading label="Abilities" />
			<pkd-card>
				<div class="panel">
					<ul class="abilities">
						@for (slot of pokemon.abilities; track slot.ability.slug) {
							<li>
								<span class="ability-name">
									{{ slot.ability.name }}
									@if (slot.isHidden) {
										<span class="tag">hidden</span>
									}
									@if (slot.ability.isMega) {
										<span class="tag mega">Mega only</span>
									}
								</span>
								@if (slot.ability.effectText) {
									<span class="ability-effect">{{ slot.ability.effectText }}</span>
								}
							</li>
						}
					</ul>
				</div>
			</pkd-card>

			@if (pokemon.megaForms.length > 0) {
				<pkd-section-heading label="Mega Evolutions" />
				<pkd-card>
					<div class="panel">
						<ul class="megas">
							@for (mega of pokemon.megaForms; track mega.slug) {
								<li>
									<a [routerLink]="['/champions/dex', mega.slug]">{{ mega.name }}</a>
									<span class="chips">
										@for (t of mega.types; track t) {
											<pkd-type-chip [type]="t" size="sm" />
										}
									</span>
									<span class="bst">{{ mega.baseStats.total }}</span>
								</li>
							}
						</ul>
					</div>
				</pkd-card>
			}

			<pkd-section-heading label="Moves ({{ pokemon.moves.length }})" />
			<pkd-card>
				<div class="panel">
					@if (changedMoves().length > 0) {
						<p class="changed-lead">
							<strong>{{ changedMoves().length }}</strong> of these differ from the main series.
						</p>
					}
					<div class="scroller">
						<table>
							<thead>
								<tr>
									<th scope="col">Move</th>
									<th scope="col">Type</th>
									<th scope="col">Pow</th>
									<th scope="col">Acc</th>
									<th scope="col">PP</th>
								</tr>
							</thead>
							<tbody>
								@for (move of pokemon.moves; track move.id) {
									<tr [class.changed]="move.isOverridden">
										<td>
											{{ move.name }}
											@if (move.isOverridden) {
												<span class="badge" [title]="move.overrideNote ?? ''">changed</span>
											}
											@if (move.isOverridden && move.overrideNote) {
												<span class="note">{{ move.overrideNote }}</span>
											}
										</td>
										<td><pkd-type-chip [type]="move.type" size="sm" /></td>
										<td class="num">{{ move.power ?? '—' }}</td>
										<td class="num">{{ move.accuracy ?? '—' }}</td>
										<td class="num">{{ move.pp ?? '—' }}</td>
									</tr>
								}
							</tbody>
						</table>
					</div>

					@if (pokemon.learnsetIsApproximate) {
						<p class="caveat">
							This learnset was supplemented from recent main-series games where the Champions data had
							gaps, so it may be slightly generous. Moves shown as changed are still accurate.
						</p>
					}
				</div>
			</pkd-card>
		} @else {
			<pkd-card>
				<div class="panel">
					<h2>Not in this regulation</h2>
					<p>
						<a routerLink="/champions/dex">Back to the roster</a>
					</p>
				</div>
			</pkd-card>
		}
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-5, 1.5rem);
			max-width: 60rem;
			margin-inline: auto;
		}

		.back {
			display: inline-block;
			margin-bottom: var(--s-2, 0.5rem);
			color: var(--ink-muted);
			text-decoration: none;
			font-size: var(--fs-sm, 0.875rem);
		}

		.masthead {
			display: flex;
			align-items: center;
			gap: var(--s-4, 1rem);
			flex-wrap: wrap;
		}

		.matchups {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
			gap: var(--s-4, 1rem);
		}

		.matchups h3 {
			margin: 0 0 var(--s-2, 0.5rem);
			font-size: var(--fs-xs, 0.75rem);
			text-transform: uppercase;
			letter-spacing: 0.1em;
			color: var(--ink-muted);
		}

		.mult {
			display: inline-flex;
			align-items: center;
			gap: 0.2rem;
		}

		.mult .x {
			font-size: var(--fs-xs, 0.75rem);
			font-variant-numeric: tabular-nums;
			color: var(--ink-muted);
		}

		.none {
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
		}

		h1 {
			margin: 0;
			font-size: var(--fs-2xl, 2rem);
			letter-spacing: -0.02em;
		}

		.chips {
			display: flex;
			align-items: center;
			gap: 0.3rem;
			margin-top: var(--s-1, 0.25rem);
		}

		.dex {
			color: var(--ink-muted);
			font-variant-numeric: tabular-nums;
			font-size: var(--fs-sm, 0.875rem);
		}

		.panel {
			padding: var(--s-4, 1rem);
		}

		.stat-row {
			display: grid;
			grid-template-columns: 1fr auto;
			align-items: center;
			gap: var(--s-3, 0.75rem);
		}

		.actual {
			font-variant-numeric: tabular-nums;
			font-weight: 600;
			min-width: 2.5rem;
			text-align: right;
		}

		.abilities,
		.megas {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			gap: var(--s-3, 0.75rem);
		}

		.megas li {
			display: flex;
			align-items: center;
			gap: var(--s-3, 0.75rem);
		}

		.ability-name {
			font-weight: 600;
			display: block;
		}

		.ability-effect {
			color: var(--ink-muted);
			font-size: var(--fs-sm, 0.875rem);
			line-height: 1.5;
		}

		.tag {
			font-size: var(--fs-xs, 0.75rem);
			font-weight: 500;
			text-transform: uppercase;
			letter-spacing: 0.08em;
			color: var(--ink-muted);
			margin-left: 0.4rem;
		}

		.tag.mega {
			color: var(--accent, #4f6df5);
		}

		.scroller {
			overflow-x: auto;
		}

		table {
			border-collapse: collapse;
			width: 100%;
			font-size: var(--fs-sm, 0.875rem);
		}

		th,
		td {
			text-align: left;
			padding: 0.35rem 0.5rem;
			border-bottom: 1px solid var(--line);
			vertical-align: top;
		}

		thead th {
			font-size: var(--fs-xs, 0.75rem);
			text-transform: uppercase;
			letter-spacing: 0.08em;
			color: var(--ink-muted);
		}

		.num {
			font-variant-numeric: tabular-nums;
			text-align: right;
		}

		tr.changed {
			background: var(--surface-sunken, rgba(128, 128, 128, 0.09));
		}

		/* The badge carries a word, not just a colour — the change has to survive a screenshot. */
		.badge {
			display: inline-block;
			margin-left: 0.4rem;
			padding: 0.05rem 0.35rem;
			border-radius: var(--r-sm, 4px);
			background: var(--accent, #4f6df5);
			color: #fff;
			font-size: 0.65rem;
			text-transform: uppercase;
			letter-spacing: 0.06em;
			vertical-align: middle;
		}

		.note {
			display: block;
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			margin-top: 0.1rem;
		}

		.changed-lead {
			margin: 0 0 var(--s-3, 0.75rem);
			font-size: var(--fs-sm, 0.875rem);
		}

		.caveat {
			margin-top: var(--s-3, 0.75rem);
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			line-height: 1.5;
		}
	`,
})
export default class PokemonDetailComponent {
	/** Bound from the route parameter via `withComponentInputBinding`. */
	readonly slug = input.required<string>();

	protected readonly level = CHAMPIONS_LEVEL;
	protected readonly spCap = SP_PER_STAT_CAP;

	protected readonly query = champResource(ChampTeamDocument, () => ({ slugs: [this.slug()] }));
	protected readonly mon = computed(() => this.query.value()?.champTeam[0] ?? null);

	private readonly chartQuery = champResource(TypeChartDocument, () => ({}));

	/** Artwork lives at the form id, so a Mega gets its own picture. */
	protected readonly sprite = computed(() => spriteSources(this.mon()?.id ?? 0));

	/** Weaknesses, resistances and immunities, sharpest first. */
	protected readonly profile = computed(() => {
		const types = this.mon()?.types ?? [];
		const chart = toTypeChart(this.chartQuery.value()?.typeChart ?? []);
		if (types.length === 0 || Object.keys(chart).length === 0) {
			return { weaknesses: [], resistances: [], immunities: [] };
		}
		return defensiveProfile(types, chart);
	});

	protected readonly changedMoves = computed(() => this.mon()?.moves.filter((m) => m.isOverridden) ?? []);

	/** Base stat alongside what it becomes at level 50 with the cap invested. */
	protected readonly statRows = computed(() => {
		const stats = this.mon()?.baseStats;
		if (!stats) return [];

		return (
			[
				{ key: 'hp', label: 'HP', base: stats.hp },
				{ key: 'attack', label: 'Attack', base: stats.attack },
				{ key: 'defense', label: 'Defense', base: stats.defense },
				{ key: 'specialAttack', label: 'Sp. Atk', base: stats.specialAttack },
				{ key: 'specialDefense', label: 'Sp. Def', base: stats.specialDefense },
				{ key: 'speed', label: 'Speed', base: stats.speed },
			] as const
		).map((row) => ({ ...row, invested: statAt50(row.base, row.key, SP_PER_STAT_CAP) }));
	});
}

