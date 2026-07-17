import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StatsWhereInput } from './stats-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyStatsArgs {

    @Field(() => StatsWhereInput, {nullable:true})
    @Type(() => StatsWhereInput)
    where?: StatsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
