import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput } from '../version-groups/version-groups-update-one-required-without-versions-nested.input';
import { EncountersUpdateManyWithoutVersionNestedInput } from '../encounters/encounters-update-many-without-version-nested.input';
import { PokemonItemsUpdateManyWithoutVersionNestedInput } from '../pokemon-items/pokemon-items-update-many-without-version-nested.input';
import { PokemonGameIndicesUpdateManyWithoutVersionNestedInput } from '../pokemon-game-indices/pokemon-game-indices-update-many-without-version-nested.input';

@InputType()
export class VersionsUpdateWithoutLocationAreaEncounterRatesInput {

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

    @Field(() => PokemonGameIndicesUpdateManyWithoutVersionNestedInput, {nullable:true})
    pokemonGameIndices?: Identity<PokemonGameIndicesUpdateManyWithoutVersionNestedInput>;
}
