import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("LocationAreaEncounterRateScalarWhereWithAggregatesInput", {})
export class LocationAreaEncounterRateScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LocationAreaEncounterRateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LocationAreaEncounterRateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LocationAreaEncounterRateScalarWhereWithAggregatesInput[] | undefined;

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
