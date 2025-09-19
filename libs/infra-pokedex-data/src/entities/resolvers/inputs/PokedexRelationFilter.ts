import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexWhereInput } from "../inputs/PokedexWhereInput";

@TypeGraphQL.InputType("PokedexRelationFilter", {})
export class PokedexRelationFilter {
  @TypeGraphQL.Field(_type => PokedexWhereInput, {
    nullable: true
  })
  is?: PokedexWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokedexWhereInput, {
    nullable: true
  })
  isNot?: PokedexWhereInput | undefined;
}
