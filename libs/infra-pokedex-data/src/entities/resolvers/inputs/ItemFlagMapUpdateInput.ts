import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagUpdateOneRequiredWithoutFlagMapNestedInput } from "../inputs/ItemFlagUpdateOneRequiredWithoutFlagMapNestedInput";
import { ItemUpdateOneRequiredWithoutFlagMapNestedInput } from "../inputs/ItemUpdateOneRequiredWithoutFlagMapNestedInput";

@TypeGraphQL.InputType("ItemFlagMapUpdateInput", {})
export class ItemFlagMapUpdateInput {
  @TypeGraphQL.Field(_type => ItemUpdateOneRequiredWithoutFlagMapNestedInput, {
    nullable: true
  })
  item?: ItemUpdateOneRequiredWithoutFlagMapNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagUpdateOneRequiredWithoutFlagMapNestedInput, {
    nullable: true
  })
  flag?: ItemFlagUpdateOneRequiredWithoutFlagMapNestedInput | undefined;
}
