import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectCreateOrConnectWithoutItemsInput } from "../inputs/ItemFlingEffectCreateOrConnectWithoutItemsInput";
import { ItemFlingEffectCreateWithoutItemsInput } from "../inputs/ItemFlingEffectCreateWithoutItemsInput";
import { ItemFlingEffectUpdateToOneWithWhereWithoutItemsInput } from "../inputs/ItemFlingEffectUpdateToOneWithWhereWithoutItemsInput";
import { ItemFlingEffectUpsertWithoutItemsInput } from "../inputs/ItemFlingEffectUpsertWithoutItemsInput";
import { ItemFlingEffectWhereInput } from "../inputs/ItemFlingEffectWhereInput";
import { ItemFlingEffectWhereUniqueInput } from "../inputs/ItemFlingEffectWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlingEffectUpdateOneWithoutItemsNestedInput", {})
export class ItemFlingEffectUpdateOneWithoutItemsNestedInput {
  @TypeGraphQL.Field(_type => ItemFlingEffectCreateWithoutItemsInput, {
    nullable: true
  })
  create?: ItemFlingEffectCreateWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectCreateOrConnectWithoutItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemFlingEffectCreateOrConnectWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectUpsertWithoutItemsInput, {
    nullable: true
  })
  upsert?: ItemFlingEffectUpsertWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectWhereInput, {
    nullable: true
  })
  disconnect?: ItemFlingEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectWhereInput, {
    nullable: true
  })
  delete?: ItemFlingEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemFlingEffectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectUpdateToOneWithWhereWithoutItemsInput, {
    nullable: true
  })
  update?: ItemFlingEffectUpdateToOneWithWhereWithoutItemsInput | undefined;
}
