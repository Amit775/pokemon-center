import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { NatureBattleStylePreferenceListRelationFilter } from "../inputs/NatureBattleStylePreferenceListRelationFilter";
import { StatRelationFilter } from "../inputs/StatRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TypeListRelationFilter } from "../inputs/TypeListRelationFilter";

@TypeGraphQL.InputType("NatureWhereInput", {})
export class NatureWhereInput {
  @TypeGraphQL.Field(_type => [NatureWhereInput], {
    nullable: true
  })
  AND?: NatureWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureWhereInput], {
    nullable: true
  })
  OR?: NatureWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureWhereInput], {
    nullable: true
  })
  NOT?: NatureWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  decreased_stat_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  increased_stat_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  hates_flavor_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  likes_flavor_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  game_index?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StatRelationFilter, {
    nullable: true
  })
  decreasedStat?: StatRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StatRelationFilter, {
    nullable: true
  })
  increasedStat?: StatRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceListRelationFilter, {
    nullable: true
  })
  battleStylePreferences?: NatureBattleStylePreferenceListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeListRelationFilter, {
    nullable: true
  })
  decreasedStatTypes?: TypeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeListRelationFilter, {
    nullable: true
  })
  increasedStatTypes?: TypeListRelationFilter | undefined;
}
