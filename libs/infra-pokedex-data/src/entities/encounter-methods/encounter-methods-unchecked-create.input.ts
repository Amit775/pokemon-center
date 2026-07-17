import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterSlotsUncheckedCreateNestedManyWithoutEncounterMethodInput } from '../encounter-slots/encounter-slots-unchecked-create-nested-many-without-encounter-method.input';
import { LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutEncounterMethodInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-create-nested-many-without-encounter-method.input';

@InputType()
export class EncounterMethodsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => EncounterSlotsUncheckedCreateNestedManyWithoutEncounterMethodInput, {nullable:true})
    slots?: Identity<EncounterSlotsUncheckedCreateNestedManyWithoutEncounterMethodInput>;

    @Field(() => LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutEncounterMethodInput, {nullable:true})
    encounterRates?: Identity<LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutEncounterMethodInput>;
}
