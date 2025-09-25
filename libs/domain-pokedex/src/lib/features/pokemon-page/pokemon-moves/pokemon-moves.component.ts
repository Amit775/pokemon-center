import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Move, Pokemon } from '@pokemon-center/infra-pokedex-data';
import { ListComponent, ListItemDirective } from '@pokemon-center/ui-list';

export const type = <T>() => undefined as T;

@Component({
	templateUrl: './pokemon-moves.component.html',
	styleUrls: ['./pokemon-moves.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ListComponent, ListItemDirective, RouterModule],
})
export class PokemonMovesComponent {
	pokemon = input.required<Pokemon>();
	moveType = type<Move>();
}
