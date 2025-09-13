import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassesWhereInput } from "../inputs/MoveDamageClassesWhereInput";

@TypeGraphQL.InputType("MoveDamageClassesNullableRelationFilter", {})
export class MoveDamageClassesNullableRelationFilter {
  @TypeGraphQL.Field(_type => MoveDamageClassesWhereInput, {
    nullable: true
  })
  is?: MoveDamageClassesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesWhereInput, {
    nullable: true
  })
  isNot?: MoveDamageClassesWhereInput | undefined;
}
