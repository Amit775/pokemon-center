import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatsWhereInput } from "../../inputs/PokemonHabitatsWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonSpeciesHabitatArgs {
  @TypeGraphQL.Field(_type => PokemonHabitatsWhereInput, {
    nullable: true
  })
  where?: PokemonHabitatsWhereInput | undefined;
}
