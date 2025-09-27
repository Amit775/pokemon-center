import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { LocationAreasScalarRelationFilter } from '../location-areas/location-areas-scalar-relation-filter.input';
import { EncounterMethodsScalarRelationFilter } from '../encounter-methods/encounter-methods-scalar-relation-filter.input';
import { VersionsScalarRelationFilter } from '../versions/versions-scalar-relation-filter.input';

@InputType()
export class LocationAreaEncounterRatesWhereInput {

    @Field(() => [LocationAreaEncounterRatesWhereInput], {nullable:true})
    AND?: Array<LocationAreaEncounterRatesWhereInput>;

    @Field(() => [LocationAreaEncounterRatesWhereInput], {nullable:true})
    OR?: Array<LocationAreaEncounterRatesWhereInput>;

    @Field(() => [LocationAreaEncounterRatesWhereInput], {nullable:true})
    NOT?: Array<LocationAreaEncounterRatesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    location_area_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    encounter_method_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    rate?: IntFilter;

    @Field(() => LocationAreasScalarRelationFilter, {nullable:true})
    locationArea?: LocationAreasScalarRelationFilter;

    @Field(() => EncounterMethodsScalarRelationFilter, {nullable:true})
    encounterMethod?: EncounterMethodsScalarRelationFilter;

    @Field(() => VersionsScalarRelationFilter, {nullable:true})
    version?: VersionsScalarRelationFilter;
}
