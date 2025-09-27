import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenerationsWhereInput } from './generations-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RegionsScalarRelationFilter } from '../regions/regions-scalar-relation-filter.input';
import { PokemonSpeciesListRelationFilter } from '../pokemon-species/pokemon-species-list-relation-filter.input';
import { MovesListRelationFilter } from '../moves/moves-list-relation-filter.input';
import { TypesListRelationFilter } from '../types/types-list-relation-filter.input';
import { AbilitiesListRelationFilter } from '../abilities/abilities-list-relation-filter.input';
import { PokemonFormGenerationsListRelationFilter } from '../pokemon-form-generations/pokemon-form-generations-list-relation-filter.input';
import { ItemGameIndicesListRelationFilter } from '../item-game-indices/item-game-indices-list-relation-filter.input';
import { TypeGameIndicesListRelationFilter } from '../type-game-indices/type-game-indices-list-relation-filter.input';
import { LocationGameIndicesListRelationFilter } from '../location-game-indices/location-game-indices-list-relation-filter.input';
import { VersionGroupsListRelationFilter } from '../version-groups/version-groups-list-relation-filter.input';

@InputType()
export class GenerationsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [GenerationsWhereInput], {nullable:true})
    AND?: Array<GenerationsWhereInput>;

    @Field(() => [GenerationsWhereInput], {nullable:true})
    OR?: Array<GenerationsWhereInput>;

    @Field(() => [GenerationsWhereInput], {nullable:true})
    NOT?: Array<GenerationsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    main_region_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => RegionsScalarRelationFilter, {nullable:true})
    region?: RegionsScalarRelationFilter;

    @Field(() => PokemonSpeciesListRelationFilter, {nullable:true})
    pokemonSpecies?: PokemonSpeciesListRelationFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;

    @Field(() => TypesListRelationFilter, {nullable:true})
    types?: TypesListRelationFilter;

    @Field(() => AbilitiesListRelationFilter, {nullable:true})
    abilities?: AbilitiesListRelationFilter;

    @Field(() => PokemonFormGenerationsListRelationFilter, {nullable:true})
    pokemonFormGenerations?: PokemonFormGenerationsListRelationFilter;

    @Field(() => ItemGameIndicesListRelationFilter, {nullable:true})
    itemGameIndices?: ItemGameIndicesListRelationFilter;

    @Field(() => TypeGameIndicesListRelationFilter, {nullable:true})
    typeGameIndices?: TypeGameIndicesListRelationFilter;

    @Field(() => LocationGameIndicesListRelationFilter, {nullable:true})
    locationGameIndices?: LocationGameIndicesListRelationFilter;

    @Field(() => VersionGroupsListRelationFilter, {nullable:true})
    versionGroups?: VersionGroupsListRelationFilter;
}
