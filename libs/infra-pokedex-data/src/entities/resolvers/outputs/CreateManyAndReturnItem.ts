import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnItemFlingEffectArgs } from "./args/CreateManyAndReturnItemFlingEffectArgs";
import { ItemCategory } from "../../models/ItemCategory";
import { ItemFlingEffect } from "../../models/ItemFlingEffect";

@TypeGraphQL.ObjectType("CreateManyAndReturnItem", {})
export class CreateManyAndReturnItem {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  category_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cost!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  fling_power!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  fling_effect_id!: number | null;

  @TypeGraphQL.Field(_type => ItemCategory, {
    nullable: false
  })
  category!: ItemCategory;

  flingEffect!: ItemFlingEffect | null;

  @TypeGraphQL.Field(_type => ItemFlingEffect, {
    name: "flingEffect",
    nullable: true
  })
  getFlingEffect(@TypeGraphQL.Root() root: CreateManyAndReturnItem, @TypeGraphQL.Args() args: CreateManyAndReturnItemFlingEffectArgs): ItemFlingEffect | null {
    return root.flingEffect;
  }
}
