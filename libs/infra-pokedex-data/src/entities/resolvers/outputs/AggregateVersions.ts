import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsAvgAggregate } from "../outputs/VersionsAvgAggregate";
import { VersionsCountAggregate } from "../outputs/VersionsCountAggregate";
import { VersionsMaxAggregate } from "../outputs/VersionsMaxAggregate";
import { VersionsMinAggregate } from "../outputs/VersionsMinAggregate";
import { VersionsSumAggregate } from "../outputs/VersionsSumAggregate";

@TypeGraphQL.ObjectType("AggregateVersions", {})
export class AggregateVersions {
  @TypeGraphQL.Field(_type => VersionsCountAggregate, {
    nullable: true
  })
  _count!: VersionsCountAggregate | null;

  @TypeGraphQL.Field(_type => VersionsAvgAggregate, {
    nullable: true
  })
  _avg!: VersionsAvgAggregate | null;

  @TypeGraphQL.Field(_type => VersionsSumAggregate, {
    nullable: true
  })
  _sum!: VersionsSumAggregate | null;

  @TypeGraphQL.Field(_type => VersionsMinAggregate, {
    nullable: true
  })
  _min!: VersionsMinAggregate | null;

  @TypeGraphQL.Field(_type => VersionsMaxAggregate, {
    nullable: true
  })
  _max!: VersionsMaxAggregate | null;
}
