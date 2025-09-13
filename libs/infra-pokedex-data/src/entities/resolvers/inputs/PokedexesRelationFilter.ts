import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesWhereInput } from "../inputs/PokedexesWhereInput";

@TypeGraphQL.InputType("PokedexesRelationFilter", {})
export class PokedexesRelationFilter {
  @TypeGraphQL.Field(_type => PokedexesWhereInput, {
    nullable: true
  })
  is?: PokedexesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesWhereInput, {
    nullable: true
  })
  isNot?: PokedexesWhereInput | undefined;
}
