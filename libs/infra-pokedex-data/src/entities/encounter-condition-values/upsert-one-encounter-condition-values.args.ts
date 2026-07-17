import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterConditionValuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncounterConditionValuesCreateInput } from './encounter-condition-values-create.input';
import { EncounterConditionValuesUpdateInput } from './encounter-condition-values-update.input';

@ArgsType()
export class UpsertOneEncounterConditionValuesArgs {

    @Field(() => EncounterConditionValuesWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionValuesWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionValuesWhereUniqueInput, 'id'>;

    @Field(() => EncounterConditionValuesCreateInput, {nullable:false})
    @Type(() => EncounterConditionValuesCreateInput)
    create!: Identity<EncounterConditionValuesCreateInput>;

    @Field(() => EncounterConditionValuesUpdateInput, {nullable:false})
    @Type(() => EncounterConditionValuesUpdateInput)
    update!: Identity<EncounterConditionValuesUpdateInput>;
}
