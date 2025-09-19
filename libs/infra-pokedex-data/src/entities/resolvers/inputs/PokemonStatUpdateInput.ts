import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonUpdateOneRequiredWithoutStatsNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutStatsNestedInput";
import { StatUpdateOneRequiredWithoutPokemonStatsNestedInput } from "../inputs/StatUpdateOneRequiredWithoutPokemonStatsNestedInput";

@TypeGraphQL.InputType("PokemonStatUpdateInput", {})
export class PokemonStatUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  base_stat?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  effort?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutStatsNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutStatsNestedInput | undefined;

  @TypeGraphQL.Field(_type => StatUpdateOneRequiredWithoutPokemonStatsNestedInput, {
    nullable: true
  })
  stat?: StatUpdateOneRequiredWithoutPokemonStatsNestedInput | undefined;
}
