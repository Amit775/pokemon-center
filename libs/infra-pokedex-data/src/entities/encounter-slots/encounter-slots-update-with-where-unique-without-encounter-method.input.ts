import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncounterSlotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { Type } from 'class-transformer';
import { EncounterSlotsUpdateWithoutEncounterMethodInput } from './encounter-slots-update-without-encounter-method.input';

@InputType()
export class EncounterSlotsUpdateWithWhereUniqueWithoutEncounterMethodInput {

    @Field(() => EncounterSlotsWhereUniqueInput, {nullable:false})
    @Type(() => EncounterSlotsWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>;

    @Field(() => EncounterSlotsUpdateWithoutEncounterMethodInput, {nullable:false})
    @Type(() => EncounterSlotsUpdateWithoutEncounterMethodInput)
    data!: EncounterSlotsUpdateWithoutEncounterMethodInput;
}
