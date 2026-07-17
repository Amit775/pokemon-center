import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterSlotsCreateNestedManyWithoutEncounterMethodInput } from '../encounter-slots/encounter-slots-create-nested-many-without-encounter-method.input';
import { LocationAreaEncounterRatesCreateNestedManyWithoutEncounterMethodInput } from '../location-area-encounter-rates/location-area-encounter-rates-create-nested-many-without-encounter-method.input';

@InputType()
export class EncounterMethodsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => EncounterSlotsCreateNestedManyWithoutEncounterMethodInput, {nullable:true})
    slots?: Identity<EncounterSlotsCreateNestedManyWithoutEncounterMethodInput>;

    @Field(() => LocationAreaEncounterRatesCreateNestedManyWithoutEncounterMethodInput, {nullable:true})
    encounterRates?: Identity<LocationAreaEncounterRatesCreateNestedManyWithoutEncounterMethodInput>;
}
