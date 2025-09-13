import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatsCreateWithoutStatInput } from "../inputs/PokemonStatsCreateWithoutStatInput";
import { PokemonStatsUpdateWithoutStatInput } from "../inputs/PokemonStatsUpdateWithoutStatInput";
import { PokemonStatsWhereUniqueInput } from "../inputs/PokemonStatsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatsUpsertWithWhereUniqueWithoutStatInput", {})
export class PokemonStatsUpsertWithWhereUniqueWithoutStatInput {
  @TypeGraphQL.Field(_type => PokemonStatsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonStatsUpdateWithoutStatInput, {
    nullable: false
  })
  update!: PokemonStatsUpdateWithoutStatInput;

  @TypeGraphQL.Field(_type => PokemonStatsCreateWithoutStatInput, {
    nullable: false
  })
  create!: PokemonStatsCreateWithoutStatInput;
}
