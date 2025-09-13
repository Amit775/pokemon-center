import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput } from "../inputs/ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput";

@TypeGraphQL.InputType("ItemFlagMapUpdateWithoutItemInput", {})
export class ItemFlagMapUpdateWithoutItemInput {
  @TypeGraphQL.Field(_type => ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput, {
    nullable: true
  })
  flag?: ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput | undefined;
}
