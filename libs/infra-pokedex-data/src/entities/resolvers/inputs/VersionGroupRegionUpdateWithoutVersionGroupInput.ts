import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionUpdateOneRequiredWithoutVersionGroupsNestedInput } from "../inputs/RegionUpdateOneRequiredWithoutVersionGroupsNestedInput";

@TypeGraphQL.InputType("VersionGroupRegionUpdateWithoutVersionGroupInput", {})
export class VersionGroupRegionUpdateWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => RegionUpdateOneRequiredWithoutVersionGroupsNestedInput, {
    nullable: true
  })
  region?: RegionUpdateOneRequiredWithoutVersionGroupsNestedInput | undefined;
}
