import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagsCreateNestedOneWithoutFlagMapInput } from "../inputs/ItemFlagsCreateNestedOneWithoutFlagMapInput";
import { ItemsCreateNestedOneWithoutFlagMapInput } from "../inputs/ItemsCreateNestedOneWithoutFlagMapInput";

@TypeGraphQL.InputType("ItemFlagMapCreateInput", {})
export class ItemFlagMapCreateInput {
  @TypeGraphQL.Field(_type => ItemsCreateNestedOneWithoutFlagMapInput, {
    nullable: false
  })
  item!: ItemsCreateNestedOneWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => ItemFlagsCreateNestedOneWithoutFlagMapInput, {
    nullable: false
  })
  flag!: ItemFlagsCreateNestedOneWithoutFlagMapInput;
}
