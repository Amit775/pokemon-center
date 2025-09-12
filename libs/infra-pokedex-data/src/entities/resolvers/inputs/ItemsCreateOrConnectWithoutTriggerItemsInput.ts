import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutTriggerItemsInput } from "../inputs/ItemsCreateWithoutTriggerItemsInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateOrConnectWithoutTriggerItemsInput", {})
export class ItemsCreateOrConnectWithoutTriggerItemsInput {
  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutTriggerItemsInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutTriggerItemsInput;
}
