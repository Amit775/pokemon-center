import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Item } from "../models/Item";
import { ItemPocket } from "../models/ItemPocket";
import { ItemCategoryCount } from "../resolvers/outputs/ItemCategoryCount";

@TypeGraphQL.ObjectType("ItemCategory", {})
export class ItemCategory {
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

  pocket?: ItemPocket;

  items?: Item[];

  @TypeGraphQL.Field(_type => ItemCategoryCount, {
    nullable: true
  })
  _count?: ItemCategoryCount | null;
}
