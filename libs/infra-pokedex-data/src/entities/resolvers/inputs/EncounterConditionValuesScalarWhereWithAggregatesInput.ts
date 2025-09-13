import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EncounterConditionValuesScalarWhereWithAggregatesInput", {})
export class EncounterConditionValuesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EncounterConditionValuesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EncounterConditionValuesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EncounterConditionValuesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EncounterConditionValuesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  encounter_condition_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  is_default?: IntWithAggregatesFilter | undefined;
}
