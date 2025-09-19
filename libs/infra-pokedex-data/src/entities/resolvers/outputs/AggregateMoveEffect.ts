import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectAvgAggregate } from "../outputs/MoveEffectAvgAggregate";
import { MoveEffectCountAggregate } from "../outputs/MoveEffectCountAggregate";
import { MoveEffectMaxAggregate } from "../outputs/MoveEffectMaxAggregate";
import { MoveEffectMinAggregate } from "../outputs/MoveEffectMinAggregate";
import { MoveEffectSumAggregate } from "../outputs/MoveEffectSumAggregate";

@TypeGraphQL.ObjectType("AggregateMoveEffect", {})
export class AggregateMoveEffect {
  @TypeGraphQL.Field(_type => MoveEffectCountAggregate, {
    nullable: true
  })
  _count!: MoveEffectCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveEffectAvgAggregate, {
    nullable: true
  })
  _avg!: MoveEffectAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveEffectSumAggregate, {
    nullable: true
  })
  _sum!: MoveEffectSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveEffectMinAggregate, {
    nullable: true
  })
  _min!: MoveEffectMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveEffectMaxAggregate, {
    nullable: true
  })
  _max!: MoveEffectMaxAggregate | null;
}
