import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatsWhereInput } from "../inputs/PokemonHabitatsWhereInput";

@TypeGraphQL.InputType("PokemonHabitatsNullableRelationFilter", {})
export class PokemonHabitatsNullableRelationFilter {
  @TypeGraphQL.Field(_type => PokemonHabitatsWhereInput, {
    nullable: true
  })
  is?: PokemonHabitatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsWhereInput, {
    nullable: true
  })
  isNot?: PokemonHabitatsWhereInput | undefined;
}
