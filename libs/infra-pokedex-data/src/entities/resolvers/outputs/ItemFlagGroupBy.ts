import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagAvgAggregate } from "../outputs/ItemFlagAvgAggregate";
import { ItemFlagCountAggregate } from "../outputs/ItemFlagCountAggregate";
import { ItemFlagMaxAggregate } from "../outputs/ItemFlagMaxAggregate";
import { ItemFlagMinAggregate } from "../outputs/ItemFlagMinAggregate";
import { ItemFlagSumAggregate } from "../outputs/ItemFlagSumAggregate";

@TypeGraphQL.ObjectType("ItemFlagGroupBy", {})
export class ItemFlagGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

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
