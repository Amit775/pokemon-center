import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PokedexContextStore } from '@pokemon-center/data-access-pokedex';
import { RegulationStore } from '@pokemon-center/domain-champions';

/**
 * Shell for the Champions app.
 *
 * Two deliberate differences from the Nuzlocke header:
 *
 *  - **No game or language selectors.** Champions is one game in one language; those controls
 *    were noise, and dropping them is most of why this bar now fits on a phone.
 *  - **The regulation lives in the chrome, not on a page.** Every number in this app is
 *    relative to the active regulation, and its expiry is the moment the whole dataset goes
 *    stale — so it belongs where it is always visible rather than behind a click.
 *
 * Tabs carry an `enabled` flag rather than being commented out. A tab that navigates nowhere
 * is exactly the kind of thing this rebuild exists to remove, so a section appears in the bar
 * only once it has something behind it.
 */
@Component({
	selector: 'app-champions-shell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MatIconModule, RouterLink, RouterLinkActive, RouterOutlet],
	template: `
		<header class="app-bar">
			<a class="brand" routerLink="/champions">Pokémon <span class="app-name">Champions</span></a>

			<nav class="nav">
				@for (item of visibleTabs(); track item.path) {
					<a [routerLink]="item.path" routerLinkActive="active">{{ item.label }}</a>
				}
			</nav>

			<span class="spacer"></span>

			<div class="tools">
				@if (regulation.code(); as code) {
					<span class="reg" [class.urgent]="isExpiringSoon()" [title]="regulationTitle()">
						<strong>{{ code }}</strong>
						@if (regulation.daysRemaining() !== null) {
							<span class="reg-days">
								{{ regulation.daysRemaining()! >= 0 ? regulation.daysRemaining() + 'd left' : 'lapsed' }}
							</span>
						}
					</span>
				}
				<button
					type="button"
					class="icon-btn"
					(click)="theme.toggleTheme()"
					[attr.aria-label]="isDark() ? 'Switch to light theme' : 'Switch to dark theme'"
				>
					<mat-icon>{{ isDark() ? 'light_mode' : 'dark_mode' }}</mat-icon>
				</button>
				<a class="switch" routerLink="/nuzlocke">← Nuzlocke</a>
			</div>
		</header>

		<router-outlet />
	`,
	styleUrl: '../shell.scss',
	styles: `
		.reg {
			display: inline-flex;
			align-items: baseline;
			gap: 0.35rem;
			padding: 0.25rem 0.6rem;
			border-radius: var(--r-pill);
			border: 1px solid var(--line);
			font-size: var(--fs-xs);
			color: var(--ink-muted);
			white-space: nowrap;
		}

		.reg strong {
			color: var(--ink);
			letter-spacing: 0.04em;
		}

		/* A regulation about to lapse means the seeded roster is about to be wrong. */
		.reg.urgent {
			border-color: var(--danger, #d1495b);
			color: var(--danger, #d1495b);
		}
	`,
})
export default class ChampionsShellComponent {
	protected readonly regulation = inject(RegulationStore);
	protected readonly theme = inject(PokedexContextStore);

	/**
	 * `enabled` flips on as each section lands. Pokédex and Companion exist today; Box,
	 * Simulator and School follow.
	 */
	private readonly tabs = [
		{ path: '/champions/dex', label: 'Pokédex', enabled: true },
		{ path: '/champions/box', label: 'Box', enabled: true },
		{ path: '/champions/companion', label: 'Companion', enabled: true },
		{ path: '/champions/simulator', label: 'Simulator', enabled: false },
		{ path: '/champions/school', label: 'School', enabled: false },
	];

	protected readonly visibleTabs = computed(() => this.tabs.filter((tab) => tab.enabled));

	protected readonly isExpiringSoon = computed(() => {
		const days = this.regulation.daysRemaining();
		return days !== null && days <= 14;
	});

	protected readonly regulationTitle = computed(() => {
		const reg = this.regulation.regulation();
		if (!reg) return '';
		return `${reg.name} — ${reg.legalCount} legal Pokémon, ends ${new Date(reg.endsOn).toDateString()}`;
	});

	protected readonly isDark = computed(() => {
		const theme = this.theme.theme();
		return theme === 'system' ? matchMedia('(prefers-color-scheme: dark)').matches : theme === 'dark';
	});
}
