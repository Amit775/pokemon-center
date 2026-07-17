import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterMethodsWhereInput } from './encounter-methods-where.input';
import { Type } from 'class-transformer';
import { EncounterMethodsUpdateWithoutEncounterRatesInput } from './encounter-methods-update-without-encounter-rates.input';

@InputType()
export class EncounterMethodsUpdateToOneWithWhereWithoutEncounterRatesInput {

    @Field(() => EncounterMethodsWhereInput, {nullable:true})
    @Type(() => EncounterMethodsWhereInput)
    where?: EncounterMethodsWhereInput;

    @Field(() => EncounterMethodsUpdateWithoutEncounterRatesInput, {nullable:false})
    @Type(() => EncounterMethodsUpdateWithoutEncounterRatesInput)
    data!: EncounterMethodsUpdateWithoutEncounterRatesInput;
}
