import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("StatsScalarWhereWithAggregatesInput", {})
export class StatsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  damage_class_id?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  is_battle_only?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  game_index?: IntNullableWithAggregatesFilter | undefined;
}
