import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateWithoutPokemonStatsInput } from "../inputs/StatsCreateWithoutPokemonStatsInput";
import { StatsUpdateWithoutPokemonStatsInput } from "../inputs/StatsUpdateWithoutPokemonStatsInput";
import { StatsWhereInput } from "../inputs/StatsWhereInput";

@TypeGraphQL.InputType("StatsUpsertWithoutPokemonStatsInput", {})
export class StatsUpsertWithoutPokemonStatsInput {
  @TypeGraphQL.Field(_type => StatsUpdateWithoutPokemonStatsInput, {
    nullable: false
  })
  update!: StatsUpdateWithoutPokemonStatsInput;

  @TypeGraphQL.Field(_type => StatsCreateWithoutPokemonStatsInput, {
    nullable: false
  })
  create!: StatsCreateWithoutPokemonStatsInput;

  @TypeGraphQL.Field(_type => StatsWhereInput, {
    nullable: true
  })
  where?: StatsWhereInput | undefined;
}
