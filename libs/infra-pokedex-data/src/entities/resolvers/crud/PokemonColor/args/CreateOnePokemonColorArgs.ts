import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorCreateInput } from "../../../inputs/PokemonColorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonColorArgs {
  @TypeGraphQL.Field(_type => PokemonColorCreateInput, {
    nullable: false
  })
  data!: PokemonColorCreateInput;
}
