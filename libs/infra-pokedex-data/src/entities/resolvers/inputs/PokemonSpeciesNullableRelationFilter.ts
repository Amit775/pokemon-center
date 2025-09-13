import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.InputType("PokemonSpeciesNullableRelationFilter", {})
export class PokemonSpeciesNullableRelationFilter {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  is?: PokemonSpeciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  isNot?: PokemonSpeciesWhereInput | undefined;
}
