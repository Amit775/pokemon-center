import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput } from "../inputs/PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput";
import { PokemonUpdateOneRequiredWithoutMovesNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutMovesNestedInput";
import { VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput";

@TypeGraphQL.InputType("PokemonMovesUpdateWithoutMoveInput", {})
export class PokemonMovesUpdateWithoutMoveInput {
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

  @TypeGraphQL.Field(_type => PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput, {
    nullable: true
  })
  moveMethod?: PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput | undefined;
}
