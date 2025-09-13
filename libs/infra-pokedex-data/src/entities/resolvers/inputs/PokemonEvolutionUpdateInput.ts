import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput } from "../inputs/EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput";
import { GendersUpdateOneWithoutEvolutionNestedInput } from "../inputs/GendersUpdateOneWithoutEvolutionNestedInput";
import { ItemsUpdateOneWithoutHeldItemsNestedInput } from "../inputs/ItemsUpdateOneWithoutHeldItemsNestedInput";
import { ItemsUpdateOneWithoutTriggerItemsNestedInput } from "../inputs/ItemsUpdateOneWithoutTriggerItemsNestedInput";
import { LocationsUpdateOneWithoutEvolutionNestedInput } from "../inputs/LocationsUpdateOneWithoutEvolutionNestedInput";
import { MovesUpdateOneWithoutKnownMovesNestedInput } from "../inputs/MovesUpdateOneWithoutKnownMovesNestedInput";
import { PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput } from "../inputs/PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput";
import { PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput } from "../inputs/PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput";
import { PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput } from "../inputs/PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput";
import { TypesUpdateOneWithoutKnownMoveTypesNestedInput } from "../inputs/TypesUpdateOneWithoutKnownMoveTypesNestedInput";
import { TypesUpdateOneWithoutPartyTypesNestedInput } from "../inputs/TypesUpdateOneWithoutPartyTypesNestedInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateInput", {})
export class PokemonEvolutionUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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
    nullable: true
  })
  needs_overworld_rain?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  turn_upside_down?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput, {
    nullable: true
  })
  evolvedSpecies?: PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput, {
    nullable: true
  })
  evolutionTrigger?: EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateOneWithoutTriggerItemsNestedInput, {
    nullable: true
  })
  triggerItem?: ItemsUpdateOneWithoutTriggerItemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => GendersUpdateOneWithoutEvolutionNestedInput, {
    nullable: true
  })
  gender?: GendersUpdateOneWithoutEvolutionNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationsUpdateOneWithoutEvolutionNestedInput, {
    nullable: true
  })
  location?: LocationsUpdateOneWithoutEvolutionNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateOneWithoutHeldItemsNestedInput, {
    nullable: true
  })
  heldItem?: ItemsUpdateOneWithoutHeldItemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateOneWithoutKnownMovesNestedInput, {
    nullable: true
  })
  knownMove?: MovesUpdateOneWithoutKnownMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateOneWithoutKnownMoveTypesNestedInput, {
    nullable: true
  })
  knownMoveType?: TypesUpdateOneWithoutKnownMoveTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput, {
    nullable: true
  })
  partySpecies?: PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateOneWithoutPartyTypesNestedInput, {
    nullable: true
  })
  partyType?: TypesUpdateOneWithoutPartyTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput, {
    nullable: true
  })
  tradeSpecies?: PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput | undefined;
}
