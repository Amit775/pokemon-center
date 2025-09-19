import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagCreateWithoutFlagMapInput } from "../inputs/ItemFlagCreateWithoutFlagMapInput";
import { ItemFlagWhereUniqueInput } from "../inputs/ItemFlagWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlagCreateOrConnectWithoutFlagMapInput", {})
export class ItemFlagCreateOrConnectWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => ItemFlagWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlagWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemFlagCreateWithoutFlagMapInput, {
    nullable: false
  })
  create!: ItemFlagCreateWithoutFlagMapInput;
}
