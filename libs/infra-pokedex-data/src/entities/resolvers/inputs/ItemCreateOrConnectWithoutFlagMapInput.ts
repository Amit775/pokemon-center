import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutFlagMapInput } from "../inputs/ItemCreateWithoutFlagMapInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateOrConnectWithoutFlagMapInput", {})
export class ItemCreateOrConnectWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: false
  })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutFlagMapInput, {
    nullable: false
  })
  create!: ItemCreateWithoutFlagMapInput;
}
