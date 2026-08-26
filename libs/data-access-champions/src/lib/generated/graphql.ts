/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type BoxPokemonInput = {
  abilityId?: number | null | undefined;
  id?: number | null | undefined;
  item?: string | null | undefined;
  moveIds?: Array<number>;
  nature?: string | null | undefined;
  nickname?: string | null | undefined;
  notes?: string | null | undefined;
  pokemonId: number;
  statPoints: StatPointSpreadInput;
};

export type DamageClass =
  | 'PHYSICAL'
  | 'SPECIAL'
  | 'STATUS';

export type StatPointSpreadInput = {
  attack?: number;
  defense?: number;
  hp?: number;
  specialAttack?: number;
  specialDefense?: number;
  speed?: number;
};

export type TeamInput = {
  id?: number | null | undefined;
  isMine?: boolean;
  label: string;
  members?: Array<TeamMemberInput>;
  notes?: string | null | undefined;
};

export type TeamMemberInput = {
  boxPokemonId?: number | null | undefined;
  pokemonId: number;
  slot: number;
};

export type CurrentRegulationQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentRegulationQuery = { currentRegulation: { id: number, code: string, name: string, startsOn: string, endsOn: string, isCurrent: boolean, legalCount: number, notes: string | null } | null };

export type RegulationListQueryVariables = Exact<{ [key: string]: never; }>;


export type RegulationListQuery = { regulations: Array<{ id: number, code: string, name: string, startsOn: string, endsOn: string, isCurrent: boolean, legalCount: number }> };

export type PokemonSummaryFragment = { id: number, slug: string, name: string, nationalPokedexNumber: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } };

export type ChampionsSearchQueryVariables = Exact<{
  query: string;
  take?: number | null | undefined;
}>;


export type ChampionsSearchQuery = { championsSearch: Array<{ id: number, slug: string, name: string, nationalPokedexNumber: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }> };

export type PokemonDetailFragment = { id: number, slug: string, name: string, nationalPokedexNumber: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } };

export type ChampionsTeamQueryVariables = Exact<{
  slugs: Array<string> | string;
}>;


export type ChampionsTeamQuery = { championsTeam: Array<{ learnsetIsApproximate: boolean, id: number, slug: string, name: string, nationalPokedexNumber: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, abilities: Array<{ slot: number, isHidden: boolean, ability: { id: number, slug: string, name: string, effectText: string | null, isMega: boolean } }>, megaAbility: { id: number, slug: string, name: string, effectText: string | null } | null, megaForms: Array<{ id: number, slug: string, name: string, nationalPokedexNumber: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }>, moves: Array<{ id: number, slug: string, name: string, type: string, damageClass: DamageClass, power: number | null, pp: number | null, accuracy: number | null, priority: number, flags: Array<string>, effectText: string | null, effectChance: number | null, isOverridden: boolean, overrideNote: string | null }>, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }> };

export type TypeChartQueryVariables = Exact<{ [key: string]: never; }>;


export type TypeChartQuery = { typeChart: Array<{ attacking: string, defending: string, factor: number }> };

export type ChampionsRosterQueryVariables = Exact<{
  type?: string | null | undefined;
  search?: string | null | undefined;
  includeMegas?: boolean | null | undefined;
  take?: number | null | undefined;
  skip?: number | null | undefined;
}>;


export type ChampionsRosterQuery = { championsRosterCount: number, championsRoster: Array<{ id: number, slug: string, name: string, nationalPokedexNumber: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }> };

export type ChampionsPokedexQueryVariables = Exact<{ [key: string]: never; }>;


export type ChampionsPokedexQuery = { championsPokedex: Array<{ id: number, slug: string, name: string, nationalPokedexNumber: number, types: Array<string>, isMega: boolean, hasMega: boolean, megaOfSlug: string | null, abilitySlugs: Array<string>, abilityNames: Array<string>, learnsetIsApproximate: boolean, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }> };

