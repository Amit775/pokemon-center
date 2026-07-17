import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterSlotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncounterSlotsCreateWithoutEncounterMethodInput } from './encounter-slots-create-without-encounter-method.input';

@InputType()
export class EncounterSlotsCreateOrConnectWithoutEncounterMethodInput {

    @Field(() => EncounterSlotsWhereUniqueInput, {nullable:false})
    @Type(() => EncounterSlotsWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>;

    @Field(() => EncounterSlotsCreateWithoutEncounterMethodInput, {nullable:false})
    @Type(() => EncounterSlotsCreateWithoutEncounterMethodInput)
    create!: Identity<EncounterSlotsCreateWithoutEncounterMethodInput>;
}
