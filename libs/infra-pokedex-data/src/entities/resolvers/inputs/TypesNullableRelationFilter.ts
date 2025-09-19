import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypesNullableRelationFilter", {})
export class TypesNullableRelationFilter {
  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  is?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  isNot?: TypeWhereInput | undefined;
}
