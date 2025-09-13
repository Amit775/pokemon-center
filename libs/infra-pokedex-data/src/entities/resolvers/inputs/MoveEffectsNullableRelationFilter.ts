import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectsWhereInput } from "../inputs/MoveEffectsWhereInput";

@TypeGraphQL.InputType("MoveEffectsNullableRelationFilter", {})
export class MoveEffectsNullableRelationFilter {
  @TypeGraphQL.Field(_type => MoveEffectsWhereInput, {
    nullable: true
  })
  is?: MoveEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsWhereInput, {
    nullable: true
  })
  isNot?: MoveEffectsWhereInput | undefined;
}
