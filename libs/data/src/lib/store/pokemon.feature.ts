import { type } from '@ngrx/signals';
import { BasePokemon } from './pokemon.store';
import { withQueryableEntitiesFeature } from './queryable-entities-feature';

export const withPokemonFeature = () =>
  withQueryableEntitiesFeature({
    entity: type<BasePokemon>(),
    collection: 'pokemon',
  });

// export const withPokemonFeature = (): SignalStoreFeature<
//   { state: {}; signals: {}; methods: {} },
//   {
//     state: EntityState<BasePokemon> & QueryState;
//     signals: {};
//     methods: {
//       updateQueryParams(queryParams: { offset: number; limit: number }): void;
//       addPokemons(pokemons: BasePokemon[]): void;
//     };
//   }
// > =>
//   signalStoreFeature(
//     withEntities<BasePokemon>(),
//     withState({ loading: false, queryParams: { offset: 0, limit: 100 } }),
//     withMethods((store) => ({
//       updateQueryParams(queryParams: { offset: number; limit: number }) {
//         patchState(store, { queryParams });
//       },
//       addPokemons(pokemons: BasePokemon[]) {
//         patchState(store, addEntities(pokemons));
//       },
//     })),
//   );
