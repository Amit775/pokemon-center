import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetAvgAggregate } from "../outputs/MoveTargetAvgAggregate";
import { MoveTargetCountAggregate } from "../outputs/MoveTargetCountAggregate";
import { MoveTargetMaxAggregate } from "../outputs/MoveTargetMaxAggregate";
import { MoveTargetMinAggregate } from "../outputs/MoveTargetMinAggregate";
import { MoveTargetSumAggregate } from "../outputs/MoveTargetSumAggregate";

@TypeGraphQL.ObjectType("AggregateMoveTarget", {})
export class AggregateMoveTarget {
  @TypeGraphQL.Field(_type => MoveTargetCountAggregate, {
    nullable: true
  })
  _count!: MoveTargetCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveTargetAvgAggregate, {
    nullable: true
  })
  _avg!: MoveTargetAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveTargetSumAggregate, {
    nullable: true
  })
  _sum!: MoveTargetSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveTargetMinAggregate, {
    nullable: true
  })
  _min!: MoveTargetMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveTargetMaxAggregate, {
    nullable: true
  })
  _max!: MoveTargetMaxAggregate | null;
}
