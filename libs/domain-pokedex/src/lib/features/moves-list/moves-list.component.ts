import { Component, signal } from '@angular/core';
import { ListComponent } from '@pokemon/ui-list';
import { ListItemDirective } from 'libs/ui-list/src/lib/ui-list/list-item.directive';
import { Move } from 'pokenode-ts';

@Component({
  standalone: true,
  selector: 'pokedex-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss'],
  imports: [ListComponent, ListItemDirective],
})
export class MovesListComponent {
  moves = signal<Move[]>([]);
}
