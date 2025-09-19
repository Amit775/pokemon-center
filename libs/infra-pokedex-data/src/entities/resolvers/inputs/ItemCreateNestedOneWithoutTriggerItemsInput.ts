import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateOrConnectWithoutTriggerItemsInput } from "../inputs/ItemCreateOrConnectWithoutTriggerItemsInput";
import { ItemCreateWithoutTriggerItemsInput } from "../inputs/ItemCreateWithoutTriggerItemsInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateNestedOneWithoutTriggerItemsInput", {})
export class ItemCreateNestedOneWithoutTriggerItemsInput {
  @TypeGraphQL.Field(_type => ItemCreateWithoutTriggerItemsInput, {
    nullable: true
  })
  create?: ItemCreateWithoutTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCreateOrConnectWithoutTriggerItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemWhereUniqueInput | undefined;
}
