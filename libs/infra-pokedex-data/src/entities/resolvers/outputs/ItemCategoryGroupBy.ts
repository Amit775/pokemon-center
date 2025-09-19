import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryAvgAggregate } from "../outputs/ItemCategoryAvgAggregate";
import { ItemCategoryCountAggregate } from "../outputs/ItemCategoryCountAggregate";
import { ItemCategoryMaxAggregate } from "../outputs/ItemCategoryMaxAggregate";
import { ItemCategoryMinAggregate } from "../outputs/ItemCategoryMinAggregate";
import { ItemCategorySumAggregate } from "../outputs/ItemCategorySumAggregate";

@TypeGraphQL.ObjectType("ItemCategoryGroupBy", {})
export class ItemCategoryGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pocket_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => ItemCategoryCountAggregate, {
    nullable: true
  })
  _count!: ItemCategoryCountAggregate | null;

  @TypeGraphQL.Field(_type => ItemCategoryAvgAggregate, {
    nullable: true
  })
  _avg!: ItemCategoryAvgAggregate | null;

  @TypeGraphQL.Field(_type => ItemCategorySumAggregate, {
    nullable: true
  })
  _sum!: ItemCategorySumAggregate | null;

  @TypeGraphQL.Field(_type => ItemCategoryMinAggregate, {
    nullable: true
  })
  _min!: ItemCategoryMinAggregate | null;

  @TypeGraphQL.Field(_type => ItemCategoryMaxAggregate, {
    nullable: true
  })
  _max!: ItemCategoryMaxAggregate | null;
}
