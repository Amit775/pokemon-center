import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenderWhereInput } from "../inputs/GenderWhereInput";

@TypeGraphQL.InputType("GendersNullableRelationFilter", {})
export class GendersNullableRelationFilter {
  @TypeGraphQL.Field(_type => GenderWhereInput, {
    nullable: true
  })
  is?: GenderWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenderWhereInput, {
    nullable: true
  })
  isNot?: GenderWhereInput | undefined;
}
