import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutTriggerItemsInput } from "../inputs/ItemCreateWithoutTriggerItemsInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateOrConnectWithoutTriggerItemsInput", {})
export class ItemCreateOrConnectWithoutTriggerItemsInput {
  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: false
  })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutTriggerItemsInput, {
    nullable: false
  })
  create!: ItemCreateWithoutTriggerItemsInput;
}
