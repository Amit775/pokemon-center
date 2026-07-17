import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-update-many-without-encounter-method-nested.input';

@InputType()
export class EncounterMethodsUpdateWithoutSlotsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput, {nullable:true})
    encounterRates?: Identity<LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput>;
}
