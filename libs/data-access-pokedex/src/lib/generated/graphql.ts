/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type VersionGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type VersionGroupsQuery = { versionGroups: Array<{ id: string, identifier: string, order: number, generation: { id: string, identifier: string }, versions: Array<{ id: string, identifier: string }> }> };

export type LanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type LanguagesQuery = { languages: Array<{ id: number, code: string, name: string }> };

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


export type PokemonDetailQuery = { pokemon: { id: string, canonicalId: string, slug: string, identifier: string, height: number, weight: number, base_experience: number | null, species: { id: string, identifier: string, generation_id: number, capture_rate: number, base_happiness: number, is_legendary: number, is_mythical: number, gender_rate: number, hatch_counter: number, eggGroups: Array<{ eggGroup: { identifier: string } }>, growthRate: { identifier: string } }, types: Array<{ slot: number, type: { id: string, identifier: string } }>, stats: Array<{ base_stat: number, effort: number, stat: { id: string, identifier: string } }>, abilities: Array<{ is_hidden: number, slot: number, ability: { id: string, identifier: string } }> } | null };

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

export type PokemonFlavorQueryVariables = Exact<{
  idOrSlug: string;
  versionGroup?: string | null | undefined;
  language?: string | null | undefined;
}>;


export type PokemonFlavorQuery = { pokemonFlavor: Array<{ flavor_text: string, version: { identifier: string } }> };

export type EvolutionChainQueryVariables = Exact<{
  idOrSlug: string;
}>;


export type EvolutionChainQuery = { evolutionChain: Array<{ id: string, identifier: string, evolves_from_species_id: number | null, pokemon: Array<{ id: string }>, evolution: Array<{ minimum_level: number | null, minimum_happiness: number | null, time_of_day: string | null, evolutionTrigger: { identifier: string }, triggerItem: { identifier: string } | null, heldItem: { identifier: string } | null, knownMove: { identifier: string } | null, location: { identifier: string } | null }> }> };

export type PokemonEncountersQueryVariables = Exact<{
  idOrSlug: string;
  versionGroup?: string | null | undefined;
  take?: number | null | undefined;
}>;


export type PokemonEncountersQuery = { pokemonEncounters: Array<{ min_level: number, max_level: number, version: { identifier: string }, locationArea: { identifier: string | null, location: { identifier: string } }, encounterSlot: { rarity: number, encounterMethod: { identifier: string } } }> };

export type MoveLearnedByQueryVariables = Exact<{
  idOrSlug: string;
  versionGroup?: string | null | undefined;
  take?: number | null | undefined;
}>;


export type MoveLearnedByQuery = { moveLearnedBy: Array<{ level: number | null, pokemon: { id: string, identifier: string }, moveMethod: { identifier: string }, versionGroup: { identifier: string } }> };

export type MoveFlavorQueryVariables = Exact<{
  idOrSlug: string;
  versionGroup?: string | null | undefined;
  language?: string | null | undefined;
}>;


export type MoveFlavorQuery = { moveFlavor: Array<{ flavor_text: string, versionGroup: { identifier: string } }> };

export type AbilityDetailQueryVariables = Exact<{
  idOrSlug: string;
  language?: string | null | undefined;
}>;


export type AbilityDetailQuery = { ability: { id: string, canonicalId: string, identifier: string, abilityProses: Array<{ short_effect: string, effect: string }>, pokemonAbilities: Array<{ is_hidden: number, pokemon: { id: string, identifier: string } }> } | null };

export type ItemDetailQueryVariables = Exact<{
  idOrSlug: string;
  language?: string | null | undefined;
}>;


export type ItemDetailQuery = { item: { id: string, canonicalId: string, identifier: string, cost: number, fling_power: number | null, category: { identifier: string }, itemProses: Array<{ short_effect: string | null, effect: string | null }>, itemFlavorTexts: Array<{ flavor_text: string | null, versionGroup: { identifier: string } }> } | null };

export type MatchupAnalysisQueryVariables = Exact<{
  defenderTypes: Array<string> | string;
  versionGroup?: string | null | undefined;
  take?: number | null | undefined;
}>;


export type MatchupAnalysisQuery = { matchupAnalysis: Array<{ pokemonId: number, pokemonSlug: string, bestMove: string, bestMoveType: string, effectiveness: number, score: number }> };

export type TypeChartQueryVariables = Exact<{
  versionGroup?: string | null | undefined;
}>;


export type TypeChartQuery = { typeChart: { generationId: number | null, types: Array<string>, cells: Array<{ damageType: string, targetType: string, factor: number }> } };

export type CoverageQueryVariables = Exact<{
  moves: Array<string> | string;
}>;


export type CoverageQuery = { coverage: Array<{ defendingType: string, bestFactor: number, viaMove: string | null }> };

export type ComparePokemonQueryVariables = Exact<{
  idOrSlug: string;
}>;


export type ComparePokemonQuery = { pokemon: { id: string, identifier: string, height: number, weight: number, types: Array<{ slot: number, type: { identifier: string } }>, stats: Array<{ base_stat: number, stat: { identifier: string } }>, abilities: Array<{ is_hidden: number, ability: { identifier: string } }> } | null };

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
export const LanguagesDocument = new TypedDocumentString(`
    query Languages {
  languages {
    id
    code
    name
  }
}
    `) as unknown as TypedDocumentString<LanguagesQuery, LanguagesQueryVariables>;
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
      gender_rate
      hatch_counter
      eggGroups {
        eggGroup {
          identifier
        }
      }
      growthRate {
        identifier
      }
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
export const PokemonFlavorDocument = new TypedDocumentString(`
    query PokemonFlavor($idOrSlug: String!, $versionGroup: String, $language: String) {
  pokemonFlavor(
    idOrSlug: $idOrSlug
    versionGroup: $versionGroup
    language: $language
  ) {
    flavor_text
    version {
      identifier
    }
  }
}
    `) as unknown as TypedDocumentString<PokemonFlavorQuery, PokemonFlavorQueryVariables>;
