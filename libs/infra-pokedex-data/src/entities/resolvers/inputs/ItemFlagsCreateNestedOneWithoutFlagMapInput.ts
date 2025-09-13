import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagsCreateOrConnectWithoutFlagMapInput } from "../inputs/ItemFlagsCreateOrConnectWithoutFlagMapInput";
import { ItemFlagsCreateWithoutFlagMapInput } from "../inputs/ItemFlagsCreateWithoutFlagMapInput";
import { ItemFlagsWhereUniqueInput } from "../inputs/ItemFlagsWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlagsCreateNestedOneWithoutFlagMapInput", {})
export class ItemFlagsCreateNestedOneWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => ItemFlagsCreateWithoutFlagMapInput, {
    nullable: true
  })
  create?: ItemFlagsCreateWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsCreateOrConnectWithoutFlagMapInput, {
    nullable: true
  })
  connectOrCreate?: ItemFlagsCreateOrConnectWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemFlagsWhereUniqueInput | undefined;
}
