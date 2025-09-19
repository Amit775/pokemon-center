import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutTriggerItemsInput } from "../inputs/ItemCreateWithoutTriggerItemsInput";
import { ItemUpdateWithoutTriggerItemsInput } from "../inputs/ItemUpdateWithoutTriggerItemsInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemUpsertWithoutTriggerItemsInput", {})
export class ItemUpsertWithoutTriggerItemsInput {
  @TypeGraphQL.Field(_type => ItemUpdateWithoutTriggerItemsInput, {
    nullable: false
  })
  update!: ItemUpdateWithoutTriggerItemsInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutTriggerItemsInput, {
    nullable: false
  })
  create!: ItemCreateWithoutTriggerItemsInput;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;
}
