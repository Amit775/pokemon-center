import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StatsUpdateOneRequiredWithoutPokemonStatsNestedInput } from "../inputs/StatsUpdateOneRequiredWithoutPokemonStatsNestedInput";

@TypeGraphQL.InputType("PokemonStatsUpdateWithoutPokemonInput", {})
export class PokemonStatsUpdateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  base_stat?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  effort?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateOneRequiredWithoutPokemonStatsNestedInput, {
    nullable: true
  })
  stat?: StatsUpdateOneRequiredWithoutPokemonStatsNestedInput | undefined;
}
