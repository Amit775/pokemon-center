import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import type { Identity } from 'identity-type';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { GenerationsScalarRelationFilter } from '../generations/generations-scalar-relation-filter.input';
import { VersionsListRelationFilter } from '../versions/versions-list-relation-filter.input';
import { EncounterSlotsListRelationFilter } from '../encounter-slots/encounter-slots-list-relation-filter.input';
import { MachinesListRelationFilter } from '../machines/machines-list-relation-filter.input';
import { VersionGroupPokemonMoveMethodsListRelationFilter } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-list-relation-filter.input';
import { VersionGroupRegionsListRelationFilter } from '../version-group-regions/version-group-regions-list-relation-filter.input';
import { PokedexVersionGroupsListRelationFilter } from '../pokedex-version-groups/pokedex-version-groups-list-relation-filter.input';
import { PokemonMovesListRelationFilter } from '../pokemon-moves/pokemon-moves-list-relation-filter.input';
import { PokemonFormsListRelationFilter } from '../pokemon-forms/pokemon-forms-list-relation-filter.input';

@InputType()
export class VersionGroupsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [VersionGroupsWhereInput], {nullable:true})
    AND?: Array<VersionGroupsWhereInput>;

    @Field(() => [VersionGroupsWhereInput], {nullable:true})
    OR?: Array<VersionGroupsWhereInput>;

    @Field(() => [VersionGroupsWhereInput], {nullable:true})
    NOT?: Array<VersionGroupsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    order?: Identity<IntFilter>;

    @Field(() => GenerationsScalarRelationFilter, {nullable:true})
    generation?: Identity<GenerationsScalarRelationFilter>;

    @Field(() => VersionsListRelationFilter, {nullable:true})
    versions?: Identity<VersionsListRelationFilter>;

    @Field(() => EncounterSlotsListRelationFilter, {nullable:true})
    encounterSlots?: Identity<EncounterSlotsListRelationFilter>;

    @Field(() => MachinesListRelationFilter, {nullable:true})
    machines?: Identity<MachinesListRelationFilter>;

    @Field(() => VersionGroupPokemonMoveMethodsListRelationFilter, {nullable:true})
    versionGroupPokemonMoveMethods?: Identity<VersionGroupPokemonMoveMethodsListRelationFilter>;

    @Field(() => VersionGroupRegionsListRelationFilter, {nullable:true})
    versionGroupRegions?: Identity<VersionGroupRegionsListRelationFilter>;

    @Field(() => PokedexVersionGroupsListRelationFilter, {nullable:true})
    pokedexVersionGroups?: Identity<PokedexVersionGroupsListRelationFilter>;

    @Field(() => PokemonMovesListRelationFilter, {nullable:true})
    pokemonMoves?: Identity<PokemonMovesListRelationFilter>;

    @Field(() => PokemonFormsListRelationFilter, {nullable:true})
    pokemonForms?: Identity<PokemonFormsListRelationFilter>;
}
