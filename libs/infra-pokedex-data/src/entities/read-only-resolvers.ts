// Read-only resolvers for core Pokemon models
// This file exports only the read operations (queries) for the core models

// Core Pokemon models - only read operations
export {
  FindManyPokemonResolver,
  FindUniquePokemonResolver,
  FindFirstPokemonResolver,
  AggregatePokemonResolver,
  GroupByPokemonResolver,
} from './resolvers/crud/Pokemon';

export {
  FindManyPokemonSpeciesResolver,
  FindUniquePokemonSpeciesResolver,
  FindFirstPokemonSpeciesResolver,
  AggregatePokemonSpeciesResolver,
  GroupByPokemonSpeciesResolver,
} from './resolvers/crud/PokemonSpecies';

export {
  FindManyMovesResolver,
  FindUniqueMovesResolver,
  FindFirstMovesResolver,
  AggregateMovesResolver,
  GroupByMovesResolver,
} from './resolvers/crud/Moves';

export {
  FindManyTypesResolver,
  FindUniqueTypesResolver,
  FindFirstTypesResolver,
  AggregateTypesResolver,
  GroupByTypesResolver,
} from './resolvers/crud/Types';

export {
  FindManyAbilitiesResolver,
  FindUniqueAbilitiesResolver,
  FindFirstAbilitiesResolver,
  AggregateAbilitiesResolver,
  GroupByAbilitiesResolver,
} from './resolvers/crud/Abilities';

export {
  FindManyItemsResolver,
  FindUniqueItemsResolver,
  FindFirstItemsResolver,
  AggregateItemsResolver,
  GroupByItemsResolver,
} from './resolvers/crud/Items';

export {
  FindManyStatsResolver,
  FindUniqueStatsResolver,
  FindFirstStatsResolver,
  AggregateStatsResolver,
  GroupByStatsResolver,
} from './resolvers/crud/Stats';

export {
  FindManyGenerationsResolver,
  FindUniqueGenerationsResolver,
  FindFirstGenerationsResolver,
  AggregateGenerationsResolver,
  GroupByGenerationsResolver,
} from './resolvers/crud/Generations';

export {
  FindManyRegionsResolver,
  FindUniqueRegionsResolver,
  FindFirstRegionsResolver,
  AggregateRegionsResolver,
  GroupByRegionsResolver,
} from './resolvers/crud/Regions';

// Export the models as well
export * from './models';
