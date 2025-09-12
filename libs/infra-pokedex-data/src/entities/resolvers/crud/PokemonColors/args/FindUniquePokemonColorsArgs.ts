import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorsWhereUniqueInput } from "../../../inputs/PokemonColorsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonColorsArgs {
  @TypeGraphQL.Field(_type => PokemonColorsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonColorsWhereUniqueInput;
}
