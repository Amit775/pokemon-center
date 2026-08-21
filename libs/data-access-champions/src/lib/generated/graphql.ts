/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type DamageClass =
  | 'PHYSICAL'
  | 'SPECIAL'
  | 'STATUS';

export type CurrentRegulationQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentRegulationQuery = { currentRegulation: { id: number, code: string, name: string, startsOn: string, endsOn: string, isCurrent: boolean, legalCount: number, notes: string | null } | null };

export type RegulationListQueryVariables = Exact<{ [key: string]: never; }>;


export type RegulationListQuery = { regulations: Array<{ id: number, code: string, name: string, startsOn: string, endsOn: string, isCurrent: boolean, legalCount: number }> };

export type PokemonSummaryFragment = { id: number, slug: string, name: string, nationalDexNo: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } };

export type ChampSearchQueryVariables = Exact<{
  query: string;
  take?: number | null | undefined;
}>;


export type ChampSearchQuery = { champSearch: Array<{ id: number, slug: string, name: string, nationalDexNo: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }> };

export type PokemonDetailFragment = { id: number, slug: string, name: string, nationalDexNo: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } };

export type ChampTeamQueryVariables = Exact<{
  slugs: Array<string> | string;
}>;


export type ChampTeamQuery = { champTeam: Array<{ learnsetIsApproximate: boolean, id: number, slug: string, name: string, nationalDexNo: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, abilities: Array<{ slot: number, isHidden: boolean, ability: { slug: string, name: string, effectText: string | null, isMega: boolean } }>, megaAbility: { slug: string, name: string, effectText: string | null } | null, megaForms: Array<{ id: number, slug: string, name: string, nationalDexNo: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }>, moves: Array<{ id: number, slug: string, name: string, type: string, damageClass: DamageClass, power: number | null, pp: number | null, accuracy: number | null, priority: number, flags: Array<string>, effectChance: number | null, isOverridden: boolean, overrideNote: string | null }>, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }> };

export type TypeChartQueryVariables = Exact<{ [key: string]: never; }>;


export type TypeChartQuery = { typeChart: Array<{ attacking: string, defending: string, factor: number }> };

export type ChampRosterQueryVariables = Exact<{
  type?: string | null | undefined;
  search?: string | null | undefined;
  includeMegas?: boolean | null | undefined;
  take?: number | null | undefined;
  skip?: number | null | undefined;
}>;


export type ChampRosterQuery = { champRosterCount: number, champRoster: Array<{ id: number, slug: string, name: string, nationalDexNo: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }> };

export type ChampTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type ChampTypesQuery = { champTypes: Array<{ id: number, slug: string, name: string }> };

export type ChampChangedMovesQueryVariables = Exact<{ [key: string]: never; }>;


export type ChampChangedMovesQuery = { champChangedMoves: Array<{ id: number, slug: string, name: string, type: string, damageClass: DamageClass, power: number | null, pp: number | null, accuracy: number | null, priority: number, flags: Array<string>, effectChance: number | null, overrideNote: string | null }> };

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
export const PokemonSummaryFragmentDoc = new TypedDocumentString(`
    fragment PokemonSummary on ChampPokemonSummary {
  id
  slug
  name
  nationalDexNo
  types
  isMega
  spriteKey
  megaOfSlug
  baseStats {
    hp
    attack
    defense
    specialAttack
    specialDefense
    speed
    total
  }
}
    `, {"fragmentName":"PokemonSummary"}) as unknown as TypedDocumentString<PokemonSummaryFragment, unknown>;
export const PokemonDetailFragmentDoc = new TypedDocumentString(`
    fragment PokemonDetail on ChampPokemonDetail {
  id
  slug
  name
  nationalDexNo
  types
  isMega
  spriteKey
  megaOfSlug
  baseStats {
    hp
    attack
    defense
    specialAttack
    specialDefense
    speed
    total
  }
}
    `, {"fragmentName":"PokemonDetail"}) as unknown as TypedDocumentString<PokemonDetailFragment, unknown>;
