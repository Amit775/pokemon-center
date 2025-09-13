import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatsUpdateWithoutPokemonInput } from "../inputs/PokemonStatsUpdateWithoutPokemonInput";
import { PokemonStatsWhereUniqueInput } from "../inputs/PokemonStatsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatsUpdateWithWhereUniqueWithoutPokemonInput", {})
export class PokemonStatsUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonStatsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonStatsUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonStatsUpdateWithoutPokemonInput;
}
