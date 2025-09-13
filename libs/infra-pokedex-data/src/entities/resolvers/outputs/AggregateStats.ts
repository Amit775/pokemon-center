import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsAvgAggregate } from "../outputs/StatsAvgAggregate";
import { StatsCountAggregate } from "../outputs/StatsCountAggregate";
import { StatsMaxAggregate } from "../outputs/StatsMaxAggregate";
import { StatsMinAggregate } from "../outputs/StatsMinAggregate";
import { StatsSumAggregate } from "../outputs/StatsSumAggregate";

@TypeGraphQL.ObjectType("AggregateStats", {})
export class AggregateStats {
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
