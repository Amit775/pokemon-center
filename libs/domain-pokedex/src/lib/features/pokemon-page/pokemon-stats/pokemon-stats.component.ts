import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { PokemonDetailDocument, gqlResource } from '@pokemon-center/data-access-pokedex';

@Component({
	standalone: true,
	templateUrl: './pokemon-stats.component.html',
	styleUrls: ['./pokemon-stats.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonStatsComponent {
	public id = input.required<string>();

	private readonly detail = gqlResource(PokemonDetailDocument, () => ({ idOrSlug: this.id() }));

	public stats = computed(() => this.detail.value()?.pokemon?.stats ?? []);
}
