import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateNestedOneWithoutVersionsInput } from '../version-groups/version-groups-create-nested-one-without-versions.input';
import { EncountersCreateNestedManyWithoutVersionInput } from '../encounters/encounters-create-nested-many-without-version.input';
import { PokemonItemsCreateNestedManyWithoutVersionInput } from '../pokemon-items/pokemon-items-create-nested-many-without-version.input';
import { LocationAreaEncounterRatesCreateNestedManyWithoutVersionInput } from '../location-area-encounter-rates/location-area-encounter-rates-create-nested-many-without-version.input';

@InputType()
export class VersionsCreateWithoutPokemonGameIndicesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => VersionGroupsCreateNestedOneWithoutVersionsInput, {nullable:false})
    versionGroup!: Identity<VersionGroupsCreateNestedOneWithoutVersionsInput>;

    @Field(() => EncountersCreateNestedManyWithoutVersionInput, {nullable:true})
    encounters?: Identity<EncountersCreateNestedManyWithoutVersionInput>;

    @Field(() => PokemonItemsCreateNestedManyWithoutVersionInput, {nullable:true})
    pokemonItems?: Identity<PokemonItemsCreateNestedManyWithoutVersionInput>;

    @Field(() => LocationAreaEncounterRatesCreateNestedManyWithoutVersionInput, {nullable:true})
    locationAreaEncounterRates?: Identity<LocationAreaEncounterRatesCreateNestedManyWithoutVersionInput>;
}
