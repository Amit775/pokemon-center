import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MoveDetailDocument, gqlResource } from '@pokemon-center/data-access-pokedex';

@Component({
	standalone: true,
	selector: 'pokedex-move-page',
	templateUrl: './move-page.component.html',
	styleUrls: ['./move-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovePageComponent {
	public id = input.required<string>();

	private readonly detail = gqlResource(MoveDetailDocument, () => ({ idOrSlug: this.id() }));

	public move = computed(() => this.detail.value()?.move);
}
