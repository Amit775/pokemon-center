import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatAvgAggregate } from "../outputs/StatAvgAggregate";
import { StatCountAggregate } from "../outputs/StatCountAggregate";
import { StatMaxAggregate } from "../outputs/StatMaxAggregate";
import { StatMinAggregate } from "../outputs/StatMinAggregate";
import { StatSumAggregate } from "../outputs/StatSumAggregate";

@TypeGraphQL.ObjectType("AggregateStat", {})
export class AggregateStat {
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
