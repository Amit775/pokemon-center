import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorsCreateInput } from "../../../inputs/PokemonColorsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonColorsArgs {
  @TypeGraphQL.Field(_type => PokemonColorsCreateInput, {
    nullable: false
  })
  data!: PokemonColorsCreateInput;
}
