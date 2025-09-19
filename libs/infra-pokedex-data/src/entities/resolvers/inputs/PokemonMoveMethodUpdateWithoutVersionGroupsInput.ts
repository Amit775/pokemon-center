import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveUpdateManyWithoutMoveMethodNestedInput } from "../inputs/PokemonMoveUpdateManyWithoutMoveMethodNestedInput";

@TypeGraphQL.InputType("PokemonMoveMethodUpdateWithoutVersionGroupsInput", {})
export class PokemonMoveMethodUpdateWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveUpdateManyWithoutMoveMethodNestedInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMoveUpdateManyWithoutMoveMethodNestedInput | undefined;
}
