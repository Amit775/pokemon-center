import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupsCreateInput } from "../../../inputs/PokemonEggGroupsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonEggGroupsArgs {
  @TypeGraphQL.Field(_type => PokemonEggGroupsCreateInput, {
    nullable: false
  })
  data!: PokemonEggGroupsCreateInput;
}
