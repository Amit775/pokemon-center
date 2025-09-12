import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput } from "../inputs/EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput";
import { GendersUpdateOneWithoutEvolutionNestedInput } from "../inputs/GendersUpdateOneWithoutEvolutionNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ItemsUpdateOneWithoutTriggerItemsNestedInput } from "../inputs/ItemsUpdateOneWithoutTriggerItemsNestedInput";
import { LocationsUpdateOneWithoutEvolutionNestedInput } from "../inputs/LocationsUpdateOneWithoutEvolutionNestedInput";
import { MovesUpdateOneWithoutKnownMovesNestedInput } from "../inputs/MovesUpdateOneWithoutKnownMovesNestedInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput } from "../inputs/PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput";
import { PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput } from "../inputs/PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput";
import { PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput } from "../inputs/PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput";
import { TypesUpdateOneWithoutKnownMoveTypesNestedInput } from "../inputs/TypesUpdateOneWithoutKnownMoveTypesNestedInput";
import { TypesUpdateOneWithoutPartyTypesNestedInput } from "../inputs/TypesUpdateOneWithoutPartyTypesNestedInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateWithoutHeldItemInput", {})
export class PokemonEvolutionUpdateWithoutHeldItemInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  minimum_level?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  time_of_day?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  minimum_happiness?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  minimum_beauty?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  minimum_affection?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  relative_physical_stats?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  needs_overworld_rain?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  turn_upside_down?: IntFieldUpdateOperationsInput | undefined;

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
