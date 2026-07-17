import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreaEncounterRatesUncheckedUpdateManyWithoutEncounterMethodNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-update-many-without-encounter-method-nested.input';

@InputType()
export class EncounterMethodsUncheckedUpdateWithoutSlotsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => LocationAreaEncounterRatesUncheckedUpdateManyWithoutEncounterMethodNestedInput, {nullable:true})
    encounterRates?: Identity<LocationAreaEncounterRatesUncheckedUpdateManyWithoutEncounterMethodNestedInput>;
}
