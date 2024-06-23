import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BasePokemon } from '@pokemon/data';
import { PokemonAvatarDirective } from '../pokemon-avater/pokemon-avatar.directive';

@Component({
  standalone: true,
  selector: 'pokemon-record',
  templateUrl: './pokemon-record.component.html',
  styleUrls: ['./pokemon-record.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PokemonAvatarDirective],
})
export class PokemonRecordComponent {
  pokemon = input.required<BasePokemon>();
}
