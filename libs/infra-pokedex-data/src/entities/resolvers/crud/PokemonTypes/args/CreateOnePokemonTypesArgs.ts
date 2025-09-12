import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypesCreateInput } from "../../../inputs/PokemonTypesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonTypesArgs {
  @TypeGraphQL.Field(_type => PokemonTypesCreateInput, {
    nullable: false
  })
  data!: PokemonTypesCreateInput;
}
