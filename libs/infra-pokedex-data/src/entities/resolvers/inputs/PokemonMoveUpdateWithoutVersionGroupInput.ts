import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateOneRequiredWithoutPokemonMovesNestedInput } from "../inputs/MoveUpdateOneRequiredWithoutPokemonMovesNestedInput";
import { PokemonMoveMethodUpdateOneRequiredWithoutPokemonMovesNestedInput } from "../inputs/PokemonMoveMethodUpdateOneRequiredWithoutPokemonMovesNestedInput";
import { PokemonUpdateOneRequiredWithoutMovesNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutMovesNestedInput";

@TypeGraphQL.InputType("PokemonMoveUpdateWithoutVersionGroupInput", {})
export class PokemonMoveUpdateWithoutVersionGroupInput {
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

  @TypeGraphQL.Field(_type => MoveUpdateOneRequiredWithoutPokemonMovesNestedInput, {
    nullable: true
  })
  move?: MoveUpdateOneRequiredWithoutPokemonMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodUpdateOneRequiredWithoutPokemonMovesNestedInput, {
    nullable: true
  })
  moveMethod?: PokemonMoveMethodUpdateOneRequiredWithoutPokemonMovesNestedInput | undefined;
}
