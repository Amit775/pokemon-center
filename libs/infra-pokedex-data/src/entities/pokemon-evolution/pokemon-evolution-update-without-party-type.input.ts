import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-evolution-nested.input';
import { EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput } from '../evolution-triggers/evolution-triggers-update-one-required-without-evolution-nested.input';
import { ItemsUpdateOneWithoutTriggerItemsNestedInput } from '../items/items-update-one-without-trigger-items-nested.input';
import { GendersUpdateOneWithoutEvolutionNestedInput } from '../genders/genders-update-one-without-evolution-nested.input';
import { LocationsUpdateOneWithoutEvolutionNestedInput } from '../locations/locations-update-one-without-evolution-nested.input';
import { ItemsUpdateOneWithoutHeldItemsNestedInput } from '../items/items-update-one-without-held-items-nested.input';
import { MovesUpdateOneWithoutKnownMovesNestedInput } from '../moves/moves-update-one-without-known-moves-nested.input';
import { TypesUpdateOneWithoutKnownMoveTypesNestedInput } from '../types/types-update-one-without-known-move-types-nested.input';
import { PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput } from '../pokemon-species/pokemon-species-update-one-without-party-species-nested.input';
import { PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput } from '../pokemon-species/pokemon-species-update-one-without-trade-species-nested.input';

@InputType()
export class PokemonEvolutionUpdateWithoutPartyTypeInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    minimum_level?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    time_of_day?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    minimum_happiness?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    minimum_beauty?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    minimum_affection?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    relative_physical_stats?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    needs_overworld_rain?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    turn_upside_down?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput, {nullable:true})
    evolvedSpecies?: PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput;

    @Field(() => EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput, {nullable:true})
    evolutionTrigger?: EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput;

    @Field(() => ItemsUpdateOneWithoutTriggerItemsNestedInput, {nullable:true})
    triggerItem?: ItemsUpdateOneWithoutTriggerItemsNestedInput;

    @Field(() => GendersUpdateOneWithoutEvolutionNestedInput, {nullable:true})
    gender?: GendersUpdateOneWithoutEvolutionNestedInput;

    @Field(() => LocationsUpdateOneWithoutEvolutionNestedInput, {nullable:true})
    location?: LocationsUpdateOneWithoutEvolutionNestedInput;

    @Field(() => ItemsUpdateOneWithoutHeldItemsNestedInput, {nullable:true})
    heldItem?: ItemsUpdateOneWithoutHeldItemsNestedInput;

    @Field(() => MovesUpdateOneWithoutKnownMovesNestedInput, {nullable:true})
    knownMove?: MovesUpdateOneWithoutKnownMovesNestedInput;

    @Field(() => TypesUpdateOneWithoutKnownMoveTypesNestedInput, {nullable:true})
    knownMoveType?: TypesUpdateOneWithoutKnownMoveTypesNestedInput;

    @Field(() => PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput, {nullable:true})
    partySpecies?: PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput;

    @Field(() => PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput, {nullable:true})
    tradeSpecies?: PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput;
}
