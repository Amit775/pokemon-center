import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonMovesDocument, gqlResource } from '@pokemon-center/data-access-pokedex';
import { TypeChipComponent } from '@pokemon-center/ui-pokedex';

@Component({
	templateUrl: './pokemon-moves.component.html',
	styleUrls: ['./pokemon-moves.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterModule, TypeChipComponent],
})
export class PokemonMovesComponent {
	public id = input.required<string>();

	private readonly list = gqlResource(PokemonMovesDocument, () => ({ idOrSlug: this.id(), take: 500, skip: 0 }));

	public moves = computed(() => (this.list.hasValue() ? (this.list.value()?.pokemonMoves ?? []) : []));
}
