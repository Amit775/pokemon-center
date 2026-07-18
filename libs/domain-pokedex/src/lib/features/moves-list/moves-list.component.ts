import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MoveListDocument, MoveListItem, gqlResource } from '@pokemon-center/data-access-pokedex';
import { ListComponent, ListItemDirective } from '@pokemon-center/ui-list';

@Component({
	templateUrl: './moves-list.component.html',
	styleUrls: ['./moves-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ListComponent, ListItemDirective],
})
export class MovesListComponent {
	public search = signal('');

	private readonly list = gqlResource(MoveListDocument, () => ({
		take: 500,
		skip: 0,
		search: this.search() || undefined,
	}));

	public moves = computed(() => this.list.value()?.moveList ?? []);

	moveType = undefined as unknown as MoveListItem;
}
