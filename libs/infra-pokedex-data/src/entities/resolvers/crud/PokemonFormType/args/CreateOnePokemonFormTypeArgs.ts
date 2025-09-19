import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypeCreateInput } from "../../../inputs/PokemonFormTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonFormTypeArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypeCreateInput, {
    nullable: false
  })
  data!: PokemonFormTypeCreateInput;
}
