import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PokemonListDocument, gqlResource } from '@pokemon-center/data-access-pokedex';
import { UiDataTableComponent, type ColumnFiltersState, type DataTableRowVariant, type SortingState } from '@pokemon-center/ui-pokedex';
import { pokemonColumns, toPokemonRow, type PokemonRow } from './pokemon-columns';

/**
 * Master-detail shell for the Pokédex: the full dex renders as a table on the left
 * (`pokedex-data-table`, filtering/sorting/virtualization already solved there), and the right
 * pane is a `<router-outlet>` — a child route paints either the empty-detail placeholder or a
 * single Pokémon's detail page.
 *
 * Fetches the whole table once (`take: 2000`, no paging) — Task 1 moved filtering/search
 * client-side, so there is nothing left for the server to page.
 *
 * Row selection needs no click handler: the Name cell (Task 3) is already a real `routerLink`
 * anchor, so navigating to `/pokedex/pokemon/:id` IS selecting. `selectedId`/`rowVariant` below
 * just react to the route changing.
 */
@Component({
	selector: 'pokedex-pokemon-shell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterModule, UiDataTableComponent],
	templateUrl: './pokemon-shell.component.html',
	styleUrl: './pokemon-shell.component.scss',
})
export class PokemonShellComponent {
	private readonly route = inject(ActivatedRoute);
	private readonly router = inject(Router);

	private readonly list = gqlResource(PokemonListDocument, () => ({ take: 2000 }));

	protected readonly rows = computed<PokemonRow[]>(() => (this.list.hasValue() ? (this.list.value()?.pokemonList ?? []).map(toPokemonRow) : []));
	protected readonly loading = computed(() => this.list.isLoading());

	protected readonly columns = pokemonColumns;
	protected readonly sorting = signal<SortingState>([{ id: 'name', desc: false }]);
	protected readonly columnFilters = signal<ColumnFiltersState>([]);
	protected readonly globalFilter = signal('');

	/** The selected id comes from the router, not a local signal — the URL is the source of truth. */
	protected readonly selectedId = toSignal(
		this.router.events.pipe(map(() => this.route.firstChild?.snapshot.paramMap.get('id') ?? null)),
		{ initialValue: this.route.snapshot.firstChild?.paramMap.get('id') ?? null },
	);

	protected readonly rowVariant = (row: PokemonRow): DataTableRowVariant | null => (String(row.id) === this.selectedId() ? 'marked' : null);
}
