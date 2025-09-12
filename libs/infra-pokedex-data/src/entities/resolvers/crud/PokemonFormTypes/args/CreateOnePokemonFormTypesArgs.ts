import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypesCreateInput } from "../../../inputs/PokemonFormTypesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonFormTypesArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypesCreateInput, {
    nullable: false
  })
  data!: PokemonFormTypesCreateInput;
}
