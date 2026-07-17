import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterMethodsWhereInput } from './encounter-methods-where.input';
import { Type } from 'class-transformer';
import { EncounterMethodsUpdateWithoutSlotsInput } from './encounter-methods-update-without-slots.input';

@InputType()
export class EncounterMethodsUpdateToOneWithWhereWithoutSlotsInput {

    @Field(() => EncounterMethodsWhereInput, {nullable:true})
    @Type(() => EncounterMethodsWhereInput)
    where?: EncounterMethodsWhereInput;

    @Field(() => EncounterMethodsUpdateWithoutSlotsInput, {nullable:false})
    @Type(() => EncounterMethodsUpdateWithoutSlotsInput)
    data!: EncounterMethodsUpdateWithoutSlotsInput;
}
