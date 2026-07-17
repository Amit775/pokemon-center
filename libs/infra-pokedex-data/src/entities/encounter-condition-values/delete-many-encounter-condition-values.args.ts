import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValuesWhereInput } from './encounter-condition-values-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyEncounterConditionValuesArgs {

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    @Type(() => EncounterConditionValuesWhereInput)
    where?: Identity<EncounterConditionValuesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
