import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateNestedOneWithoutFlagMapInput } from "../inputs/ItemsCreateNestedOneWithoutFlagMapInput";

@TypeGraphQL.InputType("ItemFlagMapCreateWithoutFlagInput", {})
export class ItemFlagMapCreateWithoutFlagInput {
  @TypeGraphQL.Field(_type => ItemsCreateNestedOneWithoutFlagMapInput, {
    nullable: false
  })
  item!: ItemsCreateNestedOneWithoutFlagMapInput;
}
