import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateNestedOneWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupCreateNestedOneWithoutVersionGroupRegionsInput";

@TypeGraphQL.InputType("VersionGroupRegionCreateWithoutRegionInput", {})
export class VersionGroupRegionCreateWithoutRegionInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateNestedOneWithoutVersionGroupRegionsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupCreateNestedOneWithoutVersionGroupRegionsInput;
}
