import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateNestedOneWithoutVersionGroupsInput } from "../inputs/RegionsCreateNestedOneWithoutVersionGroupsInput";
import { VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput";

@TypeGraphQL.InputType("VersionGroupRegionsCreateInput", {})
export class VersionGroupRegionsCreateInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput;

  @TypeGraphQL.Field(_type => RegionsCreateNestedOneWithoutVersionGroupsInput, {
    nullable: false
  })
  region!: RegionsCreateNestedOneWithoutVersionGroupsInput;
}
