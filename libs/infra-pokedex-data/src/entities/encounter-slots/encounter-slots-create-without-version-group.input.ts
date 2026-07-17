import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterMethodsCreateNestedOneWithoutSlotsInput } from '../encounter-methods/encounter-methods-create-nested-one-without-slots.input';
import { EncountersCreateNestedManyWithoutEncounterSlotInput } from '../encounters/encounters-create-nested-many-without-encounter-slot.input';

@InputType()
export class EncounterSlotsCreateWithoutVersionGroupInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => Int, {nullable:false})
    rarity!: number;

    @Field(() => EncounterMethodsCreateNestedOneWithoutSlotsInput, {nullable:false})
    encounterMethod!: Identity<EncounterMethodsCreateNestedOneWithoutSlotsInput>;

    @Field(() => EncountersCreateNestedManyWithoutEncounterSlotInput, {nullable:true})
    encounters?: Identity<EncountersCreateNestedManyWithoutEncounterSlotInput>;
}
