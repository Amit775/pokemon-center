import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagsUpdateWithoutFlagMapInput } from "../inputs/ItemFlagsUpdateWithoutFlagMapInput";
import { ItemFlagsWhereInput } from "../inputs/ItemFlagsWhereInput";

@TypeGraphQL.InputType("ItemFlagsUpdateToOneWithWhereWithoutFlagMapInput", {})
export class ItemFlagsUpdateToOneWithWhereWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => ItemFlagsWhereInput, {
    nullable: true
  })
  where?: ItemFlagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsUpdateWithoutFlagMapInput, {
    nullable: false
  })
  data!: ItemFlagsUpdateWithoutFlagMapInput;
}
