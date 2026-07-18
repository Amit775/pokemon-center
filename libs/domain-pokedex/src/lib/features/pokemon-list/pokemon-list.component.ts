import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PokedexContextStore, PokemonListDocument, PokemonListItem, gqlResource } from '@pokemon-center/data-access-pokedex';
import { ListComponent, ListItemDirective } from '@pokemon-center/ui-list';
import { PokemonFiltersComponent } from './pokemon-filters/pokemon-filters.component';
import { PokemonRecordComponent } from './pokemon-record/pokemon-record.component';

@Component({
	templateUrl: './pokemon-list.component.html',
	styleUrl: './pokemon-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [PokemonRecordComponent, RouterModule, ListComponent, ListItemDirective, PokemonFiltersComponent],
})
export class PokemonListComponent {
	private readonly router = inject(Router);
	private readonly route = inject(ActivatedRoute);
	protected readonly store = inject(PokedexContextStore);

	public search = signal(this.route.snapshot.queryParamMap.get('q') ?? '');

	private readonly list = gqlResource(PokemonListDocument, () => ({
		take: 500,
		skip: 0,
		search: this.search() || undefined,
		versionGroup: this.store.activeVersionGroup() ?? undefined,
	}));

	public pokemons = computed(() => this.list.value()?.pokemonList ?? []);

	pokemonType = undefined as unknown as PokemonListItem;

	constructor() {
		// deep-linked game context (?vg=) wins over the persisted one
		const vg = this.route.snapshot.queryParamMap.get('vg');
		if (vg !== null) this.store.setActiveVersionGroup(vg || null);

		// keep the URL shareable: /pokedex/pokemon?q=pika&vg=firered-leafgreen
		effect(() => {
			const queryParams = { q: this.search() || null, vg: this.store.activeVersionGroup() };
			untracked(() => this.router.navigate([], { relativeTo: this.route, queryParams, replaceUrl: true }));
		});
	}
}
