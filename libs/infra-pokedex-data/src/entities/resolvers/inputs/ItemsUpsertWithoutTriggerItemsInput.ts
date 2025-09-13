import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutTriggerItemsInput } from "../inputs/ItemsCreateWithoutTriggerItemsInput";
import { ItemsUpdateWithoutTriggerItemsInput } from "../inputs/ItemsUpdateWithoutTriggerItemsInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsUpsertWithoutTriggerItemsInput", {})
export class ItemsUpsertWithoutTriggerItemsInput {
  @TypeGraphQL.Field(_type => ItemsUpdateWithoutTriggerItemsInput, {
    nullable: false
  })
  update!: ItemsUpdateWithoutTriggerItemsInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutTriggerItemsInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutTriggerItemsInput;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;
}
