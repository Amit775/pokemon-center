import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatAvgAggregate } from "../outputs/StatAvgAggregate";
import { StatCountAggregate } from "../outputs/StatCountAggregate";
import { StatMaxAggregate } from "../outputs/StatMaxAggregate";
import { StatMinAggregate } from "../outputs/StatMinAggregate";
import { StatSumAggregate } from "../outputs/StatSumAggregate";

@TypeGraphQL.ObjectType("StatGroupBy", {})
export class StatGroupBy {
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

  @TypeGraphQL.Field(_type => StatCountAggregate, {
    nullable: true
  })
  _count!: StatCountAggregate | null;

  @TypeGraphQL.Field(_type => StatAvgAggregate, {
    nullable: true
  })
  _avg!: StatAvgAggregate | null;

  @TypeGraphQL.Field(_type => StatSumAggregate, {
    nullable: true
  })
  _sum!: StatSumAggregate | null;

  @TypeGraphQL.Field(_type => StatMinAggregate, {
    nullable: true
  })
  _min!: StatMinAggregate | null;

  @TypeGraphQL.Field(_type => StatMaxAggregate, {
    nullable: true
  })
  _max!: StatMaxAggregate | null;
}
