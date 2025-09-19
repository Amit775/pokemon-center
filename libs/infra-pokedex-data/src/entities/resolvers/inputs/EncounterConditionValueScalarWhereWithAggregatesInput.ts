import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EncounterConditionValueScalarWhereWithAggregatesInput", {})
export class EncounterConditionValueScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EncounterConditionValueScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EncounterConditionValueScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EncounterConditionValueScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EncounterConditionValueScalarWhereWithAggregatesInput[] | undefined;

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
