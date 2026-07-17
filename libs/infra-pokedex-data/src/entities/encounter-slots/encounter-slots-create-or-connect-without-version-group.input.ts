import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncounterSlotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { Type } from 'class-transformer';
import { EncounterSlotsCreateWithoutVersionGroupInput } from './encounter-slots-create-without-version-group.input';

@InputType()
export class EncounterSlotsCreateOrConnectWithoutVersionGroupInput {

    @Field(() => EncounterSlotsWhereUniqueInput, {nullable:false})
    @Type(() => EncounterSlotsWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>;

    @Field(() => EncounterSlotsCreateWithoutVersionGroupInput, {nullable:false})
    @Type(() => EncounterSlotsCreateWithoutVersionGroupInput)
    create!: EncounterSlotsCreateWithoutVersionGroupInput;
}
