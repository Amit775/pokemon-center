import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { PokemonDetailDocument, gqlResource } from '@pokemon-center/data-access-pokedex';

@Component({
	standalone: true,
	templateUrl: './pokemon-about.component.html',
	styleUrls: ['./pokemon-about.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonAboutComponent {
	public id = input.required<string>();

	private readonly detail = gqlResource(PokemonDetailDocument, () => ({ idOrSlug: this.id() }));

	public pokemon = computed(() => this.detail.value()?.pokemon);
}
