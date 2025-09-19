import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateOrConnectWithoutMachinesInput } from "../inputs/VersionGroupCreateOrConnectWithoutMachinesInput";
import { VersionGroupCreateWithoutMachinesInput } from "../inputs/VersionGroupCreateWithoutMachinesInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupCreateNestedOneWithoutMachinesInput", {})
export class VersionGroupCreateNestedOneWithoutMachinesInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutMachinesInput, {
    nullable: true
  })
  create?: VersionGroupCreateWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupCreateOrConnectWithoutMachinesInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupCreateOrConnectWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupWhereUniqueInput | undefined;
}
