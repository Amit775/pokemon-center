import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapOrderByRelationAggregateInput } from "../inputs/EncounterConditionValueMapOrderByRelationAggregateInput";
import { EncounterConditionsOrderByWithRelationInput } from "../inputs/EncounterConditionsOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterConditionValuesOrderByWithRelationInput", {})
export class EncounterConditionValuesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  encounter_condition_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_default?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionsOrderByWithRelationInput, {
    nullable: true
  })
  condition?: EncounterConditionsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapOrderByRelationAggregateInput, {
    nullable: true
  })
  conditionValueMap?: EncounterConditionValueMapOrderByRelationAggregateInput | undefined;
}
