import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatsCreateInput } from "../../../inputs/PokemonHabitatsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonHabitatsArgs {
  @TypeGraphQL.Field(_type => PokemonHabitatsCreateInput, {
    nullable: false
  })
  data!: PokemonHabitatsCreateInput;
}
