import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterModule } from '@angular/router';
import { PokemonDetailDocument, gqlResource } from '@pokemon-center/data-access-pokedex';

@Component({
	templateUrl: './pokemon-page.component.html',
	styleUrl: './pokemon-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MatTabsModule, RouterModule, MatIconModule],
})
export class PokemonPageComponent {
	private router = inject(Router);

	public id = input.required<string>();

	private readonly detail = gqlResource(PokemonDetailDocument, () => ({ idOrSlug: this.id() }));

	public pokemon = computed(() => this.detail.value()?.pokemon);

	public tabs = [
		{ label: 'About', path: 'about' },
		{ label: 'Stats', path: 'stats' },
		{ label: 'Moves', path: 'moves' },
		{ label: 'Locations', path: 'locations' },
	];

	public goBack(): void {
		this.router.navigate(['/pokedex'], { state: { id: this.id() } });
	}
}
