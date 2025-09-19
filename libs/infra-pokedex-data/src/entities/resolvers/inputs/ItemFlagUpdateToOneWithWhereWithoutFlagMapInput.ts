import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagUpdateWithoutFlagMapInput } from "../inputs/ItemFlagUpdateWithoutFlagMapInput";
import { ItemFlagWhereInput } from "../inputs/ItemFlagWhereInput";

@TypeGraphQL.InputType("ItemFlagUpdateToOneWithWhereWithoutFlagMapInput", {})
export class ItemFlagUpdateToOneWithWhereWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => ItemFlagWhereInput, {
    nullable: true
  })
  where?: ItemFlagWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagUpdateWithoutFlagMapInput, {
    nullable: false
  })
  data!: ItemFlagUpdateWithoutFlagMapInput;
}
