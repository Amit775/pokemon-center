import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MovesUncheckedCreateNestedManyWithoutGenerationInput } from '../moves/moves-unchecked-create-nested-many-without-generation.input';
import { TypesUncheckedCreateNestedManyWithoutGenerationInput } from '../types/types-unchecked-create-nested-many-without-generation.input';
import { AbilitiesUncheckedCreateNestedManyWithoutGenerationInput } from '../abilities/abilities-unchecked-create-nested-many-without-generation.input';
import { PokemonFormGenerationsUncheckedCreateNestedManyWithoutGenerationInput } from '../pokemon-form-generations/pokemon-form-generations-unchecked-create-nested-many-without-generation.input';
import { ItemGameIndicesUncheckedCreateNestedManyWithoutGenerationInput } from '../item-game-indices/item-game-indices-unchecked-create-nested-many-without-generation.input';
import { TypeGameIndicesUncheckedCreateNestedManyWithoutGenerationInput } from '../type-game-indices/type-game-indices-unchecked-create-nested-many-without-generation.input';
import { LocationGameIndicesUncheckedCreateNestedManyWithoutGenerationInput } from '../location-game-indices/location-game-indices-unchecked-create-nested-many-without-generation.input';
import { VersionGroupsUncheckedCreateNestedManyWithoutGenerationInput } from '../version-groups/version-groups-unchecked-create-nested-many-without-generation.input';

@InputType()
export class GenerationsUncheckedCreateWithoutPokemonSpeciesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    main_region_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => MovesUncheckedCreateNestedManyWithoutGenerationInput, {nullable:true})
    moves?: MovesUncheckedCreateNestedManyWithoutGenerationInput;

    @Field(() => TypesUncheckedCreateNestedManyWithoutGenerationInput, {nullable:true})
    types?: TypesUncheckedCreateNestedManyWithoutGenerationInput;

    @Field(() => AbilitiesUncheckedCreateNestedManyWithoutGenerationInput, {nullable:true})
    abilities?: AbilitiesUncheckedCreateNestedManyWithoutGenerationInput;

    @Field(() => PokemonFormGenerationsUncheckedCreateNestedManyWithoutGenerationInput, {nullable:true})
    pokemonFormGenerations?: PokemonFormGenerationsUncheckedCreateNestedManyWithoutGenerationInput;

    @Field(() => ItemGameIndicesUncheckedCreateNestedManyWithoutGenerationInput, {nullable:true})
    itemGameIndices?: ItemGameIndicesUncheckedCreateNestedManyWithoutGenerationInput;

    @Field(() => TypeGameIndicesUncheckedCreateNestedManyWithoutGenerationInput, {nullable:true})
    typeGameIndices?: TypeGameIndicesUncheckedCreateNestedManyWithoutGenerationInput;

    @Field(() => LocationGameIndicesUncheckedCreateNestedManyWithoutGenerationInput, {nullable:true})
    locationGameIndices?: LocationGameIndicesUncheckedCreateNestedManyWithoutGenerationInput;

    @Field(() => VersionGroupsUncheckedCreateNestedManyWithoutGenerationInput, {nullable:true})
    versionGroups?: VersionGroupsUncheckedCreateNestedManyWithoutGenerationInput;
}
