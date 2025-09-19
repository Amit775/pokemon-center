import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionOrderByWithRelationInput } from "../inputs/EncounterConditionOrderByWithRelationInput";
import { EncounterConditionValueMapOrderByRelationAggregateInput } from "../inputs/EncounterConditionValueMapOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterConditionValueOrderByWithRelationInput", {})
export class EncounterConditionValueOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => EncounterConditionOrderByWithRelationInput, {
    nullable: true
  })
  condition?: EncounterConditionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapOrderByRelationAggregateInput, {
    nullable: true
  })
  conditionValueMap?: EncounterConditionValueMapOrderByRelationAggregateInput | undefined;
}
