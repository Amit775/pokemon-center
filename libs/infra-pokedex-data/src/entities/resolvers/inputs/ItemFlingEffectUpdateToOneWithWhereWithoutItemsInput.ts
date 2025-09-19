import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectUpdateWithoutItemsInput } from "../inputs/ItemFlingEffectUpdateWithoutItemsInput";
import { ItemFlingEffectWhereInput } from "../inputs/ItemFlingEffectWhereInput";

@TypeGraphQL.InputType("ItemFlingEffectUpdateToOneWithWhereWithoutItemsInput", {})
export class ItemFlingEffectUpdateToOneWithWhereWithoutItemsInput {
  @TypeGraphQL.Field(_type => ItemFlingEffectWhereInput, {
    nullable: true
  })
  where?: ItemFlingEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectUpdateWithoutItemsInput, {
    nullable: false
  })
  data!: ItemFlingEffectUpdateWithoutItemsInput;
}
