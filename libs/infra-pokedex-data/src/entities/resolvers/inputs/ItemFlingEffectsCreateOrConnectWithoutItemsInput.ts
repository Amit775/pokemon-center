import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectsCreateWithoutItemsInput } from "../inputs/ItemFlingEffectsCreateWithoutItemsInput";
import { ItemFlingEffectsWhereUniqueInput } from "../inputs/ItemFlingEffectsWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlingEffectsCreateOrConnectWithoutItemsInput", {})
export class ItemFlingEffectsCreateOrConnectWithoutItemsInput {
  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlingEffectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemFlingEffectsCreateWithoutItemsInput, {
    nullable: false
  })
  create!: ItemFlingEffectsCreateWithoutItemsInput;
}
