import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncounterConditionValuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';
import { Type } from 'class-transformer';
import { EncounterConditionValuesCreateWithoutConditionValueMapInput } from './encounter-condition-values-create-without-condition-value-map.input';

@InputType()
export class EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput {

    @Field(() => EncounterConditionValuesWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionValuesWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionValuesWhereUniqueInput, 'id'>;

    @Field(() => EncounterConditionValuesCreateWithoutConditionValueMapInput, {nullable:false})
    @Type(() => EncounterConditionValuesCreateWithoutConditionValueMapInput)
    create!: EncounterConditionValuesCreateWithoutConditionValueMapInput;
}
