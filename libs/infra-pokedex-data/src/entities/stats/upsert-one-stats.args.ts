import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { StatsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { StatsCreateInput } from './stats-create.input';
import { StatsUpdateInput } from './stats-update.input';

@ArgsType()
export class UpsertOneStatsArgs {

    @Field(() => StatsWhereUniqueInput, {nullable:false})
    @Type(() => StatsWhereUniqueInput)
    where!: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;

    @Field(() => StatsCreateInput, {nullable:false})
    @Type(() => StatsCreateInput)
    create!: Identity<StatsCreateInput>;

    @Field(() => StatsUpdateInput, {nullable:false})
    @Type(() => StatsUpdateInput)
    update!: Identity<StatsUpdateInput>;
}
