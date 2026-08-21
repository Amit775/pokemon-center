import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionHeadingComponent, UiCardComponent, UiSkeletonComponent } from '@pokemon-center/ui-pokedex';
import { RegulationStore } from '../../regulation.store';

/**
 * Champions landing page.
 *
 * Its job right now is to prove the whole vertical slice is wired: Angular → champions-service
 * (:3001) → the `pokemon-champions` database. It shows the live regulation and is honest about
 * the roster not being seeded yet, rather than rendering an empty dex as if it were complete.
 */
@Component({
	selector: 'champions-home',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [DatePipe, SectionHeadingComponent, UiCardComponent, UiSkeletonComponent],
	template: `
		<header class="masthead">
			<h1>Champions</h1>
			<p class="tagline">Real-time battle advisor for Pokémon Champions.</p>
		</header>

		@if (store.isLoading()) {
			<pkd-skeleton />
		} @else if (store.error()) {
			<pkd-card>
				<div class="panel error">
					<h2>Champions API unreachable</h2>
					<p>
						Nothing is listening on <code>:3001</code>. Start it with
						<code>nx serve champions-service</code>.
					</p>
				</div>
			</pkd-card>
		} @else if (store.regulation(); as regulation) {
			<pkd-section-heading label="Active regulation" />
			<pkd-card>
				<div class="panel">
					<div class="reg-head">
						<span class="code">{{ regulation.code }}</span>
						<span class="name">{{ regulation.name }}</span>
					</div>

					<dl class="facts">
						<div>
							<dt>Window</dt>
							<dd>{{ regulation.startsOn | date: 'd MMM y' }} → {{ regulation.endsOn | date: 'd MMM y' }}</dd>
						</div>
						<div>
							<dt>Legal Pokémon</dt>
							<dd>{{ store.hasRoster() ? store.legalCount() : 'not seeded yet' }}</dd>
						</div>
						<!-- Not an "as" binding: the final day of a regulation is 0, which reads as absent. -->
						@if (store.daysRemaining() !== null) {
							<div>
								<dt>{{ store.daysRemaining()! >= 0 ? 'Ends in' : 'Lapsed' }}</dt>
								<dd [class.urgent]="store.daysRemaining()! <= 14">
									{{ store.daysRemaining()! >= 0 ? store.daysRemaining() + ' days' : -store.daysRemaining()! + ' days ago' }}
								</dd>
							</div>
						}
					</dl>

					@if (regulation.notes) {
						<p class="notes">{{ regulation.notes }}</p>
					}
				</div>
			</pkd-card>

			@if (!store.hasRoster()) {
				<pkd-card>
					<div class="panel next">
						<h2>Roster not seeded</h2>
						<p>
							The regulation is known but its roster is not loaded. Run the derive pipeline to
							populate the ~208 species and ~75 Mega Evolutions legal in {{ regulation.code }}.
						</p>
					</div>
				</pkd-card>
			}
		} @else {
			<pkd-card>
				<div class="panel">
					<h2>No regulation loaded</h2>
					<p>The Champions database is reachable but empty. Seed a regulation to begin.</p>
				</div>
			</pkd-card>
		}
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-5);
			max-width: 60rem;
			margin-inline: auto;
		}

		.masthead h1 {
			margin: 0;
			font-size: var(--fs-2xl, 2rem);
			letter-spacing: -0.02em;
		}

		.tagline {
			margin: var(--s-1) 0 0;
			color: var(--ink-muted);
		}

		.panel {
			padding: var(--s-5);
		}

		.panel h2 {
			margin: 0 0 var(--s-2);
			font-size: var(--fs-lg, 1.125rem);
		}

		.panel p {
			margin: 0;
			color: var(--ink-muted);
			line-height: 1.55;
		}

		.reg-head {
			display: flex;
			align-items: baseline;
			gap: var(--s-3);
			flex-wrap: wrap;
		}

		.code {
			font-size: var(--fs-xl, 1.5rem);
			font-weight: 700;
			letter-spacing: 0.04em;
		}

		.name {
			color: var(--ink-muted);
		}

		.facts {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
			gap: var(--s-4);
			margin: var(--s-5) 0 0;
		}

		.facts dt {
			font-size: var(--fs-xs);
			letter-spacing: 0.12em;
			text-transform: uppercase;
			color: var(--ink-muted);
		}

		.facts dd {
			margin: var(--s-1) 0 0;
			font-variant-numeric: tabular-nums;
		}

		/* A regulation about to lapse means a roster about to go stale — worth noticing. */
		.urgent {
			color: var(--danger, #d1495b);
			font-weight: 600;
		}

		.notes {
			margin-top: var(--s-4) !important;
			font-size: var(--fs-sm, 0.875rem);
		}

		.next,
		.error {
			border-top: 1.5px solid var(--line);
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
export default class ChampionsHomeComponent {
	protected readonly store = inject(RegulationStore);
}
