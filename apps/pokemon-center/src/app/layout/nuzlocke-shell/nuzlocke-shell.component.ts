import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GameSelectComponent, LanguageSelectComponent, OmnisearchComponent, PokedexContextStore } from '@pokemon-center/data-access-pokedex';

/**
 * Shell for the Nuzlocke app — the original Pokemon Center.
 *
 * Unchanged in behaviour, only reparented under `/nuzlocke`. It keeps the tools that are
 * genuinely its own: the game selector, the language selector and the cross-dex omnisearch,
 * none of which mean anything in Champions.
 */
@Component({
	selector: 'app-nuzlocke-shell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MatIconModule, RouterLink, RouterLinkActive, RouterOutlet, GameSelectComponent, LanguageSelectComponent, OmnisearchComponent],
	template: `
		<header class="app-bar">
			<a class="brand" routerLink="/nuzlocke">Pokémon <span class="app-name">Nuzlocke</span></a>

			<nav class="nav">
				@for (item of nav; track item.path) {
					<a [routerLink]="item.path" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: item.exact }">
						{{ item.label }}
					</a>
				}
			</nav>

			<span class="spacer"></span>

			<div class="tools">
				<pokedex-omnisearch />
				<pokedex-game-select />
				<pokedex-language-select />
				<button
					type="button"
					class="icon-btn"
					(click)="store.toggleTheme()"
					[attr.aria-label]="isDark() ? 'Switch to light theme' : 'Switch to dark theme'"
				>
					<mat-icon>{{ isDark() ? 'light_mode' : 'dark_mode' }}</mat-icon>
				</button>
				<a class="switch" routerLink="/champions">Champions →</a>
			</div>
		</header>

		<router-outlet />
	`,
	styleUrl: '../shell.scss',
})
export default class NuzlockeShellComponent {
	protected readonly store = inject(PokedexContextStore);

	protected readonly nav = [
		{ path: '/nuzlocke', label: 'Home', exact: true },
		{ path: '/nuzlocke/pokedex', label: 'Pokedex', exact: false },
		{ path: '/nuzlocke/school', label: 'School', exact: false },
		{ path: '/nuzlocke/arena', label: 'Arena', exact: false },
	];

	protected readonly isDark = computed(() => {
		const theme = this.store.theme();
		return theme === 'system' ? matchMedia('(prefers-color-scheme: dark)').matches : theme === 'dark';
	});
}
