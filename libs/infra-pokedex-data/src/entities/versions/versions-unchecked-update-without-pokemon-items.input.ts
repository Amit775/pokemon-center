import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersUncheckedUpdateManyWithoutVersionNestedInput } from '../encounters/encounters-unchecked-update-many-without-version-nested.input';
import { PokemonGameIndicesUncheckedUpdateManyWithoutVersionNestedInput } from '../pokemon-game-indices/pokemon-game-indices-unchecked-update-many-without-version-nested.input';
import { LocationAreaEncounterRatesUncheckedUpdateManyWithoutVersionNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-update-many-without-version-nested.input';

@InputType()
export class VersionsUncheckedUpdateWithoutPokemonItemsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    version_group_id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => EncountersUncheckedUpdateManyWithoutVersionNestedInput, {nullable:true})
    encounters?: Identity<EncountersUncheckedUpdateManyWithoutVersionNestedInput>;

    @Field(() => PokemonGameIndicesUncheckedUpdateManyWithoutVersionNestedInput, {nullable:true})
    pokemonGameIndices?: Identity<PokemonGameIndicesUncheckedUpdateManyWithoutVersionNestedInput>;

    @Field(() => LocationAreaEncounterRatesUncheckedUpdateManyWithoutVersionNestedInput, {nullable:true})
    locationAreaEncounterRates?: Identity<LocationAreaEncounterRatesUncheckedUpdateManyWithoutVersionNestedInput>;
}
