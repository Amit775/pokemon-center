import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput } from '../version-groups/version-groups-update-one-required-without-versions-nested.input';
import { EncountersUpdateManyWithoutVersionNestedInput } from '../encounters/encounters-update-many-without-version-nested.input';
import { PokemonItemsUpdateManyWithoutVersionNestedInput } from '../pokemon-items/pokemon-items-update-many-without-version-nested.input';
import { LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-update-many-without-version-nested.input';

@InputType()
export class VersionsUpdateWithoutPokemonGameIndicesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput, {nullable:true})
    versionGroup?: Identity<VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput>;

    @Field(() => EncountersUpdateManyWithoutVersionNestedInput, {nullable:true})
    encounters?: Identity<EncountersUpdateManyWithoutVersionNestedInput>;

    @Field(() => PokemonItemsUpdateManyWithoutVersionNestedInput, {nullable:true})
    pokemonItems?: Identity<PokemonItemsUpdateManyWithoutVersionNestedInput>;

    @Field(() => LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput, {nullable:true})
    locationAreaEncounterRates?: Identity<LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput>;
}
