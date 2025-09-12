import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput";
import { VersionGroupsCreateWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupsCreateWithoutVersionGroupRegionsInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput", {})
export class VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutVersionGroupRegionsInput, {
    nullable: true
  })
  create?: VersionGroupsCreateWithoutVersionGroupRegionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupsWhereUniqueInput | undefined;
}
