import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatsCreateInput } from "../../../inputs/PokemonHabitatsCreateInput";
import { PokemonHabitatsUpdateInput } from "../../../inputs/PokemonHabitatsUpdateInput";
import { PokemonHabitatsWhereUniqueInput } from "../../../inputs/PokemonHabitatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonHabitatsArgs {
  @TypeGraphQL.Field(_type => PokemonHabitatsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonHabitatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonHabitatsCreateInput, {
    nullable: false
  })
  create!: PokemonHabitatsCreateInput;

  @TypeGraphQL.Field(_type => PokemonHabitatsUpdateInput, {
    nullable: false
  })
  update!: PokemonHabitatsUpdateInput;
}
