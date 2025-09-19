import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatCreateInput } from "../../../inputs/PokemonHabitatCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonHabitatArgs {
  @TypeGraphQL.Field(_type => PokemonHabitatCreateInput, {
    nullable: false
  })
  data!: PokemonHabitatCreateInput;
}
