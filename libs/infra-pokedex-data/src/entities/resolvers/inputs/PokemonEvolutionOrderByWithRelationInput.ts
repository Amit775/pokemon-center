import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggerOrderByWithRelationInput } from "../inputs/EvolutionTriggerOrderByWithRelationInput";
import { GenderOrderByWithRelationInput } from "../inputs/GenderOrderByWithRelationInput";
import { ItemOrderByWithRelationInput } from "../inputs/ItemOrderByWithRelationInput";
import { LocationOrderByWithRelationInput } from "../inputs/LocationOrderByWithRelationInput";
import { MoveOrderByWithRelationInput } from "../inputs/MoveOrderByWithRelationInput";
import { PokemonSpeciesOrderByWithRelationInput } from "../inputs/PokemonSpeciesOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TypeOrderByWithRelationInput } from "../inputs/TypeOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonEvolutionOrderByWithRelationInput", {})
export class PokemonEvolutionOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  evolved_species_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  evolution_trigger_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  trigger_item_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  minimum_level?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  gender_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  location_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  held_item_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  time_of_day?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  known_move_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  known_move_type_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  minimum_happiness?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  minimum_beauty?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  minimum_affection?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  relative_physical_stats?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  party_species_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  party_type_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  trade_species_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  needs_overworld_rain?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  turn_upside_down?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByWithRelationInput, {
    nullable: true
  })
  evolvedSpecies?: PokemonSpeciesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggerOrderByWithRelationInput, {
    nullable: true
  })
  evolutionTrigger?: EvolutionTriggerOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ItemOrderByWithRelationInput, {
    nullable: true
  })
  triggerItem?: ItemOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => GenderOrderByWithRelationInput, {
    nullable: true
  })
  gender?: GenderOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => LocationOrderByWithRelationInput, {
    nullable: true
  })
  location?: LocationOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ItemOrderByWithRelationInput, {
    nullable: true
  })
  heldItem?: ItemOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveOrderByWithRelationInput, {
    nullable: true
  })
  knownMove?: MoveOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TypeOrderByWithRelationInput, {
    nullable: true
  })
  knownMoveType?: TypeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByWithRelationInput, {
    nullable: true
  })
  partySpecies?: PokemonSpeciesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TypeOrderByWithRelationInput, {
    nullable: true
  })
  partyType?: TypeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByWithRelationInput, {
    nullable: true
  })
  tradeSpecies?: PokemonSpeciesOrderByWithRelationInput | undefined;
}