export const EvolutionChainDocument = new TypedDocumentString(`
    query EvolutionChain($idOrSlug: String!) {
  evolutionChain(idOrSlug: $idOrSlug) {
    id
    identifier
    evolves_from_species_id
    pokemon {
      id
    }
    evolution {
      minimum_level
      minimum_happiness
      time_of_day
      evolutionTrigger {
        identifier
      }
      triggerItem {
        identifier
      }
      heldItem {
        identifier
      }
      knownMove {
        identifier
      }
      location {
        identifier
      }
    }
  }
}
    `) as unknown as TypedDocumentString<EvolutionChainQuery, EvolutionChainQueryVariables>;
export const PokemonEncountersDocument = new TypedDocumentString(`
    query PokemonEncounters($idOrSlug: String!, $versionGroup: String, $take: Int) {
  pokemonEncounters(idOrSlug: $idOrSlug, versionGroup: $versionGroup, take: $take) {
    min_level
    max_level
    version {
      identifier
    }
    locationArea {
      identifier
      location {
        identifier
      }
    }
    encounterSlot {
      rarity
      encounterMethod {
        identifier
      }
    }
  }
}
    `) as unknown as TypedDocumentString<PokemonEncountersQuery, PokemonEncountersQueryVariables>;
export const MoveLearnedByDocument = new TypedDocumentString(`
    query MoveLearnedBy($idOrSlug: String!, $versionGroup: String, $take: Int) {
  moveLearnedBy(idOrSlug: $idOrSlug, versionGroup: $versionGroup, take: $take) {
    level
    pokemon {
      id
      identifier
    }
    moveMethod {
      identifier
    }
    versionGroup {
      identifier
    }
  }
}
    `) as unknown as TypedDocumentString<MoveLearnedByQuery, MoveLearnedByQueryVariables>;
export const MoveFlavorDocument = new TypedDocumentString(`
    query MoveFlavor($idOrSlug: String!, $versionGroup: String, $language: String) {
  moveFlavor(
    idOrSlug: $idOrSlug
    versionGroup: $versionGroup
    language: $language
  ) {
    flavor_text
    versionGroup {
      identifier
    }
  }
}
    `) as unknown as TypedDocumentString<MoveFlavorQuery, MoveFlavorQueryVariables>;
export const AbilityDetailDocument = new TypedDocumentString(`
    query AbilityDetail($idOrSlug: String!, $language: String) {
  ability(idOrSlug: $idOrSlug, language: $language) {
    id
    canonicalId
    identifier
    abilityProses {
      short_effect
      effect
    }
    pokemonAbilities {
      is_hidden
      pokemon {
        id
        identifier
      }
    }
  }
}
    `) as unknown as TypedDocumentString<AbilityDetailQuery, AbilityDetailQueryVariables>;
export const ItemDetailDocument = new TypedDocumentString(`
    query ItemDetail($idOrSlug: String!, $language: String) {
  item(idOrSlug: $idOrSlug, language: $language) {
    id
    canonicalId
    identifier
    cost
    fling_power
    category {
      identifier
    }
    itemProses {
      short_effect
      effect
    }
    itemFlavorTexts {
      flavor_text
      versionGroup {
        identifier
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ItemDetailQuery, ItemDetailQueryVariables>;
export const MatchupAnalysisDocument = new TypedDocumentString(`
    query MatchupAnalysis($defenderTypes: [String!]!, $versionGroup: String, $take: Int) {
  matchupAnalysis(
    defenderTypes: $defenderTypes
    versionGroup: $versionGroup
    take: $take
  ) {
    pokemonId
    pokemonSlug
    bestMove
    bestMoveType
    effectiveness
    score
  }
}
    `) as unknown as TypedDocumentString<MatchupAnalysisQuery, MatchupAnalysisQueryVariables>;
export const TypeChartDocument = new TypedDocumentString(`
    query TypeChart($versionGroup: String) {
  typeChart(versionGroup: $versionGroup) {
    generationId
    types
    cells {
      damageType
      targetType
      factor
    }
  }
}
    `) as unknown as TypedDocumentString<TypeChartQuery, TypeChartQueryVariables>;
export const CoverageDocument = new TypedDocumentString(`
    query Coverage($moves: [String!]!) {
  coverage(moves: $moves) {
    defendingType
    bestFactor
    viaMove
  }
}
    `) as unknown as TypedDocumentString<CoverageQuery, CoverageQueryVariables>;
export const ComparePokemonDocument = new TypedDocumentString(`
    query ComparePokemon($idOrSlug: String!) {
  pokemon(idOrSlug: $idOrSlug) {
    id
    identifier
    height
    weight
    types {
      slot
      type {
        identifier
      }
    }
    stats {
      base_stat
      stat {
        identifier
      }
    }
    abilities {
      is_hidden
      ability {
        identifier
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ComparePokemonQuery, ComparePokemonQueryVariables>;