import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput } from '../generations/generations-update-one-required-without-version-groups-nested.input';
import { VersionsUpdateManyWithoutVersionGroupNestedInput } from '../versions/versions-update-many-without-version-group-nested.input';
import { EncounterSlotsUpdateManyWithoutVersionGroupNestedInput } from '../encounter-slots/encounter-slots-update-many-without-version-group-nested.input';
import { MachinesUpdateManyWithoutVersionGroupNestedInput } from '../machines/machines-update-many-without-version-group-nested.input';
import { VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-update-many-without-version-group-nested.input';
import { PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput } from '../pokedex-version-groups/pokedex-version-groups-update-many-without-version-group-nested.input';
import { PokemonMovesUpdateManyWithoutVersionGroupNestedInput } from '../pokemon-moves/pokemon-moves-update-many-without-version-group-nested.input';
import { PokemonFormsUpdateManyWithoutVersionGroupNestedInput } from '../pokemon-forms/pokemon-forms-update-many-without-version-group-nested.input';

@InputType()
export class VersionGroupsUpdateWithoutVersionGroupRegionsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput, {nullable:true})
    generation?: Identity<GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput>;

    @Field(() => VersionsUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    versions?: Identity<VersionsUpdateManyWithoutVersionGroupNestedInput>;

    @Field(() => EncounterSlotsUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    encounterSlots?: Identity<EncounterSlotsUpdateManyWithoutVersionGroupNestedInput>;

    @Field(() => MachinesUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    machines?: Identity<MachinesUpdateManyWithoutVersionGroupNestedInput>;

    @Field(() => VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    versionGroupPokemonMoveMethods?: Identity<VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput>;

    @Field(() => PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    pokedexVersionGroups?: Identity<PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput>;

    @Field(() => PokemonMovesUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    pokemonMoves?: Identity<PokemonMovesUpdateManyWithoutVersionGroupNestedInput>;

    @Field(() => PokemonFormsUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    pokemonForms?: Identity<PokemonFormsUpdateManyWithoutVersionGroupNestedInput>;
}
