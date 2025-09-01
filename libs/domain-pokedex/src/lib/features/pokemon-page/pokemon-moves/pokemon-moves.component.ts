import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent, ListItemDirective } from '@pokemon-center/ui-list';
import { Pokemon, PokemonMove } from 'pokenode-ts';

export const type = <T>() => undefined as T;

@Component({
	templateUrl: './pokemon-moves.component.html',
	styleUrls: ['./pokemon-moves.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ListComponent, ListItemDirective, RouterModule],
})
export class PokemonMovesComponent {
	pokemon = input.required<Pokemon>();
	moveType = type<PokemonMove>();
}
