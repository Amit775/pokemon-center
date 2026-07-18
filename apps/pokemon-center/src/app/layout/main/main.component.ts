import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { GameSelectComponent } from '@pokemon-center/data-access-pokedex';

import { NavRoute, isNavRoute, routes } from '../../app.routes';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MatToolbarModule, MatButtonModule, RouterModule, GameSelectComponent],
})
export class MainComponent {
	public navRoutes: NavRoute[] = routes.filter(isNavRoute);
}