export type BoxEntryFragment = { id: number, nickname: string | null, nature: string | null, item: string | null, notes: string | null, pokemon: { id: number, slug: string, name: string, nationalPokedexNumber: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }, ability: { slug: string, name: string } | null, statPoints: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number }, moves: Array<{ id: number, slug: string, name: string, type: string, damageClass: DamageClass, power: number | null, pp: number | null, accuracy: number | null, priority: number, flags: Array<string>, isOverridden: boolean }> };

export type BoxQueryVariables = Exact<{ [key: string]: never; }>;


export type BoxQuery = { box: Array<{ id: number, nickname: string | null, nature: string | null, item: string | null, notes: string | null, pokemon: { id: number, slug: string, name: string, nationalPokedexNumber: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }, ability: { slug: string, name: string } | null, statPoints: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number }, moves: Array<{ id: number, slug: string, name: string, type: string, damageClass: DamageClass, power: number | null, pp: number | null, accuracy: number | null, priority: number, flags: Array<string>, isOverridden: boolean }> }> };

export type TeamsQueryVariables = Exact<{
  isMine?: boolean | null | undefined;
}>;


export type TeamsQuery = { teams: Array<{ id: number, label: string, isMine: boolean, notes: string | null, members: Array<{ slot: number, pokemon: { id: number, slug: string, name: string, nationalPokedexNumber: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }, boxPokemon: { id: number, nickname: string | null, nature: string | null, item: string | null, notes: string | null, pokemon: { id: number, slug: string, name: string, nationalPokedexNumber: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }, ability: { slug: string, name: string } | null, statPoints: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number }, moves: Array<{ id: number, slug: string, name: string, type: string, damageClass: DamageClass, power: number | null, pp: number | null, accuracy: number | null, priority: number, flags: Array<string>, isOverridden: boolean }> } | null }> }> };

export type SaveBoxPokemonMutationVariables = Exact<{
  input: BoxPokemonInput;
}>;


export type SaveBoxPokemonMutation = { saveBoxPokemon: { id: number, nickname: string | null, nature: string | null, item: string | null, notes: string | null, pokemon: { id: number, slug: string, name: string, nationalPokedexNumber: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }, ability: { slug: string, name: string } | null, statPoints: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number }, moves: Array<{ id: number, slug: string, name: string, type: string, damageClass: DamageClass, power: number | null, pp: number | null, accuracy: number | null, priority: number, flags: Array<string>, isOverridden: boolean }> } };

export type DeleteBoxPokemonMutationVariables = Exact<{
  id: number;
}>;


export type DeleteBoxPokemonMutation = { deleteBoxPokemon: boolean };

export type SaveTeamMutationVariables = Exact<{
  input: TeamInput;
}>;


export type SaveTeamMutation = { saveTeam: { id: number, label: string, isMine: boolean } };

export type DeleteTeamMutationVariables = Exact<{
  id: number;
}>;


export type DeleteTeamMutation = { deleteTeam: boolean };

export type ChampionsTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type ChampionsTypesQuery = { championsTypes: Array<{ id: number, slug: string, name: string }> };

export type ChampionsAbilitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type ChampionsAbilitiesQuery = { championsAbilities: Array<{ id: number, slug: string, name: string, effectText: string | null, isMega: boolean }> };

export type ChampionsMoveIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type ChampionsMoveIndexQuery = { championsMoveIndex: Array<{ id: number, slug: string, name: string, type: string, damageClass: DamageClass }> };

export type ChampionsMoveLearnersQueryVariables = Exact<{
  moveSlug: string;
}>;


export type ChampionsMoveLearnersQuery = { championsMoveLearners: Array<number> };

export type ChampionsChangedMovesQueryVariables = Exact<{ [key: string]: never; }>;


