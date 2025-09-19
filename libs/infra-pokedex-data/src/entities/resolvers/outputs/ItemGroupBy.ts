import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemAvgAggregate } from "../outputs/ItemAvgAggregate";
import { ItemCountAggregate } from "../outputs/ItemCountAggregate";
import { ItemMaxAggregate } from "../outputs/ItemMaxAggregate";
import { ItemMinAggregate } from "../outputs/ItemMinAggregate";
import { ItemSumAggregate } from "../outputs/ItemSumAggregate";

@TypeGraphQL.ObjectType("ItemGroupBy", {})
export class ItemGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  category_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cost!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  fling_power!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  fling_effect_id!: number | null;

  @TypeGraphQL.Field(_type => ItemCountAggregate, {
    nullable: true
  })
  _count!: ItemCountAggregate | null;

  @TypeGraphQL.Field(_type => ItemAvgAggregate, {
    nullable: true
  })
  _avg!: ItemAvgAggregate | null;

  @TypeGraphQL.Field(_type => ItemSumAggregate, {
    nullable: true
  })
  _sum!: ItemSumAggregate | null;

  @TypeGraphQL.Field(_type => ItemMinAggregate, {
    nullable: true
  })
  _min!: ItemMinAggregate | null;

  @TypeGraphQL.Field(_type => ItemMaxAggregate, {
    nullable: true
  })
  _max!: ItemMaxAggregate | null;
}
