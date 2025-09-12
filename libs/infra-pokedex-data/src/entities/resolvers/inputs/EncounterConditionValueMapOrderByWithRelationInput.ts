import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesOrderByWithRelationInput } from "../inputs/EncounterConditionValuesOrderByWithRelationInput";
import { EncountersOrderByWithRelationInput } from "../inputs/EncountersOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterConditionValueMapOrderByWithRelationInput", {})
export class EncounterConditionValueMapOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  encounter_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  encounter_condition_value_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EncountersOrderByWithRelationInput, {
    nullable: true
  })
  encounter?: EncountersOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesOrderByWithRelationInput, {
    nullable: true
  })
  conditionValue?: EncounterConditionValuesOrderByWithRelationInput | undefined;
}
