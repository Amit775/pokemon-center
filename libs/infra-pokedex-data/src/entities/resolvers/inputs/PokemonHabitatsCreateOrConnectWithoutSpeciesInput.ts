import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatsCreateWithoutSpeciesInput } from "../inputs/PokemonHabitatsCreateWithoutSpeciesInput";
import { PokemonHabitatsWhereUniqueInput } from "../inputs/PokemonHabitatsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonHabitatsCreateOrConnectWithoutSpeciesInput", {})
export class PokemonHabitatsCreateOrConnectWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonHabitatsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonHabitatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonHabitatsCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonHabitatsCreateWithoutSpeciesInput;
}
