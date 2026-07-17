import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MovesUncheckedUpdateManyWithoutGenerationNestedInput } from '../moves/moves-unchecked-update-many-without-generation-nested.input';
import { TypesUncheckedUpdateManyWithoutGenerationNestedInput } from '../types/types-unchecked-update-many-without-generation-nested.input';
import { AbilitiesUncheckedUpdateManyWithoutGenerationNestedInput } from '../abilities/abilities-unchecked-update-many-without-generation-nested.input';
import { PokemonFormGenerationsUncheckedUpdateManyWithoutGenerationNestedInput } from '../pokemon-form-generations/pokemon-form-generations-unchecked-update-many-without-generation-nested.input';
import { ItemGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput } from '../item-game-indices/item-game-indices-unchecked-update-many-without-generation-nested.input';
import { TypeGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput } from '../type-game-indices/type-game-indices-unchecked-update-many-without-generation-nested.input';
import { LocationGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput } from '../location-game-indices/location-game-indices-unchecked-update-many-without-generation-nested.input';
import { VersionGroupsUncheckedUpdateManyWithoutGenerationNestedInput } from '../version-groups/version-groups-unchecked-update-many-without-generation-nested.input';

@InputType()
export class GenerationsUncheckedUpdateWithoutPokemonSpeciesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    main_region_id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => MovesUncheckedUpdateManyWithoutGenerationNestedInput, {nullable:true})
    moves?: MovesUncheckedUpdateManyWithoutGenerationNestedInput;

    @Field(() => TypesUncheckedUpdateManyWithoutGenerationNestedInput, {nullable:true})
    types?: TypesUncheckedUpdateManyWithoutGenerationNestedInput;

    @Field(() => AbilitiesUncheckedUpdateManyWithoutGenerationNestedInput, {nullable:true})
    abilities?: AbilitiesUncheckedUpdateManyWithoutGenerationNestedInput;

    @Field(() => PokemonFormGenerationsUncheckedUpdateManyWithoutGenerationNestedInput, {nullable:true})
    pokemonFormGenerations?: PokemonFormGenerationsUncheckedUpdateManyWithoutGenerationNestedInput;

    @Field(() => ItemGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput, {nullable:true})
    itemGameIndices?: ItemGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput;

    @Field(() => TypeGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput, {nullable:true})
    typeGameIndices?: TypeGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput;

    @Field(() => LocationGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput, {nullable:true})
    locationGameIndices?: LocationGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput;

    @Field(() => VersionGroupsUncheckedUpdateManyWithoutGenerationNestedInput, {nullable:true})
    versionGroups?: VersionGroupsUncheckedUpdateManyWithoutGenerationNestedInput;
}
