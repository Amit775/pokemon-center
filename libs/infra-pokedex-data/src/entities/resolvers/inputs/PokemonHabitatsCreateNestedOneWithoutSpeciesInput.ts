import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatsCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonHabitatsCreateOrConnectWithoutSpeciesInput";
import { PokemonHabitatsCreateWithoutSpeciesInput } from "../inputs/PokemonHabitatsCreateWithoutSpeciesInput";
import { PokemonHabitatsWhereUniqueInput } from "../inputs/PokemonHabitatsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonHabitatsCreateNestedOneWithoutSpeciesInput", {})
export class PokemonHabitatsCreateNestedOneWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonHabitatsCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: PokemonHabitatsCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonHabitatsCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonHabitatsWhereUniqueInput | undefined;
}
