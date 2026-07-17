import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncounterSlotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { Type } from 'class-transformer';
import { EncounterSlotsCreateWithoutEncountersInput } from './encounter-slots-create-without-encounters.input';

@InputType()
export class EncounterSlotsCreateOrConnectWithoutEncountersInput {

    @Field(() => EncounterSlotsWhereUniqueInput, {nullable:false})
    @Type(() => EncounterSlotsWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>;

    @Field(() => EncounterSlotsCreateWithoutEncountersInput, {nullable:false})
    @Type(() => EncounterSlotsCreateWithoutEncountersInput)
    create!: EncounterSlotsCreateWithoutEncountersInput;
}
