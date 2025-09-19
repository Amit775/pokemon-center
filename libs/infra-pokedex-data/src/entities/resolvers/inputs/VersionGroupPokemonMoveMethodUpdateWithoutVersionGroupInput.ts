import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodUpdateOneRequiredWithoutVersionGroupsNestedInput } from "../inputs/PokemonMoveMethodUpdateOneRequiredWithoutVersionGroupsNestedInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodUpdateWithoutVersionGroupInput", {})
export class VersionGroupPokemonMoveMethodUpdateWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodUpdateOneRequiredWithoutVersionGroupsNestedInput, {
    nullable: true
  })
  moveMethod?: PokemonMoveMethodUpdateOneRequiredWithoutVersionGroupsNestedInput | undefined;
}
