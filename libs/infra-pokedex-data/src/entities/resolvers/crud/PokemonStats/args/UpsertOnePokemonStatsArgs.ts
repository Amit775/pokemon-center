import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatsCreateInput } from "../../../inputs/PokemonStatsCreateInput";
import { PokemonStatsUpdateInput } from "../../../inputs/PokemonStatsUpdateInput";
import { PokemonStatsWhereUniqueInput } from "../../../inputs/PokemonStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonStatsArgs {
  @TypeGraphQL.Field(_type => PokemonStatsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonStatsCreateInput, {
    nullable: false
  })
  create!: PokemonStatsCreateInput;

  @TypeGraphQL.Field(_type => PokemonStatsUpdateInput, {
    nullable: false
  })
  update!: PokemonStatsUpdateInput;
}
