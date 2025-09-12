import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnPokemonEvolutionGenderArgs } from "./args/CreateManyAndReturnPokemonEvolutionGenderArgs";
import { CreateManyAndReturnPokemonEvolutionHeldItemArgs } from "./args/CreateManyAndReturnPokemonEvolutionHeldItemArgs";
import { CreateManyAndReturnPokemonEvolutionKnownMoveArgs } from "./args/CreateManyAndReturnPokemonEvolutionKnownMoveArgs";
import { CreateManyAndReturnPokemonEvolutionKnownMoveTypeArgs } from "./args/CreateManyAndReturnPokemonEvolutionKnownMoveTypeArgs";
import { CreateManyAndReturnPokemonEvolutionLocationArgs } from "./args/CreateManyAndReturnPokemonEvolutionLocationArgs";
import { CreateManyAndReturnPokemonEvolutionPartySpeciesArgs } from "./args/CreateManyAndReturnPokemonEvolutionPartySpeciesArgs";
import { CreateManyAndReturnPokemonEvolutionPartyTypeArgs } from "./args/CreateManyAndReturnPokemonEvolutionPartyTypeArgs";
import { CreateManyAndReturnPokemonEvolutionTradeSpeciesArgs } from "./args/CreateManyAndReturnPokemonEvolutionTradeSpeciesArgs";
import { CreateManyAndReturnPokemonEvolutionTriggerItemArgs } from "./args/CreateManyAndReturnPokemonEvolutionTriggerItemArgs";
import { EvolutionTriggers } from "../../models/EvolutionTriggers";
import { Genders } from "../../models/Genders";
import { Items } from "../../models/Items";
import { Locations } from "../../models/Locations";
import { Moves } from "../../models/Moves";
import { PokemonSpecies } from "../../models/PokemonSpecies";
import { Types } from "../../models/Types";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokemonEvolution", {})
export class CreateManyAndReturnPokemonEvolution {
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

  @TypeGraphQL.Field(_type => PokemonSpecies, {
    nullable: false
  })
  evolvedSpecies!: PokemonSpecies;

  @TypeGraphQL.Field(_type => EvolutionTriggers, {
    nullable: false
  })
  evolutionTrigger!: EvolutionTriggers;

  triggerItem!: Items | null;
  gender!: Genders | null;
  location!: Locations | null;
  heldItem!: Items | null;
  knownMove!: Moves | null;
  knownMoveType!: Types | null;
  partySpecies!: PokemonSpecies | null;
  partyType!: Types | null;
  tradeSpecies!: PokemonSpecies | null;

  @TypeGraphQL.Field(_type => Items, {
    name: "triggerItem",
    nullable: true
  })
  getTriggerItem(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionTriggerItemArgs): Items | null {
    return root.triggerItem;
  }

  @TypeGraphQL.Field(_type => Genders, {
    name: "gender",
    nullable: true
  })
  getGender(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionGenderArgs): Genders | null {
    return root.gender;
  }

  @TypeGraphQL.Field(_type => Locations, {
    name: "location",
    nullable: true
  })
  getLocation(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionLocationArgs): Locations | null {
    return root.location;
  }

  @TypeGraphQL.Field(_type => Items, {
    name: "heldItem",
    nullable: true
  })
  getHeldItem(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionHeldItemArgs): Items | null {
    return root.heldItem;
  }

  @TypeGraphQL.Field(_type => Moves, {
    name: "knownMove",
    nullable: true
  })
  getKnownMove(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionKnownMoveArgs): Moves | null {
    return root.knownMove;
  }

  @TypeGraphQL.Field(_type => Types, {
    name: "knownMoveType",
    nullable: true
  })
  getKnownMoveType(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionKnownMoveTypeArgs): Types | null {
    return root.knownMoveType;
  }

  @TypeGraphQL.Field(_type => PokemonSpecies, {
    name: "partySpecies",
    nullable: true
  })
  getPartySpecies(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionPartySpeciesArgs): PokemonSpecies | null {
    return root.partySpecies;
  }

  @TypeGraphQL.Field(_type => Types, {
    name: "partyType",
    nullable: true
  })
  getPartyType(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionPartyTypeArgs): Types | null {
    return root.partyType;
  }

  @TypeGraphQL.Field(_type => PokemonSpecies, {
    name: "tradeSpecies",
    nullable: true
  })
  getTradeSpecies(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionTradeSpeciesArgs): PokemonSpecies | null {
    return root.tradeSpecies;
  }
}
