import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncountersUncheckedCreateNestedManyWithoutVersionInput } from '../encounters/encounters-unchecked-create-nested-many-without-version.input';
import { PokemonGameIndicesUncheckedCreateNestedManyWithoutVersionInput } from '../pokemon-game-indices/pokemon-game-indices-unchecked-create-nested-many-without-version.input';
import { LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutVersionInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-create-nested-many-without-version.input';

@InputType()
export class VersionsUncheckedCreateWithoutPokemonItemsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => EncountersUncheckedCreateNestedManyWithoutVersionInput, {nullable:true})
    encounters?: EncountersUncheckedCreateNestedManyWithoutVersionInput;

    @Field(() => PokemonGameIndicesUncheckedCreateNestedManyWithoutVersionInput, {nullable:true})
    pokemonGameIndices?: PokemonGameIndicesUncheckedCreateNestedManyWithoutVersionInput;

    @Field(() => LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutVersionInput, {nullable:true})
    locationAreaEncounterRates?: LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutVersionInput;
}
