import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionsAvgAggregate } from "../outputs/VersionGroupRegionsAvgAggregate";
import { VersionGroupRegionsCountAggregate } from "../outputs/VersionGroupRegionsCountAggregate";
import { VersionGroupRegionsMaxAggregate } from "../outputs/VersionGroupRegionsMaxAggregate";
import { VersionGroupRegionsMinAggregate } from "../outputs/VersionGroupRegionsMinAggregate";
import { VersionGroupRegionsSumAggregate } from "../outputs/VersionGroupRegionsSumAggregate";

@TypeGraphQL.ObjectType("AggregateVersionGroupRegions", {})
export class AggregateVersionGroupRegions {
  @TypeGraphQL.Field(_type => VersionGroupRegionsCountAggregate, {
    nullable: true
  })
  _count!: VersionGroupRegionsCountAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupRegionsAvgAggregate, {
    nullable: true
  })
  _avg!: VersionGroupRegionsAvgAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupRegionsSumAggregate, {
    nullable: true
  })
  _sum!: VersionGroupRegionsSumAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupRegionsMinAggregate, {
    nullable: true
  })
  _min!: VersionGroupRegionsMinAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupRegionsMaxAggregate, {
    nullable: true
  })
  _max!: VersionGroupRegionsMaxAggregate | null;
}
