import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedOneWithoutPokemonMovesInput } from "../inputs/MoveCreateNestedOneWithoutPokemonMovesInput";
import { PokemonMoveMethodCreateNestedOneWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodCreateNestedOneWithoutPokemonMovesInput";
import { VersionGroupCreateNestedOneWithoutPokemonMovesInput } from "../inputs/VersionGroupCreateNestedOneWithoutPokemonMovesInput";

@TypeGraphQL.InputType("PokemonMoveCreateWithoutPokemonInput", {})
export class PokemonMoveCreateWithoutPokemonInput {
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

  @TypeGraphQL.Field(_type => VersionGroupCreateNestedOneWithoutPokemonMovesInput, {
    nullable: false
  })
  versionGroup!: VersionGroupCreateNestedOneWithoutPokemonMovesInput;

  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutPokemonMovesInput, {
    nullable: false
  })
  move!: MoveCreateNestedOneWithoutPokemonMovesInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodCreateNestedOneWithoutPokemonMovesInput, {
    nullable: false
  })
  moveMethod!: PokemonMoveMethodCreateNestedOneWithoutPokemonMovesInput;
}
