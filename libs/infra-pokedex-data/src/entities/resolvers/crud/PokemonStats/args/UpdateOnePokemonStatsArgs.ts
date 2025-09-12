import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatsUpdateInput } from "../../../inputs/PokemonStatsUpdateInput";
import { PokemonStatsWhereUniqueInput } from "../../../inputs/PokemonStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonStatsArgs {
  @TypeGraphQL.Field(_type => PokemonStatsUpdateInput, {
    nullable: false
  })
  data!: PokemonStatsUpdateInput;

  @TypeGraphQL.Field(_type => PokemonStatsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatsWhereUniqueInput;
}
