import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodUpdateOneRequiredWithoutVersionGroupsNestedInput } from "../inputs/PokemonMoveMethodUpdateOneRequiredWithoutVersionGroupsNestedInput";
import { VersionGroupUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput } from "../inputs/VersionGroupUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodUpdateInput", {})
export class VersionGroupPokemonMoveMethodUpdateInput {
  @TypeGraphQL.Field(_type => VersionGroupUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodUpdateOneRequiredWithoutVersionGroupsNestedInput, {
    nullable: true
  })
  moveMethod?: PokemonMoveMethodUpdateOneRequiredWithoutVersionGroupsNestedInput | undefined;
}
