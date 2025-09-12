import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput } from "../inputs/ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput";
import { ItemsUpdateOneRequiredWithoutFlagMapNestedInput } from "../inputs/ItemsUpdateOneRequiredWithoutFlagMapNestedInput";

@TypeGraphQL.InputType("ItemFlagMapUpdateInput", {})
export class ItemFlagMapUpdateInput {
  @TypeGraphQL.Field(_type => ItemsUpdateOneRequiredWithoutFlagMapNestedInput, {
    nullable: true
  })
  item?: ItemsUpdateOneRequiredWithoutFlagMapNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput, {
    nullable: true
  })
  flag?: ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput | undefined;
}
