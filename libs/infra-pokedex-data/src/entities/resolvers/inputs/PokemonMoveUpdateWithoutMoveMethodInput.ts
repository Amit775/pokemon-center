import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateOneRequiredWithoutPokemonMovesNestedInput } from "../inputs/MoveUpdateOneRequiredWithoutPokemonMovesNestedInput";
import { PokemonUpdateOneRequiredWithoutMovesNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutMovesNestedInput";
import { VersionGroupUpdateOneRequiredWithoutPokemonMovesNestedInput } from "../inputs/VersionGroupUpdateOneRequiredWithoutPokemonMovesNestedInput";

@TypeGraphQL.InputType("PokemonMoveUpdateWithoutMoveMethodInput", {})
export class PokemonMoveUpdateWithoutMoveMethodInput {
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

  @TypeGraphQL.Field(_type => VersionGroupUpdateOneRequiredWithoutPokemonMovesNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupUpdateOneRequiredWithoutPokemonMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateOneRequiredWithoutPokemonMovesNestedInput, {
    nullable: true
  })
  move?: MoveUpdateOneRequiredWithoutPokemonMovesNestedInput | undefined;
}
