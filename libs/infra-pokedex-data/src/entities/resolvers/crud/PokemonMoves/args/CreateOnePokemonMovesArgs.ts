import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMovesCreateInput } from "../../../inputs/PokemonMovesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonMovesArgs {
  @TypeGraphQL.Field(_type => PokemonMovesCreateInput, {
    nullable: false
  })
  data!: PokemonMovesCreateInput;
}
