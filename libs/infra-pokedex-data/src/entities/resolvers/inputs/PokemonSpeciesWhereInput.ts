import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsRelationFilter } from "../inputs/EvolutionChainsRelationFilter";
import { GenerationsRelationFilter } from "../inputs/GenerationsRelationFilter";
import { GrowthRatesRelationFilter } from "../inputs/GrowthRatesRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PokemonColorsRelationFilter } from "../inputs/PokemonColorsRelationFilter";
import { PokemonDexNumbersListRelationFilter } from "../inputs/PokemonDexNumbersListRelationFilter";
import { PokemonEggGroupsListRelationFilter } from "../inputs/PokemonEggGroupsListRelationFilter";
import { PokemonEvolutionListRelationFilter } from "../inputs/PokemonEvolutionListRelationFilter";
import { PokemonHabitatsNullableRelationFilter } from "../inputs/PokemonHabitatsNullableRelationFilter";
import { PokemonListRelationFilter } from "../inputs/PokemonListRelationFilter";
import { PokemonShapesRelationFilter } from "../inputs/PokemonShapesRelationFilter";
import { PokemonSpeciesListRelationFilter } from "../inputs/PokemonSpeciesListRelationFilter";
import { PokemonSpeciesNullableRelationFilter } from "../inputs/PokemonSpeciesNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PokemonSpeciesWhereInput", {})
export class PokemonSpeciesWhereInput {
  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereInput], {
    nullable: true
  })
  AND?: PokemonSpeciesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereInput], {
    nullable: true
  })
  OR?: PokemonSpeciesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereInput], {
    nullable: true
  })
  NOT?: PokemonSpeciesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  generation_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  evolves_from_species_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  evolution_chain_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  color_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  shape_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  habitat_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  gender_rate?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  capture_rate?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  base_happiness?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_baby?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  hatch_counter?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  has_gender_differences?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  growth_rate_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  forms_switchable?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_legendary?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_mythical?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  order?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  conquest_order?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => GenerationsRelationFilter, {
    nullable: true
  })
  generation?: GenerationsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesNullableRelationFilter, {
    nullable: true
  })
  evolvesFrom?: PokemonSpeciesNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesListRelationFilter, {
    nullable: true
  })
  evolvesTo?: PokemonSpeciesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsRelationFilter, {
    nullable: true
  })
  evolutionChain?: EvolutionChainsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsRelationFilter, {
    nullable: true
  })
  color?: PokemonColorsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesRelationFilter, {
    nullable: true
  })
  shape?: PokemonShapesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsNullableRelationFilter, {
    nullable: true
  })
  habitat?: PokemonHabitatsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesRelationFilter, {
    nullable: true
  })
  growthRate?: GrowthRatesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonListRelationFilter, {
    nullable: true
  })
  pokemon?: PokemonListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsListRelationFilter, {
    nullable: true
  })
  eggGroups?: PokemonEggGroupsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersListRelationFilter, {
    nullable: true
  })
  dexNumbers?: PokemonDexNumbersListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  evolution?: PokemonEvolutionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  partySpecies?: PokemonEvolutionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  tradeSpecies?: PokemonEvolutionListRelationFilter | undefined;
}
