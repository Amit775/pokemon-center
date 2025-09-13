import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateWithoutTriggerItemsInput } from "../inputs/ItemsUpdateWithoutTriggerItemsInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsUpdateToOneWithWhereWithoutTriggerItemsInput", {})
export class ItemsUpdateToOneWithWhereWithoutTriggerItemsInput {
  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateWithoutTriggerItemsInput, {
    nullable: false
  })
  data!: ItemsUpdateWithoutTriggerItemsInput;
}
