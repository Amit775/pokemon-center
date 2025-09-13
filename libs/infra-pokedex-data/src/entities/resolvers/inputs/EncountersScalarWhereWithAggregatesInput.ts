import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("EncountersScalarWhereWithAggregatesInput", {})
export class EncountersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EncountersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EncountersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EncountersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EncountersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  version_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  location_area_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  encounter_slot_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  pokemon_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  min_level?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  max_level?: IntWithAggregatesFilter | undefined;
}
