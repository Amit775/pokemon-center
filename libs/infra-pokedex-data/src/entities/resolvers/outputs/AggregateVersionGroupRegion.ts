import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionAvgAggregate } from "../outputs/VersionGroupRegionAvgAggregate";
import { VersionGroupRegionCountAggregate } from "../outputs/VersionGroupRegionCountAggregate";
import { VersionGroupRegionMaxAggregate } from "../outputs/VersionGroupRegionMaxAggregate";
import { VersionGroupRegionMinAggregate } from "../outputs/VersionGroupRegionMinAggregate";
import { VersionGroupRegionSumAggregate } from "../outputs/VersionGroupRegionSumAggregate";

@TypeGraphQL.ObjectType("AggregateVersionGroupRegion", {})
export class AggregateVersionGroupRegion {
  @TypeGraphQL.Field(_type => VersionGroupRegionCountAggregate, {
    nullable: true
  })
  _count!: VersionGroupRegionCountAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupRegionAvgAggregate, {
    nullable: true
  })
  _avg!: VersionGroupRegionAvgAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupRegionSumAggregate, {
    nullable: true
  })
  _sum!: VersionGroupRegionSumAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupRegionMinAggregate, {
    nullable: true
  })
  _min!: VersionGroupRegionMinAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupRegionMaxAggregate, {
    nullable: true
  })
  _max!: VersionGroupRegionMaxAggregate | null;
}
