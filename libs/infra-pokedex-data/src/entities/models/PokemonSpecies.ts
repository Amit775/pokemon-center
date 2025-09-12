import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EvolutionChains } from "../models/EvolutionChains";
import { Generations } from "../models/Generations";
import { GrowthRates } from "../models/GrowthRates";
import { Pokemon } from "../models/Pokemon";
import { PokemonColors } from "../models/PokemonColors";
import { PokemonDexNumbers } from "../models/PokemonDexNumbers";
import { PokemonEggGroups } from "../models/PokemonEggGroups";
import { PokemonEvolution } from "../models/PokemonEvolution";
import { PokemonHabitats } from "../models/PokemonHabitats";
import { PokemonShapes } from "../models/PokemonShapes";
import { PokemonSpeciesCount } from "../resolvers/outputs/PokemonSpeciesCount";

@TypeGraphQL.ObjectType("PokemonSpecies", {})
export class PokemonSpecies {
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
  evolves_from_species_id?: number | null;

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
  habitat_id?: number | null;

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
  conquest_order?: number | null;

  generation?: Generations;

  evolvesFrom?: PokemonSpecies | null;

  evolvesTo?: PokemonSpecies[];

  evolutionChain?: EvolutionChains;

  color?: PokemonColors;

  shape?: PokemonShapes;

  habitat?: PokemonHabitats | null;

  growthRate?: GrowthRates;

  pokemon?: Pokemon[];

  eggGroups?: PokemonEggGroups[];

  dexNumbers?: PokemonDexNumbers[];

  evolution?: PokemonEvolution[];

  partySpecies?: PokemonEvolution[];

  tradeSpecies?: PokemonEvolution[];

  @TypeGraphQL.Field(_type => PokemonSpeciesCount, {
    nullable: true
  })
  _count?: PokemonSpeciesCount | null;
}
