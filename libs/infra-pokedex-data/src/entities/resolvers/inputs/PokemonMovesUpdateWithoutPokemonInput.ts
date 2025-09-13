import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateOneRequiredWithoutPokemonMovesNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutPokemonMovesNestedInput";
import { PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput } from "../inputs/PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput";
import { VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput";

@TypeGraphQL.InputType("PokemonMovesUpdateWithoutPokemonInput", {})
export class PokemonMovesUpdateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  level?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  mastery?: number | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutPokemonMovesNestedInput, {
    nullable: true
  })
  move?: MovesUpdateOneRequiredWithoutPokemonMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput, {
    nullable: true
  })
  moveMethod?: PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput | undefined;
}
