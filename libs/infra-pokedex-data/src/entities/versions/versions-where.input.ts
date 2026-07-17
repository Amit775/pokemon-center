import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { VersionGroupsScalarRelationFilter } from '../version-groups/version-groups-scalar-relation-filter.input';
import { EncountersListRelationFilter } from '../encounters/encounters-list-relation-filter.input';
import { PokemonItemsListRelationFilter } from '../pokemon-items/pokemon-items-list-relation-filter.input';
import { PokemonGameIndicesListRelationFilter } from '../pokemon-game-indices/pokemon-game-indices-list-relation-filter.input';
import { LocationAreaEncounterRatesListRelationFilter } from '../location-area-encounter-rates/location-area-encounter-rates-list-relation-filter.input';

@InputType()
export class VersionsWhereInput {

    @Field(() => [VersionsWhereInput], {nullable:true})
    AND?: Array<VersionsWhereInput>;

    @Field(() => [VersionsWhereInput], {nullable:true})
    OR?: Array<VersionsWhereInput>;

    @Field(() => [VersionsWhereInput], {nullable:true})
    NOT?: Array<VersionsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => VersionGroupsScalarRelationFilter, {nullable:true})
    versionGroup?: Identity<VersionGroupsScalarRelationFilter>;

    @Field(() => EncountersListRelationFilter, {nullable:true})
    encounters?: Identity<EncountersListRelationFilter>;

    @Field(() => PokemonItemsListRelationFilter, {nullable:true})
    pokemonItems?: Identity<PokemonItemsListRelationFilter>;

    @Field(() => PokemonGameIndicesListRelationFilter, {nullable:true})
    pokemonGameIndices?: Identity<PokemonGameIndicesListRelationFilter>;

    @Field(() => LocationAreaEncounterRatesListRelationFilter, {nullable:true})
    locationAreaEncounterRates?: Identity<LocationAreaEncounterRatesListRelationFilter>;
}
