import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterSlotsUpdateManyWithoutEncounterMethodNestedInput } from '../encounter-slots/encounter-slots-update-many-without-encounter-method-nested.input';
import { LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-update-many-without-encounter-method-nested.input';

@InputType()
export class EncounterMethodsUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => EncounterSlotsUpdateManyWithoutEncounterMethodNestedInput, {nullable:true})
    slots?: Identity<EncounterSlotsUpdateManyWithoutEncounterMethodNestedInput>;

    @Field(() => LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput, {nullable:true})
    encounterRates?: Identity<LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput>;
}
