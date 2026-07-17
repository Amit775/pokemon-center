import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterMethodsUpdateOneRequiredWithoutSlotsNestedInput } from '../encounter-methods/encounter-methods-update-one-required-without-slots-nested.input';
import { EncountersUpdateManyWithoutEncounterSlotNestedInput } from '../encounters/encounters-update-many-without-encounter-slot-nested.input';

@InputType()
export class EncounterSlotsUpdateWithoutVersionGroupInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => Int, {nullable:true})
    rarity?: number;

    @Field(() => EncounterMethodsUpdateOneRequiredWithoutSlotsNestedInput, {nullable:true})
    encounterMethod?: Identity<EncounterMethodsUpdateOneRequiredWithoutSlotsNestedInput>;

    @Field(() => EncountersUpdateManyWithoutEncounterSlotNestedInput, {nullable:true})
    encounters?: Identity<EncountersUpdateManyWithoutEncounterSlotNestedInput>;
}
