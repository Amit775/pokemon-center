import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodCreateWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodCreateWithoutPokemonMovesInput";
import { PokemonMoveMethodUpdateWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodUpdateWithoutPokemonMovesInput";
import { PokemonMoveMethodWhereInput } from "../inputs/PokemonMoveMethodWhereInput";

@TypeGraphQL.InputType("PokemonMoveMethodUpsertWithoutPokemonMovesInput", {})
export class PokemonMoveMethodUpsertWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodUpdateWithoutPokemonMovesInput, {
    nullable: false
  })
  update!: PokemonMoveMethodUpdateWithoutPokemonMovesInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodCreateWithoutPokemonMovesInput, {
    nullable: false
  })
  create!: PokemonMoveMethodCreateWithoutPokemonMovesInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereInput, {
    nullable: true
  })
  where?: PokemonMoveMethodWhereInput | undefined;
}
