import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValueMapUpdateInput } from './encounter-condition-value-map-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterConditionValueMapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';

@ArgsType()
export class UpdateOneEncounterConditionValueMapArgs {

    @Field(() => EncounterConditionValueMapUpdateInput, {nullable:false})
    @Type(() => EncounterConditionValueMapUpdateInput)
    data!: Identity<EncounterConditionValueMapUpdateInput>;

    @Field(() => EncounterConditionValueMapWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionValueMapWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionValueMapWhereUniqueInput, 'encounter_id'>;
}
