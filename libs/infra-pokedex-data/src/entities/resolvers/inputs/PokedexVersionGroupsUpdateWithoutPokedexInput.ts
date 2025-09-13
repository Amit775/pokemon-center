import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput";

@TypeGraphQL.InputType("PokedexVersionGroupsUpdateWithoutPokedexInput", {})
export class PokedexVersionGroupsUpdateWithoutPokedexInput {
  @TypeGraphQL.Field(_type => VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput | undefined;
}
