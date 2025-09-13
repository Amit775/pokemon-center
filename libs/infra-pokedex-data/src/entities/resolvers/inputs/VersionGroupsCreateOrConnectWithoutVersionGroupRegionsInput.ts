import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupsCreateWithoutVersionGroupRegionsInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput", {})
export class VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutVersionGroupRegionsInput, {
    nullable: false
  })
  create!: VersionGroupsCreateWithoutVersionGroupRegionsInput;
}
