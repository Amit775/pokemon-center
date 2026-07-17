import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsUpdateOneRequiredWithoutAreasNestedInput } from '../locations/locations-update-one-required-without-areas-nested.input';
import { LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-update-many-without-location-area-nested.input';

@InputType()
export class LocationAreasUpdateWithoutEncountersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => LocationsUpdateOneRequiredWithoutAreasNestedInput, {nullable:true})
    location?: Identity<LocationsUpdateOneRequiredWithoutAreasNestedInput>;

    @Field(() => LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput, {nullable:true})
    encounterRates?: Identity<LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput>;
}
