import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BasePokemon, MAX_INDEX, PokemonStore } from '../store/pokemon.store';

// TODO: Replace with your actual Pokemon and Move types from GraphQL
export interface Pokemon {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	weight: number;
	types: PokemonType[];
}

export interface PokemonType {
	id: number;
	name: string;
}

export interface Move {
	id: number;
	name: string;
	// Add other move properties as needed
}

@Injectable({ providedIn: 'root' })
export class PokemonService {
	private store = inject(PokemonStore);

	// TODO: Replace with actual GraphQL client calls
	getPokemon(id: number): Observable<Pokemon> {
		// This should call your GraphQL API
		// For now, returning a mock response
		return of({
			id,
			name: 'Pikachu',
			base_experience: 112,
			height: 4,
			weight: 60,
			types: [{ id: 1, name: 'electric' }],
		});
	}

	getMove(id: number | string): Observable<Move> {
		// This should call your GraphQL API
		// For now, returning a mock response
		return of({
			id: typeof id === 'string' ? 1 : id,
			name: 'Thunderbolt',
		});
	}

	getMorePokemons(): this {
		// TODO: Implement pagination with your GraphQL API
		// For now, this is a placeholder
		return this;
	}
}
