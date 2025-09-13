import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectsUpdateWithoutItemsInput } from "../inputs/ItemFlingEffectsUpdateWithoutItemsInput";
import { ItemFlingEffectsWhereInput } from "../inputs/ItemFlingEffectsWhereInput";

@TypeGraphQL.InputType("ItemFlingEffectsUpdateToOneWithWhereWithoutItemsInput", {})
export class ItemFlingEffectsUpdateToOneWithWhereWithoutItemsInput {
  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereInput, {
    nullable: true
  })
  where?: ItemFlingEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsUpdateWithoutItemsInput, {
    nullable: false
  })
  data!: ItemFlingEffectsUpdateWithoutItemsInput;
}
