# data-access-pokedex

Typed GraphQL access to the pokemon-center Pokedex API — for this workspace **and every sibling pokemon-verse project**.

## Prerequisites

```bash
# in pokemon-center:
docker compose up -d postgres          # database (port 5433)
pnpm nx run pokedex-service:serve      # GraphQL API on http://localhost:3000/graphql
```

## Inside this workspace (Angular)

```ts
import { PokemonListDocument, gqlResource } from '@pokemon-center/data-access-pokedex';

@Component({ /* … */ })
export class MyComponent {
  search = signal('');
  private list = gqlResource(PokemonListDocument, () => ({ take: 50, skip: 0, search: this.search() || undefined }));
  pokemons = computed(() => this.list.value()?.pokemonList ?? []);
}
```

`gqlResource` wraps Angular's `httpResource`: it re-fetches when the variables computation changes and exposes `value()` / `isLoading()` / `error()` signals. Override the endpoint by providing `POKEDEX_API_URL`.

Available operations (see `src/lib/operations.graphql`): `PokemonList`, `PokemonDetail`, `PokemonMoves`, `MoveList`, `MoveDetail`, `TypeMatchups`. Convenience result types: `PokemonListItem`, `PokemonDetail`, `PokemonMoveRow`, `MoveListItem`, `MoveDetail`, `TypeMatchups`.

## From sibling pokemon-verse projects

Plain fetch — no dependency on this workspace required:

```ts
const res = await fetch('http://localhost:3000/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `query { pokemon(idOrSlug: "pikachu") { canonicalId slug height weight
              stats { base_stat stat { identifier } } } }`,
  }),
});
const { data } = await res.json();
```

For **typed** access, copy this recipe into your project:

1. `npm i -D @graphql-codegen/cli @graphql-codegen/client-preset graphql`
2. Copy `codegen.ts`, pointing `schema` at either the running endpoint (`http://localhost:3000/graphql`) or the committed SDL (`pokemon-center/apps/pokedex-service/schema.gql`).
3. Write your operations in `.graphql` files, run `graphql-codegen`, and you get fully-typed documents + result types.

## Conventions

- Every lookup accepts **canonical id** (`pokemon:25`), numeric id (`25`), or **slug** (`pikachu`).
- The API is **read-only**; search args are typo-tolerant (Postgres trigram similarity).
- CORS is open, so browser apps can call the endpoint directly.

## Regenerating after API changes

```bash
pnpm nx run data-access-pokedex:codegen   # schema.gql is re-emitted whenever pokedex-service boots
```
