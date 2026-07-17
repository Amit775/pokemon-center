import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsUpdateOneRequiredWithoutGenerationsNestedInput } from '../regions/regions-update-one-required-without-generations-nested.input';
import { PokemonSpeciesUpdateManyWithoutGenerationNestedInput } from '../pokemon-species/pokemon-species-update-many-without-generation-nested.input';
import { MovesUpdateManyWithoutGenerationNestedInput } from '../moves/moves-update-many-without-generation-nested.input';
import { TypesUpdateManyWithoutGenerationNestedInput } from '../types/types-update-many-without-generation-nested.input';
import { AbilitiesUpdateManyWithoutGenerationNestedInput } from '../abilities/abilities-update-many-without-generation-nested.input';
import { PokemonFormGenerationsUpdateManyWithoutGenerationNestedInput } from '../pokemon-form-generations/pokemon-form-generations-update-many-without-generation-nested.input';
import { TypeGameIndicesUpdateManyWithoutGenerationNestedInput } from '../type-game-indices/type-game-indices-update-many-without-generation-nested.input';
import { LocationGameIndicesUpdateManyWithoutGenerationNestedInput } from '../location-game-indices/location-game-indices-update-many-without-generation-nested.input';
import { VersionGroupsUpdateManyWithoutGenerationNestedInput } from '../version-groups/version-groups-update-many-without-generation-nested.input';

@InputType()
export class GenerationsUpdateWithoutItemGameIndicesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => RegionsUpdateOneRequiredWithoutGenerationsNestedInput, {nullable:true})
    region?: Identity<RegionsUpdateOneRequiredWithoutGenerationsNestedInput>;

    @Field(() => PokemonSpeciesUpdateManyWithoutGenerationNestedInput, {nullable:true})
    pokemonSpecies?: Identity<PokemonSpeciesUpdateManyWithoutGenerationNestedInput>;

    @Field(() => MovesUpdateManyWithoutGenerationNestedInput, {nullable:true})
    moves?: Identity<MovesUpdateManyWithoutGenerationNestedInput>;

    @Field(() => TypesUpdateManyWithoutGenerationNestedInput, {nullable:true})
    types?: Identity<TypesUpdateManyWithoutGenerationNestedInput>;

    @Field(() => AbilitiesUpdateManyWithoutGenerationNestedInput, {nullable:true})
    abilities?: Identity<AbilitiesUpdateManyWithoutGenerationNestedInput>;

    @Field(() => PokemonFormGenerationsUpdateManyWithoutGenerationNestedInput, {nullable:true})
    pokemonFormGenerations?: Identity<PokemonFormGenerationsUpdateManyWithoutGenerationNestedInput>;

    @Field(() => TypeGameIndicesUpdateManyWithoutGenerationNestedInput, {nullable:true})
    typeGameIndices?: Identity<TypeGameIndicesUpdateManyWithoutGenerationNestedInput>;

    @Field(() => LocationGameIndicesUpdateManyWithoutGenerationNestedInput, {nullable:true})
    locationGameIndices?: Identity<LocationGameIndicesUpdateManyWithoutGenerationNestedInput>;

    @Field(() => VersionGroupsUpdateManyWithoutGenerationNestedInput, {nullable:true})
    versionGroups?: Identity<VersionGroupsUpdateManyWithoutGenerationNestedInput>;
}
