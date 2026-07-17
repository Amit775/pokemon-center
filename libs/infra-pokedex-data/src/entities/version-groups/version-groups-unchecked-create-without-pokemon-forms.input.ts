import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VersionsUncheckedCreateNestedManyWithoutVersionGroupInput } from '../versions/versions-unchecked-create-nested-many-without-version-group.input';
import { EncounterSlotsUncheckedCreateNestedManyWithoutVersionGroupInput } from '../encounter-slots/encounter-slots-unchecked-create-nested-many-without-version-group.input';
import { MachinesUncheckedCreateNestedManyWithoutVersionGroupInput } from '../machines/machines-unchecked-create-nested-many-without-version-group.input';
import { VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutVersionGroupInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-unchecked-create-nested-many-without-version-group.input';
import { VersionGroupRegionsUncheckedCreateNestedManyWithoutVersionGroupInput } from '../version-group-regions/version-group-regions-unchecked-create-nested-many-without-version-group.input';
import { PokedexVersionGroupsUncheckedCreateNestedManyWithoutVersionGroupInput } from '../pokedex-version-groups/pokedex-version-groups-unchecked-create-nested-many-without-version-group.input';
import { PokemonMovesUncheckedCreateNestedManyWithoutVersionGroupInput } from '../pokemon-moves/pokemon-moves-unchecked-create-nested-many-without-version-group.input';

@InputType()
export class VersionGroupsUncheckedCreateWithoutPokemonFormsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => VersionsUncheckedCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    versions?: VersionsUncheckedCreateNestedManyWithoutVersionGroupInput;

    @Field(() => EncounterSlotsUncheckedCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    encounterSlots?: EncounterSlotsUncheckedCreateNestedManyWithoutVersionGroupInput;

    @Field(() => MachinesUncheckedCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    machines?: MachinesUncheckedCreateNestedManyWithoutVersionGroupInput;

    @Field(() => VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    versionGroupPokemonMoveMethods?: VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutVersionGroupInput;

    @Field(() => VersionGroupRegionsUncheckedCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    versionGroupRegions?: VersionGroupRegionsUncheckedCreateNestedManyWithoutVersionGroupInput;

    @Field(() => PokedexVersionGroupsUncheckedCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    pokedexVersionGroups?: PokedexVersionGroupsUncheckedCreateNestedManyWithoutVersionGroupInput;

    @Field(() => PokemonMovesUncheckedCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    pokemonMoves?: PokemonMovesUncheckedCreateNestedManyWithoutVersionGroupInput;
}
