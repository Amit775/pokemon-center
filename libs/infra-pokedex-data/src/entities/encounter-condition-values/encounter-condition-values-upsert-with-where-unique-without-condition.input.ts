import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncounterConditionValuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';
import { Type } from 'class-transformer';
import { EncounterConditionValuesUpdateWithoutConditionInput } from './encounter-condition-values-update-without-condition.input';
import { EncounterConditionValuesCreateWithoutConditionInput } from './encounter-condition-values-create-without-condition.input';

@InputType()
export class EncounterConditionValuesUpsertWithWhereUniqueWithoutConditionInput {

    @Field(() => EncounterConditionValuesWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionValuesWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionValuesWhereUniqueInput, 'id'>;

    @Field(() => EncounterConditionValuesUpdateWithoutConditionInput, {nullable:false})
    @Type(() => EncounterConditionValuesUpdateWithoutConditionInput)
    update!: EncounterConditionValuesUpdateWithoutConditionInput;

    @Field(() => EncounterConditionValuesCreateWithoutConditionInput, {nullable:false})
    @Type(() => EncounterConditionValuesCreateWithoutConditionInput)
    create!: EncounterConditionValuesCreateWithoutConditionInput;
}
