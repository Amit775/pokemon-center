import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateOrConnectWithoutFlagMapInput } from "../inputs/ItemCreateOrConnectWithoutFlagMapInput";
import { ItemCreateWithoutFlagMapInput } from "../inputs/ItemCreateWithoutFlagMapInput";
import { ItemUpdateToOneWithWhereWithoutFlagMapInput } from "../inputs/ItemUpdateToOneWithWhereWithoutFlagMapInput";
import { ItemUpsertWithoutFlagMapInput } from "../inputs/ItemUpsertWithoutFlagMapInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemUpdateOneRequiredWithoutFlagMapNestedInput", {})
export class ItemUpdateOneRequiredWithoutFlagMapNestedInput {
  @TypeGraphQL.Field(_type => ItemCreateWithoutFlagMapInput, {
    nullable: true
  })
  create?: ItemCreateWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => ItemCreateOrConnectWithoutFlagMapInput, {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpsertWithoutFlagMapInput, {
    nullable: true
  })
  upsert?: ItemUpsertWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateToOneWithWhereWithoutFlagMapInput, {
    nullable: true
  })
  update?: ItemUpdateToOneWithWhereWithoutFlagMapInput | undefined;
}
