import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetsAvgAggregate } from "../outputs/MoveTargetsAvgAggregate";
import { MoveTargetsCountAggregate } from "../outputs/MoveTargetsCountAggregate";
import { MoveTargetsMaxAggregate } from "../outputs/MoveTargetsMaxAggregate";
import { MoveTargetsMinAggregate } from "../outputs/MoveTargetsMinAggregate";
import { MoveTargetsSumAggregate } from "../outputs/MoveTargetsSumAggregate";

@TypeGraphQL.ObjectType("AggregateMoveTargets", {})
export class AggregateMoveTargets {
  @TypeGraphQL.Field(_type => MoveTargetsCountAggregate, {
    nullable: true
  })
  _count!: MoveTargetsCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveTargetsAvgAggregate, {
    nullable: true
  })
  _avg!: MoveTargetsAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveTargetsSumAggregate, {
    nullable: true
  })
  _sum!: MoveTargetsSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveTargetsMinAggregate, {
    nullable: true
  })
  _min!: MoveTargetsMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveTargetsMaxAggregate, {
    nullable: true
  })
  _max!: MoveTargetsMaxAggregate | null;
}
