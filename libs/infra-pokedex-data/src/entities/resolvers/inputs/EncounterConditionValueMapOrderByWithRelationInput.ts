import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueOrderByWithRelationInput } from "../inputs/EncounterConditionValueOrderByWithRelationInput";
import { EncounterOrderByWithRelationInput } from "../inputs/EncounterOrderByWithRelationInput";
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

  @TypeGraphQL.Field(_type => EncounterOrderByWithRelationInput, {
    nullable: true
  })
  encounter?: EncounterOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueOrderByWithRelationInput, {
    nullable: true
  })
  conditionValue?: EncounterConditionValueOrderByWithRelationInput | undefined;
}
