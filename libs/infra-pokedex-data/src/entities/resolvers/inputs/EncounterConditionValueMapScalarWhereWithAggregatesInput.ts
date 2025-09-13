import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("EncounterConditionValueMapScalarWhereWithAggregatesInput", {})
export class EncounterConditionValueMapScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EncounterConditionValueMapScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EncounterConditionValueMapScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EncounterConditionValueMapScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EncounterConditionValueMapScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  encounter_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  encounter_condition_value_id?: IntWithAggregatesFilter | undefined;
}
