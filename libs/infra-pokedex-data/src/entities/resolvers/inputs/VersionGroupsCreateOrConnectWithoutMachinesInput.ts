import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateWithoutMachinesInput } from "../inputs/VersionGroupsCreateWithoutMachinesInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsCreateOrConnectWithoutMachinesInput", {})
export class VersionGroupsCreateOrConnectWithoutMachinesInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutMachinesInput, {
    nullable: false
  })
  create!: VersionGroupsCreateWithoutMachinesInput;
}
