import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsCreateWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodsCreateWithoutPokemonMovesInput";
import { PokemonMoveMethodsUpdateWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodsUpdateWithoutPokemonMovesInput";
import { PokemonMoveMethodsWhereInput } from "../inputs/PokemonMoveMethodsWhereInput";

@TypeGraphQL.InputType("PokemonMoveMethodsUpsertWithoutPokemonMovesInput", {})
export class PokemonMoveMethodsUpsertWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsUpdateWithoutPokemonMovesInput, {
    nullable: false
  })
  update!: PokemonMoveMethodsUpdateWithoutPokemonMovesInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsCreateWithoutPokemonMovesInput, {
    nullable: false
  })
  create!: PokemonMoveMethodsCreateWithoutPokemonMovesInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereInput, {
    nullable: true
  })
  where?: PokemonMoveMethodsWhereInput | undefined;
}
