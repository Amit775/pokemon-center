import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateOneRequiredWithoutFlagMapNestedInput } from "../inputs/ItemsUpdateOneRequiredWithoutFlagMapNestedInput";

@TypeGraphQL.InputType("ItemFlagMapUpdateWithoutFlagInput", {})
export class ItemFlagMapUpdateWithoutFlagInput {
  @TypeGraphQL.Field(_type => ItemsUpdateOneRequiredWithoutFlagMapNestedInput, {
    nullable: true
  })
  item?: ItemsUpdateOneRequiredWithoutFlagMapNestedInput | undefined;
}
