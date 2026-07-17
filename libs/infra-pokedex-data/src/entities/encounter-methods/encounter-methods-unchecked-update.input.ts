import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterSlotsUncheckedUpdateManyWithoutEncounterMethodNestedInput } from '../encounter-slots/encounter-slots-unchecked-update-many-without-encounter-method-nested.input';
import { LocationAreaEncounterRatesUncheckedUpdateManyWithoutEncounterMethodNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-update-many-without-encounter-method-nested.input';

@InputType()
export class EncounterMethodsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => EncounterSlotsUncheckedUpdateManyWithoutEncounterMethodNestedInput, {nullable:true})
    slots?: Identity<EncounterSlotsUncheckedUpdateManyWithoutEncounterMethodNestedInput>;

    @Field(() => LocationAreaEncounterRatesUncheckedUpdateManyWithoutEncounterMethodNestedInput, {nullable:true})
    encounterRates?: Identity<LocationAreaEncounterRatesUncheckedUpdateManyWithoutEncounterMethodNestedInput>;
}
