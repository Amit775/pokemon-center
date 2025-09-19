import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedOneWithoutPokemonMovesInput } from "../inputs/MoveCreateNestedOneWithoutPokemonMovesInput";
import { PokemonCreateNestedOneWithoutMovesInput } from "../inputs/PokemonCreateNestedOneWithoutMovesInput";
import { PokemonMoveMethodCreateNestedOneWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodCreateNestedOneWithoutPokemonMovesInput";

@TypeGraphQL.InputType("PokemonMoveCreateWithoutVersionGroupInput", {})
export class PokemonMoveCreateWithoutVersionGroupInput {
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

  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutPokemonMovesInput, {
    nullable: false
  })
  move!: MoveCreateNestedOneWithoutPokemonMovesInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodCreateNestedOneWithoutPokemonMovesInput, {
    nullable: false
  })
  moveMethod!: PokemonMoveMethodCreateNestedOneWithoutPokemonMovesInput;
}
