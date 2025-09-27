import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LocationAreas } from '../location-areas/location-areas.model';
import { EncounterMethods } from '../encounter-methods/encounter-methods.model';
import { Versions } from '../versions/versions.model';

/**
 * @@TypeGraphQL.type(name: "LocationAreaEncounterRate")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "LocationAreaEncounterRate")'})
export class LocationAreaEncounterRates {

    @Field(() => Int, {nullable:false})
    location_area_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_method_id!: number;

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => Int, {nullable:false})
    rate!: number;

    @Field(() => LocationAreas, {nullable:false})
    locationArea?: LocationAreas;

    @Field(() => EncounterMethods, {nullable:false})
    encounterMethod?: EncounterMethods;

    @Field(() => Versions, {nullable:false})
    version?: Versions;
}
