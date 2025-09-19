import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaWhereInput } from "../inputs/MoveMetaWhereInput";

@TypeGraphQL.InputType("MoveMetaRelationFilter", {})
export class MoveMetaRelationFilter {
  @TypeGraphQL.Field(_type => MoveMetaWhereInput, {
    nullable: true
  })
  is?: MoveMetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaWhereInput, {
    nullable: true
  })
  isNot?: MoveMetaWhereInput | undefined;
}
