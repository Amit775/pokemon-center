import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateOrConnectWithoutVersionsInput } from "../inputs/VersionGroupsCreateOrConnectWithoutVersionsInput";
import { VersionGroupsCreateWithoutVersionsInput } from "../inputs/VersionGroupsCreateWithoutVersionsInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsCreateNestedOneWithoutVersionsInput", {})
export class VersionGroupsCreateNestedOneWithoutVersionsInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutVersionsInput, {
    nullable: true
  })
  create?: VersionGroupsCreateWithoutVersionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateOrConnectWithoutVersionsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupsCreateOrConnectWithoutVersionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupsWhereUniqueInput | undefined;
}
