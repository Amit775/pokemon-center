import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatsUpdateInput } from "../../../inputs/PokemonHabitatsUpdateInput";
import { PokemonHabitatsWhereUniqueInput } from "../../../inputs/PokemonHabitatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonHabitatsArgs {
  @TypeGraphQL.Field(_type => PokemonHabitatsUpdateInput, {
    nullable: false
  })
  data!: PokemonHabitatsUpdateInput;

  @TypeGraphQL.Field(_type => PokemonHabitatsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonHabitatsWhereUniqueInput;
}
