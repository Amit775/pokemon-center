import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AbilityScalarWhereWithAggregatesInput", {})
export class AbilityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AbilityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AbilityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AbilityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AbilityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  generation_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  is_main_series?: IntWithAggregatesFilter | undefined;
}
