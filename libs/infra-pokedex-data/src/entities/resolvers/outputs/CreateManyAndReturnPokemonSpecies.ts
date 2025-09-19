import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnPokemonSpeciesEvolvesFromArgs } from "./args/CreateManyAndReturnPokemonSpeciesEvolvesFromArgs";
import { CreateManyAndReturnPokemonSpeciesHabitatArgs } from "./args/CreateManyAndReturnPokemonSpeciesHabitatArgs";
import { EvolutionChain } from "../../models/EvolutionChain";
import { Generation } from "../../models/Generation";
import { GrowthRates } from "../../models/GrowthRates";
import { PokemonColor } from "../../models/PokemonColor";
import { PokemonHabitat } from "../../models/PokemonHabitat";
import { PokemonShape } from "../../models/PokemonShape";
import { PokemonSpecies } from "../../models/PokemonSpecies";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokemonSpecies", {})
export class CreateManyAndReturnPokemonSpecies {
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

  @TypeGraphQL.Field(_type => Generation, {
    nullable: false
  })
  generation!: Generation;

  @TypeGraphQL.Field(_type => EvolutionChain, {
    nullable: false
  })
  evolutionChain!: EvolutionChain;

  @TypeGraphQL.Field(_type => PokemonColor, {
    nullable: false
  })
  color!: PokemonColor;

  @TypeGraphQL.Field(_type => PokemonShape, {
    nullable: false
  })
  shape!: PokemonShape;

  @TypeGraphQL.Field(_type => GrowthRates, {
    nullable: false
  })
  growthRate!: GrowthRates;

  evolvesFrom!: PokemonSpecies | null;
  habitat!: PokemonHabitat | null;

  @TypeGraphQL.Field(_type => PokemonSpecies, {
    name: "evolvesFrom",
    nullable: true
  })
  getEvolvesFrom(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonSpecies, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonSpeciesEvolvesFromArgs): PokemonSpecies | null {
    return root.evolvesFrom;
  }

  @TypeGraphQL.Field(_type => PokemonHabitat, {
    name: "habitat",
    nullable: true
  })
  getHabitat(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonSpecies, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonSpeciesHabitatArgs): PokemonHabitat | null {
    return root.habitat;
  }
}
