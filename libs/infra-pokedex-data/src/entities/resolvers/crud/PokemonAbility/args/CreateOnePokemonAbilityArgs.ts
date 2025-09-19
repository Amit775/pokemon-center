import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilityCreateInput } from "../../../inputs/PokemonAbilityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonAbilityArgs {
  @TypeGraphQL.Field(_type => PokemonAbilityCreateInput, {
    nullable: false
  })
  data!: PokemonAbilityCreateInput;
}
