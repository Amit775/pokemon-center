import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectCreateWithoutItemsInput } from "../inputs/ItemFlingEffectCreateWithoutItemsInput";
import { ItemFlingEffectUpdateWithoutItemsInput } from "../inputs/ItemFlingEffectUpdateWithoutItemsInput";
import { ItemFlingEffectWhereInput } from "../inputs/ItemFlingEffectWhereInput";

@TypeGraphQL.InputType("ItemFlingEffectUpsertWithoutItemsInput", {})
export class ItemFlingEffectUpsertWithoutItemsInput {
  @TypeGraphQL.Field(_type => ItemFlingEffectUpdateWithoutItemsInput, {
    nullable: false
  })
  update!: ItemFlingEffectUpdateWithoutItemsInput;

  @TypeGraphQL.Field(_type => ItemFlingEffectCreateWithoutItemsInput, {
    nullable: false
  })
  create!: ItemFlingEffectCreateWithoutItemsInput;

  @TypeGraphQL.Field(_type => ItemFlingEffectWhereInput, {
    nullable: true
  })
  where?: ItemFlingEffectWhereInput | undefined;
}
