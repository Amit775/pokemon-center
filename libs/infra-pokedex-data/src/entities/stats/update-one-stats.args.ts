import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsUpdateInput } from './stats-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { StatsWhereUniqueInput } from './stats-where-unique.input';

@ArgsType()
export class UpdateOneStatsArgs {

    @Field(() => StatsUpdateInput, {nullable:false})
    @Type(() => StatsUpdateInput)
    data!: Identity<StatsUpdateInput>;

    @Field(() => StatsWhereUniqueInput, {nullable:false})
    @Type(() => StatsWhereUniqueInput)
    where!: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;
}
