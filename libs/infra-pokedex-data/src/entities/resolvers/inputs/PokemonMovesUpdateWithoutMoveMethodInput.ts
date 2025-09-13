import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateOneRequiredWithoutPokemonMovesNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutPokemonMovesNestedInput";
import { PokemonUpdateOneRequiredWithoutMovesNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutMovesNestedInput";
import { VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput";

@TypeGraphQL.InputType("PokemonMovesUpdateWithoutMoveMethodInput", {})
export class PokemonMovesUpdateWithoutMoveMethodInput {
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

  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutMovesNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutPokemonMovesNestedInput, {
    nullable: true
  })
  move?: MovesUpdateOneRequiredWithoutPokemonMovesNestedInput | undefined;
}
