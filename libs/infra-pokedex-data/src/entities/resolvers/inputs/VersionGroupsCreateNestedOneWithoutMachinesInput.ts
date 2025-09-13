import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateOrConnectWithoutMachinesInput } from "../inputs/VersionGroupsCreateOrConnectWithoutMachinesInput";
import { VersionGroupsCreateWithoutMachinesInput } from "../inputs/VersionGroupsCreateWithoutMachinesInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsCreateNestedOneWithoutMachinesInput", {})
export class VersionGroupsCreateNestedOneWithoutMachinesInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutMachinesInput, {
    nullable: true
  })
  create?: VersionGroupsCreateWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateOrConnectWithoutMachinesInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupsCreateOrConnectWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupsWhereUniqueInput | undefined;
}
