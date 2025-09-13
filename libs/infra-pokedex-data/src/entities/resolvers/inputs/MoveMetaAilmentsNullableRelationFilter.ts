import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentsWhereInput } from "../inputs/MoveMetaAilmentsWhereInput";

@TypeGraphQL.InputType("MoveMetaAilmentsNullableRelationFilter", {})
export class MoveMetaAilmentsNullableRelationFilter {
  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereInput, {
    nullable: true
  })
  is?: MoveMetaAilmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereInput, {
    nullable: true
  })
  isNot?: MoveMetaAilmentsWhereInput | undefined;
}
