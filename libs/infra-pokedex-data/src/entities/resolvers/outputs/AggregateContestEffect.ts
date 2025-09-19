import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectAvgAggregate } from "../outputs/ContestEffectAvgAggregate";
import { ContestEffectCountAggregate } from "../outputs/ContestEffectCountAggregate";
import { ContestEffectMaxAggregate } from "../outputs/ContestEffectMaxAggregate";
import { ContestEffectMinAggregate } from "../outputs/ContestEffectMinAggregate";
import { ContestEffectSumAggregate } from "../outputs/ContestEffectSumAggregate";

@TypeGraphQL.ObjectType("AggregateContestEffect", {})
export class AggregateContestEffect {
  @TypeGraphQL.Field(_type => ContestEffectCountAggregate, {
    nullable: true
  })
  _count!: ContestEffectCountAggregate | null;

  @TypeGraphQL.Field(_type => ContestEffectAvgAggregate, {
    nullable: true
  })
  _avg!: ContestEffectAvgAggregate | null;

  @TypeGraphQL.Field(_type => ContestEffectSumAggregate, {
    nullable: true
  })
  _sum!: ContestEffectSumAggregate | null;

  @TypeGraphQL.Field(_type => ContestEffectMinAggregate, {
    nullable: true
  })
  _min!: ContestEffectMinAggregate | null;

  @TypeGraphQL.Field(_type => ContestEffectMaxAggregate, {
    nullable: true
  })
  _max!: ContestEffectMaxAggregate | null;
}
