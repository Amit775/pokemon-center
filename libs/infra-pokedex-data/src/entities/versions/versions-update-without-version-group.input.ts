import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersUpdateManyWithoutVersionNestedInput } from '../encounters/encounters-update-many-without-version-nested.input';
import { PokemonItemsUpdateManyWithoutVersionNestedInput } from '../pokemon-items/pokemon-items-update-many-without-version-nested.input';
import { PokemonGameIndicesUpdateManyWithoutVersionNestedInput } from '../pokemon-game-indices/pokemon-game-indices-update-many-without-version-nested.input';
import { LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-update-many-without-version-nested.input';

@InputType()
export class VersionsUpdateWithoutVersionGroupInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => EncountersUpdateManyWithoutVersionNestedInput, {nullable:true})
    encounters?: Identity<EncountersUpdateManyWithoutVersionNestedInput>;

    @Field(() => PokemonItemsUpdateManyWithoutVersionNestedInput, {nullable:true})
    pokemonItems?: Identity<PokemonItemsUpdateManyWithoutVersionNestedInput>;

    @Field(() => PokemonGameIndicesUpdateManyWithoutVersionNestedInput, {nullable:true})
    pokemonGameIndices?: Identity<PokemonGameIndicesUpdateManyWithoutVersionNestedInput>;

    @Field(() => LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput, {nullable:true})
    locationAreaEncounterRates?: Identity<LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput>;
}
