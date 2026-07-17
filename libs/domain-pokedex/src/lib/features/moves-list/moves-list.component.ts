import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ListComponent, ListItemDirective } from '@pokemon-center/ui-list';
import { Moves as Move } from '@pokemon-center/infra-pokedex-data';

@Component({
	templateUrl: './moves-list.component.html',
	styleUrls: ['./moves-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [ListComponent, ListItemDirective],
})
export class MovesListComponent {
	moves = signal<Move[]>([]);
}
