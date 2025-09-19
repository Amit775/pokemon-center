import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionWhereInput } from "../inputs/EncounterConditionWhereInput";

@TypeGraphQL.InputType("EncounterConditionRelationFilter", {})
export class EncounterConditionRelationFilter {
  @TypeGraphQL.Field(_type => EncounterConditionWhereInput, {
    nullable: true
  })
  is?: EncounterConditionWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionWhereInput, {
    nullable: true
  })
  isNot?: EncounterConditionWhereInput | undefined;
}
