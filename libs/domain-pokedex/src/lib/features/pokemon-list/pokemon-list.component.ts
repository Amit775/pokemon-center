import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PokedexContextStore, PokemonListDocument, gqlResource } from '@pokemon-center/data-access-pokedex';
import { PokemonCardComponent, UiSkeletonComponent } from '@pokemon-center/ui-pokedex';
import { localSpriteUrl, officialArtworkUrl } from './pokemon-avater/pokemon-avatar.service';
import { PokemonFiltersComponent } from './pokemon-filters/pokemon-filters.component';
import { PokemonTypesPipe } from './pokemon-types.pipe';

@Component({
	templateUrl: './pokemon-list.component.html',
	styleUrl: './pokemon-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterModule, PokemonCardComponent, UiSkeletonComponent, PokemonFiltersComponent, PokemonTypesPipe],
})
export class PokemonListComponent {
	private readonly router = inject(Router);
	private readonly route = inject(ActivatedRoute);
	protected readonly store = inject(PokedexContextStore);

	public search = signal(this.route.snapshot.queryParamMap.get('search') ?? '');
	public types = signal<string[]>(this.route.snapshot.queryParamMap.get('types')?.split(',').filter(Boolean) ?? []);
	public generation = signal<number | null>(
		this.route.snapshot.queryParamMap.get('generation') ? Number(this.route.snapshot.queryParamMap.get('generation')) : null,
	);
	public sortBy = signal(this.route.snapshot.queryParamMap.get('sortBy') ?? 'id');
	public sortDesc = signal(this.route.snapshot.queryParamMap.get('sortDescending') === '1');

	private readonly list = gqlResource(PokemonListDocument, () => ({
		take: 500,
		skip: 0,
		search: this.search() || undefined,
		versionGroup: this.store.activeVersionGroup() ?? undefined,
		types: this.types().length ? this.types() : undefined,
		generation: this.generation() ?? undefined,
		sortBy: this.sortBy(),
		sortDesc: this.sortDesc(),
	}));

	public pokemons = computed(() => (this.list.hasValue() ? (this.list.value()?.pokemonList ?? []) : []));
	public loading = computed(() => this.list.isLoading());
	protected readonly skeletons = Array.from({ length: 12 });

	protected spriteUrl(id: string | number): string {
		return localSpriteUrl(Number(id));
	}

	protected fallbackUrl(id: string | number): string {
		return officialArtworkUrl(Number(id));
	}

	constructor() {
		// deep-linked game context (?versionGroup=) wins over the persisted one
		const versionGroup = this.route.snapshot.queryParamMap.get('versionGroup');
		if (versionGroup !== null) this.store.setActiveVersionGroup(versionGroup || null);

		// keep the URL shareable. Each key is named for the state it carries, so the query string
		// reads as the filter panel does: ?search=&versionGroup=&types=&generation=&sortBy=&sortDescending=
		effect(() => {
			const queryParams = {
				search: this.search() || null,
				versionGroup: this.store.activeVersionGroup(),
				types: this.types().length ? this.types().join(',') : null,
				generation: this.generation(),
				sortBy: this.sortBy() !== 'id' ? this.sortBy() : null,
				sortDescending: this.sortDesc() ? '1' : null,
			};
			untracked(() => this.router.navigate([], { relativeTo: this.route, queryParams, replaceUrl: true }));
		});
	}
}
