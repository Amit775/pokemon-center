import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilitiesCreateInput } from "../../../inputs/PokemonAbilitiesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonAbilitiesArgs {
  @TypeGraphQL.Field(_type => PokemonAbilitiesCreateInput, {
    nullable: false
  })
  data!: PokemonAbilitiesCreateInput;
}
