import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionAvgAggregate } from "../outputs/VersionAvgAggregate";
import { VersionCountAggregate } from "../outputs/VersionCountAggregate";
import { VersionMaxAggregate } from "../outputs/VersionMaxAggregate";
import { VersionMinAggregate } from "../outputs/VersionMinAggregate";
import { VersionSumAggregate } from "../outputs/VersionSumAggregate";

@TypeGraphQL.ObjectType("VersionGroupBy", {})
export class VersionGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => VersionCountAggregate, {
    nullable: true
  })
  _count!: VersionCountAggregate | null;

  @TypeGraphQL.Field(_type => VersionAvgAggregate, {
    nullable: true
  })
  _avg!: VersionAvgAggregate | null;

  @TypeGraphQL.Field(_type => VersionSumAggregate, {
    nullable: true
  })
  _sum!: VersionSumAggregate | null;

  @TypeGraphQL.Field(_type => VersionMinAggregate, {
    nullable: true
  })
  _min!: VersionMinAggregate | null;

  @TypeGraphQL.Field(_type => VersionMaxAggregate, {
    nullable: true
  })
  _max!: VersionMaxAggregate | null;
}
