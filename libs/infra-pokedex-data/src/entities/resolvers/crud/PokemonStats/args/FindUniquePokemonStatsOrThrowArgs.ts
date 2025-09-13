import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatsWhereUniqueInput } from "../../../inputs/PokemonStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonStatsOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonStatsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatsWhereUniqueInput;
}
