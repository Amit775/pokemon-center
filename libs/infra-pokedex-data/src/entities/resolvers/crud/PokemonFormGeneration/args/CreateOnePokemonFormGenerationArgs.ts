import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationCreateInput } from "../../../inputs/PokemonFormGenerationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonFormGenerationArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationCreateInput, {
    nullable: false
  })
  data!: PokemonFormGenerationCreateInput;
}
