import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodWhereInput } from "../inputs/PokemonMoveMethodWhereInput";

@TypeGraphQL.InputType("PokemonMoveMethodRelationFilter", {})
export class PokemonMoveMethodRelationFilter {
  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereInput, {
    nullable: true
  })
  is?: PokemonMoveMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereInput, {
    nullable: true
  })
  isNot?: PokemonMoveMethodWhereInput | undefined;
}
