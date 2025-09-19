import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceAvgAggregate } from "../outputs/NatureBattleStylePreferenceAvgAggregate";
import { NatureBattleStylePreferenceCountAggregate } from "../outputs/NatureBattleStylePreferenceCountAggregate";
import { NatureBattleStylePreferenceMaxAggregate } from "../outputs/NatureBattleStylePreferenceMaxAggregate";
import { NatureBattleStylePreferenceMinAggregate } from "../outputs/NatureBattleStylePreferenceMinAggregate";
import { NatureBattleStylePreferenceSumAggregate } from "../outputs/NatureBattleStylePreferenceSumAggregate";

@TypeGraphQL.ObjectType("NatureBattleStylePreferenceGroupBy", {})
export class NatureBattleStylePreferenceGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  nature_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  move_battle_style_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  low_hp_preference!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  high_hp_preference!: number;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceCountAggregate, {
    nullable: true
  })
  _count!: NatureBattleStylePreferenceCountAggregate | null;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceAvgAggregate, {
    nullable: true
  })
  _avg!: NatureBattleStylePreferenceAvgAggregate | null;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceSumAggregate, {
    nullable: true
  })
  _sum!: NatureBattleStylePreferenceSumAggregate | null;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceMinAggregate, {
    nullable: true
  })
  _min!: NatureBattleStylePreferenceMinAggregate | null;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceMaxAggregate, {
    nullable: true
  })
  _max!: NatureBattleStylePreferenceMaxAggregate | null;
}
