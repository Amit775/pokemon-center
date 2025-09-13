import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatsUpdateWithoutStatInput } from "../inputs/PokemonStatsUpdateWithoutStatInput";
import { PokemonStatsWhereUniqueInput } from "../inputs/PokemonStatsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatsUpdateWithWhereUniqueWithoutStatInput", {})
export class PokemonStatsUpdateWithWhereUniqueWithoutStatInput {
  @TypeGraphQL.Field(_type => PokemonStatsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonStatsUpdateWithoutStatInput, {
    nullable: false
  })
  data!: PokemonStatsUpdateWithoutStatInput;
}
