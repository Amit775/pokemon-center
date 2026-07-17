import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput } from '../generations/generations-update-one-required-without-version-groups-nested.input';
import { VersionsUpdateManyWithoutVersionGroupNestedInput } from '../versions/versions-update-many-without-version-group-nested.input';
import { EncounterSlotsUpdateManyWithoutVersionGroupNestedInput } from '../encounter-slots/encounter-slots-update-many-without-version-group-nested.input';
import { MachinesUpdateManyWithoutVersionGroupNestedInput } from '../machines/machines-update-many-without-version-group-nested.input';
import { VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-update-many-without-version-group-nested.input';
import { VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput } from '../version-group-regions/version-group-regions-update-many-without-version-group-nested.input';
import { PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput } from '../pokedex-version-groups/pokedex-version-groups-update-many-without-version-group-nested.input';
import { PokemonMovesUpdateManyWithoutVersionGroupNestedInput } from '../pokemon-moves/pokemon-moves-update-many-without-version-group-nested.input';
import { PokemonFormsUpdateManyWithoutVersionGroupNestedInput } from '../pokemon-forms/pokemon-forms-update-many-without-version-group-nested.input';

@InputType()
export class VersionGroupsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput, {nullable:true})
    generation?: GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput;

    @Field(() => VersionsUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    versions?: VersionsUpdateManyWithoutVersionGroupNestedInput;

    @Field(() => EncounterSlotsUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    encounterSlots?: EncounterSlotsUpdateManyWithoutVersionGroupNestedInput;

    @Field(() => MachinesUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    machines?: MachinesUpdateManyWithoutVersionGroupNestedInput;

    @Field(() => VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    versionGroupPokemonMoveMethods?: VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput;

    @Field(() => VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    versionGroupRegions?: VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput;

    @Field(() => PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    pokedexVersionGroups?: PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput;

    @Field(() => PokemonMovesUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    pokemonMoves?: PokemonMovesUpdateManyWithoutVersionGroupNestedInput;

    @Field(() => PokemonFormsUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    pokemonForms?: PokemonFormsUpdateManyWithoutVersionGroupNestedInput;
}
