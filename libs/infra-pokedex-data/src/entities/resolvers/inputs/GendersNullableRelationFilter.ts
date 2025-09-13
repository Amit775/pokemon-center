import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GendersWhereInput } from "../inputs/GendersWhereInput";

@TypeGraphQL.InputType("GendersNullableRelationFilter", {})
export class GendersNullableRelationFilter {
  @TypeGraphQL.Field(_type => GendersWhereInput, {
    nullable: true
  })
  is?: GendersWhereInput | undefined;

  @TypeGraphQL.Field(_type => GendersWhereInput, {
    nullable: true
  })
  isNot?: GendersWhereInput | undefined;
}
