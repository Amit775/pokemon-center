import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatsCreateWithoutPokemonInput } from "../inputs/PokemonStatsCreateWithoutPokemonInput";
import { PokemonStatsUpdateWithoutPokemonInput } from "../inputs/PokemonStatsUpdateWithoutPokemonInput";
import { PokemonStatsWhereUniqueInput } from "../inputs/PokemonStatsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatsUpsertWithWhereUniqueWithoutPokemonInput", {})
export class PokemonStatsUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonStatsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonStatsUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: PokemonStatsUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonStatsCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonStatsCreateWithoutPokemonInput;
}
