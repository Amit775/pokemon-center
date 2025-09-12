import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PokemonUpdateOneRequiredWithoutStatsNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutStatsNestedInput";
import { StatsUpdateOneRequiredWithoutPokemonStatsNestedInput } from "../inputs/StatsUpdateOneRequiredWithoutPokemonStatsNestedInput";

@TypeGraphQL.InputType("PokemonStatsUpdateInput", {})
export class PokemonStatsUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  base_stat?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  effort?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutStatsNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutStatsNestedInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateOneRequiredWithoutPokemonStatsNestedInput, {
    nullable: true
  })
  stat?: StatsUpdateOneRequiredWithoutPokemonStatsNestedInput | undefined;
}
