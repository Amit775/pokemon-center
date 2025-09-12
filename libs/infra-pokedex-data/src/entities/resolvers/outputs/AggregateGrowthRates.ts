import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesAvgAggregate } from "../outputs/GrowthRatesAvgAggregate";
import { GrowthRatesCountAggregate } from "../outputs/GrowthRatesCountAggregate";
import { GrowthRatesMaxAggregate } from "../outputs/GrowthRatesMaxAggregate";
import { GrowthRatesMinAggregate } from "../outputs/GrowthRatesMinAggregate";
import { GrowthRatesSumAggregate } from "../outputs/GrowthRatesSumAggregate";

@TypeGraphQL.ObjectType("AggregateGrowthRates", {})
export class AggregateGrowthRates {
  @TypeGraphQL.Field(_type => GrowthRatesCountAggregate, {
    nullable: true
  })
  _count!: GrowthRatesCountAggregate | null;

  @TypeGraphQL.Field(_type => GrowthRatesAvgAggregate, {
    nullable: true
  })
  _avg!: GrowthRatesAvgAggregate | null;

  @TypeGraphQL.Field(_type => GrowthRatesSumAggregate, {
    nullable: true
  })
  _sum!: GrowthRatesSumAggregate | null;

  @TypeGraphQL.Field(_type => GrowthRatesMinAggregate, {
    nullable: true
  })
  _min!: GrowthRatesMinAggregate | null;

  @TypeGraphQL.Field(_type => GrowthRatesMaxAggregate, {
    nullable: true
  })
  _max!: GrowthRatesMaxAggregate | null;
}
