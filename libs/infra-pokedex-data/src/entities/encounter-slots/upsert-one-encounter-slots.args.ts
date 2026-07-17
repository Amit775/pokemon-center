import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterSlotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncounterSlotsCreateInput } from './encounter-slots-create.input';
import { EncounterSlotsUpdateInput } from './encounter-slots-update.input';

@ArgsType()
export class UpsertOneEncounterSlotsArgs {

    @Field(() => EncounterSlotsWhereUniqueInput, {nullable:false})
    @Type(() => EncounterSlotsWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>;

    @Field(() => EncounterSlotsCreateInput, {nullable:false})
    @Type(() => EncounterSlotsCreateInput)
    create!: Identity<EncounterSlotsCreateInput>;

    @Field(() => EncounterSlotsUpdateInput, {nullable:false})
    @Type(() => EncounterSlotsUpdateInput)
    update!: Identity<EncounterSlotsUpdateInput>;
}
