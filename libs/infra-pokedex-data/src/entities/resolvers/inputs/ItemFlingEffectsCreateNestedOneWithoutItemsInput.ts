import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectsCreateOrConnectWithoutItemsInput } from "../inputs/ItemFlingEffectsCreateOrConnectWithoutItemsInput";
import { ItemFlingEffectsCreateWithoutItemsInput } from "../inputs/ItemFlingEffectsCreateWithoutItemsInput";
import { ItemFlingEffectsWhereUniqueInput } from "../inputs/ItemFlingEffectsWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlingEffectsCreateNestedOneWithoutItemsInput", {})
export class ItemFlingEffectsCreateNestedOneWithoutItemsInput {
  @TypeGraphQL.Field(_type => ItemFlingEffectsCreateWithoutItemsInput, {
    nullable: true
  })
  create?: ItemFlingEffectsCreateWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsCreateOrConnectWithoutItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemFlingEffectsCreateOrConnectWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemFlingEffectsWhereUniqueInput | undefined;
}
