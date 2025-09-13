import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagsCreateWithoutFlagMapInput } from "../inputs/ItemFlagsCreateWithoutFlagMapInput";
import { ItemFlagsUpdateWithoutFlagMapInput } from "../inputs/ItemFlagsUpdateWithoutFlagMapInput";
import { ItemFlagsWhereInput } from "../inputs/ItemFlagsWhereInput";

@TypeGraphQL.InputType("ItemFlagsUpsertWithoutFlagMapInput", {})
export class ItemFlagsUpsertWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => ItemFlagsUpdateWithoutFlagMapInput, {
    nullable: false
  })
  update!: ItemFlagsUpdateWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => ItemFlagsCreateWithoutFlagMapInput, {
    nullable: false
  })
  create!: ItemFlagsCreateWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => ItemFlagsWhereInput, {
    nullable: true
  })
  where?: ItemFlagsWhereInput | undefined;
}
