import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatsUpdateWithoutSpeciesInput } from "../inputs/PokemonHabitatsUpdateWithoutSpeciesInput";
import { PokemonHabitatsWhereInput } from "../inputs/PokemonHabitatsWhereInput";

@TypeGraphQL.InputType("PokemonHabitatsUpdateToOneWithWhereWithoutSpeciesInput", {})
export class PokemonHabitatsUpdateToOneWithWhereWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonHabitatsWhereInput, {
    nullable: true
  })
  where?: PokemonHabitatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsUpdateWithoutSpeciesInput, {
    nullable: false
  })
  data!: PokemonHabitatsUpdateWithoutSpeciesInput;
}
