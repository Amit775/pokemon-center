import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectsAvgAggregate } from "../outputs/MoveEffectsAvgAggregate";
import { MoveEffectsCountAggregate } from "../outputs/MoveEffectsCountAggregate";
import { MoveEffectsMaxAggregate } from "../outputs/MoveEffectsMaxAggregate";
import { MoveEffectsMinAggregate } from "../outputs/MoveEffectsMinAggregate";
import { MoveEffectsSumAggregate } from "../outputs/MoveEffectsSumAggregate";

@TypeGraphQL.ObjectType("MoveEffectsGroupBy", {})
export class MoveEffectsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => MoveEffectsCountAggregate, {
    nullable: true
  })
  _count!: MoveEffectsCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveEffectsAvgAggregate, {
    nullable: true
  })
  _avg!: MoveEffectsAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveEffectsSumAggregate, {
    nullable: true
  })
  _sum!: MoveEffectsSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveEffectsMinAggregate, {
    nullable: true
  })
  _min!: MoveEffectsMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveEffectsMaxAggregate, {
    nullable: true
  })
  _max!: MoveEffectsMaxAggregate | null;
}
