import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EncounterConditionsScalarWhereWithAggregatesInput", {})
export class EncounterConditionsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EncounterConditionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EncounterConditionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EncounterConditionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EncounterConditionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
