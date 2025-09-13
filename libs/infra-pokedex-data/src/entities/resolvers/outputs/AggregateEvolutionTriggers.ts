import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggersAvgAggregate } from "../outputs/EvolutionTriggersAvgAggregate";
import { EvolutionTriggersCountAggregate } from "../outputs/EvolutionTriggersCountAggregate";
import { EvolutionTriggersMaxAggregate } from "../outputs/EvolutionTriggersMaxAggregate";
import { EvolutionTriggersMinAggregate } from "../outputs/EvolutionTriggersMinAggregate";
import { EvolutionTriggersSumAggregate } from "../outputs/EvolutionTriggersSumAggregate";

@TypeGraphQL.ObjectType("AggregateEvolutionTriggers", {})
export class AggregateEvolutionTriggers {
  @TypeGraphQL.Field(_type => EvolutionTriggersCountAggregate, {
    nullable: true
  })
  _count!: EvolutionTriggersCountAggregate | null;

  @TypeGraphQL.Field(_type => EvolutionTriggersAvgAggregate, {
    nullable: true
  })
  _avg!: EvolutionTriggersAvgAggregate | null;

  @TypeGraphQL.Field(_type => EvolutionTriggersSumAggregate, {
    nullable: true
  })
  _sum!: EvolutionTriggersSumAggregate | null;

  @TypeGraphQL.Field(_type => EvolutionTriggersMinAggregate, {
    nullable: true
  })
  _min!: EvolutionTriggersMinAggregate | null;

  @TypeGraphQL.Field(_type => EvolutionTriggersMaxAggregate, {
    nullable: true
  })
  _max!: EvolutionTriggersMaxAggregate | null;
}
