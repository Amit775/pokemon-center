import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionAvgAggregate } from "../outputs/PokemonEvolutionAvgAggregate";
import { PokemonEvolutionCountAggregate } from "../outputs/PokemonEvolutionCountAggregate";
import { PokemonEvolutionMaxAggregate } from "../outputs/PokemonEvolutionMaxAggregate";
import { PokemonEvolutionMinAggregate } from "../outputs/PokemonEvolutionMinAggregate";
import { PokemonEvolutionSumAggregate } from "../outputs/PokemonEvolutionSumAggregate";

@TypeGraphQL.ObjectType("PokemonEvolutionGroupBy", {})
export class PokemonEvolutionGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  evolved_species_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  evolution_trigger_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  trigger_item_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimum_level!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gender_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  location_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  held_item_id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  time_of_day!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  known_move_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  known_move_type_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimum_happiness!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimum_beauty!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimum_affection!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  relative_physical_stats!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  party_species_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  party_type_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  trade_species_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  needs_overworld_rain!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  turn_upside_down!: number;

  @TypeGraphQL.Field(_type => PokemonEvolutionCountAggregate, {
    nullable: true
  })
  _count!: PokemonEvolutionCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonEvolutionAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonEvolutionAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonEvolutionSumAggregate, {
    nullable: true
  })
  _sum!: PokemonEvolutionSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonEvolutionMinAggregate, {
    nullable: true
  })
  _min!: PokemonEvolutionMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonEvolutionMaxAggregate, {
    nullable: true
  })
  _max!: PokemonEvolutionMaxAggregate | null;
}
