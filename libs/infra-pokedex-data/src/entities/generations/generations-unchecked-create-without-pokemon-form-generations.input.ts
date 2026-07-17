import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUncheckedCreateNestedManyWithoutGenerationInput } from '../pokemon-species/pokemon-species-unchecked-create-nested-many-without-generation.input';
import { MovesUncheckedCreateNestedManyWithoutGenerationInput } from '../moves/moves-unchecked-create-nested-many-without-generation.input';
import { TypesUncheckedCreateNestedManyWithoutGenerationInput } from '../types/types-unchecked-create-nested-many-without-generation.input';
import { AbilitiesUncheckedCreateNestedManyWithoutGenerationInput } from '../abilities/abilities-unchecked-create-nested-many-without-generation.input';
import { ItemGameIndicesUncheckedCreateNestedManyWithoutGenerationInput } from '../item-game-indices/item-game-indices-unchecked-create-nested-many-without-generation.input';
import { TypeGameIndicesUncheckedCreateNestedManyWithoutGenerationInput } from '../type-game-indices/type-game-indices-unchecked-create-nested-many-without-generation.input';
import { LocationGameIndicesUncheckedCreateNestedManyWithoutGenerationInput } from '../location-game-indices/location-game-indices-unchecked-create-nested-many-without-generation.input';
import { VersionGroupsUncheckedCreateNestedManyWithoutGenerationInput } from '../version-groups/version-groups-unchecked-create-nested-many-without-generation.input';

@InputType()
export class GenerationsUncheckedCreateWithoutPokemonFormGenerationsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    main_region_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonSpeciesUncheckedCreateNestedManyWithoutGenerationInput, {nullable:true})
    pokemonSpecies?: Identity<PokemonSpeciesUncheckedCreateNestedManyWithoutGenerationInput>;

    @Field(() => MovesUncheckedCreateNestedManyWithoutGenerationInput, {nullable:true})
    moves?: Identity<MovesUncheckedCreateNestedManyWithoutGenerationInput>;

    @Field(() => TypesUncheckedCreateNestedManyWithoutGenerationInput, {nullable:true})
    types?: Identity<TypesUncheckedCreateNestedManyWithoutGenerationInput>;

    @Field(() => AbilitiesUncheckedCreateNestedManyWithoutGenerationInput, {nullable:true})
    abilities?: Identity<AbilitiesUncheckedCreateNestedManyWithoutGenerationInput>;

    @Field(() => ItemGameIndicesUncheckedCreateNestedManyWithoutGenerationInput, {nullable:true})
    itemGameIndices?: Identity<ItemGameIndicesUncheckedCreateNestedManyWithoutGenerationInput>;

    @Field(() => TypeGameIndicesUncheckedCreateNestedManyWithoutGenerationInput, {nullable:true})
    typeGameIndices?: Identity<TypeGameIndicesUncheckedCreateNestedManyWithoutGenerationInput>;

    @Field(() => LocationGameIndicesUncheckedCreateNestedManyWithoutGenerationInput, {nullable:true})
    locationGameIndices?: Identity<LocationGameIndicesUncheckedCreateNestedManyWithoutGenerationInput>;

    @Field(() => VersionGroupsUncheckedCreateNestedManyWithoutGenerationInput, {nullable:true})
    versionGroups?: Identity<VersionGroupsUncheckedCreateNestedManyWithoutGenerationInput>;
}
