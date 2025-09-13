import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicsListRelationFilter } from "../inputs/CharacteristicsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MoveMetaStatChangesListRelationFilter } from "../inputs/MoveMetaStatChangesListRelationFilter";
import { NaturesListRelationFilter } from "../inputs/NaturesListRelationFilter";
import { PokemonStatsListRelationFilter } from "../inputs/PokemonStatsListRelationFilter";
import { StatsWhereInput } from "../inputs/StatsWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("StatsWhereUniqueInput", {})
export class StatsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [StatsWhereInput], {
    nullable: true
  })
  AND?: StatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatsWhereInput], {
    nullable: true
  })
  OR?: StatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatsWhereInput], {
    nullable: true
  })
  NOT?: StatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  damage_class_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_battle_only?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  game_index?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsListRelationFilter, {
    nullable: true
  })
  pokemonStats?: PokemonStatsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesListRelationFilter, {
    nullable: true
  })
  moveMetaStatChanges?: MoveMetaStatChangesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CharacteristicsListRelationFilter, {
    nullable: true
  })
  characteristics?: CharacteristicsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NaturesListRelationFilter, {
    nullable: true
  })
  natures?: NaturesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NaturesListRelationFilter, {
    nullable: true
  })
  naturesIncreased?: NaturesListRelationFilter | undefined;
}
