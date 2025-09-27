import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => VersionGroupsScalarRelationFilter, {nullable:true})
    versionGroup?: VersionGroupsScalarRelationFilter;

    @Field(() => EncountersListRelationFilter, {nullable:true})
    encounters?: EncountersListRelationFilter;

    @Field(() => PokemonItemsListRelationFilter, {nullable:true})
    pokemonItems?: PokemonItemsListRelationFilter;

    @Field(() => PokemonGameIndicesListRelationFilter, {nullable:true})
    pokemonGameIndices?: PokemonGameIndicesListRelationFilter;

    @Field(() => LocationAreaEncounterRatesListRelationFilter, {nullable:true})
    locationAreaEncounterRates?: LocationAreaEncounterRatesListRelationFilter;
}
