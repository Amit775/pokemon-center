import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateOrConnectWithoutTriggerItemsInput } from "../inputs/ItemsCreateOrConnectWithoutTriggerItemsInput";
import { ItemsCreateWithoutTriggerItemsInput } from "../inputs/ItemsCreateWithoutTriggerItemsInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateNestedOneWithoutTriggerItemsInput", {})
export class ItemsCreateNestedOneWithoutTriggerItemsInput {
  @TypeGraphQL.Field(_type => ItemsCreateWithoutTriggerItemsInput, {
    nullable: true
  })
  create?: ItemsCreateWithoutTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateOrConnectWithoutTriggerItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput | undefined;
}
