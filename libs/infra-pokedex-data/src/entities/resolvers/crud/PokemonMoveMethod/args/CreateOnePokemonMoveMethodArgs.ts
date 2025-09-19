import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodCreateInput } from "../../../inputs/PokemonMoveMethodCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodCreateInput, {
    nullable: false
  })
  data!: PokemonMoveMethodCreateInput;
}
