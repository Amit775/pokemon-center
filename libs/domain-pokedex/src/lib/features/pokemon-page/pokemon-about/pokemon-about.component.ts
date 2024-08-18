import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Pokemon } from 'pokenode-ts';

@Component({
  standalone: true,
  templateUrl: './pokemon-about.component.html',
  styleUrls: ['./pokemon-about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonAboutComponent {
  pokemon = input.required<Pokemon>();
}
