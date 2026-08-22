import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal, untracked } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { defensiveProfile } from '@pokemon-center/champions-engine';
import { ChampTeamDocument, champResource } from '@pokemon-center/data-access-champions';
import {
	EntityPortraitComponent,
	SectionHeadingComponent,
	TypeChipComponent,
	UiCardComponent,
	UiSkeletonComponent,
	spriteSources,
} from '@pokemon-center/ui-pokedex';
import { CounterListComponent } from './counter-list.component';
import { answeredBy, answersTo } from './counters';
import { DexStore } from './dex.store';
import { MegaPanelComponent } from './mega-panel.component';
import { StatPanelComponent } from './stat-panel.component';

/**
 * One Pokémon, as Champions has it.
 *
 * Three things shape this page.
 *
 * **Nothing above the Abilities panel waits on a request.** Name, typing, sprite, base stats and
 * the whole defensive profile come from the roster the Pokédex already holds in memory, so
 * arriving from the grid paints instantly and only the learnset streams in.
 *
 * **A Mega is not a separate Pokémon.** It is a state this one can enter, so this page is where
 * its artwork, typing and stats live — and a Mega slug redirects here rather than rendering an
 * entry of its own.
 *
 * **Matchups are last, collapsed, and deferred.** Ranking ~300 candidates twice is cheap but not
 * free, and the section is tall; nobody should pay for it — in scroll distance or in work — on
 * a visit where they only wanted a stat.
 */
