import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterSlotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncounterSlotsUpdateWithoutVersionGroupInput } from './encounter-slots-update-without-version-group.input';

@InputType()
export class EncounterSlotsUpdateWithWhereUniqueWithoutVersionGroupInput {

    @Field(() => EncounterSlotsWhereUniqueInput, {nullable:false})
    @Type(() => EncounterSlotsWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>;

    @Field(() => EncounterSlotsUpdateWithoutVersionGroupInput, {nullable:false})
    @Type(() => EncounterSlotsUpdateWithoutVersionGroupInput)
    data!: Identity<EncounterSlotsUpdateWithoutVersionGroupInput>;
}
