import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndexAvgAggregate } from "../outputs/ItemGameIndexAvgAggregate";
import { ItemGameIndexCountAggregate } from "../outputs/ItemGameIndexCountAggregate";
import { ItemGameIndexMaxAggregate } from "../outputs/ItemGameIndexMaxAggregate";
import { ItemGameIndexMinAggregate } from "../outputs/ItemGameIndexMinAggregate";
import { ItemGameIndexSumAggregate } from "../outputs/ItemGameIndexSumAggregate";

@TypeGraphQL.ObjectType("ItemGameIndexGroupBy", {})
export class ItemGameIndexGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  item_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => ItemGameIndexCountAggregate, {
    nullable: true
  })
  _count!: ItemGameIndexCountAggregate | null;

  @TypeGraphQL.Field(_type => ItemGameIndexAvgAggregate, {
    nullable: true
  })
  _avg!: ItemGameIndexAvgAggregate | null;

  @TypeGraphQL.Field(_type => ItemGameIndexSumAggregate, {
    nullable: true
  })
  _sum!: ItemGameIndexSumAggregate | null;

  @TypeGraphQL.Field(_type => ItemGameIndexMinAggregate, {
    nullable: true
  })
  _min!: ItemGameIndexMinAggregate | null;

  @TypeGraphQL.Field(_type => ItemGameIndexMaxAggregate, {
    nullable: true
  })
  _max!: ItemGameIndexMaxAggregate | null;
}
