import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsUpdateWithoutPokemonStatsInput } from "../inputs/StatsUpdateWithoutPokemonStatsInput";
import { StatsWhereInput } from "../inputs/StatsWhereInput";

@TypeGraphQL.InputType("StatsUpdateToOneWithWhereWithoutPokemonStatsInput", {})
export class StatsUpdateToOneWithWhereWithoutPokemonStatsInput {
  @TypeGraphQL.Field(_type => StatsWhereInput, {
    nullable: true
  })
  where?: StatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateWithoutPokemonStatsInput, {
    nullable: false
  })
  data!: StatsUpdateWithoutPokemonStatsInput;
}
