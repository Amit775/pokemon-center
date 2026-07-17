import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterMethodsCreateWithoutSlotsInput } from './encounter-methods-create-without-slots.input';
import { Type } from 'class-transformer';
import { EncounterMethodsCreateOrConnectWithoutSlotsInput } from './encounter-methods-create-or-connect-without-slots.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterMethodsWhereUniqueInput } from './encounter-methods-where-unique.input';

@InputType()
export class EncounterMethodsCreateNestedOneWithoutSlotsInput {

    @Field(() => EncounterMethodsCreateWithoutSlotsInput, {nullable:true})
    @Type(() => EncounterMethodsCreateWithoutSlotsInput)
    create?: Identity<EncounterMethodsCreateWithoutSlotsInput>;

    @Field(() => EncounterMethodsCreateOrConnectWithoutSlotsInput, {nullable:true})
    @Type(() => EncounterMethodsCreateOrConnectWithoutSlotsInput)
    connectOrCreate?: Identity<EncounterMethodsCreateOrConnectWithoutSlotsInput>;

    @Field(() => EncounterMethodsWhereUniqueInput, {nullable:true})
    @Type(() => EncounterMethodsWhereUniqueInput)
    connect?: Prisma.AtLeast<EncounterMethodsWhereUniqueInput, 'id'>;
}
