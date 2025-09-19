import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectWhereInput } from "../inputs/ContestEffectWhereInput";

@TypeGraphQL.InputType("ContestEffectsNullableRelationFilter", {})
export class ContestEffectsNullableRelationFilter {
  @TypeGraphQL.Field(_type => ContestEffectWhereInput, {
    nullable: true
  })
  is?: ContestEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectWhereInput, {
    nullable: true
  })
  isNot?: ContestEffectWhereInput | undefined;
}
