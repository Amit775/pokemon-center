import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterMethodsWhereInput } from './encounter-methods-where.input';
import { Type } from 'class-transformer';
import { EncounterMethodsUpdateWithoutEncounterRatesInput } from './encounter-methods-update-without-encounter-rates.input';

@InputType()
export class EncounterMethodsUpdateToOneWithWhereWithoutEncounterRatesInput {

    @Field(() => EncounterMethodsWhereInput, {nullable:true})
    @Type(() => EncounterMethodsWhereInput)
    where?: Identity<EncounterMethodsWhereInput>;

    @Field(() => EncounterMethodsUpdateWithoutEncounterRatesInput, {nullable:false})
    @Type(() => EncounterMethodsUpdateWithoutEncounterRatesInput)
    data!: Identity<EncounterMethodsUpdateWithoutEncounterRatesInput>;
}
