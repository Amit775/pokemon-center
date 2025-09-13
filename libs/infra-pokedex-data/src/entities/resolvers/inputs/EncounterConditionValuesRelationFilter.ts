import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesWhereInput } from "../inputs/EncounterConditionValuesWhereInput";

@TypeGraphQL.InputType("EncounterConditionValuesRelationFilter", {})
export class EncounterConditionValuesRelationFilter {
  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereInput, {
    nullable: true
  })
  is?: EncounterConditionValuesWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereInput, {
    nullable: true
  })
  isNot?: EncounterConditionValuesWhereInput | undefined;
}
