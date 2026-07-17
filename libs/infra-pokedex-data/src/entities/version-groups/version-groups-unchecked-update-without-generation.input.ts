import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { VersionsUncheckedUpdateManyWithoutVersionGroupNestedInput } from '../versions/versions-unchecked-update-many-without-version-group-nested.input';
import { EncounterSlotsUncheckedUpdateManyWithoutVersionGroupNestedInput } from '../encounter-slots/encounter-slots-unchecked-update-many-without-version-group-nested.input';
import { MachinesUncheckedUpdateManyWithoutVersionGroupNestedInput } from '../machines/machines-unchecked-update-many-without-version-group-nested.input';
import { VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupNestedInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-unchecked-update-many-without-version-group-nested.input';
import { VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupNestedInput } from '../version-group-regions/version-group-regions-unchecked-update-many-without-version-group-nested.input';
import { PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupNestedInput } from '../pokedex-version-groups/pokedex-version-groups-unchecked-update-many-without-version-group-nested.input';
import { PokemonMovesUncheckedUpdateManyWithoutVersionGroupNestedInput } from '../pokemon-moves/pokemon-moves-unchecked-update-many-without-version-group-nested.input';
import { PokemonFormsUncheckedUpdateManyWithoutVersionGroupNestedInput } from '../pokemon-forms/pokemon-forms-unchecked-update-many-without-version-group-nested.input';

@InputType()
export class VersionGroupsUncheckedUpdateWithoutGenerationInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => VersionsUncheckedUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    versions?: VersionsUncheckedUpdateManyWithoutVersionGroupNestedInput;

    @Field(() => EncounterSlotsUncheckedUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    encounterSlots?: EncounterSlotsUncheckedUpdateManyWithoutVersionGroupNestedInput;

    @Field(() => MachinesUncheckedUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    machines?: MachinesUncheckedUpdateManyWithoutVersionGroupNestedInput;

    @Field(() => VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    versionGroupPokemonMoveMethods?: VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupNestedInput;

    @Field(() => VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    versionGroupRegions?: VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupNestedInput;

    @Field(() => PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    pokedexVersionGroups?: PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupNestedInput;

    @Field(() => PokemonMovesUncheckedUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    pokemonMoves?: PokemonMovesUncheckedUpdateManyWithoutVersionGroupNestedInput;

    @Field(() => PokemonFormsUncheckedUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    pokemonForms?: PokemonFormsUncheckedUpdateManyWithoutVersionGroupNestedInput;
}
