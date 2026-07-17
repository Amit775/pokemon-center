import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterMethodsUpdateWithoutEncounterRatesInput } from './encounter-methods-update-without-encounter-rates.input';
import { Type } from 'class-transformer';
import { EncounterMethodsCreateWithoutEncounterRatesInput } from './encounter-methods-create-without-encounter-rates.input';
import { EncounterMethodsWhereInput } from './encounter-methods-where.input';

@InputType()
export class EncounterMethodsUpsertWithoutEncounterRatesInput {

    @Field(() => EncounterMethodsUpdateWithoutEncounterRatesInput, {nullable:false})
    @Type(() => EncounterMethodsUpdateWithoutEncounterRatesInput)
    update!: Identity<EncounterMethodsUpdateWithoutEncounterRatesInput>;

    @Field(() => EncounterMethodsCreateWithoutEncounterRatesInput, {nullable:false})
    @Type(() => EncounterMethodsCreateWithoutEncounterRatesInput)
    create!: Identity<EncounterMethodsCreateWithoutEncounterRatesInput>;

    @Field(() => EncounterMethodsWhereInput, {nullable:true})
    @Type(() => EncounterMethodsWhereInput)
    where?: Identity<EncounterMethodsWhereInput>;
}
