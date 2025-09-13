import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateNestedOneWithoutPokemonStatsInput } from "../inputs/StatsCreateNestedOneWithoutPokemonStatsInput";

@TypeGraphQL.InputType("PokemonStatsCreateWithoutPokemonInput", {})
export class PokemonStatsCreateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  base_stat!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  effort!: number;

  @TypeGraphQL.Field(_type => StatsCreateNestedOneWithoutPokemonStatsInput, {
    nullable: false
  })
  stat!: StatsCreateNestedOneWithoutPokemonStatsInput;
}
