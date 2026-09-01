import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EntityPortraitComponent, SectionHeadingComponent, TypeChipComponent, UiCardComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import { AdvisorStore, TEAM_SIZE } from './advisor.store';
import { BringLeadComponent } from './bring-lead.component';
import { OpponentIntelCardComponent } from './opponent-intel-card.component';
import { SlotPickerComponent } from './slot-picker.component';
import { SpeedTiersComponent } from './speed-tiers.component';
import { ThreatGridComponent } from './threat-grid.component';

/**
 * The Companion — what to do about the six in front of you.
 *
 * You get 90 seconds and their team. This answers the three questions that decide the lead:
 * what hits them hardest, who is faster, and which of theirs has to come off the field.
 *
 * Your side is now a saved team from the Box, so its numbers are the ones you built. Only the
 * opponent is inferred, and the disclosure at the bottom says exactly that.
 */
@Component({
	selector: 'champions-team-preview',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		BringLeadComponent,
		EntityPortraitComponent,
		OpponentIntelCardComponent,
		RouterLink,
		SectionHeadingComponent,
		SlotPickerComponent,
		SpeedTiersComponent,
		ThreatGridComponent,
		TypeChipComponent,
		UiCardComponent,
	],
	template: `
		<header class="masthead">
			<div>
				<h1>Companion</h1>
				<p class="tagline">Their six in, the lead out.</p>
			</div>
			<div class="header-actions">
				@if (store.theirSlugs().length > 0) {
					<button type="button" (click)="store.clearOpponent()">Clear opponent</button>
				}
				<a class="live" routerLink="/champions/companion/live">Battle mode →</a>
			</div>
		</header>

		<pokedex-section-heading label="Your team" />
		@if (store.availableTeams().length === 0) {
			<pokedex-card>
				<div class="panel">
					<h2>No teams yet</h2>
					<p>
						Build one in the <a routerLink="/champions/box">Box</a>. The Companion reads your real
						spreads and moves from there, so its numbers about your side are exact rather than assumed.
					</p>
				</div>
			</pokedex-card>
		} @else {
			<div class="teams">
				@for (team of store.availableTeams(); track team.id) {
					<button type="button" class="team" [class.on]="store.myTeam()?.id === team.id" (click)="pick(team.id)">
						<span class="team-name">{{ team.label }}</span>
						<span class="team-mons">
							@for (member of team.members; track member.slot) {
								<pokedex-entity-portrait
									[type]="member.pokemon.types[0]"
									[src]="sprite(member.pokemon.id).src"
									[fallbackSrc]="sprite(member.pokemon.id).fallbackSrc"
									[alt]="member.pokemon.name"
									[size]="26"
								/>
							}
						</span>
					</button>
				}
			</div>
		}

		<pokedex-section-heading label="Their team" />
		<div class="slots">
			@for (slot of slots; track slot) {
				<div class="slot-column">
					<champions-slot-picker
						[index]="slot"
						[selected]="opponent(store.theirs()[slot])"
						(picked)="store.setOpponentSlot(slot, $event)"
						(clear)="store.setOpponentSlot(slot, null)"
					/>
					@if (intelFor(store.theirs()[slot]); as intel) {
						<champions-opponent-intel [intel]="intel" />
					}
				</div>
			}
		</div>

		@if (store.error()) {
			<pokedex-card>
				<div class="panel">
					<h2>Champions API unreachable</h2>
					<p>Nothing is answering on <code>:3001</code>. Start it with <code>nx serve champions-service</code>.</p>
				</div>
			</pokedex-card>
		} @else if (store.theirSlugs().length === 0) {
			<pokedex-card>
				<div class="panel">
					<h2>Add their six</h2>
					<p>Type three letters and press Enter. Advice appears from the first opponent — no need to fill every slot.</p>
				</div>
			</pokedex-card>
		} @else {
			@if (store.theirWeaknesses(); as weaknesses) {
				<pokedex-section-heading label="What hits them hardest" />
				<pokedex-card>
					<div class="panel">
						<ol class="pressure">
							@for (entry of topPressure(); track entry.type) {
								<li>
									<pokedex-type-chip [type]="entry.type" />
									<span class="hits">{{ entry.hits }} of {{ store.theirSlugs().length }}</span>
									<span class="avg">avg ×{{ entry.averageMultiplier }}</span>
								</li>
							}
						</ol>
						@if (weaknesses.covered.length > 0) {
							<p class="covered"><strong>They resist:</strong> {{ weaknesses.covered.join(', ') }}</p>
						}
					</div>
				</pokedex-card>
			}

			<pokedex-section-heading label="Speed order" />
			<pokedex-card>
				<div class="panel">
					<champions-speed-tiers [tiers]="store.tiers()" />
					<p class="caveat">
						Your speeds are exact — they come from your Box. Theirs are a range, from uninvested to
						fully invested, with the Choice Scarf figure alongside.
					</p>
				</div>
			</pokedex-card>

			@if (store.selectionRecommendation(); as recommendation) {
				<pokedex-section-heading label="Bring &amp; lead" />
				<pokedex-card>
					<div class="panel"><champions-bring-lead [recommendation]="recommendation" /></div>
				</pokedex-card>
			} @else if (!store.hasMyTeam()) {
				<pokedex-card>
					<div class="panel">
						<h2>Pick your team for a bring &amp; lead recommendation</h2>
						<p>This needs your six from the Box, same as the matchup grid below.</p>
					</div>
				</pokedex-card>
			}

			@if (store.threats(); as threats) {
				<pokedex-section-heading label="Matchups" />
				<pokedex-card>
					<div class="panel"><champions-threat-grid [assessment]="threats" /></div>
				</pokedex-card>
			} @else if (!store.hasMyTeam()) {
				<pokedex-card>
					<div class="panel">
						<h2>Pick your team for matchups</h2>
						<p>Type pressure and speed only need their six. The grid needs yours too.</p>
					</div>
				</pokedex-card>
			}

			<p class="disclosure">
				<strong>Your side is exact</strong> — spreads, natures, items and moves come from your Box.
				<strong>Theirs is inferred</strong>: strongest STAB plus coverage from each Pokémon's legal
				learnset, with investment assumed maximal in the stats that threaten you, because an advisor
				that assumes the best about an opponent loses games.
				@if (store.hasApproximateData()) {
					Some opponent learnsets were supplemented from recent main-series games where the Champions
					data had gaps.
				}
			</p>
		}
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
			align-items: flex-start;
			justify-content: space-between;
			gap: var(--s-4, 1rem);
			flex-wrap: wrap;
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

		.header-actions {
			display: flex;
			gap: var(--s-2, 0.5rem);
			align-items: center;
		}

		button,
		.live {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			cursor: pointer;
			padding: 0.35rem 0.7rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink-muted);
			text-decoration: none;
			white-space: nowrap;
		}

		.live {
			color: var(--accent, #4f6df5);
			border-color: var(--accent, #4f6df5);
		}

		.teams {
			display: flex;
			flex-wrap: wrap;
			gap: var(--s-2, 0.5rem);
			margin-bottom: var(--s-4, 1rem);
		}

		.team {
			display: grid;
			gap: 0.3rem;
			padding: var(--s-2, 0.5rem) var(--s-3, 0.75rem);
			text-align: left;
			color: inherit;
		}

		.team.on {
			border-color: var(--accent, #4f6df5);
			background: var(--accent-soft, rgba(79, 109, 245, 0.1));
		}

		.team-name {
			font-weight: 600;
		}

		.team-mons {
			display: flex;
			gap: 0.15rem;
		}

		.slots {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
			gap: var(--s-2, 0.5rem);
			margin-bottom: var(--s-4, 1rem);
		}

		.slot-column {
			display: grid;
			gap: var(--s-2, 0.5rem);
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
		}

		.pressure {
			margin: 0;
			padding: 0;
			list-style: none;
			display: grid;
			gap: 0.35rem;
		}

		.pressure li {
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: center;
			gap: var(--s-3, 0.75rem);
			font-size: var(--fs-sm, 0.875rem);
		}

		.hits {
			font-weight: 600;
		}

		.avg {
			color: var(--ink-muted);
			font-variant-numeric: tabular-nums;
		}

		.covered {
			margin-top: var(--s-3, 0.75rem) !important;
			font-size: var(--fs-sm, 0.875rem);
		}

		.caveat,
		.disclosure {
			margin-top: var(--s-3, 0.75rem);
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			line-height: 1.5;
		}

		.disclosure {
			margin-top: var(--s-5, 1.5rem);
		}

		code {
			font-family: ui-monospace, monospace;
			font-size: 0.9em;
			background: var(--surface-sunken, rgba(128, 128, 128, 0.12));
			padding: 0.1em 0.35em;
			border-radius: var(--r-sm, 4px);
		}
	`,
})
export default class TeamPreviewComponent {
	protected readonly store = inject(AdvisorStore);
	protected readonly slots = Array.from({ length: TEAM_SIZE }, (_, index) => index);

	protected readonly topPressure = computed(() => this.store.theirWeaknesses()?.pressure.slice(0, 5) ?? []);

	protected sprite(id: number) {
		return spriteSources(id);
	}

	/** Toggle: tapping the selected team clears it, so there is always a way back out. */
	protected pick(teamId: number): void {
		this.store.selectTeam(this.store.myTeam()?.id === teamId ? null : teamId);
	}

	protected opponent(slug: string | null): { name: string; types: string[] } | null {
		if (!slug) return null;
		const found = this.store.theirMembers().find((member) => member.slug === slug);
		return found ? { name: found.name, types: found.types } : null;
	}

	protected intelFor(slug: string | null) {
		if (!slug) return null;
		return this.store.theirIntel().find((intel) => intel.build.species.slug === slug) ?? null;
	}
}
