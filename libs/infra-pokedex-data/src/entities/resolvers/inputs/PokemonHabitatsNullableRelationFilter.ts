import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatWhereInput } from "../inputs/PokemonHabitatWhereInput";

@TypeGraphQL.InputType("PokemonHabitatsNullableRelationFilter", {})
export class PokemonHabitatsNullableRelationFilter {
  @TypeGraphQL.Field(_type => PokemonHabitatWhereInput, {
    nullable: true
  })
  is?: PokemonHabitatWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatWhereInput, {
    nullable: true
  })
  isNot?: PokemonHabitatWhereInput | undefined;
}
