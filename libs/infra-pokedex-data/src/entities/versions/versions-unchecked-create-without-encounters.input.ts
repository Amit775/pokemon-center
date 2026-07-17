import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonItemsUncheckedCreateNestedManyWithoutVersionInput } from '../pokemon-items/pokemon-items-unchecked-create-nested-many-without-version.input';
import { PokemonGameIndicesUncheckedCreateNestedManyWithoutVersionInput } from '../pokemon-game-indices/pokemon-game-indices-unchecked-create-nested-many-without-version.input';
import { LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutVersionInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-create-nested-many-without-version.input';

@InputType()
export class VersionsUncheckedCreateWithoutEncountersInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonItemsUncheckedCreateNestedManyWithoutVersionInput, {nullable:true})
    pokemonItems?: Identity<PokemonItemsUncheckedCreateNestedManyWithoutVersionInput>;

    @Field(() => PokemonGameIndicesUncheckedCreateNestedManyWithoutVersionInput, {nullable:true})
    pokemonGameIndices?: Identity<PokemonGameIndicesUncheckedCreateNestedManyWithoutVersionInput>;

    @Field(() => LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutVersionInput, {nullable:true})
    locationAreaEncounterRates?: Identity<LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutVersionInput>;
}