export const CurrentRegulationDocument = new TypedDocumentString(`
    query CurrentRegulation {
  currentRegulation {
    id
    code
    name
    startsOn
    endsOn
    isCurrent
    legalCount
    notes
  }
}
    `) as unknown as TypedDocumentString<CurrentRegulationQuery, CurrentRegulationQueryVariables>;
export const RegulationListDocument = new TypedDocumentString(`
    query RegulationList {
  regulations {
    id
    code
    name
    startsOn
    endsOn
    isCurrent
    legalCount
  }
}
    `) as unknown as TypedDocumentString<RegulationListQuery, RegulationListQueryVariables>;
export const ChampSearchDocument = new TypedDocumentString(`
    query ChampSearch($query: String!, $take: Int) {
  champSearch(query: $query, take: $take) {
    ...PokemonSummary
  }
}
    fragment PokemonSummary on ChampPokemonSummary {
  id
  slug
  name
  nationalDexNo
  types
  isMega
  spriteKey
  megaOfSlug
  baseStats {
    hp
    attack
    defense
    specialAttack
    specialDefense
    speed
    total
  }
}`) as unknown as TypedDocumentString<ChampSearchQuery, ChampSearchQueryVariables>;
export const ChampTeamDocument = new TypedDocumentString(`
    query ChampTeam($slugs: [String!]!) {
  champTeam(slugs: $slugs) {
    ...PokemonDetail
    learnsetIsApproximate
    abilities {
      slot
      isHidden
      ability {
        slug
        name
        effectText
        isMega
      }
    }
    megaAbility {
      slug
      name
      effectText
    }
    megaForms {
      ...PokemonSummary
    }
    moves {
      id
      slug
      name
      type
      damageClass
      power
      pp
      accuracy
      priority
      flags
      effectChance
      isOverridden
      overrideNote
    }
  }
}
    fragment PokemonSummary on ChampPokemonSummary {
  id
  slug
  name
  nationalDexNo
  types
  isMega
  spriteKey
  megaOfSlug
  baseStats {
    hp
    attack
    defense
    specialAttack
    specialDefense
    speed
    total
  }
}
fragment PokemonDetail on ChampPokemonDetail {
  id
  slug
  name
  nationalDexNo
  types
  isMega
  spriteKey
  megaOfSlug
  baseStats {
    hp
    attack
    defense
    specialAttack
    specialDefense
    speed
    total
  }
}`) as unknown as TypedDocumentString<ChampTeamQuery, ChampTeamQueryVariables>;
export const TypeChartDocument = new TypedDocumentString(`
    query TypeChart {
  typeChart {
    attacking
    defending
    factor
  }
}
    `) as unknown as TypedDocumentString<TypeChartQuery, TypeChartQueryVariables>;
export const ChampRosterDocument = new TypedDocumentString(`
    query ChampRoster($type: String, $search: String, $includeMegas: Boolean, $take: Int, $skip: Int) {
  champRoster(
    type: $type
    search: $search
    includeMegas: $includeMegas
    take: $take
    skip: $skip
  ) {
    ...PokemonSummary
  }
  champRosterCount(type: $type, search: $search, includeMegas: $includeMegas)
}
    fragment PokemonSummary on ChampPokemonSummary {
  id
  slug
  name
  nationalDexNo
  types
  isMega
  spriteKey
  megaOfSlug
  baseStats {
    hp
    attack
    defense
    specialAttack
    specialDefense
    speed
    total
  }
}`) as unknown as TypedDocumentString<ChampRosterQuery, ChampRosterQueryVariables>;
export const ChampTypesDocument = new TypedDocumentString(`
    query ChampTypes {
  champTypes {
    id
    slug
    name
  }
}
    `) as unknown as TypedDocumentString<ChampTypesQuery, ChampTypesQueryVariables>;
export const ChampChangedMovesDocument = new TypedDocumentString(`
    query ChampChangedMoves {
  champChangedMoves {
    id
    slug
    name
    type
    damageClass
    power
    pp
    accuracy
    priority
    flags
    effectChance
    overrideNote
  }
}
    `) as unknown as TypedDocumentString<ChampChangedMovesQuery, ChampChangedMovesQueryVariables>;