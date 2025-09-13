import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesAvgAggregate } from "../outputs/NatureBattleStylePreferencesAvgAggregate";
import { NatureBattleStylePreferencesCountAggregate } from "../outputs/NatureBattleStylePreferencesCountAggregate";
import { NatureBattleStylePreferencesMaxAggregate } from "../outputs/NatureBattleStylePreferencesMaxAggregate";
import { NatureBattleStylePreferencesMinAggregate } from "../outputs/NatureBattleStylePreferencesMinAggregate";
import { NatureBattleStylePreferencesSumAggregate } from "../outputs/NatureBattleStylePreferencesSumAggregate";

@TypeGraphQL.ObjectType("AggregateNatureBattleStylePreferences", {})
export class AggregateNatureBattleStylePreferences {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesCountAggregate, {
    nullable: true
  })
  _count!: NatureBattleStylePreferencesCountAggregate | null;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesAvgAggregate, {
    nullable: true
  })
  _avg!: NatureBattleStylePreferencesAvgAggregate | null;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesSumAggregate, {
    nullable: true
  })
  _sum!: NatureBattleStylePreferencesSumAggregate | null;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesMinAggregate, {
    nullable: true
  })
  _min!: NatureBattleStylePreferencesMinAggregate | null;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesMaxAggregate, {
    nullable: true
  })
  _max!: NatureBattleStylePreferencesMaxAggregate | null;
}
