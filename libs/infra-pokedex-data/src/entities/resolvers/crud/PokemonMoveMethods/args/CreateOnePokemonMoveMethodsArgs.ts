import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodsCreateInput } from "../../../inputs/PokemonMoveMethodsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsCreateInput, {
    nullable: false
  })
  data!: PokemonMoveMethodsCreateInput;
}
