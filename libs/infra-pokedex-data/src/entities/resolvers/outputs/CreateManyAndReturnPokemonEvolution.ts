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
import { EvolutionTrigger } from "../../models/EvolutionTrigger";
import { Gender } from "../../models/Gender";
import { Item } from "../../models/Item";
import { Location } from "../../models/Location";
import { Move } from "../../models/Move";
import { PokemonSpecies } from "../../models/PokemonSpecies";
import { Type } from "../../models/Type";

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

  @TypeGraphQL.Field(_type => EvolutionTrigger, {
    nullable: false
  })
  evolutionTrigger!: EvolutionTrigger;

  triggerItem!: Item | null;
  gender!: Gender | null;
  location!: Location | null;
  heldItem!: Item | null;
  knownMove!: Move | null;
  knownMoveType!: Type | null;
  partySpecies!: PokemonSpecies | null;
  partyType!: Type | null;
  tradeSpecies!: PokemonSpecies | null;

  @TypeGraphQL.Field(_type => Item, {
    name: "triggerItem",
    nullable: true
  })
  getTriggerItem(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionTriggerItemArgs): Item | null {
    return root.triggerItem;
  }

  @TypeGraphQL.Field(_type => Gender, {
    name: "gender",
    nullable: true
  })
  getGender(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionGenderArgs): Gender | null {
    return root.gender;
  }

  @TypeGraphQL.Field(_type => Location, {
    name: "location",
    nullable: true
  })
  getLocation(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionLocationArgs): Location | null {
    return root.location;
  }

  @TypeGraphQL.Field(_type => Item, {
    name: "heldItem",
    nullable: true
  })
  getHeldItem(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionHeldItemArgs): Item | null {
    return root.heldItem;
  }

  @TypeGraphQL.Field(_type => Move, {
    name: "knownMove",
    nullable: true
  })
  getKnownMove(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionKnownMoveArgs): Move | null {
    return root.knownMove;
  }

  @TypeGraphQL.Field(_type => Type, {
    name: "knownMoveType",
    nullable: true
  })
  getKnownMoveType(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionKnownMoveTypeArgs): Type | null {
    return root.knownMoveType;
  }

  @TypeGraphQL.Field(_type => PokemonSpecies, {
    name: "partySpecies",
    nullable: true
  })
  getPartySpecies(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionPartySpeciesArgs): PokemonSpecies | null {
    return root.partySpecies;
  }

  @TypeGraphQL.Field(_type => Type, {
    name: "partyType",
    nullable: true
  })
  getPartyType(@TypeGraphQL.Root() root: CreateManyAndReturnPokemonEvolution, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionPartyTypeArgs): Type | null {
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
