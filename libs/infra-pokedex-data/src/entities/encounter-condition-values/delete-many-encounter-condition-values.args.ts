import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionValuesWhereInput } from './encounter-condition-values-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyEncounterConditionValuesArgs {

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    @Type(() => EncounterConditionValuesWhereInput)
    where?: EncounterConditionValuesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
