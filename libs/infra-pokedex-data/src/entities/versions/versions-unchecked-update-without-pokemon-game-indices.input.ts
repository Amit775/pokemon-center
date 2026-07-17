import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EncountersUncheckedUpdateManyWithoutVersionNestedInput } from '../encounters/encounters-unchecked-update-many-without-version-nested.input';
import { PokemonItemsUncheckedUpdateManyWithoutVersionNestedInput } from '../pokemon-items/pokemon-items-unchecked-update-many-without-version-nested.input';
import { LocationAreaEncounterRatesUncheckedUpdateManyWithoutVersionNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-update-many-without-version-nested.input';

@InputType()
export class VersionsUncheckedUpdateWithoutPokemonGameIndicesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version_group_id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => EncountersUncheckedUpdateManyWithoutVersionNestedInput, {nullable:true})
    encounters?: EncountersUncheckedUpdateManyWithoutVersionNestedInput;

    @Field(() => PokemonItemsUncheckedUpdateManyWithoutVersionNestedInput, {nullable:true})
    pokemonItems?: PokemonItemsUncheckedUpdateManyWithoutVersionNestedInput;

    @Field(() => LocationAreaEncounterRatesUncheckedUpdateManyWithoutVersionNestedInput, {nullable:true})
    locationAreaEncounterRates?: LocationAreaEncounterRatesUncheckedUpdateManyWithoutVersionNestedInput;
}
