import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { VersionGroupsDocument } from './generated/graphql';
import { gqlResource } from './gql-resource';
import { PokedexContextStore } from './pokedex-context.store';

/** Header control: pick the game you are playing; the whole pokedex scopes to it. */
@Component({
	selector: 'pokedex-game-select',
	template: `
		<label class="game-select">
			<span>Playing:</span>
			<select (change)="onChange($event)">
				<option value="" [selected]="store.activeVersionGroup() === null">All games</option>
				@for (vg of versionGroups(); track vg.id) {
					<option [value]="vg.identifier" [selected]="vg.identifier === store.activeVersionGroup()">
						{{ vg.identifier }} (gen {{ vg.generation.id }})
					</option>
				}
			</select>
		</label>
	`,
	styles: `
		.game-select {
			display: inline-flex;
			align-items: center;
			gap: 0.5rem;
		}
		select {
			padding: 0.25rem 0.5rem;
			border-radius: 4px;
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameSelectComponent {
	protected readonly store = inject(PokedexContextStore);

	private readonly list = gqlResource(VersionGroupsDocument, () => ({}));

	protected versionGroups = computed(() => this.list.value()?.versionGroups ?? []);

	protected onChange(event: Event): void {
		const value = (event.target as HTMLSelectElement).value;
		this.store.setActiveVersionGroup(value || null);
	}
}
