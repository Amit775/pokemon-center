import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateOrConnectWithoutVersionGroupsInput } from "../inputs/GenerationsCreateOrConnectWithoutVersionGroupsInput";
import { GenerationsCreateWithoutVersionGroupsInput } from "../inputs/GenerationsCreateWithoutVersionGroupsInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsCreateNestedOneWithoutVersionGroupsInput", {})
export class GenerationsCreateNestedOneWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => GenerationsCreateWithoutVersionGroupsInput, {
    nullable: true
  })
  create?: GenerationsCreateWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateOrConnectWithoutVersionGroupsInput, {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput | undefined;
}
