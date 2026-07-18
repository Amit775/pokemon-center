/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type VersionGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type VersionGroupsQuery = { versionGroups: Array<{ id: string, identifier: string, order: number, generation: { id: string, identifier: string }, versions: Array<{ id: string, identifier: string }> }> };

export type SearchQueryVariables = Exact<{
  term: string;
  takePerKind?: number | null | undefined;
}>;


export type SearchQuery = { search: Array<{ kind: string, id: number, canonicalId: string, slug: string, matchedName: string, similarity: number }> };

export type TypesListQueryVariables = Exact<{ [key: string]: never; }>;


export type TypesListQuery = { typeList: Array<{ id: string, identifier: string }> };

export type PokemonListQueryVariables = Exact<{
  take: number;
  skip: number;
  search?: string | null | undefined;
  versionGroup?: string | null | undefined;
  types?: Array<string> | string | null | undefined;
  generation?: number | null | undefined;
  sortBy?: string | null | undefined;
  sortDesc?: boolean | null | undefined;
}>;


export type PokemonListQuery = { pokemonList: Array<{ id: string, canonicalId: string, slug: string, identifier: string, height: number, weight: number, types: Array<{ slot: number, type: { id: string, identifier: string } }> }> };

export type PokemonDetailQueryVariables = Exact<{
  idOrSlug: string;
}>;


export type PokemonDetailQuery = { pokemon: { id: string, canonicalId: string, slug: string, identifier: string, height: number, weight: number, base_experience: number | null, species: { id: string, identifier: string, generation_id: number, capture_rate: number, base_happiness: number, is_legendary: number, is_mythical: number }, types: Array<{ slot: number, type: { id: string, identifier: string } }>, stats: Array<{ base_stat: number, effort: number, stat: { id: string, identifier: string } }>, abilities: Array<{ is_hidden: number, slot: number, ability: { id: string, identifier: string } }> } | null };

export type PokemonMovesQueryVariables = Exact<{
  idOrSlug: string;
  versionGroup?: string | null | undefined;
  take: number;
  skip: number;
}>;


export type PokemonMovesQuery = { pokemonMoves: Array<{ level: number | null, moveMethod: { identifier: string }, versionGroup: { identifier: string }, move: { id: string, identifier: string, power: number | null, accuracy: number | null, pp: number | null, type: { identifier: string }, damageClass: { identifier: string } } }> };

export type MoveListQueryVariables = Exact<{
  take: number;
  skip: number;
  search?: string | null | undefined;
}>;


export type MoveListQuery = { moveList: Array<{ id: string, canonicalId: string, slug: string, identifier: string, power: number | null, accuracy: number | null, pp: number | null, type: { identifier: string }, damageClass: { identifier: string } }> };

export type MoveDetailQueryVariables = Exact<{
  idOrSlug: string;
}>;


export type MoveDetailQuery = { move: { id: string, canonicalId: string, slug: string, identifier: string, power: number | null, accuracy: number | null, pp: number | null, priority: number, effect_chance: number | null, type: { id: string, identifier: string }, damageClass: { identifier: string }, target: { identifier: string }, generation: { identifier: string } } | null };

export type TypeMatchupsQueryVariables = Exact<{
  idOrSlug: string;
}>;


