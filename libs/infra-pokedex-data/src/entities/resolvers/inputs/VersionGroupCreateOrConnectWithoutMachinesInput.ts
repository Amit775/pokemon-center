import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutMachinesInput } from "../inputs/VersionGroupCreateWithoutMachinesInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupCreateOrConnectWithoutMachinesInput", {})
export class VersionGroupCreateOrConnectWithoutMachinesInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutMachinesInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutMachinesInput;
}
