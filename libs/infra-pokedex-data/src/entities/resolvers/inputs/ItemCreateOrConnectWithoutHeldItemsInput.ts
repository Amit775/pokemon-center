import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutHeldItemsInput } from "../inputs/ItemCreateWithoutHeldItemsInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateOrConnectWithoutHeldItemsInput", {})
export class ItemCreateOrConnectWithoutHeldItemsInput {
  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: false
  })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutHeldItemsInput, {
    nullable: false
  })
  create!: ItemCreateWithoutHeldItemsInput;
}
