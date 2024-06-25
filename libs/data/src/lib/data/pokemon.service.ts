import { Injectable, inject } from '@angular/core';
import {
  MainClient,
  NamedAPIResource,
  NamedAPIResourceList,
  Pokemon,
} from 'pokenode-ts';
import { from, map, tap } from 'rxjs';
import { BasePokemon, MAX_INDEX, PokemonStore } from '../store/pokemon.store';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private store = inject(PokemonStore);
  private api = new MainClient();

  getPokemon(id: number): Promise<Pokemon> {
    return this.api.pokemon.getPokemonById(id);
  }

  getMorePokemons(): void {
    const { offset, limit } = this.store.queryParams();
    if (offset >= MAX_INDEX) return;

    from(this.api.pokemon.listPokemons(offset, limit))
      .pipe(
        tap((response: NamedAPIResourceList) =>
          this.extractParams(response.next),
        ),
        map((response: NamedAPIResourceList) =>
          this.store.addPokemons(this.convert(response.results)),
        ),
      )
      .subscribe();
  }

  private extractParams(nextURL?: string | null): void {
    if (!nextURL) return;

    const url = new URL(nextURL);
    const offset = Number(url.searchParams.get('offset') || 0);
    let limit = Number(url.searchParams.get('limit') || 0);
    limit = Math.min(limit, MAX_INDEX - offset);

    this.store.updateQueryParams({ offset, limit });
  }

  private convert(results: NamedAPIResource[]): BasePokemon[] {
    return results.map(({ name, url }) => {
      const indexRegex = /(?<=pokemon\/)(\d*)(?=\/)/gi;
      const index = +(url.match(indexRegex)?.[0] ?? -1);
      if (index < 0) throw `not found index ${url}`;

      return { id: `${index}`, index, name };
    });
  }
}
