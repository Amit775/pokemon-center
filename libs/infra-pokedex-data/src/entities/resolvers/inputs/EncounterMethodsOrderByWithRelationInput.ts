import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsOrderByRelationAggregateInput } from "../inputs/EncounterSlotsOrderByRelationAggregateInput";
import { LocationAreaEncounterRatesOrderByRelationAggregateInput } from "../inputs/LocationAreaEncounterRatesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterMethodsOrderByWithRelationInput", {})
export class EncounterMethodsOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => EncounterSlotsOrderByRelationAggregateInput, {
    nullable: true
  })
  slots?: EncounterSlotsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesOrderByRelationAggregateInput, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRatesOrderByRelationAggregateInput | undefined;
}
