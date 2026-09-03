import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import type { GetRowIdFunc } from 'ag-grid-community';
import { PokedexContextStore, PokemonListDocument, gqlResource } from '@pokemon-center/data-access-pokedex';
import { UiDataGridComponent } from '@pokemon-center/ui-pokedex';
import { pokemonGridColumns, toPokemonRow, type PokemonRow } from './pokemon-grid-columns';

/** Comfortably above the ~1,351-row mainline dex — raise this if the dataset ever grows past it. */
const POKEMON_LIST_TAKE = 2000;

/**
 * Master-detail shell for the Pokédex: the full dex renders as a grid on the left
 * (`pokedex-data-grid`, filtering/sorting/virtualization already solved there), and the right
 * pane is a `<router-outlet>` — a child route paints either the empty-detail placeholder or a
 * single Pokémon's detail page.
 *
 * Fetches the whole table once (`take: 2000`, no paging) — Task 1 moved filtering/search
 * client-side, so there is nothing left for the server to page.
 *
 * Row selection needs no click handler: the Name cell (Task 3) is already a real `routerLink`
 * anchor, so navigating to `/pokedex/pokemon/:id` IS selecting. `selectedId` below just reacts to
 * the route changing; it is not currently wired to a visual "selected row" indicator in the grid
 * (see the class doc on `selectedId` for why).
 */
@Component({
	selector: 'pokedex-pokemon-shell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterModule, UiDataGridComponent],
	templateUrl: './pokemon-shell.component.html',
	styleUrl: './pokemon-shell.component.scss',
})
export class PokemonShellComponent {
	private readonly route = inject(ActivatedRoute);
	private readonly router = inject(Router);
	private readonly store = inject(PokedexContextStore);

	private readonly list = gqlResource(PokemonListDocument, () => ({ take: POKEMON_LIST_TAKE, versionGroup: this.store.activeVersionGroup() ?? undefined }));

	protected readonly rows = computed<PokemonRow[]>(() => (this.list.hasValue() ? (this.list.value()?.pokemonList ?? []).map(toPokemonRow) : []));
	protected readonly loading = computed(() => this.list.isLoading());

	protected readonly columns = pokemonGridColumns;
	protected readonly getRowId: GetRowIdFunc<PokemonRow> = (params) => params.data.id.toString();

	/**
	 * The selected id comes from the router, not a local signal — the URL is the source of truth.
	 * The Name cell renders a real `routerLink`, so navigating to a row IS selecting it; the grid
	 * needs no click-driven selection wiring of its own.
	 *
	 * The old TanStack table used this to paint a `marked` row style (see the deleted
	 * `rowVariant`). `UiDataGridComponent`'s input surface for this task is fixed to `rowData`,
	 * `columnDefs`, `getRowId`, `defaultColDef`, `sideBar`, `initialState`, and the external-filter
	 * pair — it does not expose `rowClassRules`/`getRowClass`, and those would also need an
	 * explicit `api.redrawRows()` call on every route change to stay in sync, since AG Grid only
	 * re-evaluates row classes when told to. Wiring that up means either widening the shared grid
	 * wrapper or capturing the grid API here — both bigger than this task's scope. `selectedId` is
	 * kept because the route-driven signal itself is part of "what must not change," but it is not
	 * currently rendered as a highlight.
	 */
	protected readonly selectedId = toSignal(
		this.router.events.pipe(map(() => this.route.firstChild?.snapshot.paramMap.get('id') ?? null)),
		{ initialValue: this.route.snapshot.firstChild?.paramMap.get('id') ?? null },
	);
}
