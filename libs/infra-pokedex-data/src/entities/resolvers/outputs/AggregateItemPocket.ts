import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketAvgAggregate } from "../outputs/ItemPocketAvgAggregate";
import { ItemPocketCountAggregate } from "../outputs/ItemPocketCountAggregate";
import { ItemPocketMaxAggregate } from "../outputs/ItemPocketMaxAggregate";
import { ItemPocketMinAggregate } from "../outputs/ItemPocketMinAggregate";
import { ItemPocketSumAggregate } from "../outputs/ItemPocketSumAggregate";

@TypeGraphQL.ObjectType("AggregateItemPocket", {})
export class AggregateItemPocket {
  @TypeGraphQL.Field(_type => ItemPocketCountAggregate, {
    nullable: true
  })
  _count!: ItemPocketCountAggregate | null;

  @TypeGraphQL.Field(_type => ItemPocketAvgAggregate, {
    nullable: true
  })
  _avg!: ItemPocketAvgAggregate | null;

  @TypeGraphQL.Field(_type => ItemPocketSumAggregate, {
    nullable: true
  })
  _sum!: ItemPocketSumAggregate | null;

  @TypeGraphQL.Field(_type => ItemPocketMinAggregate, {
    nullable: true
  })
  _min!: ItemPocketMinAggregate | null;

  @TypeGraphQL.Field(_type => ItemPocketMaxAggregate, {
    nullable: true
  })
  _max!: ItemPocketMaxAggregate | null;
}
