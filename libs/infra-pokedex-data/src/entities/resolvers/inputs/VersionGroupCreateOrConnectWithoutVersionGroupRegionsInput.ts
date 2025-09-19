import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupCreateWithoutVersionGroupRegionsInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupCreateOrConnectWithoutVersionGroupRegionsInput", {})
export class VersionGroupCreateOrConnectWithoutVersionGroupRegionsInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutVersionGroupRegionsInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutVersionGroupRegionsInput;
}
