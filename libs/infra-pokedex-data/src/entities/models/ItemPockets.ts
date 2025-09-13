import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ItemCategories } from "../models/ItemCategories";
import { ItemPocketsCount } from "../resolvers/outputs/ItemPocketsCount";

@TypeGraphQL.ObjectType("ItemPockets", {})
export class ItemPockets {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  categories?: ItemCategories[];

  @TypeGraphQL.Field(_type => ItemPocketsCount, {
    nullable: true
  })
  _count?: ItemPocketsCount | null;
}
