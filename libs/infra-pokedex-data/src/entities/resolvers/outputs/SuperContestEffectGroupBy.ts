import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectAvgAggregate } from "../outputs/SuperContestEffectAvgAggregate";
import { SuperContestEffectCountAggregate } from "../outputs/SuperContestEffectCountAggregate";
import { SuperContestEffectMaxAggregate } from "../outputs/SuperContestEffectMaxAggregate";
import { SuperContestEffectMinAggregate } from "../outputs/SuperContestEffectMinAggregate";
import { SuperContestEffectSumAggregate } from "../outputs/SuperContestEffectSumAggregate";

@TypeGraphQL.ObjectType("SuperContestEffectGroupBy", {})
export class SuperContestEffectGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  appeal!: number;

  @TypeGraphQL.Field(_type => SuperContestEffectCountAggregate, {
    nullable: true
  })
  _count!: SuperContestEffectCountAggregate | null;

  @TypeGraphQL.Field(_type => SuperContestEffectAvgAggregate, {
    nullable: true
  })
  _avg!: SuperContestEffectAvgAggregate | null;

  @TypeGraphQL.Field(_type => SuperContestEffectSumAggregate, {
    nullable: true
  })
  _sum!: SuperContestEffectSumAggregate | null;

  @TypeGraphQL.Field(_type => SuperContestEffectMinAggregate, {
    nullable: true
  })
  _min!: SuperContestEffectMinAggregate | null;

  @TypeGraphQL.Field(_type => SuperContestEffectMaxAggregate, {
    nullable: true
  })
  _max!: SuperContestEffectMaxAggregate | null;
}
