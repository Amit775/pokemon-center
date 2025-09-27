import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput } from './location-area-encounter-rates-location-area-id-encounter-method-id-version-id-compound-unique.input';
import { LocationAreaEncounterRatesWhereInput } from './location-area-encounter-rates-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { LocationAreasScalarRelationFilter } from '../location-areas/location-areas-scalar-relation-filter.input';
import { EncounterMethodsScalarRelationFilter } from '../encounter-methods/encounter-methods-scalar-relation-filter.input';
import { VersionsScalarRelationFilter } from '../versions/versions-scalar-relation-filter.input';

@InputType()
export class LocationAreaEncounterRatesWhereUniqueInput {

    @Field(() => LocationAreaEncounterRatesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput, {nullable:true})
    location_area_id_encounter_method_id_version_id?: LocationAreaEncounterRatesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput;

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
