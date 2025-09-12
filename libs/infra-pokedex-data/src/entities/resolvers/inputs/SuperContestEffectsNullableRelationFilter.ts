import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectsWhereInput } from "../inputs/SuperContestEffectsWhereInput";

@TypeGraphQL.InputType("SuperContestEffectsNullableRelationFilter", {})
export class SuperContestEffectsNullableRelationFilter {
  @TypeGraphQL.Field(_type => SuperContestEffectsWhereInput, {
    nullable: true
  })
  is?: SuperContestEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsWhereInput, {
    nullable: true
  })
  isNot?: SuperContestEffectsWhereInput | undefined;
}
