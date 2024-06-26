import { Injectable, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { addEntities, withEntities } from '@ngrx/signals/entities';
import { PokemonService } from '../data/pokemon.service';

export const MAX_INDEX = 649;

export type BasePokemon = {
  id: string;
  index: number;
  name: string;
};

@Injectable({ providedIn: 'root' })
export class PokemonStore extends signalStore(
  withEntities<BasePokemon>(),
  withState({ loading: false, queryParams: { offset: 0, limit: 100 } }),
  withMethods((store) => ({
    updateQueryParams(queryParams: { offset: number; limit: number }) {
      patchState(store, { queryParams });
    },
    addPokemons(pokemons: BasePokemon[]) {
      patchState(store, addEntities(pokemons));
    },
  })),
) {}
