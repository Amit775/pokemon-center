import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapeWhereInput } from "../inputs/PokemonShapeWhereInput";

@TypeGraphQL.InputType("PokemonShapeRelationFilter", {})
export class PokemonShapeRelationFilter {
  @TypeGraphQL.Field(_type => PokemonShapeWhereInput, {
    nullable: true
  })
  is?: PokemonShapeWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapeWhereInput, {
    nullable: true
  })
  isNot?: PokemonShapeWhereInput | undefined;
}
