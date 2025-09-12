import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggersRelationFilter } from "../inputs/EvolutionTriggersRelationFilter";
import { GendersNullableRelationFilter } from "../inputs/GendersNullableRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ItemsNullableRelationFilter } from "../inputs/ItemsNullableRelationFilter";
import { LocationsNullableRelationFilter } from "../inputs/LocationsNullableRelationFilter";
import { MovesNullableRelationFilter } from "../inputs/MovesNullableRelationFilter";
import { PokemonSpeciesNullableRelationFilter } from "../inputs/PokemonSpeciesNullableRelationFilter";
import { PokemonSpeciesRelationFilter } from "../inputs/PokemonSpeciesRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TypesNullableRelationFilter } from "../inputs/TypesNullableRelationFilter";

@TypeGraphQL.InputType("PokemonEvolutionWhereInput", {})
export class PokemonEvolutionWhereInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereInput], {
    nullable: true
  })
  AND?: PokemonEvolutionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereInput], {
    nullable: true
  })
  OR?: PokemonEvolutionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereInput], {
    nullable: true
  })
  NOT?: PokemonEvolutionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  evolved_species_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  evolution_trigger_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  trigger_item_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  minimum_level?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  gender_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  location_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  held_item_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  time_of_day?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  known_move_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  known_move_type_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  minimum_happiness?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  minimum_beauty?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  minimum_affection?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  relative_physical_stats?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  party_species_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  party_type_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  trade_species_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  needs_overworld_rain?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  turn_upside_down?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesRelationFilter, {
    nullable: true
  })
  evolvedSpecies?: PokemonSpeciesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggersRelationFilter, {
    nullable: true
  })
  evolutionTrigger?: EvolutionTriggersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemsNullableRelationFilter, {
    nullable: true
  })
  triggerItem?: ItemsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GendersNullableRelationFilter, {
    nullable: true
  })
  gender?: GendersNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationsNullableRelationFilter, {
    nullable: true
  })
  location?: LocationsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemsNullableRelationFilter, {
    nullable: true
  })
  heldItem?: ItemsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovesNullableRelationFilter, {
    nullable: true
  })
  knownMove?: MovesNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypesNullableRelationFilter, {
    nullable: true
  })
  knownMoveType?: TypesNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesNullableRelationFilter, {
    nullable: true
  })
  partySpecies?: PokemonSpeciesNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypesNullableRelationFilter, {
    nullable: true
  })
  partyType?: TypesNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesNullableRelationFilter, {
    nullable: true
  })
  tradeSpecies?: PokemonSpeciesNullableRelationFilter | undefined;
}
