import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesOrderByRelationAggregateInput } from "../inputs/EncounterConditionValuesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterConditionsOrderByWithRelationInput", {})
export class EncounterConditionsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesOrderByRelationAggregateInput, {
    nullable: true
  })
  values?: EncounterConditionValuesOrderByRelationAggregateInput | undefined;
}
