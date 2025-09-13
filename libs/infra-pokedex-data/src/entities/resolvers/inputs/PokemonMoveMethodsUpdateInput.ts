import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesUpdateManyWithoutMoveMethodNestedInput } from "../inputs/PokemonMovesUpdateManyWithoutMoveMethodNestedInput";
import { VersionGroupPokemonMoveMethodsUpdateManyWithoutMoveMethodNestedInput } from "../inputs/VersionGroupPokemonMoveMethodsUpdateManyWithoutMoveMethodNestedInput";

@TypeGraphQL.InputType("PokemonMoveMethodsUpdateInput", {})
export class PokemonMoveMethodsUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesUpdateManyWithoutMoveMethodNestedInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMovesUpdateManyWithoutMoveMethodNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsUpdateManyWithoutMoveMethodNestedInput, {
    nullable: true
  })
  versionGroups?: VersionGroupPokemonMoveMethodsUpdateManyWithoutMoveMethodNestedInput | undefined;
}
