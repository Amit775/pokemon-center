import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateOrConnectWithoutTriggerItemsInput } from "../inputs/ItemCreateOrConnectWithoutTriggerItemsInput";
import { ItemCreateWithoutTriggerItemsInput } from "../inputs/ItemCreateWithoutTriggerItemsInput";
import { ItemUpdateToOneWithWhereWithoutTriggerItemsInput } from "../inputs/ItemUpdateToOneWithWhereWithoutTriggerItemsInput";
import { ItemUpsertWithoutTriggerItemsInput } from "../inputs/ItemUpsertWithoutTriggerItemsInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemUpdateOneWithoutTriggerItemsNestedInput", {})
export class ItemUpdateOneWithoutTriggerItemsNestedInput {
  @TypeGraphQL.Field(_type => ItemCreateWithoutTriggerItemsInput, {
    nullable: true
  })
  create?: ItemCreateWithoutTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCreateOrConnectWithoutTriggerItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpsertWithoutTriggerItemsInput, {
    nullable: true
  })
  upsert?: ItemUpsertWithoutTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  disconnect?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  delete?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateToOneWithWhereWithoutTriggerItemsInput, {
    nullable: true
  })
  update?: ItemUpdateToOneWithWhereWithoutTriggerItemsInput | undefined;
}
