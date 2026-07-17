import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonItemsUncheckedUpdateManyWithoutVersionNestedInput } from '../pokemon-items/pokemon-items-unchecked-update-many-without-version-nested.input';
import { PokemonGameIndicesUncheckedUpdateManyWithoutVersionNestedInput } from '../pokemon-game-indices/pokemon-game-indices-unchecked-update-many-without-version-nested.input';
import { LocationAreaEncounterRatesUncheckedUpdateManyWithoutVersionNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-update-many-without-version-nested.input';

@InputType()
export class VersionsUncheckedUpdateWithoutEncountersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    version_group_id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => PokemonItemsUncheckedUpdateManyWithoutVersionNestedInput, {nullable:true})
    pokemonItems?: Identity<PokemonItemsUncheckedUpdateManyWithoutVersionNestedInput>;

    @Field(() => PokemonGameIndicesUncheckedUpdateManyWithoutVersionNestedInput, {nullable:true})
    pokemonGameIndices?: Identity<PokemonGameIndicesUncheckedUpdateManyWithoutVersionNestedInput>;

    @Field(() => LocationAreaEncounterRatesUncheckedUpdateManyWithoutVersionNestedInput, {nullable:true})
    locationAreaEncounterRates?: Identity<LocationAreaEncounterRatesUncheckedUpdateManyWithoutVersionNestedInput>;
}
