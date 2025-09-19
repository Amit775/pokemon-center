import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateNestedOneWithoutFlagMapInput } from "../inputs/ItemCreateNestedOneWithoutFlagMapInput";
import { ItemFlagCreateNestedOneWithoutFlagMapInput } from "../inputs/ItemFlagCreateNestedOneWithoutFlagMapInput";

@TypeGraphQL.InputType("ItemFlagMapCreateInput", {})
export class ItemFlagMapCreateInput {
  @TypeGraphQL.Field(_type => ItemCreateNestedOneWithoutFlagMapInput, {
    nullable: false
  })
  item!: ItemCreateNestedOneWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => ItemFlagCreateNestedOneWithoutFlagMapInput, {
    nullable: false
  })
  flag!: ItemFlagCreateNestedOneWithoutFlagMapInput;
}
