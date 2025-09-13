import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateWithoutPokemonInput } from "../inputs/PokemonMovesCreateWithoutPokemonInput";
import { PokemonMovesUpdateWithoutPokemonInput } from "../inputs/PokemonMovesUpdateWithoutPokemonInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesUpsertWithWhereUniqueWithoutPokemonInput", {})
export class PokemonMovesUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonMovesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMovesUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: PokemonMovesUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonMovesCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonMovesCreateWithoutPokemonInput;
}
