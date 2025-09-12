import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsAvgAggregate } from "../outputs/StatsAvgAggregate";
import { StatsCountAggregate } from "../outputs/StatsCountAggregate";
import { StatsMaxAggregate } from "../outputs/StatsMaxAggregate";
import { StatsMinAggregate } from "../outputs/StatsMinAggregate";
import { StatsSumAggregate } from "../outputs/StatsSumAggregate";

@TypeGraphQL.ObjectType("StatsGroupBy", {})
export class StatsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  damage_class_id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_battle_only!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index!: number | null;

  @TypeGraphQL.Field(_type => StatsCountAggregate, {
    nullable: true
  })
  _count!: StatsCountAggregate | null;

  @TypeGraphQL.Field(_type => StatsAvgAggregate, {
    nullable: true
  })
  _avg!: StatsAvgAggregate | null;

  @TypeGraphQL.Field(_type => StatsSumAggregate, {
    nullable: true
  })
  _sum!: StatsSumAggregate | null;

  @TypeGraphQL.Field(_type => StatsMinAggregate, {
    nullable: true
  })
  _min!: StatsMinAggregate | null;

  @TypeGraphQL.Field(_type => StatsMaxAggregate, {
    nullable: true
  })
  _max!: StatsMaxAggregate | null;
}
