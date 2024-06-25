import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Pokemon } from 'pokenode-ts';

@Component({
  standalone: true,
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
})
export class PokemonMovesComponent {
  pokemon = input.required<Pokemon>();
}
