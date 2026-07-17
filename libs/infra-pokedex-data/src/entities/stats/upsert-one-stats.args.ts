import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StatsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import { StatsCreateInput } from './stats-create.input';
import { StatsUpdateInput } from './stats-update.input';

@ArgsType()
export class UpsertOneStatsArgs {

    @Field(() => StatsWhereUniqueInput, {nullable:false})
    @Type(() => StatsWhereUniqueInput)
    where!: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;

    @Field(() => StatsCreateInput, {nullable:false})
    @Type(() => StatsCreateInput)
    create!: StatsCreateInput;

    @Field(() => StatsUpdateInput, {nullable:false})
    @Type(() => StatsUpdateInput)
    update!: StatsUpdateInput;
}
