import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncountersCreateWithoutEncounterSlotInput } from './encounters-create-without-encounter-slot.input';

@InputType()
export class EncountersCreateOrConnectWithoutEncounterSlotInput {

    @Field(() => EncountersWhereUniqueInput, {nullable:false})
    @Type(() => EncountersWhereUniqueInput)
    where!: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => EncountersCreateWithoutEncounterSlotInput, {nullable:false})
    @Type(() => EncountersCreateWithoutEncounterSlotInput)
    create!: Identity<EncountersCreateWithoutEncounterSlotInput>;
}
