import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorWhereInput } from "../inputs/PokemonColorWhereInput";

@TypeGraphQL.InputType("PokemonColorRelationFilter", {})
export class PokemonColorRelationFilter {
  @TypeGraphQL.Field(_type => PokemonColorWhereInput, {
    nullable: true
  })
  is?: PokemonColorWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorWhereInput, {
    nullable: true
  })
  isNot?: PokemonColorWhereInput | undefined;
}
