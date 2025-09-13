import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsAvgAggregate } from "../outputs/ItemsAvgAggregate";
import { ItemsCountAggregate } from "../outputs/ItemsCountAggregate";
import { ItemsMaxAggregate } from "../outputs/ItemsMaxAggregate";
import { ItemsMinAggregate } from "../outputs/ItemsMinAggregate";
import { ItemsSumAggregate } from "../outputs/ItemsSumAggregate";

@TypeGraphQL.ObjectType("ItemsGroupBy", {})
export class ItemsGroupBy {
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

  @TypeGraphQL.Field(_type => ItemsCountAggregate, {
    nullable: true
  })
  _count!: ItemsCountAggregate | null;

  @TypeGraphQL.Field(_type => ItemsAvgAggregate, {
    nullable: true
  })
  _avg!: ItemsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ItemsSumAggregate, {
    nullable: true
  })
  _sum!: ItemsSumAggregate | null;

  @TypeGraphQL.Field(_type => ItemsMinAggregate, {
    nullable: true
  })
  _min!: ItemsMinAggregate | null;

  @TypeGraphQL.Field(_type => ItemsMaxAggregate, {
    nullable: true
  })
  _max!: ItemsMaxAggregate | null;
}
