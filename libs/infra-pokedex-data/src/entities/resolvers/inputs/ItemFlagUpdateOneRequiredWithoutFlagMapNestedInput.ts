import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagCreateOrConnectWithoutFlagMapInput } from "../inputs/ItemFlagCreateOrConnectWithoutFlagMapInput";
import { ItemFlagCreateWithoutFlagMapInput } from "../inputs/ItemFlagCreateWithoutFlagMapInput";
import { ItemFlagUpdateToOneWithWhereWithoutFlagMapInput } from "../inputs/ItemFlagUpdateToOneWithWhereWithoutFlagMapInput";
import { ItemFlagUpsertWithoutFlagMapInput } from "../inputs/ItemFlagUpsertWithoutFlagMapInput";
import { ItemFlagWhereUniqueInput } from "../inputs/ItemFlagWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlagUpdateOneRequiredWithoutFlagMapNestedInput", {})
export class ItemFlagUpdateOneRequiredWithoutFlagMapNestedInput {
  @TypeGraphQL.Field(_type => ItemFlagCreateWithoutFlagMapInput, {
    nullable: true
  })
  create?: ItemFlagCreateWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagCreateOrConnectWithoutFlagMapInput, {
    nullable: true
  })
  connectOrCreate?: ItemFlagCreateOrConnectWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagUpsertWithoutFlagMapInput, {
    nullable: true
  })
  upsert?: ItemFlagUpsertWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemFlagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagUpdateToOneWithWhereWithoutFlagMapInput, {
    nullable: true
  })
  update?: ItemFlagUpdateToOneWithWhereWithoutFlagMapInput | undefined;
}
