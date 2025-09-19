import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ItemCategory } from "../models/ItemCategory";
import { ItemPocketCount } from "../resolvers/outputs/ItemPocketCount";

@TypeGraphQL.ObjectType("ItemPocket", {})
export class ItemPocket {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  categories?: ItemCategory[];

  @TypeGraphQL.Field(_type => ItemPocketCount, {
    nullable: true
  })
  _count?: ItemPocketCount | null;
}
