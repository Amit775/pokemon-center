import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormCreateInput } from "../../../inputs/PokemonFormCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonFormArgs {
  @TypeGraphQL.Field(_type => PokemonFormCreateInput, {
    nullable: false
  })
  data!: PokemonFormCreateInput;
}
