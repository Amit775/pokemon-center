import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BasePokemon } from '@pokemon-center/data';
import { PokemonAvatarDirective } from '../pokemon-avater/pokemon-avatar.directive';
import { IndexPipe } from './index.pipe';

@Component({
	selector: 'pokedex-pokemon-record',
	templateUrl: './pokemon-record.component.html',
	styleUrls: ['./pokemon-record.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [PokemonAvatarDirective, IndexPipe, TitleCasePipe],
})
export class PokemonRecordComponent {
	pokemon = input.required<BasePokemon>();
}
