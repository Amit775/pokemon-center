import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagsCreateWithoutFlagMapInput } from "../inputs/ItemFlagsCreateWithoutFlagMapInput";
import { ItemFlagsWhereUniqueInput } from "../inputs/ItemFlagsWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlagsCreateOrConnectWithoutFlagMapInput", {})
export class ItemFlagsCreateOrConnectWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => ItemFlagsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemFlagsCreateWithoutFlagMapInput, {
    nullable: false
  })
  create!: ItemFlagsCreateWithoutFlagMapInput;
}
