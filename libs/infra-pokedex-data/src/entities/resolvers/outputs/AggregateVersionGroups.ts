import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsAvgAggregate } from "../outputs/VersionGroupsAvgAggregate";
import { VersionGroupsCountAggregate } from "../outputs/VersionGroupsCountAggregate";
import { VersionGroupsMaxAggregate } from "../outputs/VersionGroupsMaxAggregate";
import { VersionGroupsMinAggregate } from "../outputs/VersionGroupsMinAggregate";
import { VersionGroupsSumAggregate } from "../outputs/VersionGroupsSumAggregate";

@TypeGraphQL.ObjectType("AggregateVersionGroups", {})
export class AggregateVersionGroups {
  @TypeGraphQL.Field(_type => VersionGroupsCountAggregate, {
    nullable: true
  })
  _count!: VersionGroupsCountAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupsAvgAggregate, {
    nullable: true
  })
  _avg!: VersionGroupsAvgAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupsSumAggregate, {
    nullable: true
  })
  _sum!: VersionGroupsSumAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupsMinAggregate, {
    nullable: true
  })
  _min!: VersionGroupsMinAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupsMaxAggregate, {
    nullable: true
  })
  _max!: VersionGroupsMaxAggregate | null;
}
