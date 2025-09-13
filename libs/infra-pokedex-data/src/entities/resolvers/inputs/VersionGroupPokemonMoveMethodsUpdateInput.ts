import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput } from "../inputs/PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput";
import { VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsUpdateInput", {})
export class VersionGroupPokemonMoveMethodsUpdateInput {
  @TypeGraphQL.Field(_type => VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput, {
    nullable: true
  })
  moveMethod?: PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput | undefined;
}
