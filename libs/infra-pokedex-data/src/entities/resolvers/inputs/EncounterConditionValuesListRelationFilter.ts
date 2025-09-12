import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesWhereInput } from "../inputs/EncounterConditionValuesWhereInput";

@TypeGraphQL.InputType("EncounterConditionValuesListRelationFilter", {})
export class EncounterConditionValuesListRelationFilter {
  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereInput, {
    nullable: true
  })
  every?: EncounterConditionValuesWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereInput, {
    nullable: true
  })
  some?: EncounterConditionValuesWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereInput, {
    nullable: true
  })
  none?: EncounterConditionValuesWhereInput | undefined;
}
