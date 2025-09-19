import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueAvgAggregate } from "../outputs/EncounterConditionValueAvgAggregate";
import { EncounterConditionValueCountAggregate } from "../outputs/EncounterConditionValueCountAggregate";
import { EncounterConditionValueMaxAggregate } from "../outputs/EncounterConditionValueMaxAggregate";
import { EncounterConditionValueMinAggregate } from "../outputs/EncounterConditionValueMinAggregate";
import { EncounterConditionValueSumAggregate } from "../outputs/EncounterConditionValueSumAggregate";

@TypeGraphQL.ObjectType("AggregateEncounterConditionValue", {})
export class AggregateEncounterConditionValue {
  @TypeGraphQL.Field(_type => EncounterConditionValueCountAggregate, {
    nullable: true
  })
  _count!: EncounterConditionValueCountAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionValueAvgAggregate, {
    nullable: true
  })
  _avg!: EncounterConditionValueAvgAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionValueSumAggregate, {
    nullable: true
  })
  _sum!: EncounterConditionValueSumAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionValueMinAggregate, {
    nullable: true
  })
  _min!: EncounterConditionValueMinAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionValueMaxAggregate, {
    nullable: true
  })
  _max!: EncounterConditionValueMaxAggregate | null;
}
