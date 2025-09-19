import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypeCreateInput } from "../../../inputs/PokemonTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonTypeArgs {
  @TypeGraphQL.Field(_type => PokemonTypeCreateInput, {
    nullable: false
  })
  data!: PokemonTypeCreateInput;
}
