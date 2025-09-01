import { Component, signal } from '@angular/core';
import { ListComponent, ListItemDirective } from '@pokemon-center/ui-list';
import { Move } from '@pokemon-center/data';

@Component({
	templateUrl: './moves-list.component.html',
	styleUrls: ['./moves-list.component.scss'],
	imports: [ListComponent, ListItemDirective],
})
export class MovesListComponent {
	moves = signal<Move[]>([]);
}
