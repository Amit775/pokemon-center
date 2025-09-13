import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput } from "../inputs/RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput";
import { VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput";

@TypeGraphQL.InputType("VersionGroupRegionsUpdateInput", {})
export class VersionGroupRegionsUpdateInput {
  @TypeGraphQL.Field(_type => VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput, {
    nullable: true
  })
  region?: RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput | undefined;
}
