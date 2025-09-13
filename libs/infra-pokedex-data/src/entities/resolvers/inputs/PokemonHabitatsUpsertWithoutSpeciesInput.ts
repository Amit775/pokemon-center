import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatsCreateWithoutSpeciesInput } from "../inputs/PokemonHabitatsCreateWithoutSpeciesInput";
import { PokemonHabitatsUpdateWithoutSpeciesInput } from "../inputs/PokemonHabitatsUpdateWithoutSpeciesInput";
import { PokemonHabitatsWhereInput } from "../inputs/PokemonHabitatsWhereInput";

@TypeGraphQL.InputType("PokemonHabitatsUpsertWithoutSpeciesInput", {})
export class PokemonHabitatsUpsertWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonHabitatsUpdateWithoutSpeciesInput, {
    nullable: false
  })
  update!: PokemonHabitatsUpdateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonHabitatsCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonHabitatsCreateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonHabitatsWhereInput, {
    nullable: true
  })
  where?: PokemonHabitatsWhereInput | undefined;
}
