import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagsCreateNestedOneWithoutFlagMapInput } from "../inputs/ItemFlagsCreateNestedOneWithoutFlagMapInput";

@TypeGraphQL.InputType("ItemFlagMapCreateWithoutItemInput", {})
export class ItemFlagMapCreateWithoutItemInput {
  @TypeGraphQL.Field(_type => ItemFlagsCreateNestedOneWithoutFlagMapInput, {
    nullable: false
  })
  flag!: ItemFlagsCreateNestedOneWithoutFlagMapInput;
}
