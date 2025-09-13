import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateOrConnectWithoutFlagMapInput } from "../inputs/ItemsCreateOrConnectWithoutFlagMapInput";
import { ItemsCreateWithoutFlagMapInput } from "../inputs/ItemsCreateWithoutFlagMapInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateNestedOneWithoutFlagMapInput", {})
export class ItemsCreateNestedOneWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => ItemsCreateWithoutFlagMapInput, {
    nullable: true
  })
  create?: ItemsCreateWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateOrConnectWithoutFlagMapInput, {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput | undefined;
}
