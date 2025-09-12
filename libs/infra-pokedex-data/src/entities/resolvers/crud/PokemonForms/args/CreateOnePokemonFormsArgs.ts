import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormsCreateInput } from "../../../inputs/PokemonFormsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonFormsArgs {
  @TypeGraphQL.Field(_type => PokemonFormsCreateInput, {
    nullable: false
  })
  data!: PokemonFormsCreateInput;
}
