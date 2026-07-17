import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValuesUpdateInput } from './encounter-condition-values-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterConditionValuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';

@ArgsType()
export class UpdateOneEncounterConditionValuesArgs {

    @Field(() => EncounterConditionValuesUpdateInput, {nullable:false})
    @Type(() => EncounterConditionValuesUpdateInput)
    data!: Identity<EncounterConditionValuesUpdateInput>;

    @Field(() => EncounterConditionValuesWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionValuesWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionValuesWhereUniqueInput, 'id'>;
}