@Component({
	selector: 'champions-pokemon-detail',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		// Used only inside the `@defer` block below, so it ships as its own chunk.
		CounterListComponent,
		EntityPortraitComponent,
		MegaPanelComponent,
		RouterLink,
		SectionHeadingComponent,
		StatPanelComponent,
		TypeChipComponent,
		UiCardComponent,
		UiSkeletonComponent,
	],
	template: `
		@if (head(); as pokemon) {
			<nav class="crumbs" aria-label="Pokédex navigation">
				<a routerLink="/champions/pokedex" class="back">← Pokédex</a>

				<!--
					These walk the filter you were browsing, not the national dex — after asking
					what walls Dragon and Fairy, the next arrow should stay inside the answers.
				-->
				@if (neighbours().prev || neighbours().next) {
					<span class="walk">
						@if (neighbours().prev; as prev) {
							<a [routerLink]="['/champions/pokedex', prev.slug]" [attr.aria-label]="'Previous result: ' + prev.name">
								← {{ prev.name }}
							</a>
						}
						@if (neighbours().next; as next) {
							<a [routerLink]="['/champions/pokedex', next.slug]" [attr.aria-label]="'Next result: ' + next.name">
								{{ next.name }} →
							</a>
						}
					</span>
				}
			</nav>

			<header class="masthead">
				<pkd-entity-portrait
					[type]="pokemon.types[0]"
					[src]="sprite().src"
					[fallbackSrc]="sprite().fallbackSrc"
					[alt]="pokemon.name"
					[size]="112"
				/>
				<div class="identity">
					<h1>{{ pokemon.name }}</h1>
					<div class="chips">
						@for (t of pokemon.types; track t) {
							<pkd-type-chip [type]="t" />
						}
						<span class="dex">#{{ pokemon.nationalDexNo }}</span>
						@if (canMega()) {
							<span class="badge mega-badge">Can Mega Evolve</span>
						}
						@if (isOwned()) {
							<span class="badge owned-badge">In your Box</span>
						}
					</div>
				</div>

				<!-- A dex entry that cannot reach the tools is a reference site. -->
				<div class="actions">
					<a class="action" routerLink="/champions/simulator" [queryParams]="{ left: pokemon.slug }">Open in Simulator</a>
					<a class="action" routerLink="/champions/box" [queryParams]="{ add: pokemon.slug }">Add to Box</a>
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

			<!-- Base stats: the species fact. The level-50 numbers are one click away, not assumed. -->
			<pkd-section-heading label="Base stats" />
			<pkd-card>
				<div class="panel">
					<champions-stat-panel [base]="pokemon.baseStats" [type]="pokemon.types[0]" />
				</div>
			</pkd-card>

			@if (mon(); as detail) {
				@if (detail.megaForms.length > 0) {
					<pkd-section-heading label="Mega Evolution" />
					@for (mega of detail.megaForms; track mega.slug) {
						<pkd-card>
							<champions-mega-panel [mega]="mega" [baseStats]="pokemon.baseStats" [baseTypes]="pokemon.types" />
						</pkd-card>
					}
				}

				<pkd-section-heading label="Abilities" />
				<pkd-card>
					<div class="panel">
						<ul class="abilities">
							@for (slot of detail.abilities; track slot.ability.slug) {
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

				<pkd-section-heading label="Moves ({{ detail.moves.length }})" />
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
									@for (move of detail.moves; track move.id) {
										<tr [class.changed]="move.isOverridden">
											<td>
												{{ move.name }}
												@if (move.isOverridden) {
													<span class="badge changed-badge" [title]="move.overrideNote ?? ''">changed</span>
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

						@if (detail.learnsetIsApproximate) {
							<p class="caveat">
								This learnset was supplemented from recent main-series games where the Champions data had
								gaps, so it may be slightly generous. Moves shown as changed are still accurate.
							</p>
						}
					</div>
				</pkd-card>
			} @else {
				<pkd-section-heading label="Abilities and moves" />
				<pkd-skeleton height="14rem" />
			}

			<!--
				Last, collapsed, and deferred: the chunk is not downloaded and the ~600 rankings
				are not computed until someone asks, because a signal nobody reads is a signal
				nobody pays for.
			-->
			<pkd-section-heading label="Matchups" />
			<pkd-card>
				<div class="panel">
					<button
						type="button"
						class="expand"
						(click)="showMatchups.set(!showMatchups())"
						[attr.aria-expanded]="showMatchups()"
					>
						{{ showMatchups() ? 'Hide matchups' : 'What beats ' + pokemon.name + ', and what it beats' }}
					</button>

					@defer (when showMatchups()) {
						<div class="counters">
							<champions-counter-list
								[heading]="'What beats ' + pokemon.name"
								[answers]="beatenBy()"
								[pivotSlug]="pokemon.slug"
								[pivotName]="pokemon.name"
								direction="incoming"
								[showSeeAll]="true"
								(seeAll)="showAllCounters(pokemon.slug)"
							/>
							<champions-counter-list
								[heading]="'What ' + pokemon.name + ' beats'"
								[answers]="beats()"
								[pivotSlug]="pokemon.slug"
								[pivotName]="pokemon.name"
								direction="outgoing"
								emptyText="It answers nothing on typing alone."
							/>
						</div>

						<p class="caveat">
							Ranked on typing alone — STAB against STAB, with base Speed breaking ties. It does not
							know either side's actual moves, spread or item, so treat it as a shortlist.
							<em>Run it</em> opens the pair in the Simulator, which does the real damage maths.
						</p>
					} @placeholder {
						<p class="caveat">
							A typing-level shortlist of what answers it and what it answers, ranked and explained.
						</p>
					} @loading {
						<pkd-skeleton height="10rem" />
					}
				</div>
			</pkd-card>
		} @else if (dex.isLoading() || query.isLoading()) {
			<pkd-skeleton height="16rem" />
		} @else if (notFound()) {
			<pkd-card>
				<div class="panel">
					<h2>Not in this regulation</h2>
					<p>
						<a routerLink="/champions/pokedex">Back to the roster</a>
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

		.crumbs {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: var(--s-3, 0.75rem);
			flex-wrap: wrap;
			margin-bottom: var(--s-2, 0.5rem);
		}

		.back,
		.walk a {
			color: var(--ink-muted);
			text-decoration: none;
			font-size: var(--fs-sm, 0.875rem);
		}

		.walk {
			display: flex;
			gap: var(--s-3, 0.75rem);
			min-width: 0;
		}

		.walk a {
			max-width: 11rem;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.back:hover,
		.walk a:hover {
			color: var(--accent, #4f6df5);
		}

		.masthead {
			display: flex;
			align-items: center;
			gap: var(--s-4, 1rem);
			flex-wrap: wrap;
		}

		.identity {
			flex: 1 1 12rem;
			min-width: 0;
		}

		h1 {
			margin: 0;
			font-size: var(--fs-2xl, 2rem);
			letter-spacing: -0.02em;
		}

		.chips {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 0.3rem;
			margin-top: var(--s-1, 0.25rem);
		}

		.dex {
			color: var(--ink-muted);
			font-variant-numeric: tabular-nums;
			font-size: var(--fs-sm, 0.875rem);
		}

		/* Words, never only colours — every badge has to survive a screenshot. */
		.badge {
			border-radius: var(--r-pill, 999px);
			padding: 0 0.45rem;
			font-size: 0.65rem;
			text-transform: uppercase;
			letter-spacing: 0.06em;
			white-space: nowrap;
			border: 1px solid currentcolor;
		}

		.mega-badge {
			color: var(--accent, #4f6df5);
		}

		.owned-badge {
			color: var(--success, #2e7d52);
		}

		.actions,
		.counters {
			display: flex;
			gap: 0.4rem;
			flex-wrap: wrap;
		}

		.action {
			font-size: var(--fs-sm, 0.875rem);
			text-decoration: none;
			padding: 0.35rem 0.7rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink-muted);
			white-space: nowrap;
		}

		.action:hover,
		.action:focus-visible {
			border-color: var(--accent, #4f6df5);
			color: var(--accent, #4f6df5);
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

		.counters > * {
			flex: 1 1 20rem;
			min-width: 0;
			border: 1.5px solid var(--line);
			border-radius: var(--r-lg, 12px);
		}

		.expand {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			cursor: pointer;
			width: 100%;
			text-align: left;
			padding: 0.5rem 0.7rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink);
			min-height: 2.5rem;
			margin-bottom: var(--s-3, 0.75rem);
		}

		.expand:hover {
			border-color: var(--accent, #4f6df5);
			color: var(--accent, #4f6df5);
		}

		.panel {
			padding: var(--s-4, 1rem);
		}

		.panel h2 {
			margin: 0 0 var(--s-2, 0.5rem);
		}

		.abilities {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
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

		.changed-badge {
			display: inline-block;
			margin-left: 0.4rem;
			border: none;
			background: var(--accent, #4f6df5);
			color: #fff;
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
			max-width: 62ch;
		}
	`,
})
export default class PokemonDetailComponent {
	/** Bound from the route parameter via `withComponentInputBinding`. */
	readonly slug = input.required<string>();

