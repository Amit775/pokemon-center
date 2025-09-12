import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput } from "../inputs/RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput";

@TypeGraphQL.InputType("VersionGroupRegionsUpdateWithoutVersionGroupInput", {})
export class VersionGroupRegionsUpdateWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput, {
    nullable: true
  })
  region?: RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput | undefined;
}
