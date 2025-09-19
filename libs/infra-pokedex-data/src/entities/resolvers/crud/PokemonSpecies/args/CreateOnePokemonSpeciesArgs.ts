import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonSpeciesCreateInput } from "../../../inputs/PokemonSpeciesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonSpeciesArgs {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateInput, {
    nullable: false
  })
  data!: PokemonSpeciesCreateInput;
}
