import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateNestedOneWithoutFlagMapInput } from "../inputs/ItemCreateNestedOneWithoutFlagMapInput";

@TypeGraphQL.InputType("ItemFlagMapCreateWithoutFlagInput", {})
export class ItemFlagMapCreateWithoutFlagInput {
  @TypeGraphQL.Field(_type => ItemCreateNestedOneWithoutFlagMapInput, {
    nullable: false
  })
  item!: ItemCreateNestedOneWithoutFlagMapInput;
}