	protected readonly dex = inject(DexStore);
	private readonly router = inject(Router);

	protected readonly query = champResource(ChampTeamDocument, () => ({ slugs: [this.slug()] }));

	/** The learnset, abilities and Mega forms — the only part of this page that waits. */
	protected readonly mon = computed(() => this.query.value()?.champTeam[0] ?? null);

	/** The same Pokémon as the grid already knows it. Present the moment the roster has loaded. */
	private readonly seed = computed(() => this.dex.entries().find((entry) => entry.slug === this.slug()) ?? null);

	/**
	 * What the masthead, defensive profile and stat panel render from.
	 *
	 * The detail response wins when it arrives, but the two agree on every field here — this is
	 * about who answers first, not about which is more correct.
	 */
	protected readonly head = computed(() => this.mon() ?? this.seed());

	/** Only a slug in neither the roster nor the detail response is genuinely not in this regulation. */
	protected readonly notFound = computed(() => !this.query.isLoading() && !this.mon() && !this.seed());

	/**
	 * A Mega slug is not an address here.
	 *
	 * Nothing in the app links to one any more, but bookmarks and old links exist, and landing
	 * on a page that contradicts the convention everywhere else is worse than a redirect.
	 * `replaceUrl` keeps the back button from bouncing between the two.
	 */
	private readonly redirectMegaToBase = effect(() => {
		const base = this.head()?.megaOfSlug;
		if (!base) return;

		untracked(() => void this.router.navigate(['/champions/pokedex', base], { replaceUrl: true }));
	});

	protected readonly sprite = computed(() => spriteSources(this.head()?.id ?? 0));

	/** The entries either side of this one in the filter you were browsing. */
	protected readonly neighbours = computed(() => this.dex.neighbours(this.slug()));

	protected readonly canMega = computed(() => this.seed()?.hasMega ?? (this.mon()?.megaForms.length ?? 0) > 0);

	protected readonly isOwned = computed(() => {
		const head = this.head();
		return head ? this.dex.isOwned({ slug: head.slug, megaOfSlug: head.megaOfSlug ?? null }) : false;
	});

	/** Weaknesses, resistances and immunities, sharpest first. */
	protected readonly profile = computed(() => {
		const types = this.head()?.types ?? [];
		const chart = this.dex.typeChart();
		if (types.length === 0 || Object.keys(chart).length === 0) {
			return { weaknesses: [], resistances: [], immunities: [] };
		}
		return defensiveProfile(types, chart);
	});

	/** Opened by the reader, so the ranking below is never computed on a visit that ignores it. */
	protected readonly showMatchups = signal(false);

	/**
	 * Both counter lists, over the roster the store already holds. Neither makes a request —
	 * see `dex/counters.ts` for why that is the whole point.
	 */
	protected readonly beatenBy = computed(() => {
		const entry = this.seed();
		return entry ? answersTo(entry, this.dex.entries(), this.dex.typeChart()) : [];
	});

	protected readonly beats = computed(() => {
		const entry = this.seed();
		return entry ? answeredBy(entry, this.dex.entries(), this.dex.typeChart()) : [];
	});

	/** Hand the ranking to the grid, where it can be filtered and sorted further. */
	protected showAllCounters(slug: string): void {
		this.dex.patch({ counterOf: slug });
		void this.router.navigate(['/champions/pokedex']);
	}

	protected readonly changedMoves = computed(() => this.mon()?.moves.filter((m) => m.isOverridden) ?? []);
}
