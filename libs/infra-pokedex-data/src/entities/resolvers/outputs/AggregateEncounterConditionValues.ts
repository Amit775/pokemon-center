import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesAvgAggregate } from "../outputs/EncounterConditionValuesAvgAggregate";
import { EncounterConditionValuesCountAggregate } from "../outputs/EncounterConditionValuesCountAggregate";
import { EncounterConditionValuesMaxAggregate } from "../outputs/EncounterConditionValuesMaxAggregate";
import { EncounterConditionValuesMinAggregate } from "../outputs/EncounterConditionValuesMinAggregate";
import { EncounterConditionValuesSumAggregate } from "../outputs/EncounterConditionValuesSumAggregate";

@TypeGraphQL.ObjectType("AggregateEncounterConditionValues", {})
export class AggregateEncounterConditionValues {
  @TypeGraphQL.Field(_type => EncounterConditionValuesCountAggregate, {
    nullable: true
  })
  _count!: EncounterConditionValuesCountAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionValuesAvgAggregate, {
    nullable: true
  })
  _avg!: EncounterConditionValuesAvgAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionValuesSumAggregate, {
    nullable: true
  })
  _sum!: EncounterConditionValuesSumAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionValuesMinAggregate, {
    nullable: true
  })
  _min!: EncounterConditionValuesMinAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionValuesMaxAggregate, {
    nullable: true
  })
  _max!: EncounterConditionValuesMaxAggregate | null;
}
