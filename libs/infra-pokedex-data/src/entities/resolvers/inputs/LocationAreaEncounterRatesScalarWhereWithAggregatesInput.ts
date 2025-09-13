import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("LocationAreaEncounterRatesScalarWhereWithAggregatesInput", {})
export class LocationAreaEncounterRatesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LocationAreaEncounterRatesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LocationAreaEncounterRatesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LocationAreaEncounterRatesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  location_area_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  encounter_method_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  version_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  rate?: IntWithAggregatesFilter | undefined;
}
