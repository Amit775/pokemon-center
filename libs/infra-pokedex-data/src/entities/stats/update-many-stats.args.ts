import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsUpdateManyMutationInput } from './stats-update-many-mutation.input';
import { Type } from 'class-transformer';
import { StatsWhereInput } from './stats-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyStatsArgs {

    @Field(() => StatsUpdateManyMutationInput, {nullable:false})
    @Type(() => StatsUpdateManyMutationInput)
    data!: Identity<StatsUpdateManyMutationInput>;

    @Field(() => StatsWhereInput, {nullable:true})
    @Type(() => StatsWhereInput)
    where?: Identity<StatsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
