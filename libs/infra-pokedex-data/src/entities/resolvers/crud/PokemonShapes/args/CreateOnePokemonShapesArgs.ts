import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapesCreateInput } from "../../../inputs/PokemonShapesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonShapesArgs {
  @TypeGraphQL.Field(_type => PokemonShapesCreateInput, {
    nullable: false
  })
  data!: PokemonShapesCreateInput;
}
