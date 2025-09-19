import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagAvgAggregate } from "../outputs/ItemFlagAvgAggregate";
import { ItemFlagCountAggregate } from "../outputs/ItemFlagCountAggregate";
import { ItemFlagMaxAggregate } from "../outputs/ItemFlagMaxAggregate";
import { ItemFlagMinAggregate } from "../outputs/ItemFlagMinAggregate";
import { ItemFlagSumAggregate } from "../outputs/ItemFlagSumAggregate";

@TypeGraphQL.ObjectType("AggregateItemFlag", {})
export class AggregateItemFlag {
  @TypeGraphQL.Field(_type => ItemFlagCountAggregate, {
    nullable: true
  })
  _count!: ItemFlagCountAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlagAvgAggregate, {
    nullable: true
  })
  _avg!: ItemFlagAvgAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlagSumAggregate, {
    nullable: true
  })
  _sum!: ItemFlagSumAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlagMinAggregate, {
    nullable: true
  })
  _min!: ItemFlagMinAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlagMaxAggregate, {
    nullable: true
  })
  _max!: ItemFlagMaxAggregate | null;
}
