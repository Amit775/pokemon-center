import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterConditionValuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncounterConditionValuesCreateWithoutConditionInput } from './encounter-condition-values-create-without-condition.input';

@InputType()
export class EncounterConditionValuesCreateOrConnectWithoutConditionInput {

    @Field(() => EncounterConditionValuesWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionValuesWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionValuesWhereUniqueInput, 'id'>;

    @Field(() => EncounterConditionValuesCreateWithoutConditionInput, {nullable:false})
    @Type(() => EncounterConditionValuesCreateWithoutConditionInput)
    create!: Identity<EncounterConditionValuesCreateWithoutConditionInput>;
}
