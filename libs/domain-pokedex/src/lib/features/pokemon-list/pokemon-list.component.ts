import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BasePokemon } from '@pokemon/data';

@Component({
  standalone: true,
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  pokemons = input<BasePokemon[]>([]);
}
