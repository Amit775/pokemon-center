import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionValueMapWhereInput } from './encounter-condition-value-map-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyEncounterConditionValueMapArgs {

    @Field(() => EncounterConditionValueMapWhereInput, {nullable:true})
    @Type(() => EncounterConditionValueMapWhereInput)
    where?: EncounterConditionValueMapWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
