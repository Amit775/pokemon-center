import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagsAvgAggregate } from "../outputs/ItemFlagsAvgAggregate";
import { ItemFlagsCountAggregate } from "../outputs/ItemFlagsCountAggregate";
import { ItemFlagsMaxAggregate } from "../outputs/ItemFlagsMaxAggregate";
import { ItemFlagsMinAggregate } from "../outputs/ItemFlagsMinAggregate";
import { ItemFlagsSumAggregate } from "../outputs/ItemFlagsSumAggregate";

@TypeGraphQL.ObjectType("ItemFlagsGroupBy", {})
export class ItemFlagsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => ItemFlagsCountAggregate, {
    nullable: true
  })
  _count!: ItemFlagsCountAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlagsAvgAggregate, {
    nullable: true
  })
  _avg!: ItemFlagsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlagsSumAggregate, {
    nullable: true
  })
  _sum!: ItemFlagsSumAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlagsMinAggregate, {
    nullable: true
  })
  _min!: ItemFlagsMinAggregate | null;

  @TypeGraphQL.Field(_type => ItemFlagsMaxAggregate, {
    nullable: true
  })
  _max!: ItemFlagsMaxAggregate | null;
}
