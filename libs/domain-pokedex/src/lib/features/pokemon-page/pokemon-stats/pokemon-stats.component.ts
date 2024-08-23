import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Pokemon } from 'pokenode-ts';

@Component({
  standalone: true,
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonStatsComponent {
  public pokemon = input.required<Pokemon>();
}
