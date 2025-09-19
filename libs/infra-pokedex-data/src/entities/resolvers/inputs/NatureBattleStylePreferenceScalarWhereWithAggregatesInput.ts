import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("NatureBattleStylePreferenceScalarWhereWithAggregatesInput", {})
export class NatureBattleStylePreferenceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: NatureBattleStylePreferenceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: NatureBattleStylePreferenceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: NatureBattleStylePreferenceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  nature_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  move_battle_style_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  low_hp_preference?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  high_hp_preference?: IntWithAggregatesFilter | undefined;
}
