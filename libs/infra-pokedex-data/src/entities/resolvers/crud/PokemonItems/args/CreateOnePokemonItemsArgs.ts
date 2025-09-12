import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemsCreateInput } from "../../../inputs/PokemonItemsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonItemsArgs {
  @TypeGraphQL.Field(_type => PokemonItemsCreateInput, {
    nullable: false
  })
  data!: PokemonItemsCreateInput;
}
