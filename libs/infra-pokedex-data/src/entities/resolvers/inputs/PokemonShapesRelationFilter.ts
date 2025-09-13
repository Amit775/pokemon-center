import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapesWhereInput } from "../inputs/PokemonShapesWhereInput";

@TypeGraphQL.InputType("PokemonShapesRelationFilter", {})
export class PokemonShapesRelationFilter {
  @TypeGraphQL.Field(_type => PokemonShapesWhereInput, {
    nullable: true
  })
  is?: PokemonShapesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesWhereInput, {
    nullable: true
  })
  isNot?: PokemonShapesWhereInput | undefined;
}
