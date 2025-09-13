import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectsAvgAggregate } from "../outputs/ContestEffectsAvgAggregate";
import { ContestEffectsCountAggregate } from "../outputs/ContestEffectsCountAggregate";
import { ContestEffectsMaxAggregate } from "../outputs/ContestEffectsMaxAggregate";
import { ContestEffectsMinAggregate } from "../outputs/ContestEffectsMinAggregate";
import { ContestEffectsSumAggregate } from "../outputs/ContestEffectsSumAggregate";

@TypeGraphQL.ObjectType("AggregateContestEffects", {})
export class AggregateContestEffects {
  @TypeGraphQL.Field(_type => ContestEffectsCountAggregate, {
    nullable: true
  })
  _count!: ContestEffectsCountAggregate | null;

  @TypeGraphQL.Field(_type => ContestEffectsAvgAggregate, {
    nullable: true
  })
  _avg!: ContestEffectsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ContestEffectsSumAggregate, {
    nullable: true
  })
  _sum!: ContestEffectsSumAggregate | null;

  @TypeGraphQL.Field(_type => ContestEffectsMinAggregate, {
    nullable: true
  })
  _min!: ContestEffectsMinAggregate | null;

  @TypeGraphQL.Field(_type => ContestEffectsMaxAggregate, {
    nullable: true
  })
  _max!: ContestEffectsMaxAggregate | null;
}
