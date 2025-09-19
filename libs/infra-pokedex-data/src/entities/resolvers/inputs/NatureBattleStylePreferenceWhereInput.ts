import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MoveBattleStyleRelationFilter } from "../inputs/MoveBattleStyleRelationFilter";
import { NatureRelationFilter } from "../inputs/NatureRelationFilter";

@TypeGraphQL.InputType("NatureBattleStylePreferenceWhereInput", {})
export class NatureBattleStylePreferenceWhereInput {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceWhereInput], {
    nullable: true
  })
  AND?: NatureBattleStylePreferenceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceWhereInput], {
    nullable: true
  })
  OR?: NatureBattleStylePreferenceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceWhereInput], {
    nullable: true
  })
  NOT?: NatureBattleStylePreferenceWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => NatureRelationFilter, {
    nullable: true
  })
  nature?: NatureRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleRelationFilter, {
    nullable: true
  })
  battleStyle?: MoveBattleStyleRelationFilter | undefined;
}
