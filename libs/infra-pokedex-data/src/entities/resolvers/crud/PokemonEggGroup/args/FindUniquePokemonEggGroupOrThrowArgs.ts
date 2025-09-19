import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupWhereUniqueInput } from "../../../inputs/PokemonEggGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonEggGroupOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonEggGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEggGroupWhereUniqueInput;
}
