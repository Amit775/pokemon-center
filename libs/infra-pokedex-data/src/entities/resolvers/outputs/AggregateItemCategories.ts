import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesAvgAggregate } from "../outputs/ItemCategoriesAvgAggregate";
import { ItemCategoriesCountAggregate } from "../outputs/ItemCategoriesCountAggregate";
import { ItemCategoriesMaxAggregate } from "../outputs/ItemCategoriesMaxAggregate";
import { ItemCategoriesMinAggregate } from "../outputs/ItemCategoriesMinAggregate";
import { ItemCategoriesSumAggregate } from "../outputs/ItemCategoriesSumAggregate";

@TypeGraphQL.ObjectType("AggregateItemCategories", {})
export class AggregateItemCategories {
  @TypeGraphQL.Field(_type => ItemCategoriesCountAggregate, {
    nullable: true
  })
  _count!: ItemCategoriesCountAggregate | null;

  @TypeGraphQL.Field(_type => ItemCategoriesAvgAggregate, {
    nullable: true
  })
  _avg!: ItemCategoriesAvgAggregate | null;

  @TypeGraphQL.Field(_type => ItemCategoriesSumAggregate, {
    nullable: true
  })
  _sum!: ItemCategoriesSumAggregate | null;

  @TypeGraphQL.Field(_type => ItemCategoriesMinAggregate, {
    nullable: true
  })
  _min!: ItemCategoriesMinAggregate | null;

  @TypeGraphQL.Field(_type => ItemCategoriesMaxAggregate, {
    nullable: true
  })
  _max!: ItemCategoriesMaxAggregate | null;
}
