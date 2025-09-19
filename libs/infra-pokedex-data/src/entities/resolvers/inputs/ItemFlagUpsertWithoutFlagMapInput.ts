import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagCreateWithoutFlagMapInput } from "../inputs/ItemFlagCreateWithoutFlagMapInput";
import { ItemFlagUpdateWithoutFlagMapInput } from "../inputs/ItemFlagUpdateWithoutFlagMapInput";
import { ItemFlagWhereInput } from "../inputs/ItemFlagWhereInput";

@TypeGraphQL.InputType("ItemFlagUpsertWithoutFlagMapInput", {})
export class ItemFlagUpsertWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => ItemFlagUpdateWithoutFlagMapInput, {
    nullable: false
  })
  update!: ItemFlagUpdateWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => ItemFlagCreateWithoutFlagMapInput, {
    nullable: false
  })
  create!: ItemFlagCreateWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => ItemFlagWhereInput, {
    nullable: true
  })
  where?: ItemFlagWhereInput | undefined;
}
