import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketsAvgAggregate } from "../outputs/ItemPocketsAvgAggregate";
import { ItemPocketsCountAggregate } from "../outputs/ItemPocketsCountAggregate";
import { ItemPocketsMaxAggregate } from "../outputs/ItemPocketsMaxAggregate";
import { ItemPocketsMinAggregate } from "../outputs/ItemPocketsMinAggregate";
import { ItemPocketsSumAggregate } from "../outputs/ItemPocketsSumAggregate";

@TypeGraphQL.ObjectType("AggregateItemPockets", {})
export class AggregateItemPockets {
  @TypeGraphQL.Field(_type => ItemPocketsCountAggregate, {
    nullable: true
  })
  _count!: ItemPocketsCountAggregate | null;

  @TypeGraphQL.Field(_type => ItemPocketsAvgAggregate, {
    nullable: true
  })
  _avg!: ItemPocketsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ItemPocketsSumAggregate, {
    nullable: true
  })
  _sum!: ItemPocketsSumAggregate | null;

  @TypeGraphQL.Field(_type => ItemPocketsMinAggregate, {
    nullable: true
  })
  _min!: ItemPocketsMinAggregate | null;

  @TypeGraphQL.Field(_type => ItemPocketsMaxAggregate, {
    nullable: true
  })
  _max!: ItemPocketsMaxAggregate | null;
}
