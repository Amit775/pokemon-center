import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterModule } from '@angular/router';
import { Pokemon } from '@pokemon-center/infra-pokedex-data';

@Component({
	templateUrl: './pokemon-page.component.html',
	styleUrl: './pokemon-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MatTabsModule, RouterModule, MatIconModule],
})
export class PokemonPageComponent {
	private router = inject(Router);

	public id = input.required({
		transform: (value: number | string) => Number(value),
	});

	public pokemon = httpResource<Pokemon>(() => `/pokemon/${this.id()}`);

	public tabs = [
		{ label: 'About', path: 'about' },
		{ label: 'Stats', path: 'stats' },
		{ label: 'Moves', path: 'moves' },
	];

	public goBack(): void {
		this.router.navigate(['/pokedex'], { state: { id: this.id() } });
	}
}
