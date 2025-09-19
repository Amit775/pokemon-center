import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupUpdateOneRequiredWithoutVersionGroupRegionsNestedInput } from "../inputs/VersionGroupUpdateOneRequiredWithoutVersionGroupRegionsNestedInput";

@TypeGraphQL.InputType("VersionGroupRegionUpdateWithoutRegionInput", {})
export class VersionGroupRegionUpdateWithoutRegionInput {
  @TypeGraphQL.Field(_type => VersionGroupUpdateOneRequiredWithoutVersionGroupRegionsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupUpdateOneRequiredWithoutVersionGroupRegionsNestedInput | undefined;
}
