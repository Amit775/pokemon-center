import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateNestedManyWithoutMoveMethodInput } from "../inputs/PokemonMovesCreateNestedManyWithoutMoveMethodInput";

@TypeGraphQL.InputType("PokemonMoveMethodsCreateWithoutVersionGroupsInput", {})
export class PokemonMoveMethodsCreateWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => PokemonMovesCreateNestedManyWithoutMoveMethodInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMovesCreateNestedManyWithoutMoveMethodInput | undefined;
}
