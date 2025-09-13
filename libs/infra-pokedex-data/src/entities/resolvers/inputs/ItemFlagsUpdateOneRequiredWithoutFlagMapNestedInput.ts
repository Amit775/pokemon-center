import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagsCreateOrConnectWithoutFlagMapInput } from "../inputs/ItemFlagsCreateOrConnectWithoutFlagMapInput";
import { ItemFlagsCreateWithoutFlagMapInput } from "../inputs/ItemFlagsCreateWithoutFlagMapInput";
import { ItemFlagsUpdateToOneWithWhereWithoutFlagMapInput } from "../inputs/ItemFlagsUpdateToOneWithWhereWithoutFlagMapInput";
import { ItemFlagsUpsertWithoutFlagMapInput } from "../inputs/ItemFlagsUpsertWithoutFlagMapInput";
import { ItemFlagsWhereUniqueInput } from "../inputs/ItemFlagsWhereUniqueInput";

@TypeGraphQL.InputType("ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput", {})
export class ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput {
  @TypeGraphQL.Field(_type => ItemFlagsCreateWithoutFlagMapInput, {
    nullable: true
  })
  create?: ItemFlagsCreateWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsCreateOrConnectWithoutFlagMapInput, {
    nullable: true
  })
  connectOrCreate?: ItemFlagsCreateOrConnectWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsUpsertWithoutFlagMapInput, {
    nullable: true
  })
  upsert?: ItemFlagsUpsertWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemFlagsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsUpdateToOneWithWhereWithoutFlagMapInput, {
    nullable: true
  })
  update?: ItemFlagsUpdateToOneWithWhereWithoutFlagMapInput | undefined;
}
