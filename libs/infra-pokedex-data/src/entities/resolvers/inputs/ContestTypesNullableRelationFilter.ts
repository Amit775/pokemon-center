import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypeWhereInput } from "../inputs/ContestTypeWhereInput";

@TypeGraphQL.InputType("ContestTypesNullableRelationFilter", {})
export class ContestTypesNullableRelationFilter {
  @TypeGraphQL.Field(_type => ContestTypeWhereInput, {
    nullable: true
  })
  is?: ContestTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeWhereInput, {
    nullable: true
  })
  isNot?: ContestTypeWhereInput | undefined;
}
