import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsWhereInput } from "../inputs/PokemonMoveMethodsWhereInput";

@TypeGraphQL.InputType("PokemonMoveMethodsRelationFilter", {})
export class PokemonMoveMethodsRelationFilter {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereInput, {
    nullable: true
  })
  is?: PokemonMoveMethodsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereInput, {
    nullable: true
  })
  isNot?: PokemonMoveMethodsWhereInput | undefined;
}
