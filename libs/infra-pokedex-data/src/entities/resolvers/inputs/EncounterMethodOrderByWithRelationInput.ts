import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotOrderByRelationAggregateInput } from "../inputs/EncounterSlotOrderByRelationAggregateInput";
import { LocationAreaEncounterRateOrderByRelationAggregateInput } from "../inputs/LocationAreaEncounterRateOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterMethodOrderByWithRelationInput", {})
export class EncounterMethodOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotOrderByRelationAggregateInput, {
    nullable: true
  })
  slots?: EncounterSlotOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateOrderByRelationAggregateInput, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRateOrderByRelationAggregateInput | undefined;
}
