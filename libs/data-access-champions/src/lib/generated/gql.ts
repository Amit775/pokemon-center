/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query CurrentRegulation {\n  currentRegulation {\n    id\n    code\n    name\n    startsOn\n    endsOn\n    isCurrent\n    legalCount\n    notes\n  }\n}\n\nquery RegulationList {\n  regulations {\n    id\n    code\n    name\n    startsOn\n    endsOn\n    isCurrent\n    legalCount\n  }\n}\n\nfragment PokemonSummary on ChampPokemonSummary {\n  id\n  slug\n  name\n  nationalDexNo\n  types\n  isMega\n  spriteKey\n  megaOfSlug\n  baseStats {\n    hp\n    attack\n    defense\n    specialAttack\n    specialDefense\n    speed\n    total\n  }\n}\n\nquery ChampSearch($query: String!, $take: Int) {\n  champSearch(query: $query, take: $take) {\n    ...PokemonSummary\n  }\n}\n\nfragment PokemonDetail on ChampPokemonDetail {\n  id\n  slug\n  name\n  nationalDexNo\n  types\n  isMega\n  spriteKey\n  megaOfSlug\n  baseStats {\n    hp\n    attack\n    defense\n    specialAttack\n    specialDefense\n    speed\n    total\n  }\n}\n\nquery ChampTeam($slugs: [String!]!) {\n  champTeam(slugs: $slugs) {\n    ...PokemonDetail\n    learnsetIsApproximate\n    abilities {\n      slot\n      isHidden\n      ability {\n        slug\n        name\n        effectText\n        isMega\n      }\n    }\n    megaAbility {\n      slug\n      name\n      effectText\n    }\n    megaForms {\n      ...PokemonSummary\n    }\n    moves {\n      id\n      slug\n      name\n      type\n      damageClass\n      power\n      pp\n      accuracy\n      priority\n      flags\n      effectChance\n      isOverridden\n      overrideNote\n    }\n  }\n}\n\nquery TypeChart {\n  typeChart {\n    attacking\n    defending\n    factor\n  }\n}": typeof types.CurrentRegulationDocument,
};
const documents: Documents = {
    "query CurrentRegulation {\n  currentRegulation {\n    id\n    code\n    name\n    startsOn\n    endsOn\n    isCurrent\n    legalCount\n    notes\n  }\n}\n\nquery RegulationList {\n  regulations {\n    id\n    code\n    name\n    startsOn\n    endsOn\n    isCurrent\n    legalCount\n  }\n}\n\nfragment PokemonSummary on ChampPokemonSummary {\n  id\n  slug\n  name\n  nationalDexNo\n  types\n  isMega\n  spriteKey\n  megaOfSlug\n  baseStats {\n    hp\n    attack\n    defense\n    specialAttack\n    specialDefense\n    speed\n    total\n  }\n}\n\nquery ChampSearch($query: String!, $take: Int) {\n  champSearch(query: $query, take: $take) {\n    ...PokemonSummary\n  }\n}\n\nfragment PokemonDetail on ChampPokemonDetail {\n  id\n  slug\n  name\n  nationalDexNo\n  types\n  isMega\n  spriteKey\n  megaOfSlug\n  baseStats {\n    hp\n    attack\n    defense\n    specialAttack\n    specialDefense\n    speed\n    total\n  }\n}\n\nquery ChampTeam($slugs: [String!]!) {\n  champTeam(slugs: $slugs) {\n    ...PokemonDetail\n    learnsetIsApproximate\n    abilities {\n      slot\n      isHidden\n      ability {\n        slug\n        name\n        effectText\n        isMega\n      }\n    }\n    megaAbility {\n      slug\n      name\n      effectText\n    }\n    megaForms {\n      ...PokemonSummary\n    }\n    moves {\n      id\n      slug\n      name\n      type\n      damageClass\n      power\n      pp\n      accuracy\n      priority\n      flags\n      effectChance\n      isOverridden\n      overrideNote\n    }\n  }\n}\n\nquery TypeChart {\n  typeChart {\n    attacking\n    defending\n    factor\n  }\n}": types.CurrentRegulationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CurrentRegulation {\n  currentRegulation {\n    id\n    code\n    name\n    startsOn\n    endsOn\n    isCurrent\n    legalCount\n    notes\n  }\n}\n\nquery RegulationList {\n  regulations {\n    id\n    code\n    name\n    startsOn\n    endsOn\n    isCurrent\n    legalCount\n  }\n}\n\nfragment PokemonSummary on ChampPokemonSummary {\n  id\n  slug\n  name\n  nationalDexNo\n  types\n  isMega\n  spriteKey\n  megaOfSlug\n  baseStats {\n    hp\n    attack\n    defense\n    specialAttack\n    specialDefense\n    speed\n    total\n  }\n}\n\nquery ChampSearch($query: String!, $take: Int) {\n  champSearch(query: $query, take: $take) {\n    ...PokemonSummary\n  }\n}\n\nfragment PokemonDetail on ChampPokemonDetail {\n  id\n  slug\n  name\n  nationalDexNo\n  types\n  isMega\n  spriteKey\n  megaOfSlug\n  baseStats {\n    hp\n    attack\n    defense\n    specialAttack\n    specialDefense\n    speed\n    total\n  }\n}\n\nquery ChampTeam($slugs: [String!]!) {\n  champTeam(slugs: $slugs) {\n    ...PokemonDetail\n    learnsetIsApproximate\n    abilities {\n      slot\n      isHidden\n      ability {\n        slug\n        name\n        effectText\n        isMega\n      }\n    }\n    megaAbility {\n      slug\n      name\n      effectText\n    }\n    megaForms {\n      ...PokemonSummary\n    }\n    moves {\n      id\n      slug\n      name\n      type\n      damageClass\n      power\n      pp\n      accuracy\n      priority\n      flags\n      effectChance\n      isOverridden\n      overrideNote\n    }\n  }\n}\n\nquery TypeChart {\n  typeChart {\n    attacking\n    defending\n    factor\n  }\n}"): typeof import('./graphql').CurrentRegulationDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
