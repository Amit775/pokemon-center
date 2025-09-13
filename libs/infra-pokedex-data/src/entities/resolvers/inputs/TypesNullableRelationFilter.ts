import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesNullableRelationFilter", {})
export class TypesNullableRelationFilter {
  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  is?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  isNot?: TypesWhereInput | undefined;
}
