import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggerUpdateOneRequiredWithoutEvolutionNestedInput } from "../inputs/EvolutionTriggerUpdateOneRequiredWithoutEvolutionNestedInput";
import { GenderUpdateOneWithoutEvolutionNestedInput } from "../inputs/GenderUpdateOneWithoutEvolutionNestedInput";
import { ItemUpdateOneWithoutHeldItemsNestedInput } from "../inputs/ItemUpdateOneWithoutHeldItemsNestedInput";
import { ItemUpdateOneWithoutTriggerItemsNestedInput } from "../inputs/ItemUpdateOneWithoutTriggerItemsNestedInput";
import { MoveUpdateOneWithoutKnownMovesNestedInput } from "../inputs/MoveUpdateOneWithoutKnownMovesNestedInput";
import { PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput } from "../inputs/PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput";
import { PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput } from "../inputs/PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput";
import { PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput } from "../inputs/PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput";
import { TypeUpdateOneWithoutKnownMoveTypesNestedInput } from "../inputs/TypeUpdateOneWithoutKnownMoveTypesNestedInput";
import { TypeUpdateOneWithoutPartyTypesNestedInput } from "../inputs/TypeUpdateOneWithoutPartyTypesNestedInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateWithoutLocationInput", {})
export class PokemonEvolutionUpdateWithoutLocationInput {
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

  @TypeGraphQL.Field(_type => EvolutionTriggerUpdateOneRequiredWithoutEvolutionNestedInput, {
    nullable: true
  })
  evolutionTrigger?: EvolutionTriggerUpdateOneRequiredWithoutEvolutionNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateOneWithoutTriggerItemsNestedInput, {
    nullable: true
  })
  triggerItem?: ItemUpdateOneWithoutTriggerItemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => GenderUpdateOneWithoutEvolutionNestedInput, {
    nullable: true
  })
  gender?: GenderUpdateOneWithoutEvolutionNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateOneWithoutHeldItemsNestedInput, {
    nullable: true
  })
  heldItem?: ItemUpdateOneWithoutHeldItemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateOneWithoutKnownMovesNestedInput, {
    nullable: true
  })
  knownMove?: MoveUpdateOneWithoutKnownMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateOneWithoutKnownMoveTypesNestedInput, {
    nullable: true
  })
  knownMoveType?: TypeUpdateOneWithoutKnownMoveTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput, {
    nullable: true
  })
  partySpecies?: PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateOneWithoutPartyTypesNestedInput, {
    nullable: true
  })
  partyType?: TypeUpdateOneWithoutPartyTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput, {
    nullable: true
  })
  tradeSpecies?: PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput | undefined;
}
