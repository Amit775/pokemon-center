import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupCreateInput } from "../../../inputs/PokemonEggGroupCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonEggGroupArgs {
  @TypeGraphQL.Field(_type => PokemonEggGroupCreateInput, {
    nullable: false
  })
  data!: PokemonEggGroupCreateInput;
}
