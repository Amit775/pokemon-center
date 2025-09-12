import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput";

@TypeGraphQL.InputType("VersionGroupRegionsUpdateWithoutRegionInput", {})
export class VersionGroupRegionsUpdateWithoutRegionInput {
  @TypeGraphQL.Field(_type => VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput | undefined;
}
