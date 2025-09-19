import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndexCreateInput } from "../../../inputs/PokemonGameIndexCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonGameIndexArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndexCreateInput, {
    nullable: false
  })
  data!: PokemonGameIndexCreateInput;
}
