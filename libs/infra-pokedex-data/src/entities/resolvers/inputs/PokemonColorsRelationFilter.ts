import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorsWhereInput } from "../inputs/PokemonColorsWhereInput";

@TypeGraphQL.InputType("PokemonColorsRelationFilter", {})
export class PokemonColorsRelationFilter {
  @TypeGraphQL.Field(_type => PokemonColorsWhereInput, {
    nullable: true
  })
  is?: PokemonColorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsWhereInput, {
    nullable: true
  })
  isNot?: PokemonColorsWhereInput | undefined;
}
