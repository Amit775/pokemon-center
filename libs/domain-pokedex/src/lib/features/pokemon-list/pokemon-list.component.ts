import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BasePokemon } from '@pokemon/data';
import { PokemonRecordComponent } from './pokemon-record/pokemon-record.component';

@Component({
  standalone: true,
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PokemonRecordComponent, ScrollingModule],
})
export class PokemonListComponent {
  pokemons = input<BasePokemon[]>([]);
}
