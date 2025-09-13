import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ItemPockets } from "../models/ItemPockets";
import { Items } from "../models/Items";
import { ItemCategoriesCount } from "../resolvers/outputs/ItemCategoriesCount";

@TypeGraphQL.ObjectType("ItemCategories", {})
export class ItemCategories {
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

  pocket?: ItemPockets;

  items?: Items[];

  @TypeGraphQL.Field(_type => ItemCategoriesCount, {
    nullable: true
  })
  _count?: ItemCategoriesCount | null;
}
