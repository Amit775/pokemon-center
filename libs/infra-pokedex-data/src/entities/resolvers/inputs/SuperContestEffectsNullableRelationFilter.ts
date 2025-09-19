import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectWhereInput } from "../inputs/SuperContestEffectWhereInput";

@TypeGraphQL.InputType("SuperContestEffectsNullableRelationFilter", {})
export class SuperContestEffectsNullableRelationFilter {
  @TypeGraphQL.Field(_type => SuperContestEffectWhereInput, {
    nullable: true
  })
  is?: SuperContestEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectWhereInput, {
    nullable: true
  })
  isNot?: SuperContestEffectWhereInput | undefined;
}
