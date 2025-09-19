import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemUpdateOneRequiredWithoutFlagMapNestedInput } from "../inputs/ItemUpdateOneRequiredWithoutFlagMapNestedInput";

@TypeGraphQL.InputType("ItemFlagMapUpdateWithoutFlagInput", {})
export class ItemFlagMapUpdateWithoutFlagInput {
  @TypeGraphQL.Field(_type => ItemUpdateOneRequiredWithoutFlagMapNestedInput, {
    nullable: true
  })
  item?: ItemUpdateOneRequiredWithoutFlagMapNestedInput | undefined;
}
