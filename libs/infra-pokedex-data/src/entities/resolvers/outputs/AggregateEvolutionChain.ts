import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainAvgAggregate } from "../outputs/EvolutionChainAvgAggregate";
import { EvolutionChainCountAggregate } from "../outputs/EvolutionChainCountAggregate";
import { EvolutionChainMaxAggregate } from "../outputs/EvolutionChainMaxAggregate";
import { EvolutionChainMinAggregate } from "../outputs/EvolutionChainMinAggregate";
import { EvolutionChainSumAggregate } from "../outputs/EvolutionChainSumAggregate";

@TypeGraphQL.ObjectType("AggregateEvolutionChain", {})
export class AggregateEvolutionChain {
  @TypeGraphQL.Field(_type => EvolutionChainCountAggregate, {
    nullable: true
  })
  _count!: EvolutionChainCountAggregate | null;

  @TypeGraphQL.Field(_type => EvolutionChainAvgAggregate, {
    nullable: true
  })
  _avg!: EvolutionChainAvgAggregate | null;

  @TypeGraphQL.Field(_type => EvolutionChainSumAggregate, {
    nullable: true
  })
  _sum!: EvolutionChainSumAggregate | null;

  @TypeGraphQL.Field(_type => EvolutionChainMinAggregate, {
    nullable: true
  })
  _min!: EvolutionChainMinAggregate | null;

  @TypeGraphQL.Field(_type => EvolutionChainMaxAggregate, {
    nullable: true
  })
  _max!: EvolutionChainMaxAggregate | null;
}
