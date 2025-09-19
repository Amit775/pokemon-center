import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveCreateInput } from "../../../inputs/PokemonMoveCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonMoveArgs {
  @TypeGraphQL.Field(_type => PokemonMoveCreateInput, {
    nullable: false
  })
  data!: PokemonMoveCreateInput;
}
