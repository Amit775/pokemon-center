import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateOrConnectWithoutPokemonStatsInput } from "../inputs/StatsCreateOrConnectWithoutPokemonStatsInput";
import { StatsCreateWithoutPokemonStatsInput } from "../inputs/StatsCreateWithoutPokemonStatsInput";
import { StatsWhereUniqueInput } from "../inputs/StatsWhereUniqueInput";

@TypeGraphQL.InputType("StatsCreateNestedOneWithoutPokemonStatsInput", {})
export class StatsCreateNestedOneWithoutPokemonStatsInput {
  @TypeGraphQL.Field(_type => StatsCreateWithoutPokemonStatsInput, {
    nullable: true
  })
  create?: StatsCreateWithoutPokemonStatsInput | undefined;

  @TypeGraphQL.Field(_type => StatsCreateOrConnectWithoutPokemonStatsInput, {
    nullable: true
  })
  connectOrCreate?: StatsCreateOrConnectWithoutPokemonStatsInput | undefined;

  @TypeGraphQL.Field(_type => StatsWhereUniqueInput, {
    nullable: true
  })
  connect?: StatsWhereUniqueInput | undefined;
}
