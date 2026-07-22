import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { PokemonDetailDocument, gqlResource } from '@pokemon-center/data-access-pokedex';
import { EntityPortraitComponent, TypeChipComponent } from '@pokemon-center/ui-pokedex';
import { officialArtworkUrl } from '../pokemon-list/pokemon-avater/pokemon-avatar.service';

@Component({
	templateUrl: './pokemon-page.component.html',
	styleUrl: './pokemon-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterModule, MatIconModule, EntityPortraitComponent, TypeChipComponent],
})
export class PokemonPageComponent {
	private router = inject(Router);

	public id = input.required<string>();

	private readonly detail = gqlResource(PokemonDetailDocument, () => ({ idOrSlug: this.id() }));

	public pokemon = computed(() => (this.detail.hasValue() ? this.detail.value()?.pokemon : undefined));
	public types = computed(() => [...(this.pokemon()?.types ?? [])].sort((a, b) => a.slot - b.slot).map((t) => t.type.identifier));
	public primaryType = computed(() => this.types()[0] ?? 'normal');

	public tabs = [
		{ label: 'About', path: 'about' },
		{ label: 'Stats', path: 'stats' },
		{ label: 'Moves', path: 'moves' },
		{ label: 'Locations', path: 'locations' },
	];

	protected spriteUrl(id: string | number): string {
		return officialArtworkUrl(Number(id));
	}

	public goBack(): void {
		this.router.navigate(['/pokedex'], { state: { id: this.id() } });
	}
}
