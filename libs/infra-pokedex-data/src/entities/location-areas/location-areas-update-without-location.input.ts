import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersUpdateManyWithoutLocationAreaNestedInput } from '../encounters/encounters-update-many-without-location-area-nested.input';
import { LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-update-many-without-location-area-nested.input';

@InputType()
export class LocationAreasUpdateWithoutLocationInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => EncountersUpdateManyWithoutLocationAreaNestedInput, {nullable:true})
    encounters?: Identity<EncountersUpdateManyWithoutLocationAreaNestedInput>;

    @Field(() => LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput, {nullable:true})
    encounterRates?: Identity<LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput>;
}
