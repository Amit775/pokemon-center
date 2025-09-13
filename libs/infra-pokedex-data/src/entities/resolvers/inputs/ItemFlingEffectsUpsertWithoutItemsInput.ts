import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectsCreateWithoutItemsInput } from "../inputs/ItemFlingEffectsCreateWithoutItemsInput";
import { ItemFlingEffectsUpdateWithoutItemsInput } from "../inputs/ItemFlingEffectsUpdateWithoutItemsInput";
import { ItemFlingEffectsWhereInput } from "../inputs/ItemFlingEffectsWhereInput";

@TypeGraphQL.InputType("ItemFlingEffectsUpsertWithoutItemsInput", {})
export class ItemFlingEffectsUpsertWithoutItemsInput {
  @TypeGraphQL.Field(_type => ItemFlingEffectsUpdateWithoutItemsInput, {
    nullable: false
  })
  update!: ItemFlingEffectsUpdateWithoutItemsInput;

  @TypeGraphQL.Field(_type => ItemFlingEffectsCreateWithoutItemsInput, {
    nullable: false
  })
  create!: ItemFlingEffectsCreateWithoutItemsInput;

  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereInput, {
    nullable: true
  })
  where?: ItemFlingEffectsWhereInput | undefined;
}
