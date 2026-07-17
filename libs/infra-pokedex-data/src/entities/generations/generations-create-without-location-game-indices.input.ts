import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsCreateNestedOneWithoutGenerationsInput } from '../regions/regions-create-nested-one-without-generations.input';
import { PokemonSpeciesCreateNestedManyWithoutGenerationInput } from '../pokemon-species/pokemon-species-create-nested-many-without-generation.input';
import { MovesCreateNestedManyWithoutGenerationInput } from '../moves/moves-create-nested-many-without-generation.input';
import { TypesCreateNestedManyWithoutGenerationInput } from '../types/types-create-nested-many-without-generation.input';
import { AbilitiesCreateNestedManyWithoutGenerationInput } from '../abilities/abilities-create-nested-many-without-generation.input';
import { PokemonFormGenerationsCreateNestedManyWithoutGenerationInput } from '../pokemon-form-generations/pokemon-form-generations-create-nested-many-without-generation.input';
import { ItemGameIndicesCreateNestedManyWithoutGenerationInput } from '../item-game-indices/item-game-indices-create-nested-many-without-generation.input';
import { TypeGameIndicesCreateNestedManyWithoutGenerationInput } from '../type-game-indices/type-game-indices-create-nested-many-without-generation.input';
import { VersionGroupsCreateNestedManyWithoutGenerationInput } from '../version-groups/version-groups-create-nested-many-without-generation.input';

@InputType()
export class GenerationsCreateWithoutLocationGameIndicesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => RegionsCreateNestedOneWithoutGenerationsInput, {nullable:false})
    region!: Identity<RegionsCreateNestedOneWithoutGenerationsInput>;

    @Field(() => PokemonSpeciesCreateNestedManyWithoutGenerationInput, {nullable:true})
    pokemonSpecies?: Identity<PokemonSpeciesCreateNestedManyWithoutGenerationInput>;

    @Field(() => MovesCreateNestedManyWithoutGenerationInput, {nullable:true})
    moves?: Identity<MovesCreateNestedManyWithoutGenerationInput>;

    @Field(() => TypesCreateNestedManyWithoutGenerationInput, {nullable:true})
    types?: Identity<TypesCreateNestedManyWithoutGenerationInput>;

    @Field(() => AbilitiesCreateNestedManyWithoutGenerationInput, {nullable:true})
    abilities?: Identity<AbilitiesCreateNestedManyWithoutGenerationInput>;

    @Field(() => PokemonFormGenerationsCreateNestedManyWithoutGenerationInput, {nullable:true})
    pokemonFormGenerations?: Identity<PokemonFormGenerationsCreateNestedManyWithoutGenerationInput>;

    @Field(() => ItemGameIndicesCreateNestedManyWithoutGenerationInput, {nullable:true})
    itemGameIndices?: Identity<ItemGameIndicesCreateNestedManyWithoutGenerationInput>;

    @Field(() => TypeGameIndicesCreateNestedManyWithoutGenerationInput, {nullable:true})
    typeGameIndices?: Identity<TypeGameIndicesCreateNestedManyWithoutGenerationInput>;

    @Field(() => VersionGroupsCreateNestedManyWithoutGenerationInput, {nullable:true})
    versionGroups?: Identity<VersionGroupsCreateNestedManyWithoutGenerationInput>;
}
