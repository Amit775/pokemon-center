import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LocationAreasWhereInput } from './location-areas-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
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
    location_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    identifier?: StringNullableFilter;

    @Field(() => LocationsScalarRelationFilter, {nullable:true})
    location?: LocationsScalarRelationFilter;

    @Field(() => EncountersListRelationFilter, {nullable:true})
    encounters?: EncountersListRelationFilter;

    @Field(() => LocationAreaEncounterRatesListRelationFilter, {nullable:true})
    encounterRates?: LocationAreaEncounterRatesListRelationFilter;
}
