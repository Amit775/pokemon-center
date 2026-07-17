import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { EncountersUpdateWithoutEncounterSlotInput } from './encounters-update-without-encounter-slot.input';

@InputType()
export class EncountersUpdateWithWhereUniqueWithoutEncounterSlotInput {

    @Field(() => EncountersWhereUniqueInput, {nullable:false})
    @Type(() => EncountersWhereUniqueInput)
    where!: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => EncountersUpdateWithoutEncounterSlotInput, {nullable:false})
    @Type(() => EncountersUpdateWithoutEncounterSlotInput)
    data!: EncountersUpdateWithoutEncounterSlotInput;
}
