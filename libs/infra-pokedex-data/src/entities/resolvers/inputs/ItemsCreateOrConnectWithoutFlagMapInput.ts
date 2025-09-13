import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutFlagMapInput } from "../inputs/ItemsCreateWithoutFlagMapInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateOrConnectWithoutFlagMapInput", {})
export class ItemsCreateOrConnectWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutFlagMapInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutFlagMapInput;
}
