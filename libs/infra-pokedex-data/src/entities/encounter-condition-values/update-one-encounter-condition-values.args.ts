import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionValuesUpdateInput } from './encounter-condition-values-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EncounterConditionValuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';

@ArgsType()
export class UpdateOneEncounterConditionValuesArgs {

    @Field(() => EncounterConditionValuesUpdateInput, {nullable:false})
    @Type(() => EncounterConditionValuesUpdateInput)
    data!: EncounterConditionValuesUpdateInput;

    @Field(() => EncounterConditionValuesWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionValuesWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionValuesWhereUniqueInput, 'id'>;
}
