import { HttpClient, HttpResourceRef, httpResource } from '@angular/common/http';
import { InjectionToken, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import type { TypedDocumentString } from './generated/graphql';

/** GraphQL endpoint of champions-service. Runs on 3001 so it can sit beside pokedex-service. */
export const CHAMPIONS_API_URL = new InjectionToken<string>('CHAMPIONS_API_URL', {
	providedIn: 'root',
	factory: () => 'http://localhost:3001/graphql',
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
 *   regulation = champResource(CurrentRegulationDocument, () => ({}));
 */
export function champResource<TData, TVariables>(
	document: TypedDocumentString<TData, TVariables>,
	variables: () => TVariables,
): HttpResourceRef<TData | undefined> {
	const url = inject(CHAMPIONS_API_URL);
	return httpResource<TData>(
		() => ({
			url,
			method: 'POST',
			body: { query: document.toString(), variables: variables() },
		}),
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
 *   const mutate = injectChampMutate();
 *   await mutate(LogTurnDocument, { sessionId, state });
 */
export function injectChampMutate(): <TData, TVariables>(
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
