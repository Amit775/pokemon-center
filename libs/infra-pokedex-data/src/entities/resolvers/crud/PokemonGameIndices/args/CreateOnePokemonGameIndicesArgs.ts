import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndicesCreateInput } from "../../../inputs/PokemonGameIndicesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonGameIndicesArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndicesCreateInput, {
    nullable: false
  })
  data!: PokemonGameIndicesCreateInput;
}
