import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemCreateInput } from "../../../inputs/PokemonItemCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonItemArgs {
  @TypeGraphQL.Field(_type => PokemonItemCreateInput, {
    nullable: false
  })
  data!: PokemonItemCreateInput;
}
