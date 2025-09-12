import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnItemsFlingEffectArgs } from "./args/CreateManyAndReturnItemsFlingEffectArgs";
import { ItemCategories } from "../../models/ItemCategories";
import { ItemFlingEffects } from "../../models/ItemFlingEffects";

@TypeGraphQL.ObjectType("CreateManyAndReturnItems", {})
export class CreateManyAndReturnItems {
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

  @TypeGraphQL.Field(_type => ItemCategories, {
    nullable: false
  })
  category!: ItemCategories;

  flingEffect!: ItemFlingEffects | null;

  @TypeGraphQL.Field(_type => ItemFlingEffects, {
    name: "flingEffect",
    nullable: true
  })
  getFlingEffect(@TypeGraphQL.Root() root: CreateManyAndReturnItems, @TypeGraphQL.Args() args: CreateManyAndReturnItemsFlingEffectArgs): ItemFlingEffects | null {
    return root.flingEffect;
  }
}
