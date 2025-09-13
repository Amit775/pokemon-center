import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatsWhereUniqueInput } from "../../../inputs/PokemonHabitatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonHabitatsOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonHabitatsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonHabitatsWhereUniqueInput;
}
