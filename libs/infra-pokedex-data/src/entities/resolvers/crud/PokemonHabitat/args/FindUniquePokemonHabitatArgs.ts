import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatWhereUniqueInput } from "../../../inputs/PokemonHabitatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonHabitatArgs {
  @TypeGraphQL.Field(_type => PokemonHabitatWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonHabitatWhereUniqueInput;
}
