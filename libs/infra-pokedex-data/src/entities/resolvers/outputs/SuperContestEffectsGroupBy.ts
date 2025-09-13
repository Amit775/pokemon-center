import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectsAvgAggregate } from "../outputs/SuperContestEffectsAvgAggregate";
import { SuperContestEffectsCountAggregate } from "../outputs/SuperContestEffectsCountAggregate";
import { SuperContestEffectsMaxAggregate } from "../outputs/SuperContestEffectsMaxAggregate";
import { SuperContestEffectsMinAggregate } from "../outputs/SuperContestEffectsMinAggregate";
import { SuperContestEffectsSumAggregate } from "../outputs/SuperContestEffectsSumAggregate";

@TypeGraphQL.ObjectType("SuperContestEffectsGroupBy", {})
export class SuperContestEffectsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  appeal!: number;

  @TypeGraphQL.Field(_type => SuperContestEffectsCountAggregate, {
    nullable: true
  })
  _count!: SuperContestEffectsCountAggregate | null;

  @TypeGraphQL.Field(_type => SuperContestEffectsAvgAggregate, {
    nullable: true
  })
  _avg!: SuperContestEffectsAvgAggregate | null;

  @TypeGraphQL.Field(_type => SuperContestEffectsSumAggregate, {
    nullable: true
  })
  _sum!: SuperContestEffectsSumAggregate | null;

  @TypeGraphQL.Field(_type => SuperContestEffectsMinAggregate, {
    nullable: true
  })
  _min!: SuperContestEffectsMinAggregate | null;

  @TypeGraphQL.Field(_type => SuperContestEffectsMaxAggregate, {
    nullable: true
  })
  _max!: SuperContestEffectsMaxAggregate | null;
}
