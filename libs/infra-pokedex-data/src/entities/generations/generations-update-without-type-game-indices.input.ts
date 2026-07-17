import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RegionsUpdateOneRequiredWithoutGenerationsNestedInput } from '../regions/regions-update-one-required-without-generations-nested.input';
import { PokemonSpeciesUpdateManyWithoutGenerationNestedInput } from '../pokemon-species/pokemon-species-update-many-without-generation-nested.input';
import { MovesUpdateManyWithoutGenerationNestedInput } from '../moves/moves-update-many-without-generation-nested.input';
import { TypesUpdateManyWithoutGenerationNestedInput } from '../types/types-update-many-without-generation-nested.input';
import { AbilitiesUpdateManyWithoutGenerationNestedInput } from '../abilities/abilities-update-many-without-generation-nested.input';
import { PokemonFormGenerationsUpdateManyWithoutGenerationNestedInput } from '../pokemon-form-generations/pokemon-form-generations-update-many-without-generation-nested.input';
import { ItemGameIndicesUpdateManyWithoutGenerationNestedInput } from '../item-game-indices/item-game-indices-update-many-without-generation-nested.input';
import { LocationGameIndicesUpdateManyWithoutGenerationNestedInput } from '../location-game-indices/location-game-indices-update-many-without-generation-nested.input';
import { VersionGroupsUpdateManyWithoutGenerationNestedInput } from '../version-groups/version-groups-update-many-without-generation-nested.input';

@InputType()
export class GenerationsUpdateWithoutTypeGameIndicesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => RegionsUpdateOneRequiredWithoutGenerationsNestedInput, {nullable:true})
    region?: RegionsUpdateOneRequiredWithoutGenerationsNestedInput;

    @Field(() => PokemonSpeciesUpdateManyWithoutGenerationNestedInput, {nullable:true})
    pokemonSpecies?: PokemonSpeciesUpdateManyWithoutGenerationNestedInput;

    @Field(() => MovesUpdateManyWithoutGenerationNestedInput, {nullable:true})
    moves?: MovesUpdateManyWithoutGenerationNestedInput;

    @Field(() => TypesUpdateManyWithoutGenerationNestedInput, {nullable:true})
    types?: TypesUpdateManyWithoutGenerationNestedInput;

    @Field(() => AbilitiesUpdateManyWithoutGenerationNestedInput, {nullable:true})
    abilities?: AbilitiesUpdateManyWithoutGenerationNestedInput;

    @Field(() => PokemonFormGenerationsUpdateManyWithoutGenerationNestedInput, {nullable:true})
    pokemonFormGenerations?: PokemonFormGenerationsUpdateManyWithoutGenerationNestedInput;

    @Field(() => ItemGameIndicesUpdateManyWithoutGenerationNestedInput, {nullable:true})
    itemGameIndices?: ItemGameIndicesUpdateManyWithoutGenerationNestedInput;

    @Field(() => LocationGameIndicesUpdateManyWithoutGenerationNestedInput, {nullable:true})
    locationGameIndices?: LocationGameIndicesUpdateManyWithoutGenerationNestedInput;

    @Field(() => VersionGroupsUpdateManyWithoutGenerationNestedInput, {nullable:true})
    versionGroups?: VersionGroupsUpdateManyWithoutGenerationNestedInput;
}
