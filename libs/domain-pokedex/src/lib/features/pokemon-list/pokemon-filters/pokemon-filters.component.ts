import { ChangeDetectionStrategy, Component, inject, model } from '@angular/core';
import { FilterSet, PokedexContextStore } from '@pokemon-center/data-access-pokedex';

/** Search box + saved filter sets. The active game itself lives in the header (GameSelectComponent). */
@Component({
	selector: 'pokedex-pokemon-filters',
	templateUrl: './pokemon-filters.component.html',
	styleUrl: './pokemon-filters.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonFiltersComponent {
	protected readonly store = inject(PokedexContextStore);

	public search = model.required<string>();

	protected onSearch(event: Event): void {
		this.search.set((event.target as HTMLInputElement).value);
	}

	protected saveCurrent(): void {
		const name = window.prompt('Name this filter set:');
		if (!name) return;
		this.store.saveFilter({ name, search: this.search(), versionGroup: this.store.activeVersionGroup() });
	}

	protected apply(filter: FilterSet): void {
		this.search.set(filter.search);
		this.store.setActiveVersionGroup(filter.versionGroup);
	}

	protected remove(filter: FilterSet): void {
		this.store.deleteFilter(filter.name);
	}
}
