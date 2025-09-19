import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemUpdateWithoutTriggerItemsInput } from "../inputs/ItemUpdateWithoutTriggerItemsInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemUpdateToOneWithWhereWithoutTriggerItemsInput", {})
export class ItemUpdateToOneWithWhereWithoutTriggerItemsInput {
  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateWithoutTriggerItemsInput, {
    nullable: false
  })
  data!: ItemUpdateWithoutTriggerItemsInput;
}
