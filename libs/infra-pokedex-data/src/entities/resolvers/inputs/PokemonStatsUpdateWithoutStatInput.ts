import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonUpdateOneRequiredWithoutStatsNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutStatsNestedInput";

@TypeGraphQL.InputType("PokemonStatsUpdateWithoutStatInput", {})
export class PokemonStatsUpdateWithoutStatInput {
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
}
