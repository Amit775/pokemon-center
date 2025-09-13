import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagsCreateOrConnectWithoutFlagMapInput } from "../inputs/MoveFlagsCreateOrConnectWithoutFlagMapInput";
import { MoveFlagsCreateWithoutFlagMapInput } from "../inputs/MoveFlagsCreateWithoutFlagMapInput";
import { MoveFlagsWhereUniqueInput } from "../inputs/MoveFlagsWhereUniqueInput";

@TypeGraphQL.InputType("MoveFlagsCreateNestedOneWithoutFlagMapInput", {})
export class MoveFlagsCreateNestedOneWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => MoveFlagsCreateWithoutFlagMapInput, {
    nullable: true
  })
  create?: MoveFlagsCreateWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagsCreateOrConnectWithoutFlagMapInput, {
    nullable: true
  })
  connectOrCreate?: MoveFlagsCreateOrConnectWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagsWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveFlagsWhereUniqueInput | undefined;
}
