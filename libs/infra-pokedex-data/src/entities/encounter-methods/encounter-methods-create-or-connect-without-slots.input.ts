import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterMethodsWhereUniqueInput } from './encounter-methods-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncounterMethodsCreateWithoutSlotsInput } from './encounter-methods-create-without-slots.input';

@InputType()
export class EncounterMethodsCreateOrConnectWithoutSlotsInput {

    @Field(() => EncounterMethodsWhereUniqueInput, {nullable:false})
    @Type(() => EncounterMethodsWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterMethodsWhereUniqueInput, 'id'>;

    @Field(() => EncounterMethodsCreateWithoutSlotsInput, {nullable:false})
    @Type(() => EncounterMethodsCreateWithoutSlotsInput)
    create!: Identity<EncounterMethodsCreateWithoutSlotsInput>;
}
