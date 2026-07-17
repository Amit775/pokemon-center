import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncounterSlotsUncheckedCreateNestedManyWithoutEncounterMethodInput } from '../encounter-slots/encounter-slots-unchecked-create-nested-many-without-encounter-method.input';

@InputType()
export class EncounterMethodsUncheckedCreateWithoutEncounterRatesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => EncounterSlotsUncheckedCreateNestedManyWithoutEncounterMethodInput, {nullable:true})
    slots?: EncounterSlotsUncheckedCreateNestedManyWithoutEncounterMethodInput;
}
