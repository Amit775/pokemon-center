import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggersCreateNestedOneWithoutEvolutionInput } from "../inputs/EvolutionTriggersCreateNestedOneWithoutEvolutionInput";
import { GendersCreateNestedOneWithoutEvolutionInput } from "../inputs/GendersCreateNestedOneWithoutEvolutionInput";
import { ItemsCreateNestedOneWithoutTriggerItemsInput } from "../inputs/ItemsCreateNestedOneWithoutTriggerItemsInput";
import { LocationsCreateNestedOneWithoutEvolutionInput } from "../inputs/LocationsCreateNestedOneWithoutEvolutionInput";
import { MovesCreateNestedOneWithoutKnownMovesInput } from "../inputs/MovesCreateNestedOneWithoutKnownMovesInput";
import { PokemonSpeciesCreateNestedOneWithoutEvolutionInput } from "../inputs/PokemonSpeciesCreateNestedOneWithoutEvolutionInput";
import { PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput } from "../inputs/PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput";
import { PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput } from "../inputs/PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput";
import { TypesCreateNestedOneWithoutKnownMoveTypesInput } from "../inputs/TypesCreateNestedOneWithoutKnownMoveTypesInput";
import { TypesCreateNestedOneWithoutPartyTypesInput } from "../inputs/TypesCreateNestedOneWithoutPartyTypesInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateWithoutHeldItemInput", {})
export class PokemonEvolutionCreateWithoutHeldItemInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimum_level?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  time_of_day?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimum_happiness?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimum_beauty?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimum_affection?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  relative_physical_stats?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  needs_overworld_rain!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  turn_upside_down!: number;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedOneWithoutEvolutionInput, {
    nullable: false
  })
  evolvedSpecies!: PokemonSpeciesCreateNestedOneWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => EvolutionTriggersCreateNestedOneWithoutEvolutionInput, {
    nullable: false
  })
  evolutionTrigger!: EvolutionTriggersCreateNestedOneWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => ItemsCreateNestedOneWithoutTriggerItemsInput, {
    nullable: true
  })
  triggerItem?: ItemsCreateNestedOneWithoutTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => GendersCreateNestedOneWithoutEvolutionInput, {
    nullable: true
  })
  gender?: GendersCreateNestedOneWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => LocationsCreateNestedOneWithoutEvolutionInput, {
    nullable: true
  })
  location?: LocationsCreateNestedOneWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateNestedOneWithoutKnownMovesInput, {
    nullable: true
  })
  knownMove?: MovesCreateNestedOneWithoutKnownMovesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateNestedOneWithoutKnownMoveTypesInput, {
    nullable: true
  })
  knownMoveType?: TypesCreateNestedOneWithoutKnownMoveTypesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput, {
    nullable: true
  })
  partySpecies?: PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateNestedOneWithoutPartyTypesInput, {
    nullable: true
  })
  partyType?: TypesCreateNestedOneWithoutPartyTypesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput, {
    nullable: true
  })
  tradeSpecies?: PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput | undefined;
}
