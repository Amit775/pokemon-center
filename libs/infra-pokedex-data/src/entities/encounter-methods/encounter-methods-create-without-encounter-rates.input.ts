import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncounterSlotsCreateNestedManyWithoutEncounterMethodInput } from '../encounter-slots/encounter-slots-create-nested-many-without-encounter-method.input';

@InputType()
export class EncounterMethodsCreateWithoutEncounterRatesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => EncounterSlotsCreateNestedManyWithoutEncounterMethodInput, {nullable:true})
    slots?: EncounterSlotsCreateNestedManyWithoutEncounterMethodInput;
}
