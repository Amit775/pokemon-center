import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatCreateInput } from "../../../inputs/PokemonStatCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonStatArgs {
  @TypeGraphQL.Field(_type => PokemonStatCreateInput, {
    nullable: false
  })
  data!: PokemonStatCreateInput;
}
