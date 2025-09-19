import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainOrderByWithRelationInput } from "../inputs/EvolutionChainOrderByWithRelationInput";
import { GenerationOrderByWithRelationInput } from "../inputs/GenerationOrderByWithRelationInput";
import { GrowthRatesOrderByWithRelationInput } from "../inputs/GrowthRatesOrderByWithRelationInput";
import { PokemonColorOrderByWithRelationInput } from "../inputs/PokemonColorOrderByWithRelationInput";
import { PokemonDexNumberOrderByRelationAggregateInput } from "../inputs/PokemonDexNumberOrderByRelationAggregateInput";
import { PokemonEggGroupOrderByRelationAggregateInput } from "../inputs/PokemonEggGroupOrderByRelationAggregateInput";
import { PokemonEvolutionOrderByRelationAggregateInput } from "../inputs/PokemonEvolutionOrderByRelationAggregateInput";
import { PokemonHabitatOrderByWithRelationInput } from "../inputs/PokemonHabitatOrderByWithRelationInput";
import { PokemonOrderByRelationAggregateInput } from "../inputs/PokemonOrderByRelationAggregateInput";
import { PokemonShapeOrderByWithRelationInput } from "../inputs/PokemonShapeOrderByWithRelationInput";
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

  @TypeGraphQL.Field(_type => GenerationOrderByWithRelationInput, {
    nullable: true
  })
  generation?: GenerationOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByWithRelationInput, {
    nullable: true
  })
  evolvesFrom?: PokemonSpeciesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByRelationAggregateInput, {
    nullable: true
  })
  evolvesTo?: PokemonSpeciesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainOrderByWithRelationInput, {
    nullable: true
  })
  evolutionChain?: EvolutionChainOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorOrderByWithRelationInput, {
    nullable: true
  })
  color?: PokemonColorOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapeOrderByWithRelationInput, {
    nullable: true
  })
  shape?: PokemonShapeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatOrderByWithRelationInput, {
    nullable: true
  })
  habitat?: PokemonHabitatOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesOrderByWithRelationInput, {
    nullable: true
  })
  growthRate?: GrowthRatesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemon?: PokemonOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupOrderByRelationAggregateInput, {
    nullable: true
  })
  eggGroups?: PokemonEggGroupOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberOrderByRelationAggregateInput, {
    nullable: true
  })
  dexNumbers?: PokemonDexNumberOrderByRelationAggregateInput | undefined;

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
