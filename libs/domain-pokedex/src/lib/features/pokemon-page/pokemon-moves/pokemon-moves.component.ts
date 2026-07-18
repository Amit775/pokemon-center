import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonMoveRow, PokemonMovesDocument, gqlResource } from '@pokemon-center/data-access-pokedex';
import { ListComponent, ListItemDirective } from '@pokemon-center/ui-list';

export const type = <T>() => undefined as T;

@Component({
	templateUrl: './pokemon-moves.component.html',
	styleUrls: ['./pokemon-moves.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ListComponent, ListItemDirective, RouterModule],
})
export class PokemonMovesComponent {
	public id = input.required<string>();

	private readonly list = gqlResource(PokemonMovesDocument, () => ({ idOrSlug: this.id(), take: 500, skip: 0 }));

	public moves = computed(() => this.list.value()?.pokemonMoves ?? []);

	moveType = type<PokemonMoveRow>();
}
