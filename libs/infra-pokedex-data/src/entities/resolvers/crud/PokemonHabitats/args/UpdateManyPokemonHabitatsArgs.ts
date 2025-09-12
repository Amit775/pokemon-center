import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatsUpdateManyMutationInput } from "../../../inputs/PokemonHabitatsUpdateManyMutationInput";
import { PokemonHabitatsWhereInput } from "../../../inputs/PokemonHabitatsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonHabitatsArgs {
  @TypeGraphQL.Field(_type => PokemonHabitatsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonHabitatsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonHabitatsWhereInput, {
    nullable: true
  })
  where?: PokemonHabitatsWhereInput | undefined;
}
