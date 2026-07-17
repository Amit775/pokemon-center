import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreaEncounterRatesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput } from './location-area-encounter-rates-location-area-id-encounter-method-id-version-id-compound-unique.input';
import { LocationAreaEncounterRatesWhereInput } from './location-area-encounter-rates-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { LocationAreasScalarRelationFilter } from '../location-areas/location-areas-scalar-relation-filter.input';
import { EncounterMethodsScalarRelationFilter } from '../encounter-methods/encounter-methods-scalar-relation-filter.input';
import { VersionsScalarRelationFilter } from '../versions/versions-scalar-relation-filter.input';

@InputType()
export class LocationAreaEncounterRatesWhereUniqueInput {

    @Field(() => LocationAreaEncounterRatesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput, {nullable:true})
    location_area_id_encounter_method_id_version_id?: Identity<LocationAreaEncounterRatesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput>;

    @Field(() => [LocationAreaEncounterRatesWhereInput], {nullable:true})
    AND?: Array<LocationAreaEncounterRatesWhereInput>;

    @Field(() => [LocationAreaEncounterRatesWhereInput], {nullable:true})
    OR?: Array<LocationAreaEncounterRatesWhereInput>;

    @Field(() => [LocationAreaEncounterRatesWhereInput], {nullable:true})
    NOT?: Array<LocationAreaEncounterRatesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    location_area_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    encounter_method_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    version_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    rate?: Identity<IntFilter>;

    @Field(() => LocationAreasScalarRelationFilter, {nullable:true})
    locationArea?: Identity<LocationAreasScalarRelationFilter>;

    @Field(() => EncounterMethodsScalarRelationFilter, {nullable:true})
    encounterMethod?: Identity<EncounterMethodsScalarRelationFilter>;

    @Field(() => VersionsScalarRelationFilter, {nullable:true})
    version?: Identity<VersionsScalarRelationFilter>;
}
