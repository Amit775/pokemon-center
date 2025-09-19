import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionAvgAggregate } from "../outputs/RegionAvgAggregate";
import { RegionCountAggregate } from "../outputs/RegionCountAggregate";
import { RegionMaxAggregate } from "../outputs/RegionMaxAggregate";
import { RegionMinAggregate } from "../outputs/RegionMinAggregate";
import { RegionSumAggregate } from "../outputs/RegionSumAggregate";

@TypeGraphQL.ObjectType("AggregateRegion", {})
export class AggregateRegion {
  @TypeGraphQL.Field(_type => RegionCountAggregate, {
    nullable: true
  })
  _count!: RegionCountAggregate | null;

  @TypeGraphQL.Field(_type => RegionAvgAggregate, {
    nullable: true
  })
  _avg!: RegionAvgAggregate | null;

  @TypeGraphQL.Field(_type => RegionSumAggregate, {
    nullable: true
  })
  _sum!: RegionSumAggregate | null;

  @TypeGraphQL.Field(_type => RegionMinAggregate, {
    nullable: true
  })
  _min!: RegionMinAggregate | null;

  @TypeGraphQL.Field(_type => RegionMaxAggregate, {
    nullable: true
  })
  _max!: RegionMaxAggregate | null;
}
