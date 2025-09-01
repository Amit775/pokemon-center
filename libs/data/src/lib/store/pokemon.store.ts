import { Injectable } from '@angular/core';
import { patchState, signalStore, type, withMethods } from '@ngrx/signals';
import { addEntities } from '@ngrx/signals/entities';
import { Move } from 'pokenode-ts';
import { QueryState, withQueryableEntitiesFeature } from './queryable-entities-feature';

export const MAX_INDEX = 649;

export type BasePokemon = {
	id: string;
	index: number;
	name: string;
};

@Injectable({ providedIn: 'root' })
export class PokemonStore extends signalStore(
	withQueryableEntitiesFeature({
		entity: type<BasePokemon>(),
		collection: 'pokemon',
	}),
	withQueryableEntitiesFeature({
		entity: type<Move>(),
		collection: 'moves',
	}),
	withMethods((store) => ({
		addPokemons(pokemons: BasePokemon[]) {
			patchState(store, addEntities(pokemons, { collection: 'pokemon' }));
		},
		updatePokemonQueryParams(queryParams: QueryState['queryParams']) {
			patchState(store, { pokemonQueryParams: queryParams });
		},
		updatePokemonListOffsetIndex(offsetIndex: number) {
			patchState(store, { pokemonListOffsetIndex: offsetIndex });
		},
		addMoves(moves: Move[]) {
			patchState(store, addEntities(moves, { collection: 'moves' }));
		},
		updateMovesQueryParams(queryParams: QueryState['queryParams']) {
			patchState(store, { movesQueryParams: queryParams });
		},
		updateMovesListOffsetIndex(offsetIndex: number) {
			patchState(store, { movesListOffsetIndex: offsetIndex });
		},
	})),
) {}
