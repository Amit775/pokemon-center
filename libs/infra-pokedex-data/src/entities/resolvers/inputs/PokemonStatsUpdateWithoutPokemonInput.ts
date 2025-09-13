import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsUpdateOneRequiredWithoutPokemonStatsNestedInput } from "../inputs/StatsUpdateOneRequiredWithoutPokemonStatsNestedInput";

@TypeGraphQL.InputType("PokemonStatsUpdateWithoutPokemonInput", {})
export class PokemonStatsUpdateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  base_stat?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  effort?: number | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateOneRequiredWithoutPokemonStatsNestedInput, {
    nullable: true
  })
  stat?: StatsUpdateOneRequiredWithoutPokemonStatsNestedInput | undefined;
}
