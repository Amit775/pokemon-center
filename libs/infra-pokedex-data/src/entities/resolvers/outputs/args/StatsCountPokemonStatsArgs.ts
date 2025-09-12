import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatsWhereInput } from "../../inputs/PokemonStatsWhereInput";

@TypeGraphQL.ArgsType()
export class StatsCountPokemonStatsArgs {
  @TypeGraphQL.Field(_type => PokemonStatsWhereInput, {
    nullable: true
  })
  where?: PokemonStatsWhereInput | undefined;
}
