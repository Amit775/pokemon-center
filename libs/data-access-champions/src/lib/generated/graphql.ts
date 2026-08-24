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


export type ChampTeamQuery = { champTeam: Array<{ learnsetIsApproximate: boolean, id: number, slug: string, name: string, nationalDexNo: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, abilities: Array<{ slot: number, isHidden: boolean, ability: { id: number, slug: string, name: string, effectText: string | null, isMega: boolean } }>, megaAbility: { id: number, slug: string, name: string, effectText: string | null } | null, megaForms: Array<{ id: number, slug: string, name: string, nationalDexNo: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }>, moves: Array<{ id: number, slug: string, name: string, type: string, damageClass: DamageClass, power: number | null, pp: number | null, accuracy: number | null, priority: number, flags: Array<string>, effectText: string | null, effectChance: number | null, isOverridden: boolean, overrideNote: string | null }>, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }> };

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

export type ChampDexQueryVariables = Exact<{ [key: string]: never; }>;


export type ChampDexQuery = { champDex: Array<{ id: number, slug: string, name: string, nationalDexNo: number, types: Array<string>, isMega: boolean, hasMega: boolean, megaOfSlug: string | null, abilitySlugs: Array<string>, abilityNames: Array<string>, learnsetIsApproximate: boolean, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }> };

export type BoxEntryFragment = { id: number, nickname: string | null, nature: string | null, item: string | null, notes: string | null, pokemon: { id: number, slug: string, name: string, nationalDexNo: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }, ability: { slug: string, name: string } | null, statPoints: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number }, moves: Array<{ id: number, slug: string, name: string, type: string, damageClass: DamageClass, power: number | null, pp: number | null, accuracy: number | null, priority: number, flags: Array<string>, isOverridden: boolean }> };

export type BoxQueryVariables = Exact<{ [key: string]: never; }>;


export type BoxQuery = { box: Array<{ id: number, nickname: string | null, nature: string | null, item: string | null, notes: string | null, pokemon: { id: number, slug: string, name: string, nationalDexNo: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }, ability: { slug: string, name: string } | null, statPoints: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number }, moves: Array<{ id: number, slug: string, name: string, type: string, damageClass: DamageClass, power: number | null, pp: number | null, accuracy: number | null, priority: number, flags: Array<string>, isOverridden: boolean }> }> };

export type TeamsQueryVariables = Exact<{
  isMine?: boolean | null | undefined;
}>;


export type TeamsQuery = { teams: Array<{ id: number, label: string, isMine: boolean, notes: string | null, members: Array<{ slot: number, pokemon: { id: number, slug: string, name: string, nationalDexNo: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }, boxPokemon: { id: number, nickname: string | null, nature: string | null, item: string | null, notes: string | null, pokemon: { id: number, slug: string, name: string, nationalDexNo: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }, ability: { slug: string, name: string } | null, statPoints: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number }, moves: Array<{ id: number, slug: string, name: string, type: string, damageClass: DamageClass, power: number | null, pp: number | null, accuracy: number | null, priority: number, flags: Array<string>, isOverridden: boolean }> } | null }> }> };

export type SaveBoxPokemonMutationVariables = Exact<{
  input: BoxPokemonInput;
}>;


export type SaveBoxPokemonMutation = { saveBoxPokemon: { id: number, nickname: string | null, nature: string | null, item: string | null, notes: string | null, pokemon: { id: number, slug: string, name: string, nationalDexNo: number, types: Array<string>, isMega: boolean, spriteKey: string | null, megaOfSlug: string | null, baseStats: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number } }, ability: { slug: string, name: string } | null, statPoints: { hp: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number, total: number }, moves: Array<{ id: number, slug: string, name: string, type: string, damageClass: DamageClass, power: number | null, pp: number | null, accuracy: number | null, priority: number, flags: Array<string>, isOverridden: boolean }> } };

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

export type ChampTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type ChampTypesQuery = { champTypes: Array<{ id: number, slug: string, name: string }> };

export type ChampAbilitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type ChampAbilitiesQuery = { champAbilities: Array<{ id: number, slug: string, name: string, effectText: string | null, isMega: boolean }> };

export type ChampMoveIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type ChampMoveIndexQuery = { champMoveIndex: Array<{ id: number, slug: string, name: string, type: string, damageClass: DamageClass }> };

export type ChampMoveLearnersQueryVariables = Exact<{
  moveSlug: string;
}>;


export type ChampMoveLearnersQuery = { champMoveLearners: Array<number> };

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
export const ChampDexDocument = new TypedDocumentString(`
    query ChampDex {
  champDex {
    id
    slug
    name
    nationalDexNo
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
    `) as unknown as TypedDocumentString<ChampDexQuery, ChampDexQueryVariables>;
export const BoxDocument = new TypedDocumentString(`
    query Box {
  box {
    ...BoxEntry
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
export const ChampTypesDocument = new TypedDocumentString(`
    query ChampTypes {
  champTypes {
    id
    slug
    name
  }
}
    `) as unknown as TypedDocumentString<ChampTypesQuery, ChampTypesQueryVariables>;
export const ChampAbilitiesDocument = new TypedDocumentString(`
    query ChampAbilities {
  champAbilities {
    id
    slug
    name
    effectText
    isMega
  }
}
    `) as unknown as TypedDocumentString<ChampAbilitiesQuery, ChampAbilitiesQueryVariables>;
export const ChampMoveIndexDocument = new TypedDocumentString(`
    query ChampMoveIndex {
  champMoveIndex {
    id
    slug
    name
    type
    damageClass
  }
}
    `) as unknown as TypedDocumentString<ChampMoveIndexQuery, ChampMoveIndexQueryVariables>;
export const ChampMoveLearnersDocument = new TypedDocumentString(`
    query ChampMoveLearners($moveSlug: String!) {
  champMoveLearners(moveSlug: $moveSlug)
}
    `) as unknown as TypedDocumentString<ChampMoveLearnersQuery, ChampMoveLearnersQueryVariables>;
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