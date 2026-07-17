import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput } from '../version-groups/version-groups-update-one-required-without-versions-nested.input';
import { PokemonItemsUpdateManyWithoutVersionNestedInput } from '../pokemon-items/pokemon-items-update-many-without-version-nested.input';
import { PokemonGameIndicesUpdateManyWithoutVersionNestedInput } from '../pokemon-game-indices/pokemon-game-indices-update-many-without-version-nested.input';
import { LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-update-many-without-version-nested.input';

@InputType()
export class VersionsUpdateWithoutEncountersInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput, {nullable:true})
    versionGroup?: VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput;

    @Field(() => PokemonItemsUpdateManyWithoutVersionNestedInput, {nullable:true})
    pokemonItems?: PokemonItemsUpdateManyWithoutVersionNestedInput;

    @Field(() => PokemonGameIndicesUpdateManyWithoutVersionNestedInput, {nullable:true})
    pokemonGameIndices?: PokemonGameIndicesUpdateManyWithoutVersionNestedInput;

    @Field(() => LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput, {nullable:true})
    locationAreaEncounterRates?: LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput;
}
