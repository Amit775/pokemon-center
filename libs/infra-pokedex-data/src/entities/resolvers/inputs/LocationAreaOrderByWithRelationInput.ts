import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterOrderByRelationAggregateInput } from "../inputs/EncounterOrderByRelationAggregateInput";
import { LocationAreaEncounterRateOrderByRelationAggregateInput } from "../inputs/LocationAreaEncounterRateOrderByRelationAggregateInput";
import { LocationOrderByWithRelationInput } from "../inputs/LocationOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocationAreaOrderByWithRelationInput", {})
export class LocationAreaOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  game_index?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  identifier?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => LocationOrderByWithRelationInput, {
    nullable: true
  })
  location?: LocationOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncounterOrderByRelationAggregateInput, {
    nullable: true
  })
  encounters?: EncounterOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateOrderByRelationAggregateInput, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRateOrderByRelationAggregateInput | undefined;
}
