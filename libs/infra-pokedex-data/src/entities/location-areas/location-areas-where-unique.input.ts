import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LocationAreasWhereInput } from './location-areas-where.input';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LocationsScalarRelationFilter } from '../locations/locations-scalar-relation-filter.input';
import { EncountersListRelationFilter } from '../encounters/encounters-list-relation-filter.input';
import { LocationAreaEncounterRatesListRelationFilter } from '../location-area-encounter-rates/location-area-encounter-rates-list-relation-filter.input';

@InputType()
export class LocationAreasWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [LocationAreasWhereInput], {nullable:true})
    AND?: Array<LocationAreasWhereInput>;

    @Field(() => [LocationAreasWhereInput], {nullable:true})
    OR?: Array<LocationAreasWhereInput>;

    @Field(() => [LocationAreasWhereInput], {nullable:true})
    NOT?: Array<LocationAreasWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    location_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    game_index?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => LocationsScalarRelationFilter, {nullable:true})
    location?: Identity<LocationsScalarRelationFilter>;

    @Field(() => EncountersListRelationFilter, {nullable:true})
    encounters?: Identity<EncountersListRelationFilter>;

    @Field(() => LocationAreaEncounterRatesListRelationFilter, {nullable:true})
    encounterRates?: Identity<LocationAreaEncounterRatesListRelationFilter>;
}
