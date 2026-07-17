import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterMethodsCreateWithoutSlotsInput } from './encounter-methods-create-without-slots.input';
import { Type } from 'class-transformer';
import { EncounterMethodsCreateOrConnectWithoutSlotsInput } from './encounter-methods-create-or-connect-without-slots.input';
import { Prisma } from '@prisma/client';
import { EncounterMethodsWhereUniqueInput } from './encounter-methods-where-unique.input';

@InputType()
export class EncounterMethodsCreateNestedOneWithoutSlotsInput {

    @Field(() => EncounterMethodsCreateWithoutSlotsInput, {nullable:true})
    @Type(() => EncounterMethodsCreateWithoutSlotsInput)
    create?: EncounterMethodsCreateWithoutSlotsInput;

    @Field(() => EncounterMethodsCreateOrConnectWithoutSlotsInput, {nullable:true})
    @Type(() => EncounterMethodsCreateOrConnectWithoutSlotsInput)
    connectOrCreate?: EncounterMethodsCreateOrConnectWithoutSlotsInput;

    @Field(() => EncounterMethodsWhereUniqueInput, {nullable:true})
    @Type(() => EncounterMethodsWhereUniqueInput)
    connect?: Prisma.AtLeast<EncounterMethodsWhereUniqueInput, 'id'>;
}
