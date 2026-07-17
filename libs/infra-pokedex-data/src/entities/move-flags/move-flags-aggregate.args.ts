import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveFlagsWhereInput } from './move-flags-where.input';
import { Type } from 'class-transformer';
import { MoveFlagsOrderByWithRelationInput } from './move-flags-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveFlagsWhereUniqueInput } from './move-flags-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveFlagsCountAggregateInput } from './move-flags-count-aggregate.input';
import { MoveFlagsAvgAggregateInput } from './move-flags-avg-aggregate.input';
import { MoveFlagsSumAggregateInput } from './move-flags-sum-aggregate.input';
import { MoveFlagsMinAggregateInput } from './move-flags-min-aggregate.input';
import { MoveFlagsMaxAggregateInput } from './move-flags-max-aggregate.input';

@ArgsType()
export class MoveFlagsAggregateArgs {

    @Field(() => MoveFlagsWhereInput, {nullable:true})
    @Type(() => MoveFlagsWhereInput)
    where?: Identity<MoveFlagsWhereInput>;

    @Field(() => [MoveFlagsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveFlagsOrderByWithRelationInput>;

    @Field(() => MoveFlagsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveFlagsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoveFlagsCountAggregateInput, {nullable:true})
    _count?: Identity<MoveFlagsCountAggregateInput>;

    @Field(() => MoveFlagsAvgAggregateInput, {nullable:true})
    _avg?: Identity<MoveFlagsAvgAggregateInput>;

    @Field(() => MoveFlagsSumAggregateInput, {nullable:true})
    _sum?: Identity<MoveFlagsSumAggregateInput>;

    @Field(() => MoveFlagsMinAggregateInput, {nullable:true})
    _min?: Identity<MoveFlagsMinAggregateInput>;

    @Field(() => MoveFlagsMaxAggregateInput, {nullable:true})
    _max?: Identity<MoveFlagsMaxAggregateInput>;
}
