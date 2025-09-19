import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateNestedOneWithoutVersionGroupsInput } from "../inputs/RegionCreateNestedOneWithoutVersionGroupsInput";
import { VersionGroupCreateNestedOneWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupCreateNestedOneWithoutVersionGroupRegionsInput";

@TypeGraphQL.InputType("VersionGroupRegionCreateInput", {})
export class VersionGroupRegionCreateInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateNestedOneWithoutVersionGroupRegionsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupCreateNestedOneWithoutVersionGroupRegionsInput;

  @TypeGraphQL.Field(_type => RegionCreateNestedOneWithoutVersionGroupsInput, {
    nullable: false
  })
  region!: RegionCreateNestedOneWithoutVersionGroupsInput;
}
