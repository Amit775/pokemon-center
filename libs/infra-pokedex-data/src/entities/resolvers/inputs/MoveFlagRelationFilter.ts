import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagWhereInput } from "../inputs/MoveFlagWhereInput";

@TypeGraphQL.InputType("MoveFlagRelationFilter", {})
export class MoveFlagRelationFilter {
  @TypeGraphQL.Field(_type => MoveFlagWhereInput, {
    nullable: true
  })
  is?: MoveFlagWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagWhereInput, {
    nullable: true
  })
  isNot?: MoveFlagWhereInput | undefined;
}
