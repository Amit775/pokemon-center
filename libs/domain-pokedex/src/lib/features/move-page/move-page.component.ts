import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Move } from '@pokemon-center/infra-pokedex-data';

@Component({
	standalone: true,
	selector: 'pokedex-move-page',
	templateUrl: './move-page.component.html',
	styleUrls: ['./move-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovePageComponent {
	public move = input.required<Move>();
}
