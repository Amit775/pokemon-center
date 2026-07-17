import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUncheckedUpdateManyWithoutGenerationNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-generation-nested.input';
import { TypesUncheckedUpdateManyWithoutGenerationNestedInput } from '../types/types-unchecked-update-many-without-generation-nested.input';
import { AbilitiesUncheckedUpdateManyWithoutGenerationNestedInput } from '../abilities/abilities-unchecked-update-many-without-generation-nested.input';
import { PokemonFormGenerationsUncheckedUpdateManyWithoutGenerationNestedInput } from '../pokemon-form-generations/pokemon-form-generations-unchecked-update-many-without-generation-nested.input';
import { ItemGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput } from '../item-game-indices/item-game-indices-unchecked-update-many-without-generation-nested.input';
import { TypeGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput } from '../type-game-indices/type-game-indices-unchecked-update-many-without-generation-nested.input';
import { LocationGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput } from '../location-game-indices/location-game-indices-unchecked-update-many-without-generation-nested.input';
import { VersionGroupsUncheckedUpdateManyWithoutGenerationNestedInput } from '../version-groups/version-groups-unchecked-update-many-without-generation-nested.input';

@InputType()
export class GenerationsUncheckedUpdateWithoutMovesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    main_region_id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => PokemonSpeciesUncheckedUpdateManyWithoutGenerationNestedInput, {nullable:true})
    pokemonSpecies?: Identity<PokemonSpeciesUncheckedUpdateManyWithoutGenerationNestedInput>;

    @Field(() => TypesUncheckedUpdateManyWithoutGenerationNestedInput, {nullable:true})
    types?: Identity<TypesUncheckedUpdateManyWithoutGenerationNestedInput>;

    @Field(() => AbilitiesUncheckedUpdateManyWithoutGenerationNestedInput, {nullable:true})
    abilities?: Identity<AbilitiesUncheckedUpdateManyWithoutGenerationNestedInput>;

    @Field(() => PokemonFormGenerationsUncheckedUpdateManyWithoutGenerationNestedInput, {nullable:true})
    pokemonFormGenerations?: Identity<PokemonFormGenerationsUncheckedUpdateManyWithoutGenerationNestedInput>;

    @Field(() => ItemGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput, {nullable:true})
    itemGameIndices?: Identity<ItemGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput>;

    @Field(() => TypeGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput, {nullable:true})
    typeGameIndices?: Identity<TypeGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput>;

    @Field(() => LocationGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput, {nullable:true})
    locationGameIndices?: Identity<LocationGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput>;

    @Field(() => VersionGroupsUncheckedUpdateManyWithoutGenerationNestedInput, {nullable:true})
    versionGroups?: Identity<VersionGroupsUncheckedUpdateManyWithoutGenerationNestedInput>;
}
