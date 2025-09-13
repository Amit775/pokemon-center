import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesAvgAggregate } from "../outputs/PokemonSpeciesAvgAggregate";
import { PokemonSpeciesCountAggregate } from "../outputs/PokemonSpeciesCountAggregate";
import { PokemonSpeciesMaxAggregate } from "../outputs/PokemonSpeciesMaxAggregate";
import { PokemonSpeciesMinAggregate } from "../outputs/PokemonSpeciesMinAggregate";
import { PokemonSpeciesSumAggregate } from "../outputs/PokemonSpeciesSumAggregate";

@TypeGraphQL.ObjectType("PokemonSpeciesGroupBy", {})
export class PokemonSpeciesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  evolves_from_species_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  evolution_chain_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  color_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  shape_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  habitat_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  gender_rate!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  capture_rate!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  base_happiness!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_baby!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  hatch_counter!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  has_gender_differences!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  growth_rate_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  forms_switchable!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_legendary!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_mythical!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  conquest_order!: number | null;

  @TypeGraphQL.Field(_type => PokemonSpeciesCountAggregate, {
    nullable: true
  })
  _count!: PokemonSpeciesCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonSpeciesAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonSpeciesAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonSpeciesSumAggregate, {
    nullable: true
  })
  _sum!: PokemonSpeciesSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonSpeciesMinAggregate, {
    nullable: true
  })
  _min!: PokemonSpeciesMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonSpeciesMaxAggregate, {
    nullable: true
  })
  _max!: PokemonSpeciesMaxAggregate | null;
}
