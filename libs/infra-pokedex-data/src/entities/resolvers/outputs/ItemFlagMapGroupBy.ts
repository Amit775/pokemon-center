import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapAvgAggregate } from "../outputs/ItemFlagMapAvgAggregate";
import { ItemFlagMapCountAggregate } from "../outputs/ItemFlagMapCountAggregate";
import { ItemFlagMapMaxAggregate } from "../outputs/ItemFlagMapMaxAggregate";
import { ItemFlagMapMinAggregate } from "../outputs/ItemFlagMapMinAggregate";
import { ItemFlagMapSumAggregate } from "../outputs/ItemFlagMapSumAggregate";

@TypeGraphQL.ObjectType("ItemFlagMapGroupBy", {})
export class ItemFlagMapGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  item_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  item_flag_id!: number;

  @TypeGraphQL.Field(_type => ItemFlagMapCountAggregate, {
    nullable: true
  })
  _count!: ItemFlagMapCountAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlagMapAvgAggregate, {
    nullable: true
  })
  _avg!: ItemFlagMapAvgAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlagMapSumAggregate, {
    nullable: true
  })
  _sum!: ItemFlagMapSumAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlagMapMinAggregate, {
    nullable: true
  })
  _min!: ItemFlagMapMinAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlagMapMaxAggregate, {
    nullable: true
  })
  _max!: ItemFlagMapMaxAggregate | null;
}
