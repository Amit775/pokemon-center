import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsUncheckedUpdateManyWithoutVersionGroupNestedInput } from '../versions/versions-unchecked-update-many-without-version-group-nested.input';
import { EncounterSlotsUncheckedUpdateManyWithoutVersionGroupNestedInput } from '../encounter-slots/encounter-slots-unchecked-update-many-without-version-group-nested.input';
import { VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupNestedInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-unchecked-update-many-without-version-group-nested.input';
import { VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupNestedInput } from '../version-group-regions/version-group-regions-unchecked-update-many-without-version-group-nested.input';
import { PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupNestedInput } from '../pokedex-version-groups/pokedex-version-groups-unchecked-update-many-without-version-group-nested.input';
import { PokemonMovesUncheckedUpdateManyWithoutVersionGroupNestedInput } from '../pokemon-moves/pokemon-moves-unchecked-update-many-without-version-group-nested.input';
import { PokemonFormsUncheckedUpdateManyWithoutVersionGroupNestedInput } from '../pokemon-forms/pokemon-forms-unchecked-update-many-without-version-group-nested.input';

@InputType()
export class VersionGroupsUncheckedUpdateWithoutMachinesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    generation_id?: number;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => VersionsUncheckedUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    versions?: Identity<VersionsUncheckedUpdateManyWithoutVersionGroupNestedInput>;

    @Field(() => EncounterSlotsUncheckedUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    encounterSlots?: Identity<EncounterSlotsUncheckedUpdateManyWithoutVersionGroupNestedInput>;

    @Field(() => VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    versionGroupPokemonMoveMethods?: Identity<VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupNestedInput>;

    @Field(() => VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    versionGroupRegions?: Identity<VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupNestedInput>;

    @Field(() => PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    pokedexVersionGroups?: Identity<PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupNestedInput>;

    @Field(() => PokemonMovesUncheckedUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    pokemonMoves?: Identity<PokemonMovesUncheckedUpdateManyWithoutVersionGroupNestedInput>;

    @Field(() => PokemonFormsUncheckedUpdateManyWithoutVersionGroupNestedInput, {nullable:true})
    pokemonForms?: Identity<PokemonFormsUncheckedUpdateManyWithoutVersionGroupNestedInput>;
}
