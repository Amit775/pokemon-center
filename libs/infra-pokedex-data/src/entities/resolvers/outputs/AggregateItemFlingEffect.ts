import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectAvgAggregate } from "../outputs/ItemFlingEffectAvgAggregate";
import { ItemFlingEffectCountAggregate } from "../outputs/ItemFlingEffectCountAggregate";
import { ItemFlingEffectMaxAggregate } from "../outputs/ItemFlingEffectMaxAggregate";
import { ItemFlingEffectMinAggregate } from "../outputs/ItemFlingEffectMinAggregate";
import { ItemFlingEffectSumAggregate } from "../outputs/ItemFlingEffectSumAggregate";

@TypeGraphQL.ObjectType("AggregateItemFlingEffect", {})
export class AggregateItemFlingEffect {
  @TypeGraphQL.Field(_type => ItemFlingEffectCountAggregate, {
    nullable: true
  })
  _count!: ItemFlingEffectCountAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlingEffectAvgAggregate, {
    nullable: true
  })
  _avg!: ItemFlingEffectAvgAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlingEffectSumAggregate, {
    nullable: true
  })
  _sum!: ItemFlingEffectSumAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlingEffectMinAggregate, {
    nullable: true
  })
  _min!: ItemFlingEffectMinAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlingEffectMaxAggregate, {
    nullable: true
  })
  _max!: ItemFlingEffectMaxAggregate | null;
}
