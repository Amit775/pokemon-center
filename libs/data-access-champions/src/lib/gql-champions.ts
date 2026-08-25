import { HttpClient, HttpResourceRef, httpResource } from '@angular/common/http';
import { InjectionToken, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import type { TypedDocumentString } from './generated/graphql';

/**
 * GraphQL endpoint of champions-service.
 *
 * A **relative** path, proxied by the dev server (`apps/pokemon-center/proxy.conf.json`) to
 * wherever the service is actually listening. The absolute `http://localhost:3001` this used to
 * hardcode meant the frontend could only ever talk to one backend, which made it impossible to
 * run two checkouts side by side — a git worktree gets its own ports, and the proxy is the one
 * place that has to know them.
 */
export const CHAMPIONS_API_URL = new InjectionToken<string>('CHAMPIONS_API_URL', {
	providedIn: 'root',
	factory: () => '/api/champions/graphql',
});

interface GraphQLResponse<TData> {
	data?: TData;
	errors?: { message: string }[];
}

const unwrap = <TData>(raw: unknown): TData => {
	const response = raw as GraphQLResponse<TData>;
	if (response.errors?.length) {
		throw new Error(response.errors.map((e) => e.message).join('; '));
	}
	return response.data as TData;
};

/**
 * Signal-based GraphQL query resource, mirroring `gqlResource` in `data-access-pokedex`
 * but pointed at the Champions API.
 *
 *   regulation = championsResource(CurrentRegulationDocument, () => ({}));
 *
 * Returning `undefined` from the variables function leaves the resource **idle** — no request
 * is made until it returns variables. That is how a query stays genuinely lazy rather than
 * merely conditional: the Pokédex's move-learners query has no sensible argument until someone
 * picks a move, and firing it with an undefined argument would be a guaranteed server error.
 *
 *   learners = championsResource(ChampionsMoveLearnersDocument, () => {
 *     const move = store.filters().move;
 *     return move ? { moveSlug: move } : undefined;
 *   });
 */
export function championsResource<TData, TVariables>(
	document: TypedDocumentString<TData, TVariables>,
	variables: () => TVariables | undefined,
): HttpResourceRef<TData | undefined> {
	const url = inject(CHAMPIONS_API_URL);
	return httpResource<TData>(
		() => {
			const vars = variables();
			if (vars === undefined) return undefined;

			return {
				url,
				method: 'POST',
				body: { query: document.toString(), variables: vars },
			};
		},
		{ parse: (raw) => unwrap<TData>(raw) },
	);
}

/**
 * Imperative GraphQL mutation.
 *
 * `httpResource` is declarative and re-fetches when its inputs change, which is right for
 * reads and wrong for writes — a resource would happily re-issue a mutation on any signal
 * change. The Champions API is the first mutable surface in this workspace, so writes get
 * their own primitive: called once, at the moment the user acts.
 *
 *   const mutate = injectChampionsMutate();
 *   await mutate(LogTurnDocument, { sessionId, state });
 */
export function injectChampionsMutate(): <TData, TVariables>(
	document: TypedDocumentString<TData, TVariables>,
	variables: TVariables,
) => Promise<TData> {
	const url = inject(CHAMPIONS_API_URL);
	const http = inject(HttpClient);

	return async <TData, TVariables>(document: TypedDocumentString<TData, TVariables>, variables: TVariables): Promise<TData> => {
		const raw = await firstValueFrom(http.post<GraphQLResponse<TData>>(url, { query: document.toString(), variables }));
		return unwrap<TData>(raw);
	};
}
