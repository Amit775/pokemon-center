import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateWithoutPokemonStatsInput } from "../inputs/StatsCreateWithoutPokemonStatsInput";
import { StatsWhereUniqueInput } from "../inputs/StatsWhereUniqueInput";

@TypeGraphQL.InputType("StatsCreateOrConnectWithoutPokemonStatsInput", {})
export class StatsCreateOrConnectWithoutPokemonStatsInput {
  @TypeGraphQL.Field(_type => StatsWhereUniqueInput, {
    nullable: false
  })
  where!: StatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => StatsCreateWithoutPokemonStatsInput, {
    nullable: false
  })
  create!: StatsCreateWithoutPokemonStatsInput;
}
