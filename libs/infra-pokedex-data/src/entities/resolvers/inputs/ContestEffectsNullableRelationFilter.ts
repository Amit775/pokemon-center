import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectsWhereInput } from "../inputs/ContestEffectsWhereInput";

@TypeGraphQL.InputType("ContestEffectsNullableRelationFilter", {})
export class ContestEffectsNullableRelationFilter {
  @TypeGraphQL.Field(_type => ContestEffectsWhereInput, {
    nullable: true
  })
  is?: ContestEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsWhereInput, {
    nullable: true
  })
  isNot?: ContestEffectsWhereInput | undefined;
}
