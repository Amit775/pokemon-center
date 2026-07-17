import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersUncheckedUpdateManyWithoutLocationAreaNestedInput } from '../encounters/encounters-unchecked-update-many-without-location-area-nested.input';
import { LocationAreaEncounterRatesUncheckedUpdateManyWithoutLocationAreaNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-update-many-without-location-area-nested.input';

@InputType()
export class LocationAreasUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    location_id?: number;

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => EncountersUncheckedUpdateManyWithoutLocationAreaNestedInput, {nullable:true})
    encounters?: Identity<EncountersUncheckedUpdateManyWithoutLocationAreaNestedInput>;

    @Field(() => LocationAreaEncounterRatesUncheckedUpdateManyWithoutLocationAreaNestedInput, {nullable:true})
    encounterRates?: Identity<LocationAreaEncounterRatesUncheckedUpdateManyWithoutLocationAreaNestedInput>;
}
