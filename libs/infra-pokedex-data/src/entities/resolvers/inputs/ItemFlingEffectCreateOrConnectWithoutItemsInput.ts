import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectCreateWithoutItemsInput } from "../inputs/ItemFlingEffectCreateWithoutItemsInput";
import { ItemFlingEffectWhereUniqueInput } from "../inputs/ItemFlingEffectWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlingEffectCreateOrConnectWithoutItemsInput", {})
export class ItemFlingEffectCreateOrConnectWithoutItemsInput {
  @TypeGraphQL.Field(_type => ItemFlingEffectWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlingEffectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemFlingEffectCreateWithoutItemsInput, {
    nullable: false
  })
  create!: ItemFlingEffectCreateWithoutItemsInput;
}
