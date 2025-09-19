import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggerAvgAggregate } from "../outputs/EvolutionTriggerAvgAggregate";
import { EvolutionTriggerCountAggregate } from "../outputs/EvolutionTriggerCountAggregate";
import { EvolutionTriggerMaxAggregate } from "../outputs/EvolutionTriggerMaxAggregate";
import { EvolutionTriggerMinAggregate } from "../outputs/EvolutionTriggerMinAggregate";
import { EvolutionTriggerSumAggregate } from "../outputs/EvolutionTriggerSumAggregate";

@TypeGraphQL.ObjectType("AggregateEvolutionTrigger", {})
export class AggregateEvolutionTrigger {
  @TypeGraphQL.Field(_type => EvolutionTriggerCountAggregate, {
    nullable: true
  })
  _count!: EvolutionTriggerCountAggregate | null;

  @TypeGraphQL.Field(_type => EvolutionTriggerAvgAggregate, {
    nullable: true
  })
  _avg!: EvolutionTriggerAvgAggregate | null;

  @TypeGraphQL.Field(_type => EvolutionTriggerSumAggregate, {
    nullable: true
  })
  _sum!: EvolutionTriggerSumAggregate | null;

  @TypeGraphQL.Field(_type => EvolutionTriggerMinAggregate, {
    nullable: true
  })
  _min!: EvolutionTriggerMinAggregate | null;

  @TypeGraphQL.Field(_type => EvolutionTriggerMaxAggregate, {
    nullable: true
  })
  _max!: EvolutionTriggerMaxAggregate | null;
}
