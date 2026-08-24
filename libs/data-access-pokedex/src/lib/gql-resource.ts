import { HttpResourceRef, httpResource } from '@angular/common/http';
import { InjectionToken, inject } from '@angular/core';
import type { TypedDocumentString } from './generated/graphql';

/**
 * GraphQL endpoint of the pokedex-service. Override in app providers to point elsewhere.
 *
 * Relative and proxied by the dev server, for the same reason as the Champions endpoint: a
 * hardcoded port ties the frontend to exactly one backend, which stops two checkouts running
 * side by side. See `apps/pokemon-center/proxy.conf.json`.
 */
export const POKEDEX_API_URL = new InjectionToken<string>('POKEDEX_API_URL', {
	providedIn: 'root',
	factory: () => '/api/pokedex/graphql',
});

interface GraphQLResponse<TData> {
	data?: TData;
	errors?: { message: string }[];
}

/**
 * Signal-based GraphQL query resource built on Angular's httpResource.
 * Re-fetches whenever the `variables` computation changes.
 *
 *   pokemons = gqlResource(PokemonListDocument, () => ({ take: 50, skip: 0, search: this.search() }));
 *   // template: pokemons.value()?.pokemonList
 */
export function gqlResource<TData, TVariables>(
	document: TypedDocumentString<TData, TVariables>,
	variables: () => TVariables,
): HttpResourceRef<TData | undefined> {
	const url = inject(POKEDEX_API_URL);
	return httpResource<TData>(
		() => ({
			url,
			method: 'POST',
			body: { query: document.toString(), variables: variables() },
		}),
		{
			parse: (raw) => {
				const response = raw as GraphQLResponse<TData>;
				if (response.errors?.length) {
					throw new Error(response.errors.map((e) => e.message).join('; '));
				}
				return response.data as TData;
			},
		},
	);
}
