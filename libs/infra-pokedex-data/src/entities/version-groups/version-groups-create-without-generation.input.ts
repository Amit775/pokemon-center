import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VersionsCreateNestedManyWithoutVersionGroupInput } from '../versions/versions-create-nested-many-without-version-group.input';
import { EncounterSlotsCreateNestedManyWithoutVersionGroupInput } from '../encounter-slots/encounter-slots-create-nested-many-without-version-group.input';
import { MachinesCreateNestedManyWithoutVersionGroupInput } from '../machines/machines-create-nested-many-without-version-group.input';
import { VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-create-nested-many-without-version-group.input';
import { VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput } from '../version-group-regions/version-group-regions-create-nested-many-without-version-group.input';
import { PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput } from '../pokedex-version-groups/pokedex-version-groups-create-nested-many-without-version-group.input';
import { PokemonMovesCreateNestedManyWithoutVersionGroupInput } from '../pokemon-moves/pokemon-moves-create-nested-many-without-version-group.input';
import { PokemonFormsCreateNestedManyWithoutVersionGroupInput } from '../pokemon-forms/pokemon-forms-create-nested-many-without-version-group.input';

@InputType()
export class VersionGroupsCreateWithoutGenerationInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => VersionsCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    versions?: VersionsCreateNestedManyWithoutVersionGroupInput;

    @Field(() => EncounterSlotsCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    encounterSlots?: EncounterSlotsCreateNestedManyWithoutVersionGroupInput;

    @Field(() => MachinesCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    machines?: MachinesCreateNestedManyWithoutVersionGroupInput;

    @Field(() => VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    versionGroupPokemonMoveMethods?: VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput;

    @Field(() => VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    versionGroupRegions?: VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput;

    @Field(() => PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    pokedexVersionGroups?: PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput;

    @Field(() => PokemonMovesCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    pokemonMoves?: PokemonMovesCreateNestedManyWithoutVersionGroupInput;

    @Field(() => PokemonFormsCreateNestedManyWithoutVersionGroupInput, {nullable:true})
    pokemonForms?: PokemonFormsCreateNestedManyWithoutVersionGroupInput;
}
