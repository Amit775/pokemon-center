import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionUpdateOneRequiredWithoutVersionGroupsNestedInput } from "../inputs/RegionUpdateOneRequiredWithoutVersionGroupsNestedInput";
import { VersionGroupUpdateOneRequiredWithoutVersionGroupRegionsNestedInput } from "../inputs/VersionGroupUpdateOneRequiredWithoutVersionGroupRegionsNestedInput";

@TypeGraphQL.InputType("VersionGroupRegionUpdateInput", {})
export class VersionGroupRegionUpdateInput {
  @TypeGraphQL.Field(_type => VersionGroupUpdateOneRequiredWithoutVersionGroupRegionsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupUpdateOneRequiredWithoutVersionGroupRegionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpdateOneRequiredWithoutVersionGroupsNestedInput, {
    nullable: true
  })
  region?: RegionUpdateOneRequiredWithoutVersionGroupsNestedInput | undefined;
}
