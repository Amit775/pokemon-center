import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateOrConnectWithoutFlagMapInput } from "../inputs/ItemCreateOrConnectWithoutFlagMapInput";
import { ItemCreateWithoutFlagMapInput } from "../inputs/ItemCreateWithoutFlagMapInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateNestedOneWithoutFlagMapInput", {})
export class ItemCreateNestedOneWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => ItemCreateWithoutFlagMapInput, {
    nullable: true
  })
  create?: ItemCreateWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => ItemCreateOrConnectWithoutFlagMapInput, {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemWhereUniqueInput | undefined;
}
