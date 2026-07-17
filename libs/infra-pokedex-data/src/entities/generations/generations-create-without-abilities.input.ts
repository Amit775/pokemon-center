import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RegionsCreateNestedOneWithoutGenerationsInput } from '../regions/regions-create-nested-one-without-generations.input';
import { PokemonSpeciesCreateNestedManyWithoutGenerationInput } from '../pokemon-species/pokemon-species-create-nested-many-without-generation.input';
import { MovesCreateNestedManyWithoutGenerationInput } from '../moves/moves-create-nested-many-without-generation.input';
import { TypesCreateNestedManyWithoutGenerationInput } from '../types/types-create-nested-many-without-generation.input';
import { PokemonFormGenerationsCreateNestedManyWithoutGenerationInput } from '../pokemon-form-generations/pokemon-form-generations-create-nested-many-without-generation.input';
import { ItemGameIndicesCreateNestedManyWithoutGenerationInput } from '../item-game-indices/item-game-indices-create-nested-many-without-generation.input';
import { TypeGameIndicesCreateNestedManyWithoutGenerationInput } from '../type-game-indices/type-game-indices-create-nested-many-without-generation.input';
import { LocationGameIndicesCreateNestedManyWithoutGenerationInput } from '../location-game-indices/location-game-indices-create-nested-many-without-generation.input';
import { VersionGroupsCreateNestedManyWithoutGenerationInput } from '../version-groups/version-groups-create-nested-many-without-generation.input';

@InputType()
export class GenerationsCreateWithoutAbilitiesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => RegionsCreateNestedOneWithoutGenerationsInput, {nullable:false})
    region!: RegionsCreateNestedOneWithoutGenerationsInput;

    @Field(() => PokemonSpeciesCreateNestedManyWithoutGenerationInput, {nullable:true})
    pokemonSpecies?: PokemonSpeciesCreateNestedManyWithoutGenerationInput;

    @Field(() => MovesCreateNestedManyWithoutGenerationInput, {nullable:true})
    moves?: MovesCreateNestedManyWithoutGenerationInput;

    @Field(() => TypesCreateNestedManyWithoutGenerationInput, {nullable:true})
    types?: TypesCreateNestedManyWithoutGenerationInput;

    @Field(() => PokemonFormGenerationsCreateNestedManyWithoutGenerationInput, {nullable:true})
    pokemonFormGenerations?: PokemonFormGenerationsCreateNestedManyWithoutGenerationInput;

    @Field(() => ItemGameIndicesCreateNestedManyWithoutGenerationInput, {nullable:true})
    itemGameIndices?: ItemGameIndicesCreateNestedManyWithoutGenerationInput;

    @Field(() => TypeGameIndicesCreateNestedManyWithoutGenerationInput, {nullable:true})
    typeGameIndices?: TypeGameIndicesCreateNestedManyWithoutGenerationInput;

    @Field(() => LocationGameIndicesCreateNestedManyWithoutGenerationInput, {nullable:true})
    locationGameIndices?: LocationGameIndicesCreateNestedManyWithoutGenerationInput;

    @Field(() => VersionGroupsCreateNestedManyWithoutGenerationInput, {nullable:true})
    versionGroups?: VersionGroupsCreateNestedManyWithoutGenerationInput;
}
