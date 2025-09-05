import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BasePokemon, MAX_INDEX, PokemonStore } from '../store/pokemon.store';

// GraphQL API types matching the backend schema
export interface Pokemon {
	id: number;
	name: string;
	slug: string;
	types?: PokemonType[];
	moves?: Move[];
	abilities?: Ability[];
	stats?: StatWithBase[];
}

export interface PokemonType {
	id: number;
	name: string;
	slug: string;
	moves?: Move[];
}

export interface Move {
	id: number;
	name: string;
	slug: string;
	power?: number;
	accuracy?: number;
	pp?: number;
	priority: number;
	typeId: number;
	damageClassId: number;
	type: PokemonType;
	damageClass: DamageClass;
}

export interface Ability {
	id: number;
	name: string;
	slug: string;
}

export interface Item {
	id: number;
	name: string;
	slug: string;
}

export interface Stat {
	id: number;
	name: string;
	slug: string;
}

export interface StatWithBase extends Stat {
	baseStat: number;
}

export interface DamageClass {
	id: number;
	name: string;
	slug: string;
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
			slug: 'pikachu',
			types: [{ id: 1, name: 'electric', slug: 'electric' }],
			moves: [],
			abilities: [],
			stats: [],
		});
	}

	getMove(id: number | string): Observable<Move> {
		// This should call your GraphQL API
		// For now, returning a mock response
		return of({
			id: typeof id === 'string' ? 1 : id,
			name: 'Thunderbolt',
			slug: 'thunderbolt',
			power: 90,
			accuracy: 100,
			pp: 15,
			priority: 0,
			typeId: 1,
			damageClassId: 1,
			type: { id: 1, name: 'electric', slug: 'electric' },
			damageClass: { id: 1, name: 'Special', slug: 'special' },
		});
	}

	getMorePokemons(): this {
		// TODO: Implement pagination with your GraphQL API
		// For now, this is a placeholder
		return this;
	}
}
