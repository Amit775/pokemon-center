import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectCreateOrConnectWithoutItemsInput } from "../inputs/ItemFlingEffectCreateOrConnectWithoutItemsInput";
import { ItemFlingEffectCreateWithoutItemsInput } from "../inputs/ItemFlingEffectCreateWithoutItemsInput";
import { ItemFlingEffectWhereUniqueInput } from "../inputs/ItemFlingEffectWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlingEffectCreateNestedOneWithoutItemsInput", {})
export class ItemFlingEffectCreateNestedOneWithoutItemsInput {
  @TypeGraphQL.Field(_type => ItemFlingEffectCreateWithoutItemsInput, {
    nullable: true
  })
  create?: ItemFlingEffectCreateWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectCreateOrConnectWithoutItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemFlingEffectCreateOrConnectWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemFlingEffectWhereUniqueInput | undefined;
}
