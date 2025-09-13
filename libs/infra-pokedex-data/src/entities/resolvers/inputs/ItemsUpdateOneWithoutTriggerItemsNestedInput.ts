import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateOrConnectWithoutTriggerItemsInput } from "../inputs/ItemsCreateOrConnectWithoutTriggerItemsInput";
import { ItemsCreateWithoutTriggerItemsInput } from "../inputs/ItemsCreateWithoutTriggerItemsInput";
import { ItemsUpdateToOneWithWhereWithoutTriggerItemsInput } from "../inputs/ItemsUpdateToOneWithWhereWithoutTriggerItemsInput";
import { ItemsUpsertWithoutTriggerItemsInput } from "../inputs/ItemsUpsertWithoutTriggerItemsInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsUpdateOneWithoutTriggerItemsNestedInput", {})
export class ItemsUpdateOneWithoutTriggerItemsNestedInput {
  @TypeGraphQL.Field(_type => ItemsCreateWithoutTriggerItemsInput, {
    nullable: true
  })
  create?: ItemsCreateWithoutTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateOrConnectWithoutTriggerItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpsertWithoutTriggerItemsInput, {
    nullable: true
  })
  upsert?: ItemsUpsertWithoutTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  disconnect?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  delete?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateToOneWithWhereWithoutTriggerItemsInput, {
    nullable: true
  })
  update?: ItemsUpdateToOneWithWhereWithoutTriggerItemsInput | undefined;
}
