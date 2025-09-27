import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Locations } from '../locations/locations.model';
import { Encounters } from '../encounters/encounters.model';
import { LocationAreaEncounterRates } from '../location-area-encounter-rates/location-area-encounter-rates.model';
import { LocationAreasCount } from './location-areas-count.output';

/**
 * @@TypeGraphQL.type(name: "LocationArea")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "LocationArea")'})
export class LocationAreas {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    location_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => String, {nullable:true})
    identifier!: string | null;

    @Field(() => Locations, {nullable:false})
    location?: Locations;

    @Field(() => [Encounters], {nullable:true})
    encounters?: Array<Encounters>;

    @Field(() => [LocationAreaEncounterRates], {nullable:true})
    encounterRates?: Array<LocationAreaEncounterRates>;

    @Field(() => LocationAreasCount, {nullable:false})
    _count?: LocationAreasCount;
}
