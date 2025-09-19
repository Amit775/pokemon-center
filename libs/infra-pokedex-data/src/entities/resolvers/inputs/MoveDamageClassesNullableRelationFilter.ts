import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassWhereInput } from "../inputs/MoveDamageClassWhereInput";

@TypeGraphQL.InputType("MoveDamageClassesNullableRelationFilter", {})
export class MoveDamageClassesNullableRelationFilter {
  @TypeGraphQL.Field(_type => MoveDamageClassWhereInput, {
    nullable: true
  })
  is?: MoveDamageClassWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassWhereInput, {
    nullable: true
  })
  isNot?: MoveDamageClassWhereInput | undefined;
}
