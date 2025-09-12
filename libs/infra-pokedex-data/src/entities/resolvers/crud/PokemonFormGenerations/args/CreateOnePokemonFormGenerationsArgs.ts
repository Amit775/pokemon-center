import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationsCreateInput } from "../../../inputs/PokemonFormGenerationsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonFormGenerationsArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsCreateInput, {
    nullable: false
  })
  data!: PokemonFormGenerationsCreateInput;
}
