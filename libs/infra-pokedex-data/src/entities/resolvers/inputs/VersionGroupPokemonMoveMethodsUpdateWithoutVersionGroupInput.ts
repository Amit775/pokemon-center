import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput } from "../inputs/PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsUpdateWithoutVersionGroupInput", {})
export class VersionGroupPokemonMoveMethodsUpdateWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput, {
    nullable: true
  })
  moveMethod?: PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput | undefined;
}
