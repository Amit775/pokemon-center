import { ChangeDetectionStrategy, Component, computed, inject, model } from '@angular/core';
import { FilterSet, PokedexContextStore, TypesListDocument, gqlResource } from '@pokemon-center/data-access-pokedex';
import { ChipToggleComponent } from '@pokemon-center/ui-pokedex';

/** Search box + facets + saved filter sets. The active game itself lives in the header (GameSelectComponent). */
@Component({
	selector: 'pokedex-pokemon-filters',
	templateUrl: './pokemon-filters.component.html',
	styleUrl: './pokemon-filters.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ChipToggleComponent],
})
export class PokemonFiltersComponent {
	protected readonly store = inject(PokedexContextStore);

	public search = model.required<string>();
	public types = model.required<string[]>();
	public generation = model.required<number | null>();
	public sortBy = model.required<string>();
	public sortDesc = model.required<boolean>();

	protected readonly generations = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	protected readonly sortOptions = ['id', 'name', 'height', 'weight'];

	private readonly typesQuery = gqlResource(TypesListDocument, () => ({}));
	protected readonly allTypes = computed(() =>
		(this.typesQuery.hasValue() ? (this.typesQuery.value()?.typeList ?? []) : []).filter((typeOption) => Number(typeOption.id) < 10000),
	);

	protected onSearch(event: Event): void {
		this.search.set((event.target as HTMLInputElement).value);
	}

	protected toggleType(identifier: string): void {
		const current = this.types();
		this.types.set(current.includes(identifier) ? current.filter((selectedType) => selectedType !== identifier) : [...current, identifier]);
	}

	protected onGeneration(event: Event): void {
		const value = (event.target as HTMLSelectElement).value;
		this.generation.set(value ? Number(value) : null);
	}

	protected onSort(event: Event): void {
		this.sortBy.set((event.target as HTMLSelectElement).value);
	}

	protected saveCurrent(): void {
		const name = window.prompt('Name this filter set:');
		if (!name) return;
		this.store.saveFilter({
			name,
			search: this.search(),
			versionGroup: this.store.activeVersionGroup(),
			types: this.types(),
			generation: this.generation(),
			sortBy: this.sortBy(),
			sortDesc: this.sortDesc(),
		});
	}

	protected apply(filter: FilterSet): void {
		this.search.set(filter.search);
		this.types.set(filter.types ?? []);
		this.generation.set(filter.generation ?? null);
		this.sortBy.set(filter.sortBy ?? 'id');
		this.sortDesc.set(filter.sortDesc ?? false);
		this.store.setActiveVersionGroup(filter.versionGroup);
	}

	protected remove(filter: FilterSet): void {
		this.store.deleteFilter(filter.name);
	}
}
