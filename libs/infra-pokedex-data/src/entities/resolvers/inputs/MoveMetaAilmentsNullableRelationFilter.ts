import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentWhereInput } from "../inputs/MoveMetaAilmentWhereInput";

@TypeGraphQL.InputType("MoveMetaAilmentsNullableRelationFilter", {})
export class MoveMetaAilmentsNullableRelationFilter {
  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereInput, {
    nullable: true
  })
  is?: MoveMetaAilmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereInput, {
    nullable: true
  })
  isNot?: MoveMetaAilmentWhereInput | undefined;
}
