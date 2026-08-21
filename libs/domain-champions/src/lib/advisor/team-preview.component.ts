import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SectionHeadingComponent, TypeChipComponent, UiCardComponent } from '@pokemon-center/ui-pokedex';
import { AdvisorStore, TEAM_SIZE } from './advisor.store';
import { SlotPickerComponent } from './slot-picker.component';
import { SpeedTiersComponent } from './speed-tiers.component';
import { ThreatGridComponent } from './threat-grid.component';

/**
 * The team preview advisor — the first thing worth opening mid-ladder.
 *
 * You get 90 seconds and their six. This page answers the three questions that actually
 * decide the lead: what hits their team hardest, who is faster, and which of theirs must
 * come off the field. Everything is computed locally from a type chart fetched once, so
 * answers land instantly and survive a dropped connection.
 */
@Component({
	selector: 'champions-team-preview',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SectionHeadingComponent, SlotPickerComponent, SpeedTiersComponent, ThreatGridComponent, TypeChipComponent, UiCardComponent],
	template: `
		<header class="masthead">
			<div>
				<h1>Team preview</h1>
				<p class="tagline">Enter their six. Get the lead.</p>
			</div>
			@if (store.theirSlugs().length > 0 || store.mySlugs().length > 0) {
				<button type="button" class="reset" (click)="store.clearAll()">Clear both</button>
			}
		</header>

		<pkd-section-heading label="Their team" />
		<div class="slots">
			@for (slot of slots; track slot) {
				<champions-slot-picker
					[index]="slot"
					[selected]="member(store.theirs()[slot])"
					(picked)="store.setSlot('theirs', slot, $event)"
					(clear)="store.setSlot('theirs', slot, null)"
				/>
			}
		</div>

		<pkd-section-heading label="Your team" />
		<div class="slots">
			@for (slot of slots; track slot) {
				<champions-slot-picker
					[index]="slot"
					[selected]="member(store.mine()[slot])"
					(picked)="store.setSlot('mine', slot, $event)"
					(clear)="store.setSlot('mine', slot, null)"
				/>
			}
		</div>

		@if (store.error()) {
			<pkd-card>
				<div class="panel">
					<h2>Champions API unreachable</h2>
					<p>Nothing is answering on <code>:3001</code>. Start it with <code>nx serve champions-service</code>.</p>
				</div>
			</pkd-card>
		} @else if (store.theirSlugs().length === 0) {
			<pkd-card>
				<div class="panel">
					<h2>Add their six</h2>
					<p>
						Type three letters and press Enter. Advice appears as soon as one opponent is on the board —
						you do not have to fill every slot first.
					</p>
				</div>
			</pkd-card>
		} @else {
			@if (store.theirWeaknesses(); as weaknesses) {
				<pkd-section-heading label="What hits them hardest" />
				<pkd-card>
					<div class="panel">
						<ol class="pressure">
							@for (entry of topPressure(); track entry.type) {
								<li>
									<pkd-type-chip [type]="entry.type" />
									<span class="hits">{{ entry.hits }} of {{ store.theirSlugs().length }}</span>
									<span class="avg">avg ×{{ entry.averageMultiplier }}</span>
								</li>
							}
						</ol>
						@if (weaknesses.covered.length > 0) {
							<p class="covered">
								<strong>They resist:</strong>
								{{ weaknesses.covered.join(', ') }}
							</p>
						}
					</div>
				</pkd-card>
			}

			<pkd-section-heading label="Speed order" />
			<pkd-card>
				<div class="panel">
					<champions-speed-tiers [tiers]="store.tiers()" />
					<p class="caveat">
						Opponent speeds are a range: uninvested to fully invested, with the Choice Scarf figure
						alongside. Their real number is somewhere in that band until they reveal it.
					</p>
				</div>
			</pkd-card>

			@if (store.threats(); as threats) {
				<pkd-section-heading label="Matchups" />
				<pkd-card>
					<div class="panel">
						<champions-threat-grid [assessment]="threats" />
					</div>
				</pkd-card>
			} @else if (store.mySlugs().length === 0) {
				<pkd-card>
					<div class="panel">
						<h2>Add your team for matchups</h2>
						<p>Speed and type pressure only need their six. The grid needs yours too.</p>
					</div>
				</pkd-card>
			}

			<p class="disclosure">
				Movesets are <strong>computed</strong>, not observed — strongest STAB plus coverage from each
				Pokémon's legal learnset. Investment is assumed maximal in the stats that threaten you, because an
				advisor that assumes the best about an opponent loses games.
				@if (store.hasApproximateData()) {
					Some learnsets were supplemented from recent mainline games where the Champions data had gaps.
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

		.reset {
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			cursor: pointer;
			padding: 0.35rem 0.7rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink-muted);
		}

		/* Two columns on a phone, six on a desktop — the same page works in both hands. */
		.slots {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(8.5rem, 1fr));
			gap: var(--s-2, 0.5rem);
			margin-bottom: var(--s-4, 1rem);
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

	/** The five types that pressure the most of their team — beyond that it is noise. */
	protected readonly topPressure = computed(() => this.store.theirWeaknesses()?.pressure.slice(0, 5) ?? []);

	protected member(slug: string | null): { name: string; types: string[] } | null {
		if (!slug) return null;
		const found = this.store.members().find((m) => m.slug === slug);
		return found ? { name: found.name, types: found.types } : null;
	}
}
