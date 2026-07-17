import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterSlotsUpdateInput } from './encounter-slots-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EncounterSlotsWhereUniqueInput } from './encounter-slots-where-unique.input';

@ArgsType()
export class UpdateOneEncounterSlotsArgs {

    @Field(() => EncounterSlotsUpdateInput, {nullable:false})
    @Type(() => EncounterSlotsUpdateInput)
    data!: EncounterSlotsUpdateInput;

    @Field(() => EncounterSlotsWhereUniqueInput, {nullable:false})
    @Type(() => EncounterSlotsWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>;
}
