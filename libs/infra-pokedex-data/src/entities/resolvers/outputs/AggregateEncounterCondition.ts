import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionAvgAggregate } from "../outputs/EncounterConditionAvgAggregate";
import { EncounterConditionCountAggregate } from "../outputs/EncounterConditionCountAggregate";
import { EncounterConditionMaxAggregate } from "../outputs/EncounterConditionMaxAggregate";
import { EncounterConditionMinAggregate } from "../outputs/EncounterConditionMinAggregate";
import { EncounterConditionSumAggregate } from "../outputs/EncounterConditionSumAggregate";

@TypeGraphQL.ObjectType("AggregateEncounterCondition", {})
export class AggregateEncounterCondition {
  @TypeGraphQL.Field(_type => EncounterConditionCountAggregate, {
    nullable: true
  })
  _count!: EncounterConditionCountAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionAvgAggregate, {
    nullable: true
  })
  _avg!: EncounterConditionAvgAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionSumAggregate, {
    nullable: true
  })
  _sum!: EncounterConditionSumAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionMinAggregate, {
    nullable: true
  })
  _min!: EncounterConditionMinAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionMaxAggregate, {
    nullable: true
  })
  _max!: EncounterConditionMaxAggregate | null;
}
