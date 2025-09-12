import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatsCreateInput } from "../../../inputs/PokemonStatsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonStatsArgs {
  @TypeGraphQL.Field(_type => PokemonStatsCreateInput, {
    nullable: false
  })
  data!: PokemonStatsCreateInput;
}
