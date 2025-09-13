import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EvolutionTriggers } from "../models/EvolutionTriggers";
import { Genders } from "../models/Genders";
import { Items } from "../models/Items";
import { Locations } from "../models/Locations";
import { Moves } from "../models/Moves";
import { PokemonSpecies } from "../models/PokemonSpecies";
import { Types } from "../models/Types";

@TypeGraphQL.ObjectType("PokemonEvolution", {})
export class PokemonEvolution {
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
  trigger_item_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimum_level?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gender_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  location_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  held_item_id?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  time_of_day?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  known_move_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  known_move_type_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimum_happiness?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimum_beauty?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimum_affection?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  relative_physical_stats?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  party_species_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  party_type_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  trade_species_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  needs_overworld_rain!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  turn_upside_down!: number;

  evolvedSpecies?: PokemonSpecies;

  evolutionTrigger?: EvolutionTriggers;

  triggerItem?: Items | null;

  gender?: Genders | null;

  location?: Locations | null;

  heldItem?: Items | null;

  knownMove?: Moves | null;

  knownMoveType?: Types | null;

  partySpecies?: PokemonSpecies | null;

  partyType?: Types | null;

  tradeSpecies?: PokemonSpecies | null;
}
