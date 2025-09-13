import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapAvgAggregate } from "../outputs/EncounterConditionValueMapAvgAggregate";
import { EncounterConditionValueMapCountAggregate } from "../outputs/EncounterConditionValueMapCountAggregate";
import { EncounterConditionValueMapMaxAggregate } from "../outputs/EncounterConditionValueMapMaxAggregate";
import { EncounterConditionValueMapMinAggregate } from "../outputs/EncounterConditionValueMapMinAggregate";
import { EncounterConditionValueMapSumAggregate } from "../outputs/EncounterConditionValueMapSumAggregate";

@TypeGraphQL.ObjectType("EncounterConditionValueMapGroupBy", {})
export class EncounterConditionValueMapGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  encounter_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  encounter_condition_value_id!: number;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapCountAggregate, {
    nullable: true
  })
  _count!: EncounterConditionValueMapCountAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapAvgAggregate, {
    nullable: true
  })
  _avg!: EncounterConditionValueMapAvgAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapSumAggregate, {
    nullable: true
  })
  _sum!: EncounterConditionValueMapSumAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapMinAggregate, {
    nullable: true
  })
  _min!: EncounterConditionValueMapMinAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapMaxAggregate, {
    nullable: true
  })
  _max!: EncounterConditionValueMapMaxAggregate | null;
}
