import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput } from "../inputs/VersionGroupUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput";

@TypeGraphQL.InputType("PokedexVersionGroupUpdateWithoutPokedexInput", {})
export class PokedexVersionGroupUpdateWithoutPokedexInput {
  @TypeGraphQL.Field(_type => VersionGroupUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput | undefined;
}
