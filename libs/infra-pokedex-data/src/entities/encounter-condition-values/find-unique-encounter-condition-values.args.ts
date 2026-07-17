import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterConditionValuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueEncounterConditionValuesArgs {

    @Field(() => EncounterConditionValuesWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionValuesWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionValuesWhereUniqueInput, 'id'>;
}
