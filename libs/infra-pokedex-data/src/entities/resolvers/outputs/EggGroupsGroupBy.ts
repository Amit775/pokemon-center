import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupsAvgAggregate } from "../outputs/EggGroupsAvgAggregate";
import { EggGroupsCountAggregate } from "../outputs/EggGroupsCountAggregate";
import { EggGroupsMaxAggregate } from "../outputs/EggGroupsMaxAggregate";
import { EggGroupsMinAggregate } from "../outputs/EggGroupsMinAggregate";
import { EggGroupsSumAggregate } from "../outputs/EggGroupsSumAggregate";

@TypeGraphQL.ObjectType("EggGroupsGroupBy", {})
export class EggGroupsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => EggGroupsCountAggregate, {
    nullable: true
  })
  _count!: EggGroupsCountAggregate | null;

  @TypeGraphQL.Field(_type => EggGroupsAvgAggregate, {
    nullable: true
  })
  _avg!: EggGroupsAvgAggregate | null;

  @TypeGraphQL.Field(_type => EggGroupsSumAggregate, {
    nullable: true
  })
  _sum!: EggGroupsSumAggregate | null;

  @TypeGraphQL.Field(_type => EggGroupsMinAggregate, {
    nullable: true
  })
  _min!: EggGroupsMinAggregate | null;

  @TypeGraphQL.Field(_type => EggGroupsMaxAggregate, {
    nullable: true
  })
  _max!: EggGroupsMaxAggregate | null;
}
