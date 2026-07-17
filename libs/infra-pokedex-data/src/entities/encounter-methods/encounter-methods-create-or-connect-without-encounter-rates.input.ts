import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncounterMethodsWhereUniqueInput } from './encounter-methods-where-unique.input';
import { Type } from 'class-transformer';
import { EncounterMethodsCreateWithoutEncounterRatesInput } from './encounter-methods-create-without-encounter-rates.input';

@InputType()
export class EncounterMethodsCreateOrConnectWithoutEncounterRatesInput {

    @Field(() => EncounterMethodsWhereUniqueInput, {nullable:false})
    @Type(() => EncounterMethodsWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterMethodsWhereUniqueInput, 'id'>;

    @Field(() => EncounterMethodsCreateWithoutEncounterRatesInput, {nullable:false})
    @Type(() => EncounterMethodsCreateWithoutEncounterRatesInput)
    create!: EncounterMethodsCreateWithoutEncounterRatesInput;
}
