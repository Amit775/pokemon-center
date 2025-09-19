import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("StatScalarWhereWithAggregatesInput", {})
export class StatScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StatScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StatScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StatScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StatScalarWhereWithAggregatesInput[] | undefined;

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
