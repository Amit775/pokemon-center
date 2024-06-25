import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Pokemon } from 'pokenode-ts';

@Component({
  standalone: true,
  templateUrl: './pokemon-about.component.html',
  styleUrls: ['./pokemon-about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
})
export class PokemonAboutComponent {
  pokemon = input.required<Pokemon>();
}
