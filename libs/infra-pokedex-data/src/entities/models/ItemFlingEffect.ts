import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Item } from "../models/Item";
import { ItemFlingEffectCount } from "../resolvers/outputs/ItemFlingEffectCount";

@TypeGraphQL.ObjectType("ItemFlingEffect", {})
export class ItemFlingEffect {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  items?: Item[];

  @TypeGraphQL.Field(_type => ItemFlingEffectCount, {
    nullable: true
  })
  _count?: ItemFlingEffectCount | null;
}
