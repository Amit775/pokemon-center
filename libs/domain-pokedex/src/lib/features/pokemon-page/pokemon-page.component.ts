import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterModule } from '@angular/router';
import { PokemonService } from '@pokemon-center/data';
import { derivedAsync } from 'ngxtension/derived-async';

@Component({
	templateUrl: './pokemon-page.component.html',
	styleUrl: './pokemon-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MatTabsModule, RouterModule, MatIconModule],
})
export class PokemonPageComponent {
	private api = inject(PokemonService);
	private router = inject(Router);

	public id = input.required({
		transform: (value: number | string) => Number(value),
	});

	public pokemon = derivedAsync(() => this.api.getPokemon(this.id()));

	public tabs = [
		{ label: 'About', path: 'about' },
		{ label: 'Stats', path: 'stats' },
		{ label: 'Moves', path: 'moves' },
	];

	public goBack(): void {
		this.router.navigate(['/pokedex'], { state: { id: this.id() } });
	}
}
