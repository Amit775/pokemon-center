import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsOrderByWithRelationInput } from "../inputs/EvolutionChainsOrderByWithRelationInput";
import { GenerationsOrderByWithRelationInput } from "../inputs/GenerationsOrderByWithRelationInput";
import { GrowthRatesOrderByWithRelationInput } from "../inputs/GrowthRatesOrderByWithRelationInput";
import { PokemonColorsOrderByWithRelationInput } from "../inputs/PokemonColorsOrderByWithRelationInput";
import { PokemonDexNumbersOrderByRelationAggregateInput } from "../inputs/PokemonDexNumbersOrderByRelationAggregateInput";
import { PokemonEggGroupsOrderByRelationAggregateInput } from "../inputs/PokemonEggGroupsOrderByRelationAggregateInput";
import { PokemonEvolutionOrderByRelationAggregateInput } from "../inputs/PokemonEvolutionOrderByRelationAggregateInput";
import { PokemonHabitatsOrderByWithRelationInput } from "../inputs/PokemonHabitatsOrderByWithRelationInput";
import { PokemonOrderByRelationAggregateInput } from "../inputs/PokemonOrderByRelationAggregateInput";
import { PokemonShapesOrderByWithRelationInput } from "../inputs/PokemonShapesOrderByWithRelationInput";
import { PokemonSpeciesOrderByRelationAggregateInput } from "../inputs/PokemonSpeciesOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonSpeciesOrderByWithRelationInput", {})
export class PokemonSpeciesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  generation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  evolves_from_species_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  evolution_chain_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  color_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shape_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  habitat_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gender_rate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  capture_rate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  base_happiness?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_baby?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  hatch_counter?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  has_gender_differences?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  growth_rate_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  forms_switchable?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_legendary?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_mythical?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  conquest_order?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsOrderByWithRelationInput, {
    nullable: true
  })
  generation?: GenerationsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByWithRelationInput, {
    nullable: true
  })
  evolvesFrom?: PokemonSpeciesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByRelationAggregateInput, {
    nullable: true
  })
  evolvesTo?: PokemonSpeciesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsOrderByWithRelationInput, {
    nullable: true
  })
  evolutionChain?: EvolutionChainsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsOrderByWithRelationInput, {
    nullable: true
  })
  color?: PokemonColorsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesOrderByWithRelationInput, {
    nullable: true
  })
  shape?: PokemonShapesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsOrderByWithRelationInput, {
    nullable: true
  })
  habitat?: PokemonHabitatsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesOrderByWithRelationInput, {
    nullable: true
  })
  growthRate?: GrowthRatesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemon?: PokemonOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsOrderByRelationAggregateInput, {
    nullable: true
  })
  eggGroups?: PokemonEggGroupsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersOrderByRelationAggregateInput, {
    nullable: true
  })
  dexNumbers?: PokemonDexNumbersOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionOrderByRelationAggregateInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionOrderByRelationAggregateInput, {
    nullable: true
  })
  partySpecies?: PokemonEvolutionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionOrderByRelationAggregateInput, {
    nullable: true
  })
  tradeSpecies?: PokemonEvolutionOrderByRelationAggregateInput | undefined;
}
