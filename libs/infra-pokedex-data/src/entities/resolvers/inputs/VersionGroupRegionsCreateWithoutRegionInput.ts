import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput";

@TypeGraphQL.InputType("VersionGroupRegionsCreateWithoutRegionInput", {})
export class VersionGroupRegionsCreateWithoutRegionInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput;
}
