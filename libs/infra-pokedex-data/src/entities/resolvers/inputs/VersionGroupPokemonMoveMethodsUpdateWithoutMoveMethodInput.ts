import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsUpdateWithoutMoveMethodInput", {})
export class VersionGroupPokemonMoveMethodsUpdateWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput | undefined;
}
