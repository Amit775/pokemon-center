import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatsAvgAggregate } from "../outputs/PokemonStatsAvgAggregate";
import { PokemonStatsCountAggregate } from "../outputs/PokemonStatsCountAggregate";
import { PokemonStatsMaxAggregate } from "../outputs/PokemonStatsMaxAggregate";
import { PokemonStatsMinAggregate } from "../outputs/PokemonStatsMinAggregate";
import { PokemonStatsSumAggregate } from "../outputs/PokemonStatsSumAggregate";

@TypeGraphQL.ObjectType("PokemonStatsGroupBy", {})
export class PokemonStatsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stat_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  base_stat!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  effort!: number;

  @TypeGraphQL.Field(_type => PokemonStatsCountAggregate, {
    nullable: true
  })
  _count!: PokemonStatsCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonStatsAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonStatsAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonStatsSumAggregate, {
    nullable: true
  })
  _sum!: PokemonStatsSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonStatsMinAggregate, {
    nullable: true
  })
  _min!: PokemonStatsMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonStatsMaxAggregate, {
    nullable: true
  })
  _max!: PokemonStatsMaxAggregate | null;
}
