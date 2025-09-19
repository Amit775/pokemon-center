import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapeCreateInput } from "../../../inputs/PokemonShapeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonShapeArgs {
  @TypeGraphQL.Field(_type => PokemonShapeCreateInput, {
    nullable: false
  })
  data!: PokemonShapeCreateInput;
}
