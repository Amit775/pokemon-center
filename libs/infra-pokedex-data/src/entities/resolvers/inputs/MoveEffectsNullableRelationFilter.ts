import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectWhereInput } from "../inputs/MoveEffectWhereInput";

@TypeGraphQL.InputType("MoveEffectsNullableRelationFilter", {})
export class MoveEffectsNullableRelationFilter {
  @TypeGraphQL.Field(_type => MoveEffectWhereInput, {
    nullable: true
  })
  is?: MoveEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectWhereInput, {
    nullable: true
  })
  isNot?: MoveEffectWhereInput | undefined;
}
