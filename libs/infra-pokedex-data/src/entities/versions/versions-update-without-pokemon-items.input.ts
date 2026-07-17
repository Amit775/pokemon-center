import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput } from '../version-groups/version-groups-update-one-required-without-versions-nested.input';
import { EncountersUpdateManyWithoutVersionNestedInput } from '../encounters/encounters-update-many-without-version-nested.input';
import { PokemonGameIndicesUpdateManyWithoutVersionNestedInput } from '../pokemon-game-indices/pokemon-game-indices-update-many-without-version-nested.input';
import { LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-update-many-without-version-nested.input';

@InputType()
export class VersionsUpdateWithoutPokemonItemsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput, {nullable:true})
    versionGroup?: VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput;

    @Field(() => EncountersUpdateManyWithoutVersionNestedInput, {nullable:true})
    encounters?: EncountersUpdateManyWithoutVersionNestedInput;

    @Field(() => PokemonGameIndicesUpdateManyWithoutVersionNestedInput, {nullable:true})
    pokemonGameIndices?: PokemonGameIndicesUpdateManyWithoutVersionNestedInput;

    @Field(() => LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput, {nullable:true})
    locationAreaEncounterRates?: LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput;
}
