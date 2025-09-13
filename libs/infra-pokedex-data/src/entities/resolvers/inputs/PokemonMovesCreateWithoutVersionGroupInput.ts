import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateNestedOneWithoutPokemonMovesInput } from "../inputs/MovesCreateNestedOneWithoutPokemonMovesInput";
import { PokemonCreateNestedOneWithoutMovesInput } from "../inputs/PokemonCreateNestedOneWithoutMovesInput";
import { PokemonMoveMethodsCreateNestedOneWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodsCreateNestedOneWithoutPokemonMovesInput";

@TypeGraphQL.InputType("PokemonMovesCreateWithoutVersionGroupInput", {})
export class PokemonMovesCreateWithoutVersionGroupInput {
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

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutMovesInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutMovesInput;

  @TypeGraphQL.Field(_type => MovesCreateNestedOneWithoutPokemonMovesInput, {
    nullable: false
  })
  move!: MovesCreateNestedOneWithoutPokemonMovesInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsCreateNestedOneWithoutPokemonMovesInput, {
    nullable: false
  })
  moveMethod!: PokemonMoveMethodsCreateNestedOneWithoutPokemonMovesInput;
}
