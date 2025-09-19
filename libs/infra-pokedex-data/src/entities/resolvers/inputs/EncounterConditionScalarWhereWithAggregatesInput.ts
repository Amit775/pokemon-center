import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EncounterConditionScalarWhereWithAggregatesInput", {})
export class EncounterConditionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EncounterConditionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EncounterConditionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EncounterConditionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EncounterConditionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
