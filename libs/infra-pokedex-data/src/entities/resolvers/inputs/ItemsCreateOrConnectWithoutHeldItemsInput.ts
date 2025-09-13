import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutHeldItemsInput } from "../inputs/ItemsCreateWithoutHeldItemsInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateOrConnectWithoutHeldItemsInput", {})
export class ItemsCreateOrConnectWithoutHeldItemsInput {
  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutHeldItemsInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutHeldItemsInput;
}
