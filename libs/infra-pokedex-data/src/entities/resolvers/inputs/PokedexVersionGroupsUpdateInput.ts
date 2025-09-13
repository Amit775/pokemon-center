import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput } from "../inputs/PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput";
import { VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput";

@TypeGraphQL.InputType("PokedexVersionGroupsUpdateInput", {})
export class PokedexVersionGroupsUpdateInput {
  @TypeGraphQL.Field(_type => PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput, {
    nullable: true
  })
  pokedex?: PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput | undefined;
}