export type ChampionsChangedMovesQuery = { championsChangedMoves: Array<{ id: number, slug: string, name: string, type: string, damageClass: DamageClass, power: number | null, pp: number | null, accuracy: number | null, priority: number, flags: Array<string>, effectChance: number | null, overrideNote: string | null }> };

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
export const PokemonDetailFragmentDoc = new TypedDocumentString(`
    fragment PokemonDetail on ChampionsPokemonDetail {
  id
  slug
  name
  nationalPokedexNumber
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
export const PokemonSummaryFragmentDoc = new TypedDocumentString(`
    fragment PokemonSummary on ChampionsPokemonSummary {
  id
  slug
  name
  nationalPokedexNumber
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
export const BoxEntryFragmentDoc = new TypedDocumentString(`
    fragment BoxEntry on BoxPokemon {
  id
  nickname
  nature
  item
  notes
  pokemon {
    ...PokemonSummary
  }
  ability {
    slug
    name
  }
  statPoints {
    hp
    attack
    defense
    specialAttack
    specialDefense
    speed
    total
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
    isOverridden
  }
}
    fragment PokemonSummary on ChampionsPokemonSummary {
  id
  slug
  name
  nationalPokedexNumber
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
}`, {"fragmentName":"BoxEntry"}) as unknown as TypedDocumentString<BoxEntryFragment, unknown>;
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
export const ChampionsSearchDocument = new TypedDocumentString(`
    query ChampionsSearch($query: String!, $take: Int) {
  championsSearch(query: $query, take: $take) {
    ...PokemonSummary
  }
}
    fragment PokemonSummary on ChampionsPokemonSummary {
  id
  slug
  name
  nationalPokedexNumber
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
}`) as unknown as TypedDocumentString<ChampionsSearchQuery, ChampionsSearchQueryVariables>;
export const ChampionsTeamDocument = new TypedDocumentString(`
    query ChampionsTeam($slugs: [String!]!) {
  championsTeam(slugs: $slugs) {
    ...PokemonDetail
    learnsetIsApproximate
    abilities {
      slot
      isHidden
      ability {
        id
        slug
        name
        effectText
        isMega
      }
    }
    megaAbility {
      id
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
      effectText
      effectChance
      isOverridden
      overrideNote
    }
  }
}
    fragment PokemonSummary on ChampionsPokemonSummary {
  id
  slug
  name
  nationalPokedexNumber
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
fragment PokemonDetail on ChampionsPokemonDetail {
  id
  slug
  name
  nationalPokedexNumber
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
}`) as unknown as TypedDocumentString<ChampionsTeamQuery, ChampionsTeamQueryVariables>;
export const TypeChartDocument = new TypedDocumentString(`
    query TypeChart {
  typeChart {
    attacking
    defending
    factor
  }
}
    `) as unknown as TypedDocumentString<TypeChartQuery, TypeChartQueryVariables>;
export const ChampionsRosterDocument = new TypedDocumentString(`
    query ChampionsRoster($type: String, $search: String, $includeMegas: Boolean, $take: Int, $skip: Int) {
  championsRoster(
    type: $type
    search: $search
    includeMegas: $includeMegas
    take: $take
    skip: $skip
  ) {
    ...PokemonSummary
  }
  championsRosterCount(type: $type, search: $search, includeMegas: $includeMegas)
}
    fragment PokemonSummary on ChampionsPokemonSummary {
  id
  slug
  name
  nationalPokedexNumber
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
}`) as unknown as TypedDocumentString<ChampionsRosterQuery, ChampionsRosterQueryVariables>;
export const ChampionsPokedexDocument = new TypedDocumentString(`
    query ChampionsPokedex {
  championsPokedex {
    id
    slug
    name
    nationalPokedexNumber
    types
    isMega
    hasMega
    megaOfSlug
    abilitySlugs
    abilityNames
    learnsetIsApproximate
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
}
    `) as unknown as TypedDocumentString<ChampionsPokedexQuery, ChampionsPokedexQueryVariables>;
export const BoxDocument = new TypedDocumentString(`
    query Box {
  box {
    ...BoxEntry
  }
}
    fragment PokemonSummary on ChampionsPokemonSummary {
  id
  slug
  name
  nationalPokedexNumber
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
fragment BoxEntry on BoxPokemon {
  id
  nickname
  nature
  item
  notes
  pokemon {
    ...PokemonSummary
  }
  ability {
    slug
    name
  }
  statPoints {
    hp
    attack
    defense
    specialAttack
    specialDefense
    speed
    total
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
    isOverridden
  }
}`) as unknown as TypedDocumentString<BoxQuery, BoxQueryVariables>;
export const TeamsDocument = new TypedDocumentString(`
    query Teams($isMine: Boolean) {
  teams(isMine: $isMine) {
    id
    label
    isMine
    notes
    members {
      slot
      pokemon {
        ...PokemonSummary
      }
      boxPokemon {
        ...BoxEntry
      }
    }
  }
}
    fragment PokemonSummary on ChampionsPokemonSummary {
  id
  slug
  name
  nationalPokedexNumber
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
fragment BoxEntry on BoxPokemon {
  id
  nickname
  nature
  item
  notes
  pokemon {
    ...PokemonSummary
  }
  ability {
    slug
    name
  }
  statPoints {
    hp
    attack
    defense
    specialAttack
    specialDefense
    speed
    total
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
    isOverridden
  }
}`) as unknown as TypedDocumentString<TeamsQuery, TeamsQueryVariables>;
export const SaveBoxPokemonDocument = new TypedDocumentString(`
    mutation SaveBoxPokemon($input: BoxPokemonInput!) {
  saveBoxPokemon(input: $input) {
    ...BoxEntry
  }
}
    fragment PokemonSummary on ChampionsPokemonSummary {
  id
  slug
  name
  nationalPokedexNumber
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
fragment BoxEntry on BoxPokemon {
  id
  nickname
  nature
  item
  notes
  pokemon {
    ...PokemonSummary
  }
  ability {
    slug
    name
  }
  statPoints {
    hp
    attack
    defense
    specialAttack
    specialDefense
    speed
    total
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
    isOverridden
  }
}`) as unknown as TypedDocumentString<SaveBoxPokemonMutation, SaveBoxPokemonMutationVariables>;
export const DeleteBoxPokemonDocument = new TypedDocumentString(`
    mutation DeleteBoxPokemon($id: Int!) {
  deleteBoxPokemon(id: $id)
}
    `) as unknown as TypedDocumentString<DeleteBoxPokemonMutation, DeleteBoxPokemonMutationVariables>;
export const SaveTeamDocument = new TypedDocumentString(`
    mutation SaveTeam($input: TeamInput!) {
  saveTeam(input: $input) {
    id
    label
    isMine
  }
}
    `) as unknown as TypedDocumentString<SaveTeamMutation, SaveTeamMutationVariables>;
export const DeleteTeamDocument = new TypedDocumentString(`
    mutation DeleteTeam($id: Int!) {
  deleteTeam(id: $id)
}
    `) as unknown as TypedDocumentString<DeleteTeamMutation, DeleteTeamMutationVariables>;
export const ChampionsTypesDocument = new TypedDocumentString(`
    query ChampionsTypes {
  championsTypes {
    id
    slug
    name
  }
}
    `) as unknown as TypedDocumentString<ChampionsTypesQuery, ChampionsTypesQueryVariables>;
export const ChampionsAbilitiesDocument = new TypedDocumentString(`
    query ChampionsAbilities {
  championsAbilities {
    id
    slug
    name
    effectText
    isMega
  }
}
    `) as unknown as TypedDocumentString<ChampionsAbilitiesQuery, ChampionsAbilitiesQueryVariables>;
export const ChampionsMoveIndexDocument = new TypedDocumentString(`
    query ChampionsMoveIndex {
  championsMoveIndex {
    id
    slug
    name
    type
    damageClass
  }
}
    `) as unknown as TypedDocumentString<ChampionsMoveIndexQuery, ChampionsMoveIndexQueryVariables>;
export const ChampionsMoveLearnersDocument = new TypedDocumentString(`
    query ChampionsMoveLearners($moveSlug: String!) {
  championsMoveLearners(moveSlug: $moveSlug)
}
    `) as unknown as TypedDocumentString<ChampionsMoveLearnersQuery, ChampionsMoveLearnersQueryVariables>;
export const ChampionsChangedMovesDocument = new TypedDocumentString(`
    query ChampionsChangedMoves {
  championsChangedMoves {
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
    `) as unknown as TypedDocumentString<ChampionsChangedMovesQuery, ChampionsChangedMovesQueryVariables>;