import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupsWhereUniqueInput } from "../../../inputs/PokemonEggGroupsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonEggGroupsOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonEggGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEggGroupsWhereUniqueInput;
}
