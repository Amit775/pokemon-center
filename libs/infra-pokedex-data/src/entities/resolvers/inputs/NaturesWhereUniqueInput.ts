import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { NatureBattleStylePreferencesListRelationFilter } from "../inputs/NatureBattleStylePreferencesListRelationFilter";
import { NaturesWhereInput } from "../inputs/NaturesWhereInput";
import { StatsRelationFilter } from "../inputs/StatsRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TypesListRelationFilter } from "../inputs/TypesListRelationFilter";

@TypeGraphQL.InputType("NaturesWhereUniqueInput", {})
export class NaturesWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [NaturesWhereInput], {
    nullable: true
  })
  AND?: NaturesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesWhereInput], {
    nullable: true
  })
  OR?: NaturesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesWhereInput], {
    nullable: true
  })
  NOT?: NaturesWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StatsRelationFilter, {
    nullable: true
  })
  decreasedStat?: StatsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StatsRelationFilter, {
    nullable: true
  })
  increasedStat?: StatsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesListRelationFilter, {
    nullable: true
  })
  battleStylePreferences?: NatureBattleStylePreferencesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypesListRelationFilter, {
    nullable: true
  })
  decreasedStatTypes?: TypesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypesListRelationFilter, {
    nullable: true
  })
  increasedStatTypes?: TypesListRelationFilter | undefined;
}
