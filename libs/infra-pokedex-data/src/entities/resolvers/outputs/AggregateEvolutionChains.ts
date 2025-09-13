import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsAvgAggregate } from "../outputs/EvolutionChainsAvgAggregate";
import { EvolutionChainsCountAggregate } from "../outputs/EvolutionChainsCountAggregate";
import { EvolutionChainsMaxAggregate } from "../outputs/EvolutionChainsMaxAggregate";
import { EvolutionChainsMinAggregate } from "../outputs/EvolutionChainsMinAggregate";
import { EvolutionChainsSumAggregate } from "../outputs/EvolutionChainsSumAggregate";

@TypeGraphQL.ObjectType("AggregateEvolutionChains", {})
export class AggregateEvolutionChains {
  @TypeGraphQL.Field(_type => EvolutionChainsCountAggregate, {
    nullable: true
  })
  _count!: EvolutionChainsCountAggregate | null;

  @TypeGraphQL.Field(_type => EvolutionChainsAvgAggregate, {
    nullable: true
  })
  _avg!: EvolutionChainsAvgAggregate | null;

  @TypeGraphQL.Field(_type => EvolutionChainsSumAggregate, {
    nullable: true
  })
  _sum!: EvolutionChainsSumAggregate | null;

  @TypeGraphQL.Field(_type => EvolutionChainsMinAggregate, {
    nullable: true
  })
  _min!: EvolutionChainsMinAggregate | null;

  @TypeGraphQL.Field(_type => EvolutionChainsMaxAggregate, {
    nullable: true
  })
  _max!: EvolutionChainsMaxAggregate | null;
}
