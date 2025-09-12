// Example NestJS GraphQL module using the generated read-only resolvers
// This is just an example - you would integrate this into your actual NestJS app

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

// Import only the read-only resolvers
import {
  // Pokemon resolvers
  FindManyPokemonResolver,
  FindUniquePokemonResolver,
  FindFirstPokemonResolver,
  AggregatePokemonResolver,
  GroupByPokemonResolver,
  
  // PokemonSpecies resolvers
  FindManyPokemonSpeciesResolver,
  FindUniquePokemonSpeciesResolver,
  FindFirstPokemonSpeciesResolver,
  AggregatePokemonSpeciesResolver,
  GroupByPokemonSpeciesResolver,
  
  // Moves resolvers
  FindManyMovesResolver,
  FindUniqueMovesResolver,
  FindFirstMovesResolver,
  AggregateMovesResolver,
  GroupByMovesResolver,
  
  // Types resolvers
  FindManyTypesResolver,
  FindUniqueTypesResolver,
  FindFirstTypesResolver,
  AggregateTypesResolver,
  GroupByTypesResolver,
  
  // Abilities resolvers
  FindManyAbilitiesResolver,
  FindUniqueAbilitiesResolver,
  FindFirstAbilitiesResolver,
  AggregateAbilitiesResolver,
  GroupByAbilitiesResolver,
  
  // Items resolvers
  FindManyItemsResolver,
  FindUniqueItemsResolver,
  FindFirstItemsResolver,
  AggregateItemsResolver,
  GroupByItemsResolver,
  
  // Stats resolvers
  FindManyStatsResolver,
  FindUniqueStatsResolver,
  FindFirstStatsResolver,
  AggregateStatsResolver,
  GroupByStatsResolver,
  
  // Generations resolvers
  FindManyGenerationsResolver,
  FindUniqueGenerationsResolver,
  FindFirstGenerationsResolver,
  AggregateGenerationsResolver,
  GroupByGenerationsResolver,
  
  // Regions resolvers
  FindManyRegionsResolver,
  FindUniqueRegionsResolver,
  FindFirstRegionsResolver,
  AggregateRegionsResolver,
  GroupByRegionsResolver,
} from './read-only-resolvers';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // This will generate the schema automatically
      buildSchemaOptions: {
        resolvers: [
          // Pokemon resolvers
          FindManyPokemonResolver,
          FindUniquePokemonResolver,
          FindFirstPokemonResolver,
          AggregatePokemonResolver,
          GroupByPokemonResolver,
          
          // PokemonSpecies resolvers
          FindManyPokemonSpeciesResolver,
          FindUniquePokemonSpeciesResolver,
          FindFirstPokemonSpeciesResolver,
          AggregatePokemonSpeciesResolver,
          GroupByPokemonSpeciesResolver,
          
          // Moves resolvers
          FindManyMovesResolver,
          FindUniqueMovesResolver,
          FindFirstMovesResolver,
          AggregateMovesResolver,
          GroupByMovesResolver,
          
          // Types resolvers
          FindManyTypesResolver,
          FindUniqueTypesResolver,
          FindFirstTypesResolver,
          AggregateTypesResolver,
          GroupByTypesResolver,
          
          // Abilities resolvers
          FindManyAbilitiesResolver,
          FindUniqueAbilitiesResolver,
          FindFirstAbilitiesResolver,
          AggregateAbilitiesResolver,
          GroupByAbilitiesResolver,
          
          // Items resolvers
          FindManyItemsResolver,
          FindUniqueItemsResolver,
          FindFirstItemsResolver,
          AggregateItemsResolver,
          GroupByItemsResolver,
          
          // Stats resolvers
          FindManyStatsResolver,
          FindUniqueStatsResolver,
          FindFirstStatsResolver,
          AggregateStatsResolver,
          GroupByStatsResolver,
          
          // Generations resolvers
          FindManyGenerationsResolver,
          FindUniqueGenerationsResolver,
          FindFirstGenerationsResolver,
          AggregateGenerationsResolver,
          GroupByGenerationsResolver,
          
          // Regions resolvers
          FindManyRegionsResolver,
          FindUniqueRegionsResolver,
          FindFirstRegionsResolver,
          AggregateRegionsResolver,
          GroupByRegionsResolver,
        ],
      },
    }),
  ],
})
export class PokedexGraphQLModule {}

// Example usage in your main app module:
/*
@Module({
  imports: [
    PokedexGraphQLModule,
    // ... other modules
  ],
})
export class AppModule {}
*/
