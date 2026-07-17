import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsCreateNestedOneWithoutVersionGroupsInput } from '../generations/generations-create-nested-one-without-version-groups.input';
import { VersionsCreateNestedManyWithoutVersionGroupInput } from '../versions/versions-create-nested-many-without-version-group.input';
import { EncounterSlotsCreateNestedManyWithoutVersionGroupInput } from '../encounter-slots/encounter-slots-create-nested-many-without-version-group.input';
import { VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-create-nested-many-without-version-group.input';
import { VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput } from '../version-group-regions/version-group-regions-create-nested-many-without-version-group.input';
import { PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput } from '../pokedex-version-groups/pokedex-version-groups-create-nested-many-without-version-group.input';
import { PokemonMovesCreateNestedManyWithoutVersionGroupInput } from '../pokemon-moves/pokemon-moves-create-nested-many-without-version-group.input';
import { PokemonFormsCreateNestedManyWithoutVersionGroupInput } from '../pokemon-forms/pokemon-forms-create-nested-many-without-version-group.input';

@InputType()
export class VersionGroupsCreateWithoutMachinesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => GenerationsCreateNestedOneWithoutVersionGroupsInput, {nullable:false})
    generation!: Identity<GenerationsCreateNestedOneWithoutVersionGroupsInput>;

    @Field(() => VersionsCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    versions?: Identity<VersionsCreateNestedManyWithoutVersionGroupInput>;

    @Field(() => EncounterSlotsCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    encounterSlots?: Identity<EncounterSlotsCreateNestedManyWithoutVersionGroupInput>;

    @Field(() => VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    versionGroupPokemonMoveMethods?: Identity<VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput>;

    @Field(() => VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    versionGroupRegions?: Identity<VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput>;

    @Field(() => PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    pokedexVersionGroups?: Identity<PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput>;

    @Field(() => PokemonMovesCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    pokemonMoves?: Identity<PokemonMovesCreateNestedManyWithoutVersionGroupInput>;

    @Field(() => PokemonFormsCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    pokemonForms?: Identity<PokemonFormsCreateNestedManyWithoutVersionGroupInput>;
}
