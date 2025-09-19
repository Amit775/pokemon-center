import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagUpdateOneRequiredWithoutFlagMapNestedInput } from "../inputs/ItemFlagUpdateOneRequiredWithoutFlagMapNestedInput";

@TypeGraphQL.InputType("ItemFlagMapUpdateWithoutItemInput", {})
export class ItemFlagMapUpdateWithoutItemInput {
  @TypeGraphQL.Field(_type => ItemFlagUpdateOneRequiredWithoutFlagMapNestedInput, {
    nullable: true
  })
  flag?: ItemFlagUpdateOneRequiredWithoutFlagMapNestedInput | undefined;
}
