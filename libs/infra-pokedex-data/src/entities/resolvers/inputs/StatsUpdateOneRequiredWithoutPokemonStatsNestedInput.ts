import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateOrConnectWithoutPokemonStatsInput } from "../inputs/StatsCreateOrConnectWithoutPokemonStatsInput";
import { StatsCreateWithoutPokemonStatsInput } from "../inputs/StatsCreateWithoutPokemonStatsInput";
import { StatsUpdateToOneWithWhereWithoutPokemonStatsInput } from "../inputs/StatsUpdateToOneWithWhereWithoutPokemonStatsInput";
import { StatsUpsertWithoutPokemonStatsInput } from "../inputs/StatsUpsertWithoutPokemonStatsInput";
import { StatsWhereUniqueInput } from "../inputs/StatsWhereUniqueInput";

@TypeGraphQL.InputType("StatsUpdateOneRequiredWithoutPokemonStatsNestedInput", {})
export class StatsUpdateOneRequiredWithoutPokemonStatsNestedInput {
  @TypeGraphQL.Field(_type => StatsCreateWithoutPokemonStatsInput, {
    nullable: true
  })
  create?: StatsCreateWithoutPokemonStatsInput | undefined;

  @TypeGraphQL.Field(_type => StatsCreateOrConnectWithoutPokemonStatsInput, {
    nullable: true
  })
  connectOrCreate?: StatsCreateOrConnectWithoutPokemonStatsInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpsertWithoutPokemonStatsInput, {
    nullable: true
  })
  upsert?: StatsUpsertWithoutPokemonStatsInput | undefined;

  @TypeGraphQL.Field(_type => StatsWhereUniqueInput, {
    nullable: true
  })
  connect?: StatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateToOneWithWhereWithoutPokemonStatsInput, {
    nullable: true
  })
  update?: StatsUpdateToOneWithWhereWithoutPokemonStatsInput | undefined;
}
