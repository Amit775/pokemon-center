import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterMethodsCreateWithoutSlotsInput } from './encounter-methods-create-without-slots.input';
import { Type } from 'class-transformer';
import { EncounterMethodsCreateOrConnectWithoutSlotsInput } from './encounter-methods-create-or-connect-without-slots.input';
import { EncounterMethodsUpsertWithoutSlotsInput } from './encounter-methods-upsert-without-slots.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterMethodsWhereUniqueInput } from './encounter-methods-where-unique.input';
import { EncounterMethodsUpdateToOneWithWhereWithoutSlotsInput } from './encounter-methods-update-to-one-with-where-without-slots.input';

@InputType()
export class EncounterMethodsUpdateOneRequiredWithoutSlotsNestedInput {

    @Field(() => EncounterMethodsCreateWithoutSlotsInput, {nullable:true})
    @Type(() => EncounterMethodsCreateWithoutSlotsInput)
    create?: Identity<EncounterMethodsCreateWithoutSlotsInput>;

    @Field(() => EncounterMethodsCreateOrConnectWithoutSlotsInput, {nullable:true})
    @Type(() => EncounterMethodsCreateOrConnectWithoutSlotsInput)
    connectOrCreate?: Identity<EncounterMethodsCreateOrConnectWithoutSlotsInput>;

    @Field(() => EncounterMethodsUpsertWithoutSlotsInput, {nullable:true})
    @Type(() => EncounterMethodsUpsertWithoutSlotsInput)
    upsert?: Identity<EncounterMethodsUpsertWithoutSlotsInput>;

    @Field(() => EncounterMethodsWhereUniqueInput, {nullable:true})
    @Type(() => EncounterMethodsWhereUniqueInput)
    connect?: Prisma.AtLeast<EncounterMethodsWhereUniqueInput, 'id'>;

    @Field(() => EncounterMethodsUpdateToOneWithWhereWithoutSlotsInput, {nullable:true})
    @Type(() => EncounterMethodsUpdateToOneWithWhereWithoutSlotsInput)
    update?: Identity<EncounterMethodsUpdateToOneWithWhereWithoutSlotsInput>;
}
