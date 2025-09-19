import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ItemScalarWhereWithAggregatesInput", {})
export class ItemScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ItemScalarWhereWithAggregatesInput[] | undefined;

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
  category_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  cost?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  fling_power?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  fling_effect_id?: IntNullableWithAggregatesFilter | undefined;
}
