import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MoveBattleStylesRelationFilter } from "../inputs/MoveBattleStylesRelationFilter";
import { NaturesRelationFilter } from "../inputs/NaturesRelationFilter";

@TypeGraphQL.InputType("NatureBattleStylePreferencesWhereInput", {})
export class NatureBattleStylePreferencesWhereInput {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesWhereInput], {
    nullable: true
  })
  AND?: NatureBattleStylePreferencesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesWhereInput], {
    nullable: true
  })
  OR?: NatureBattleStylePreferencesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesWhereInput], {
    nullable: true
  })
  NOT?: NatureBattleStylePreferencesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  nature_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  move_battle_style_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  low_hp_preference?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  high_hp_preference?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => NaturesRelationFilter, {
    nullable: true
  })
  nature?: NaturesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStylesRelationFilter, {
    nullable: true
  })
  battleStyle?: MoveBattleStylesRelationFilter | undefined;
}
