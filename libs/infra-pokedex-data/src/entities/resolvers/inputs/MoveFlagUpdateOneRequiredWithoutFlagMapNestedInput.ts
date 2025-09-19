import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagCreateOrConnectWithoutFlagMapInput } from "../inputs/MoveFlagCreateOrConnectWithoutFlagMapInput";
import { MoveFlagCreateWithoutFlagMapInput } from "../inputs/MoveFlagCreateWithoutFlagMapInput";
import { MoveFlagUpdateToOneWithWhereWithoutFlagMapInput } from "../inputs/MoveFlagUpdateToOneWithWhereWithoutFlagMapInput";
import { MoveFlagUpsertWithoutFlagMapInput } from "../inputs/MoveFlagUpsertWithoutFlagMapInput";
import { MoveFlagWhereUniqueInput } from "../inputs/MoveFlagWhereUniqueInput";

@TypeGraphQL.InputType("MoveFlagUpdateOneRequiredWithoutFlagMapNestedInput", {})
export class MoveFlagUpdateOneRequiredWithoutFlagMapNestedInput {
  @TypeGraphQL.Field(_type => MoveFlagCreateWithoutFlagMapInput, {
    nullable: true
  })
  create?: MoveFlagCreateWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagCreateOrConnectWithoutFlagMapInput, {
    nullable: true
  })
  connectOrCreate?: MoveFlagCreateOrConnectWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagUpsertWithoutFlagMapInput, {
    nullable: true
  })
  upsert?: MoveFlagUpsertWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveFlagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagUpdateToOneWithWhereWithoutFlagMapInput, {
    nullable: true
  })
  update?: MoveFlagUpdateToOneWithWhereWithoutFlagMapInput | undefined;
}
