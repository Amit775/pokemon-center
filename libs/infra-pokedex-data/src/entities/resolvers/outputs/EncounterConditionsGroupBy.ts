import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionsAvgAggregate } from "../outputs/EncounterConditionsAvgAggregate";
import { EncounterConditionsCountAggregate } from "../outputs/EncounterConditionsCountAggregate";
import { EncounterConditionsMaxAggregate } from "../outputs/EncounterConditionsMaxAggregate";
import { EncounterConditionsMinAggregate } from "../outputs/EncounterConditionsMinAggregate";
import { EncounterConditionsSumAggregate } from "../outputs/EncounterConditionsSumAggregate";

@TypeGraphQL.ObjectType("EncounterConditionsGroupBy", {})
export class EncounterConditionsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => EncounterConditionsCountAggregate, {
    nullable: true
  })
  _count!: EncounterConditionsCountAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionsAvgAggregate, {
    nullable: true
  })
  _avg!: EncounterConditionsAvgAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionsSumAggregate, {
    nullable: true
  })
  _sum!: EncounterConditionsSumAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionsMinAggregate, {
    nullable: true
  })
  _min!: EncounterConditionsMinAggregate | null;

  @TypeGraphQL.Field(_type => EncounterConditionsMaxAggregate, {
    nullable: true
  })
  _max!: EncounterConditionsMaxAggregate | null;
}