export type TypeMatchupsQuery = { type: { id: string, identifier: string, efficacy: Array<{ damage_factor: number, targetType: { id: string, identifier: string } }>, efficacyTarget: Array<{ damage_factor: number, damageType: { id: string, identifier: string } }> } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const VersionGroupsDocument = new TypedDocumentString(`
    query VersionGroups {
  versionGroups {
    id
    identifier
    order
    generation {
      id
      identifier
    }
    versions {
      id
      identifier
    }
  }
}
    `) as unknown as TypedDocumentString<VersionGroupsQuery, VersionGroupsQueryVariables>;
export const SearchDocument = new TypedDocumentString(`
    query Search($term: String!, $takePerKind: Int) {
  search(term: $term, takePerKind: $takePerKind) {
    kind
    id
    canonicalId
    slug
    matchedName
    similarity
  }
}
    `) as unknown as TypedDocumentString<SearchQuery, SearchQueryVariables>;
export const TypesListDocument = new TypedDocumentString(`
    query TypesList {
  typeList {
    id
    identifier
  }
}
    `) as unknown as TypedDocumentString<TypesListQuery, TypesListQueryVariables>;
export const PokemonListDocument = new TypedDocumentString(`
    query PokemonList($take: Int!, $skip: Int!, $search: String, $versionGroup: String, $types: [String!], $generation: Int, $sortBy: String, $sortDesc: Boolean) {
  pokemonList(
    take: $take
    skip: $skip
    search: $search
    versionGroup: $versionGroup
    types: $types
    generation: $generation
    sortBy: $sortBy
    sortDesc: $sortDesc
  ) {
    id
    canonicalId
    slug
    identifier
    height
    weight
    types {
      slot
      type {
        id
        identifier
      }
    }
  }
}
    `) as unknown as TypedDocumentString<PokemonListQuery, PokemonListQueryVariables>;
export const PokemonDetailDocument = new TypedDocumentString(`
    query PokemonDetail($idOrSlug: String!) {
  pokemon(idOrSlug: $idOrSlug) {
    id
    canonicalId
    slug
    identifier
    height
    weight
    base_experience
    species {
      id
      identifier
      generation_id
      capture_rate
      base_happiness
      is_legendary
      is_mythical
    }
    types {
      slot
      type {
        id
        identifier
      }
    }
    stats {
      base_stat
      effort
      stat {
        id
        identifier
      }
    }
    abilities {
      is_hidden
      slot
      ability {
        id
        identifier
      }
    }
  }
}
    `) as unknown as TypedDocumentString<PokemonDetailQuery, PokemonDetailQueryVariables>;
export const PokemonMovesDocument = new TypedDocumentString(`
    query PokemonMoves($idOrSlug: String!, $versionGroup: String, $take: Int!, $skip: Int!) {
  pokemonMoves(
    idOrSlug: $idOrSlug
    versionGroup: $versionGroup
    take: $take
    skip: $skip
  ) {
    level
    moveMethod {
      identifier
    }
    versionGroup {
      identifier
    }
    move {
      id
      identifier
      power
      accuracy
      pp
      type {
        identifier
      }
      damageClass {
        identifier
      }
    }
  }
}
    `) as unknown as TypedDocumentString<PokemonMovesQuery, PokemonMovesQueryVariables>;
export const MoveListDocument = new TypedDocumentString(`
    query MoveList($take: Int!, $skip: Int!, $search: String) {
  moveList(take: $take, skip: $skip, search: $search) {
    id
    canonicalId
    slug
    identifier
    power
    accuracy
    pp
    type {
      identifier
    }
    damageClass {
      identifier
    }
  }
}
    `) as unknown as TypedDocumentString<MoveListQuery, MoveListQueryVariables>;
export const MoveDetailDocument = new TypedDocumentString(`
    query MoveDetail($idOrSlug: String!) {
  move(idOrSlug: $idOrSlug) {
    id
    canonicalId
    slug
    identifier
    power
    accuracy
    pp
    priority
    effect_chance
    type {
      id
      identifier
    }
    damageClass {
      identifier
    }
    target {
      identifier
    }
    generation {
      identifier
    }
  }
}
    `) as unknown as TypedDocumentString<MoveDetailQuery, MoveDetailQueryVariables>;
export const TypeMatchupsDocument = new TypedDocumentString(`
    query TypeMatchups($idOrSlug: String!) {
  type(idOrSlug: $idOrSlug) {
    id
    identifier
    efficacy {
      damage_factor
      targetType {
        id
        identifier
      }
    }
    efficacyTarget {
      damage_factor
      damageType {
        id
        identifier
      }
    }
  }
}
    `) as unknown as TypedDocumentString<TypeMatchupsQuery, TypeMatchupsQueryVariables>;