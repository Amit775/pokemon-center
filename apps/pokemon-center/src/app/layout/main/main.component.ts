import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { GameSelectComponent, OmnisearchComponent, PokedexContextStore } from '@pokemon-center/data-access-pokedex';

import { NavRoute, isNavRoute, routes } from '../../app.routes';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MatIconModule, RouterModule, GameSelectComponent, OmnisearchComponent],
})
export class MainComponent {
	protected readonly store = inject(PokedexContextStore);
	public navRoutes: NavRoute[] = routes.filter(isNavRoute);

	protected readonly isDark = computed(() => {
		const theme = this.store.theme();
		return theme === 'system' ? matchMedia('(prefers-color-scheme: dark)').matches : theme === 'dark';
	});
}
