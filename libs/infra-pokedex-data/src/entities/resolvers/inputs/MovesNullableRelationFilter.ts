import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MovesNullableRelationFilter", {})
export class MovesNullableRelationFilter {
  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  is?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  isNot?: MoveWhereInput | undefined;
}
