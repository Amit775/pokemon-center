import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueWhereInput } from "../inputs/EncounterConditionValueWhereInput";

@TypeGraphQL.InputType("EncounterConditionValueRelationFilter", {})
export class EncounterConditionValueRelationFilter {
  @TypeGraphQL.Field(_type => EncounterConditionValueWhereInput, {
    nullable: true
  })
  is?: EncounterConditionValueWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueWhereInput, {
    nullable: true
  })
  isNot?: EncounterConditionValueWhereInput | undefined;
}
