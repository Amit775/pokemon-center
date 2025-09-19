import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupAvgAggregate } from "../outputs/VersionGroupAvgAggregate";
import { VersionGroupCountAggregate } from "../outputs/VersionGroupCountAggregate";
import { VersionGroupMaxAggregate } from "../outputs/VersionGroupMaxAggregate";
import { VersionGroupMinAggregate } from "../outputs/VersionGroupMinAggregate";
import { VersionGroupSumAggregate } from "../outputs/VersionGroupSumAggregate";

@TypeGraphQL.ObjectType("AggregateVersionGroup", {})
export class AggregateVersionGroup {
  @TypeGraphQL.Field(_type => VersionGroupCountAggregate, {
    nullable: true
  })
  _count!: VersionGroupCountAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupAvgAggregate, {
    nullable: true
  })
  _avg!: VersionGroupAvgAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupSumAggregate, {
    nullable: true
  })
  _sum!: VersionGroupSumAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupMinAggregate, {
    nullable: true
  })
  _min!: VersionGroupMinAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupMaxAggregate, {
    nullable: true
  })
  _max!: VersionGroupMaxAggregate | null;
}
