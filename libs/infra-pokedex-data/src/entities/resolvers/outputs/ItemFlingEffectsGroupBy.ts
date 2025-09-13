import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectsAvgAggregate } from "../outputs/ItemFlingEffectsAvgAggregate";
import { ItemFlingEffectsCountAggregate } from "../outputs/ItemFlingEffectsCountAggregate";
import { ItemFlingEffectsMaxAggregate } from "../outputs/ItemFlingEffectsMaxAggregate";
import { ItemFlingEffectsMinAggregate } from "../outputs/ItemFlingEffectsMinAggregate";
import { ItemFlingEffectsSumAggregate } from "../outputs/ItemFlingEffectsSumAggregate";

@TypeGraphQL.ObjectType("ItemFlingEffectsGroupBy", {})
export class ItemFlingEffectsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => ItemFlingEffectsCountAggregate, {
    nullable: true
  })
  _count!: ItemFlingEffectsCountAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlingEffectsAvgAggregate, {
    nullable: true
  })
  _avg!: ItemFlingEffectsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlingEffectsSumAggregate, {
    nullable: true
  })
  _sum!: ItemFlingEffectsSumAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlingEffectsMinAggregate, {
    nullable: true
  })
  _min!: ItemFlingEffectsMinAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlingEffectsMaxAggregate, {
    nullable: true
  })
  _max!: ItemFlingEffectsMaxAggregate | null;
}
