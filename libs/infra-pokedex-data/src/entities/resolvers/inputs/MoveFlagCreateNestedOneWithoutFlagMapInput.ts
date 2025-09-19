import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagCreateOrConnectWithoutFlagMapInput } from "../inputs/MoveFlagCreateOrConnectWithoutFlagMapInput";
import { MoveFlagCreateWithoutFlagMapInput } from "../inputs/MoveFlagCreateWithoutFlagMapInput";
import { MoveFlagWhereUniqueInput } from "../inputs/MoveFlagWhereUniqueInput";

@TypeGraphQL.InputType("MoveFlagCreateNestedOneWithoutFlagMapInput", {})
export class MoveFlagCreateNestedOneWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => MoveFlagCreateWithoutFlagMapInput, {
    nullable: true
  })
  create?: MoveFlagCreateWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagCreateOrConnectWithoutFlagMapInput, {
    nullable: true
  })
  connectOrCreate?: MoveFlagCreateOrConnectWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveFlagWhereUniqueInput | undefined;
}
