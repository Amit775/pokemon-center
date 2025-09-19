import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateNestedOneWithoutVersionGroupsInput } from "../inputs/RegionCreateNestedOneWithoutVersionGroupsInput";

@TypeGraphQL.InputType("VersionGroupRegionCreateWithoutVersionGroupInput", {})
export class VersionGroupRegionCreateWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => RegionCreateNestedOneWithoutVersionGroupsInput, {
    nullable: false
  })
  region!: RegionCreateNestedOneWithoutVersionGroupsInput;
}
