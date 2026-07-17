import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterSlotsUncheckedCreateNestedManyWithoutVersionGroupInput } from '../encounter-slots/encounter-slots-unchecked-create-nested-many-without-version-group.input';
import { MachinesUncheckedCreateNestedManyWithoutVersionGroupInput } from '../machines/machines-unchecked-create-nested-many-without-version-group.input';
import { VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutVersionGroupInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-unchecked-create-nested-many-without-version-group.input';
import { VersionGroupRegionsUncheckedCreateNestedManyWithoutVersionGroupInput } from '../version-group-regions/version-group-regions-unchecked-create-nested-many-without-version-group.input';
import { PokedexVersionGroupsUncheckedCreateNestedManyWithoutVersionGroupInput } from '../pokedex-version-groups/pokedex-version-groups-unchecked-create-nested-many-without-version-group.input';
import { PokemonMovesUncheckedCreateNestedManyWithoutVersionGroupInput } from '../pokemon-moves/pokemon-moves-unchecked-create-nested-many-without-version-group.input';
import { PokemonFormsUncheckedCreateNestedManyWithoutVersionGroupInput } from '../pokemon-forms/pokemon-forms-unchecked-create-nested-many-without-version-group.input';

@InputType()
export class VersionGroupsUncheckedCreateWithoutVersionsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => EncounterSlotsUncheckedCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    encounterSlots?: Identity<EncounterSlotsUncheckedCreateNestedManyWithoutVersionGroupInput>;

    @Field(() => MachinesUncheckedCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    machines?: Identity<MachinesUncheckedCreateNestedManyWithoutVersionGroupInput>;

    @Field(() => VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    versionGroupPokemonMoveMethods?: Identity<VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutVersionGroupInput>;

    @Field(() => VersionGroupRegionsUncheckedCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    versionGroupRegions?: Identity<VersionGroupRegionsUncheckedCreateNestedManyWithoutVersionGroupInput>;

    @Field(() => PokedexVersionGroupsUncheckedCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    pokedexVersionGroups?: Identity<PokedexVersionGroupsUncheckedCreateNestedManyWithoutVersionGroupInput>;

    @Field(() => PokemonMovesUncheckedCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    pokemonMoves?: Identity<PokemonMovesUncheckedCreateNestedManyWithoutVersionGroupInput>;

    @Field(() => PokemonFormsUncheckedCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    pokemonForms?: Identity<PokemonFormsUncheckedCreateNestedManyWithoutVersionGroupInput>;
}
