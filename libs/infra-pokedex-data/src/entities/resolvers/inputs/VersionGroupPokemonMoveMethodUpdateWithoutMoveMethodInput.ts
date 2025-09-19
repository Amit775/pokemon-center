import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput } from "../inputs/VersionGroupUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodUpdateWithoutMoveMethodInput", {})
export class VersionGroupPokemonMoveMethodUpdateWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => VersionGroupUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput | undefined;
}
