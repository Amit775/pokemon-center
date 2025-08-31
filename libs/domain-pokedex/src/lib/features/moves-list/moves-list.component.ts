import { Component, signal } from '@angular/core';
import { ListComponent, ListItemDirective } from '@pokemon/ui-list';
import { Move } from 'pokenode-ts';

@Component({
	templateUrl: './moves-list.component.html',
	styleUrls: ['./moves-list.component.scss'],
	imports: [ListComponent, ListItemDirective],
})
export class MovesListComponent {
	moves = signal<Move[]>([]);
}
