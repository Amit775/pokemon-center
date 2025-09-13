import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateNestedOneWithoutVersionGroupsInput } from "../inputs/RegionsCreateNestedOneWithoutVersionGroupsInput";

@TypeGraphQL.InputType("VersionGroupRegionsCreateWithoutVersionGroupInput", {})
export class VersionGroupRegionsCreateWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => RegionsCreateNestedOneWithoutVersionGroupsInput, {
    nullable: false
  })
  region!: RegionsCreateNestedOneWithoutVersionGroupsInput;
}
