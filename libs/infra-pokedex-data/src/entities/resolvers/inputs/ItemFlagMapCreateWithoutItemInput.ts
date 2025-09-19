import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagCreateNestedOneWithoutFlagMapInput } from "../inputs/ItemFlagCreateNestedOneWithoutFlagMapInput";

@TypeGraphQL.InputType("ItemFlagMapCreateWithoutItemInput", {})
export class ItemFlagMapCreateWithoutItemInput {
  @TypeGraphQL.Field(_type => ItemFlagCreateNestedOneWithoutFlagMapInput, {
    nullable: false
  })
  flag!: ItemFlagCreateNestedOneWithoutFlagMapInput;
}
