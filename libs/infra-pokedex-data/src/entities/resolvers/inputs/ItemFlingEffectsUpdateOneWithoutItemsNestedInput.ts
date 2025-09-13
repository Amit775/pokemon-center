import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectsCreateOrConnectWithoutItemsInput } from "../inputs/ItemFlingEffectsCreateOrConnectWithoutItemsInput";
import { ItemFlingEffectsCreateWithoutItemsInput } from "../inputs/ItemFlingEffectsCreateWithoutItemsInput";
import { ItemFlingEffectsUpdateToOneWithWhereWithoutItemsInput } from "../inputs/ItemFlingEffectsUpdateToOneWithWhereWithoutItemsInput";
import { ItemFlingEffectsUpsertWithoutItemsInput } from "../inputs/ItemFlingEffectsUpsertWithoutItemsInput";
import { ItemFlingEffectsWhereInput } from "../inputs/ItemFlingEffectsWhereInput";
import { ItemFlingEffectsWhereUniqueInput } from "../inputs/ItemFlingEffectsWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlingEffectsUpdateOneWithoutItemsNestedInput", {})
export class ItemFlingEffectsUpdateOneWithoutItemsNestedInput {
  @TypeGraphQL.Field(_type => ItemFlingEffectsCreateWithoutItemsInput, {
    nullable: true
  })
  create?: ItemFlingEffectsCreateWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsCreateOrConnectWithoutItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemFlingEffectsCreateOrConnectWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsUpsertWithoutItemsInput, {
    nullable: true
  })
  upsert?: ItemFlingEffectsUpsertWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereInput, {
    nullable: true
  })
  disconnect?: ItemFlingEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereInput, {
    nullable: true
  })
  delete?: ItemFlingEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemFlingEffectsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsUpdateToOneWithWhereWithoutItemsInput, {
    nullable: true
  })
  update?: ItemFlingEffectsUpdateToOneWithWhereWithoutItemsInput | undefined;
}
