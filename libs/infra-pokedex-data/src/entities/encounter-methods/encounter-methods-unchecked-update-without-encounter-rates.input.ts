import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterSlotsUncheckedUpdateManyWithoutEncounterMethodNestedInput } from '../encounter-slots/encounter-slots-unchecked-update-many-without-encounter-method-nested.input';

@InputType()
export class EncounterMethodsUncheckedUpdateWithoutEncounterRatesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => EncounterSlotsUncheckedUpdateManyWithoutEncounterMethodNestedInput, {nullable:true})
    slots?: Identity<EncounterSlotsUncheckedUpdateManyWithoutEncounterMethodNestedInput>;
}
